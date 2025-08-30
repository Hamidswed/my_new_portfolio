# 🚀 Hamidreza Delshad - Portfolio Website

A modern, responsive portfolio website built with React and Node.js, featuring an AI-powered assistant for enhanced user interaction.

## ✨ Features

- **Modern Design**: Clean, responsive UI with dark/light theme support
- **Multilingual**: Persian and English language support
- **AI Assistant**: Intelligent chatbot powered by OpenAI GPT-3.5-turbo
- **Real-time Chat**: Human chat with admin via Socket.IO and Telegram integration
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **SEO Friendly**: Proper meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **i18next** for internationalization
- **Socket.IO Client** for real-time communication
- **React Icons** for iconography

### Backend
- **Node.js** with Express
- **Socket.IO** for real-time chat
- **MongoDB** with Mongoose
- **OpenAI API** for AI assistant
- **Telegram Bot API** for admin notifications
- **JWT** for authentication

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key (for AI assistant)
- Telegram Bot Token (for admin chat)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-new-portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Setup backend**
   ```bash
   cd chat-backend
   npm install
   cp .env.example .env
   # Edit .env file with your API keys
   ```

4. **Configure environment variables**
   
   In `chat-backend/.env`:
   ```env
   OPENAI_API_KEY=your-openai-api-key-here
   PORT=4000
   ```

5. **Start development servers**
   
   Frontend (in root directory):
   ```bash
   npm run dev
   ```
   
   Backend (in chat-backend directory):
   ```bash
   npm start
   ```

## 🤖 AI Assistant Setup

The AI assistant helps visitors with questions about:
- Hamidreza's skills and experience
- Technical questions about web development
- Career advice in tech
- General programming questions

### Setup Steps:

1. **Get OpenAI API Key**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account and generate an API key
   - Add it to your `.env` file

2. **Test AI Functionality**
   ```bash
   cd chat-backend
   npm run test-ai
   ```

For detailed AI setup instructions, see [AI_ASSISTANT_README.md](./AI_ASSISTANT_README.md)

## 📁 Project Structure

```
├── src/                          # Frontend source code
│   ├── components/              # React components
│   │   ├── chatBox/            # Chat components (including AI)
│   │   ├── hero/               # Hero section components
│   │   └── ...                 # Other components
│   ├── pages/                  # Page components
│   ├── utils/                  # Utility functions
│   └── assets/                 # Static assets
├── chat-backend/               # Backend server
│   ├── server/                 # Server source code
│   │   ├── routes/            # API routes (including AI)
│   │   ├── config/            # Configuration files
│   │   ├── sockets/           # Socket.IO handlers
│   │   └── services/          # External services
│   └── .env.example           # Environment variables template
├── public/                     # Public assets
│   └── locales/               # Translation files
└── dist/                      # Built files
```

## 🌐 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Render/Railway/Heroku)
```bash
cd chat-backend
# Set environment variables in your hosting platform
# Deploy with: npm start
```

## 🔧 Configuration

### Adding New Languages
1. Add translation files in `public/locales/[lang]/translation.json`
2. Update language switcher component
3. Add RTL support if needed

### Customizing AI Assistant
- Edit system prompt in `chat-backend/server/routes/aiChat.js`
- Adjust AI parameters (temperature, max_tokens)
- Add conversation memory if needed

### Theme Customization
- Modify Tailwind config in `tailwind.config.js`
- Update CSS variables in `src/index.css`
- Customize component styles

## 📱 Features Overview

### Chat System
- **Dual Mode**: Switch between human chat and AI assistant
- **Real-time**: Instant messaging with Socket.IO
- **Persistent**: Chat history saved locally
- **Admin Panel**: Telegram integration for admin responses

### AI Assistant
- **Smart Responses**: Context-aware answers about Hamidreza
- **Multilingual**: Responds in user's language (Persian/English)
- **Fallback Handling**: Graceful error handling
- **Rate Limiting**: Built-in protection against abuse

### Performance
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Optimized bundle sizes
- **Caching**: Efficient resource caching

## 🐛 Troubleshooting

### Common Issues

1. **AI not responding**
   - Check OpenAI API key in `.env`
   - Verify API key has sufficient credits
   - Check server logs for errors

2. **Chat not connecting**
   - Ensure backend server is running
   - Check CORS configuration
   - Verify Socket.IO connection

3. **Build errors**
   - Clear node_modules and reinstall
   - Check for TypeScript errors
   - Verify all imports are correct

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm start
```

## 📊 Performance Monitoring

- **Web Vitals**: Built-in performance monitoring
- **Bundle Analysis**: Use `npm run build` with analyzer
- **Lighthouse**: Regular performance audits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

- **Email**: delshad.swdn@gmail.com
- **Website**: [hdelshad.com](https://hdelshad.com)
- **LinkedIn**: [Hamidreza Delshad](https://linkedin.com/in/hamidreza-delshad)

---

**Note**: This portfolio showcases modern web development practices and includes an AI assistant to enhance user experience. The AI feature requires an OpenAI API key to function properly.
