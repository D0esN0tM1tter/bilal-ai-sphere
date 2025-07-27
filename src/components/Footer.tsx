import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/lahfari-bilal',
      icon: Linkedin,
      color: 'hover:text-primary'
    },
    {
      name: 'GitHub',
      url: '#',
      icon: Github,
      color: 'hover:text-secondary'
    },
    {
      name: 'Email',
      url: 'mailto:lahfaribilal2@gmail.com',
      icon: Mail,
      color: 'hover:text-accent'
    }
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient-primary font-poppins">
              LAHFARI Bilal
            </h3>
            <p className="text-muted-foreground">
              AI Engineering Student passionate about building intelligent solutions 
              and innovative web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 underline-animate"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                📧 lahfaribilal2@gmail.com
              </p>
              <p className="text-muted-foreground">
                📱 +212 602526049
              </p>
              <p className="text-muted-foreground">
                📍 Rabat, Morocco
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full bg-background/50 text-muted-foreground transition-all duration-300 ${social.color} hover:bg-primary/10`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-border/50 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} LAHFARI Bilal. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />{' '}
              and lots of coffee ☕
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow"></div>
                Available for Internship
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;