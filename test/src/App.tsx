import { motion } from "motion/react";
import { GraduationCap, Gem, BadgeCheck, Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import { CURRICULUM, STANDARDS } from "./constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-serif font-bold tracking-tighter uppercase">
          Jean Claude Olivier
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {["Workshop", "Curriculum", "Pricing", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-medium uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-cream border-b border-brand-charcoal/5 px-6 py-10 flex flex-col space-y-6"
        >
          {["Workshop", "Curriculum", "Pricing", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-gold text-white px-6 py-3 text-xs font-bold uppercase tracking-widest">
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-brand-gold uppercase mb-6 block">
            Excellence in Artistry
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            Master the <span className="italic font-normal">Art</span> of Nails
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal/70 max-w-md mb-10 leading-relaxed">
            A definitive 15-day professional workshop designed for the next generation of elite nail technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-gold text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/20">
              Enroll Now
            </button>
            <button className="border border-brand-charcoal/20 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all">
              View Curriculum
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] relative z-0">
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop" 
              alt="Nail Artistry" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 md:py-40 bg-brand-cream-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">The Curriculum</h2>
          <p className="text-brand-charcoal/60 max-w-xl leading-relaxed">
            Fifteen days of intensive, salon-standard training covering everything from anatomical basics to high-end business branding.
          </p>
          <span className="absolute top-0 right-0 text-7xl md:text-9xl font-serif italic text-brand-charcoal/5 select-none pointer-events-none">
            2024 Atelier
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {CURRICULUM.map((module, index) => (
            <motion.div 
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-serif italic text-brand-gold/30">{module.id}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1">{module.title}</h3>
                  <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">{module.days}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {module.items.map((item) => (
                  <li key={item} className="text-sm text-brand-charcoal/70 flex items-center gap-3">
                    <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessBranding = () => {
  return (
    <section className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-square bg-[#f8d7da] rounded-3xl overflow-hidden shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1000&auto=format&fit=crop" 
              alt="Salon Business" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <h4 className="text-4xl font-serif font-bold text-brand-charcoal mb-2 uppercase tracking-tighter">Salon Business</h4>
              <p className="text-xl font-serif italic text-brand-gold">Mastery</p>
              <p className="mt-8 text-[10px] font-bold tracking-[0.5em] uppercase text-brand-charcoal/40">Safe Work</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-4 block">Capstone Day 15</span>
          <h2 className="text-5xl font-serif mb-8 leading-tight">Business & <span className="italic font-normal">Branding</span></h2>
          <p className="text-brand-charcoal/70 leading-relaxed mb-12">
            Technical skill is only half the journey. On our final day, we transform you from a technician into a brand. Learn how to price your services for profit, curate a professional Instagram portfolio, and master the high-end client experience.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold mb-3">Social Growth</h4>
              <p className="text-xs text-brand-charcoal/60 leading-relaxed">Lighting, angles, and editorial composition for portfolio building.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Pricing Strategy</h4>
              <p className="text-xs text-brand-charcoal/60 leading-relaxed">Defining your value and upselling luxury add-ons.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Standards = () => {
  const IconMap: Record<string, any> = {
    GraduationCap,
    Gem,
    BadgeCheck
  };

  return (
    <section className="py-24 bg-brand-cream-dark/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif mb-16">The Atelier Standards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STANDARDS.map((standard, index) => {
            const Icon = IconMap[standard.icon];
            return (
              <motion.div 
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-cream-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-brand-gold" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4">{standard.title}</h3>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">{standard.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-brand-gold text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop" 
          alt="Background Texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif mb-8">Begin Your Artistic Journey</h2>
        <p className="text-white/80 mb-16 leading-relaxed">
          Spaces are strictly limited to 8 students per intake to ensure personalized attention and meticulous guidance.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl mb-12">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-2 block">Current Availability</span>
          <p className="text-3xl font-serif italic mb-2">Only 3 Seats Remaining</p>
          <p className="text-xs text-white/60">Next cohort starts: October 15, 2024</p>
        </div>
        
        <button className="bg-white text-brand-gold px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-cream transition-all shadow-2xl">
          Register Now
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="max-w-xs">
            <h4 className="text-lg font-serif font-bold uppercase tracking-tighter mb-4">Jean Claude Olivier Salon</h4>
            <p className="text-xs text-brand-charcoal/50 leading-relaxed">
              Redefining the standards of nail artistry through education and professional excellence.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {["Privacy Policy", "Terms of Service", "Salon Locations", "Instagram", "Facebook"].map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 hover:text-brand-gold transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-brand-charcoal/40 uppercase tracking-widest">
            © 2024 Jean Claude Olivier Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Instagram size={16} className="text-brand-charcoal/40 hover:text-brand-gold cursor-pointer transition-colors" />
            <Facebook size={16} className="text-brand-charcoal/40 hover:text-brand-gold cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Curriculum />
        <BusinessBranding />
        <Standards />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
