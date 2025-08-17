import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { HiSparkles } from 'react-icons/hi2';

export function Contact() {
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
      const response = await fetch('https://formspree.io/f/xjkodynk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      // اگه Formspree کار نکرد، از mailto استفاده کن
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:delshad.swdn@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in py-8">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-down">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HiSparkles className="dark:text-dark-accent light:text-light-accent animate-pulse text-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold gradient-text">
            Get In Touch
          </h1>
          <HiSparkles className="dark:text-dark-primary light:text-light-primary animate-pulse text-2xl" />
        </div>
        <p className="dark:text-dark-muted light:text-light-muted max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="animate-slide-left space-y-8">
          <div className="glass rounded-2xl p-6 hover-lift">
            <h2 className="text-2xl font-bold dark:text-dark-text light:text-light-text mb-6">
              Let&apos;s
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HiMail className="w-6 h-6 dark:text-dark-primary light:text-light-primary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-dark-text light:text-light-text">Email</h3>
                  <a href="mailto:delshad.swdn@gmail.com" className="dark:text-dark-muted light:text-light-muted hover:text-dark-primary transition-colors duration-300">
                    delshad.swdn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HiPhone className="w-6 h-6 dark:text-dark-secondary light:text-light-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-dark-text light:text-light-text">Phone</h3>
                  <a href="tel:+46735883889" className="dark:text-dark-muted light:text-light-muted hover:text-dark-secondary transition-colors duration-300">
                    +46 735 883 889
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HiLocationMarker className="w-6 h-6 dark:text-dark-accent light:text-light-accent" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-dark-text light:text-light-text">Location</h3>
                  <p className="dark:text-dark-muted light:text-light-muted">Sweden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass rounded-2xl p-6 hover-lift">
            <h3 className="text-xl font-bold dark:text-dark-text light:text-light-text mb-4">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24h</div>
                <div className="text-sm dark:text-dark-muted light:text-light-muted">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm dark:text-dark-muted light:text-light-muted">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-slide-right">
          <div className="glass rounded-2xl p-6 hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}