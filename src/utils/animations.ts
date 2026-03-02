// Modern animation variants for Framer Motion
// Using 'any' for transition to avoid strict type conflicts with Framer Motion types in TS
// when importing without full type context

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" } as any,
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.4, ease: "easeOut" } as any
};

export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" } as any,
};

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" } as any
};

export const rotateIn = {
  initial: { rotate: -180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" } as any
};

export const bounceIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { 
    duration: 0.8, 
    ease: "easeOut",
    type: "spring",
    stiffness: 100
  } as any
};

// Stagger animations for lists
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    } as any
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 } as any
};

// Scroll-triggered animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.6, ease: "easeOut" } as any
};

export const scrollScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, ease: "easeOut" } as any,
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2, ease: "easeOut" } as any
};

export const hoverLift = {
  whileHover: { 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" } as any
  }
};

// Variants for hover/tap scaling used with motion components
export const hoverScaleVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.98 }
};

// Loading animations
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  } as any
};

export const shimmerAnimation = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  } as any
};

// Navigation variants
export const navVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any
  },
  scrolled: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" } as any
  }
};

// Menu item stagger variants
export const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.3, ease: "easeOut" } as any
  })
};

// Aurora background animation
export const auroraVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    } as any
  }
};

// Floating particle animation
export const particleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (custom: number) => ({
    opacity: [0, 0.3, 0],
    scale: [0, 1, 0],
    y: [-20, -40, -20],
    transition: {
      duration: 3 + custom * 0.5,
      repeat: Infinity,
      delay: custom * 0.2,
      ease: "easeInOut"
    } as any
  })
};

// Typewriter animation for text effects
export const typewriterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: "easeOut" } as any
};

// Aurora background animation
export const auroraAnimation = {
  animate: {
    background: [
      "radial-gradient(ellipse at top, #772c2c, transparent 50%)",
      "radial-gradient(ellipse at right, #e1e2cc, transparent 50%)",
      "radial-gradient(ellipse at bottom, #772c2c, transparent 50%)",
      "radial-gradient(ellipse at left, #e1e2cc, transparent 50%)",
      "radial-gradient(ellipse at top, #772c2c, transparent 50%)"
    ]
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  } as any
};

// Mobile menu animations
export const mobileMenuVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
  transition: { duration: 0.3, ease: "easeOut" } as any
};

// Modal animations
export const modalVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3, ease: "easeOut" } as any
};

// Backdrop animations
export const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 } as any
};

// Glassmorphism effect variants
export const glassmorphismVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1, 
    backdropFilter: "blur(12px)",
    transition: { duration: 0.5 } as any
  }
};
