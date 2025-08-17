import { useState } from 'react';
import { HiPaperAirplane } from 'react-icons/hi';

export function NetlifyContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium dark:text-dark-text light:text-light-text mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass rounded-lg border dark:border-dark-border/30 light:border-light-border/30 dark:text-dark-text light:text-light-text placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-dark-primary/50 transition-all duration-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium dark:text-dark-text light:text-light-text mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass rounded-lg border dark:border-dark-border/30 light:border-light-border/30 dark:text-dark-text light:text-light-text placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-dark-primary/50 transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium dark:text-dark-text light:text-light-text mb-2">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 glass rounded-lg border dark:border-dark-border/30 light:border-light-border/30 dark:text-dark-text light:text-light-text placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-dark-primary/50 transition-all duration-300"
          placeholder="Project discussion"
        />
      </div>

      <div>
        <label className="block text-sm font-medium dark:text-dark-text light:text-light-text mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 glass rounded-lg border dark:border-dark-border/30 light:border-light-border/30 dark:text-dark-text light:text-light-text placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-dark-primary/50 transition-all duration-300 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full neon-button flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : submitted ? (
          <>
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span>Message Sent!</span>
          </>
        ) : (
          <>
            <HiPaperAirplane className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}