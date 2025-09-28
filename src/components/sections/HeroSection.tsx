import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/3d/Scene3D';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '/profile.jpeg'; // Add your profile image here

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['AI Engineering Student', 'Web Developer', 'Data Science Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const text = roles[currentRole];
    let index = 0;
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/LAHFARI_ENG.pdf';
    link.download = 'LAHFARI_ENG.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    // Open CV in a new tab/window for viewing
    window.open('/LAHFARI_ENG.pdf', '_blank');
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 3D Background */}
      <Scene3D className="absolute inset-0 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="Bilal Lahfari"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-primary/30"
                style={{
                  // You can control the exact size by modifying these values
                  width: '300px',  // Default size - change this value
                  height: '300px', // Default size - change this value
                  minWidth: '150px',  // Minimum size on very small screens
                  minHeight: '150px'  // Minimum size on very small screens
                }}
              />
              
              {/* Static decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="text-gradient-primary">LAHFARI</span>
            <br />
            <span className="text-foreground">Bilal</span>
          </motion.h1>

          <motion.div 
            className="h-16 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-secondary font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            The mind is everything, what you think, you become
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button 
              onClick={scrollToProjects}
              className="btn-hero text-lg px-8 py-4"
            >
              View Projects
            </Button>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                onClick={handleViewCV}
                className="btn-hero-outline text-base px-6 py-3"
              >
                View CV
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadCV}
                className="btn-hero-outline text-base px-6 py-3"
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;