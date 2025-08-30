# 🚀 Deployment Guide

این راهنما نحوه deploy کردن پروژه با AI Assistant را توضیح می‌دهد.

## 📋 Prerequisites

- OpenAI API Key
- Render account (برای backend)
- Netlify/Vercel account (برای frontend)

## 🔧 Backend Deployment (Render)

### 1. تنظیم Repository

مطمئن شوید که فایل‌های زیر در پروژه موجود هستند:
- `chat-backend/server.js` (main server file)
- `chat-backend/server/routes/aiChat.js` (AI endpoint)
- `package.json` با script درست

### 2. Render Service Setup

1. **Create New Web Service** در Render
2. **Connect Repository** خود را متصل کنید
3. **Build & Deploy Settings**:
   ```
   Build Command: npm install
   Start Command: npm start
   ```

### 3. Environment Variables

در Render dashboard، این متغیرها را اضافه کنید:

```env
OPENAI_API_KEY=sk-proj-your-actual-api-key-here
PORT=4000
NODE_ENV=production
```

### 4. تست Backend

پس از deploy، این URL ها را تست کنید:
- `https://your-render-url.com/api` - Health check
- `https://your-render-url.com/api/ai-chat` - AI endpoint (POST)

## 🌐 Frontend Deployment

### 1. Update Backend URL

در `src/components/chatBox/ChatBox.jsx`:

```javascript
const response = await fetch('https://your-render-url.com/api/ai-chat', {
```

### 2. Build & Deploy

```bash
npm run build
# Deploy dist/ folder to Netlify/Vercel
```

## 🔍 Troubleshooting

### Backend Issues

1. **AI not responding**:
   - Check OpenAI API key in Render environment variables
   - Verify API key has sufficient credits
   - Check Render logs for errors

2. **Server not starting**:
   - Verify `package.json` start script
   - Check for missing dependencies
   - Review Render build logs

3. **CORS errors**:
   - Update CORS origins in `chat-backend/server.js`
   - Add your frontend domain

### Frontend Issues

1. **Cannot connect to AI**:
   - Verify backend URL is correct
   - Check if backend service is running
   - Test backend health endpoint

2. **Chat loading forever**:
   - Check browser console for errors
   - Verify Socket.IO connection
   - Test with different browser

## 📊 Monitoring

### Backend Health Check

```bash
curl https://your-render-url.com/api
```

Expected response:
```json
{
  "status": "Backend is running!",
  "features": ["chat", "ai-assistant", "telegram-integration"],
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### AI Endpoint Test

```bash
curl -X POST https://your-render-url.com/api/ai-chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, tell me about Hamidreza"}'
```

## 💰 Cost Considerations

### OpenAI API Costs
- GPT-3.5-turbo: ~$0.002 per 1K tokens
- Monitor usage in OpenAI dashboard
- Set usage limits if needed

### Render Costs
- Free tier: 750 hours/month
- Paid plans start at $7/month
- Consider usage patterns

## 🔄 Updates & Maintenance

### Updating AI Behavior

1. Edit system prompt in `chat-backend/server/routes/aiChat.js`
2. Commit changes
3. Render will auto-deploy

### Adding New Features

1. Develop locally
2. Test thoroughly
3. Deploy to staging first
4. Deploy to production

## 📝 Environment Variables Reference

### Required
- `OPENAI_API_KEY`: Your OpenAI API key

### Optional
- `PORT`: Server port (default: 4000)
- `NODE_ENV`: Environment (production/development)

## 🚨 Security Notes

- Never commit API keys to repository
- Use environment variables for all secrets
- Regularly rotate API keys
- Monitor API usage for anomalies
- Set up rate limiting if needed

---

**نکته**: پس از هر تغییر در backend، مطمئن شوید که frontend URL را به‌روزرسانی کرده‌اید.