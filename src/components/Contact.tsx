import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9] mb-8">
              CONTACT
              <br />
              <span className="text-accent italic">ME</span>
            </h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  Socials
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      Behance
                      <ExternalLink size={12} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      LinkedIn
                      <ExternalLink size={12} />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  Contact
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:preetham.satti@email.com"
                      className="font-body text-sm flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <Mail size={12} />
                      preetham.satti@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border font-body text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
