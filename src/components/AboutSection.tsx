import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="pt-10 pb-24 sm:pt-20 sm:pb-32 bg-[color:var(--cream)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Stack Animation */}
          <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute z-10 w-48 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-luxe -left-4 sm:-left-8 top-10"
            >
              <img src="https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=1964&auto=format&fit=crop" alt="Artist Working" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20 w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-luxe border-4 border-white"
            >
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute z-30 w-56 sm:w-72 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-luxe -right-4 sm:-right-8 bottom-10"
            >
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Installation" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text Content & Stats */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--royal-deep)] font-medium mb-4 block"
            >
              The Studio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.2rem,4vw,3.6rem)] text-[color:var(--charcoal)] mb-6 leading-[1.05] tracking-tight"
            >
              Crafting Legacy Through <span className="italic text-gradient-gold">Art & Architecture</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed"
            >
              Since our inception, Nakshikar's Studio has been synonymous with unparalleled craftsmanship. We believe that every space has a story to tell, and our artwork is the medium through which these stories are immortalized.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8 sm:gap-10 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-display text-5xl text-gradient-gold mb-2">150+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="font-display text-5xl text-gradient-gold mb-2">25</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Years Experience</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="font-display text-5xl text-gradient-gold mb-2">50+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Awards Won</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-display text-5xl text-gradient-gold mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Client Satisfaction</div>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
