// src/utils/timeUtils.js

// تابع برای نمایش زمان نسبی (مثل "یک دقیقه پیش")
export const getRelativeTime = (timestamp, t) => {
  if (!timestamp) return '';
  
  const now = new Date();
  const messageTime = new Date(timestamp);
  const diffInSeconds = Math.floor((now - messageTime) / 1000);
  
  if (diffInSeconds < 0) return t('time.justNow');
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSeconds < 60) return t('time.justNow');
  if (diffInMinutes < 60) return `${diffInMinutes} ${diffInMinutes === 1 ? t('time.minuteAgo') : t('time.minutesAgo')}`;
  if (diffInHours < 24) return `${diffInHours} ${diffInHours === 1 ? t('time.hourAgo') : t('time.hoursAgo')}`;
  if (diffInDays < 7) return `${diffInDays} ${diffInDays === 1 ? t('time.dayAgo') : t('time.daysAgo')}`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} ${Math.floor(diffInDays / 7) === 1 ? t('time.weekAgo') : t('time.weeksAgo')}`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} ${Math.floor(diffInDays / 30) === 1 ? t('time.monthAgo') : t('time.monthsAgo')}`;
  return `${Math.floor(diffInDays / 365)} ${Math.floor(diffInDays / 365) === 1 ? t('time.yearAgo') : t('time.yearsAgo')}`;
};

// تابع برای نمایش زمان دقیق
export const getExactTime = (timestamp, t, i18n) => {
  if (!timestamp) return '';
  
  const date = new Date(timestamp);
  
  if (i18n.language === 'fa') {
    return date.toLocaleString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } else if (i18n.language === 'sv') {
    return date.toLocaleString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } else {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
};
