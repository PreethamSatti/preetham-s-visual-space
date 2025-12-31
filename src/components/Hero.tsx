import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-body text-sm font-medium tracking-widest uppercase mb-4"
            >
              Visual Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-6"
            >
              <span className="text-gold">VISUAL</span>
              <br />
              DESIGNER
              <br />
              <span className="font-light italic text-accent">Portfolio</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-md mb-8"
            >
              <p className="font-body text-muted-foreground leading-relaxed">
                Hi, my name is Preetham and I am a Visual Designer. My main goal is to create and develop aesthetic, visually engaging designs through graphics, motion, and video that bring products and ideas to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                View Portfolio
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-body text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Preetham Satti - Visual Designer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent opacity-50" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
