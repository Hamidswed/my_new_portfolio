import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = '8355451761:AAFFWcnLkpgnbcx3nWnc9_m8bsqvlRAGCT8';
const TELEGRAM_USER_ID = '154972852';

// OpenAI API configuration - Add your API key here
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'your-openai-api-key-here';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://hdelshad.com",
    methods: ["GET", "POST"]
  }
});

// استفاده از json بدون body-parser
app.use(express.json());

let chatHistory = [];

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.emit('chat_history', chatHistory);

  socket.on('user_message', async (msg) => {
    const userMsg = { from: 'user', text: msg };
    chatHistory.push(userMsg);
    io.emit('new_message', userMsg);

    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_USER_ID,
        text: msg,
      });
    } catch (error) {
      console.error('Failed to send to Telegram:', error.response?.data || error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// تنظیم webhook تلگرام
const WEBHOOK_URL = 'https://chat-backend-3xpu.onrender.com/telegram-webhook';

// تنظیم webhook در تلگرام
async function setWebhook() {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      url: WEBHOOK_URL
    });
    console.log('Webhook set successfully:', response.data);
  } catch (error) {
    console.error('Failed to set webhook:', error.response?.data || error.message);
  }
}

setWebhook();

// ویب‌هوک تلگرام
app.post('/telegram-webhook', (req, res) => {
  const message = req.body.message;

  if (message && message.text) {
    const replyMsg = { from: 'admin', text: message.text };
    chatHistory.push(replyMsg);
    io.emit('new_message', replyMsg);
  }

  res.sendStatus(200);
});

// AI Chat endpoint
app.post('/api/ai-chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Call OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant for Hamidreza Delshad's portfolio website. 
            You can help visitors with questions about:
            - Hamidreza's skills and experience as a Full Stack Developer
            - His projects and work
            - Web development topics
            - General programming questions
            - Career advice in tech
            
            Keep responses helpful, professional, and concise. If asked about topics outside your expertise, politely redirect to relevant information about Hamidreza or suggest contacting him directly.
            
            Respond in the same language as the user's question (Persian/Farsi or English).`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    res.json({ response: aiResponse });

  } catch (error) {
    console.error('OpenAI API Error:', error.response?.data || error.message);
    
    // Fallback response
    const fallbackResponses = {
      en: "I'm sorry, I'm having trouble processing your request right now. Please try again later or contact Hamidreza directly through the contact form.",
      fa: "متأسفم، در حال حاضر مشکلی در پردازش درخواست شما دارم. لطفاً بعداً دوباره تلاش کنید یا مستقیماً از طریق فرم تماس با حمیدرضا ارتباط برقرار کنید."
    };
    
    // Simple language detection
    const isFarsi = /[\u0600-\u06FF]/.test(req.body.message);
    const fallback = isFarsi ? fallbackResponses.fa : fallbackResponses.en;
    
    res.json({ response: fallback });
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});