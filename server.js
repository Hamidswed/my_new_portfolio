import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = '8355451761:AAFFWcnLkpgnbcx3nWnc9_m8bsqvlRAGCT8';
const TELEGRAM_USER_ID = '154972852';

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

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});