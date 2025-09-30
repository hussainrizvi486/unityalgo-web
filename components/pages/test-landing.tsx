"use client";
import { motion } from "motion/react";
import { ArrowRight, Code2, Brain, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils";
// const cn = (...classes) => classes.filter(Boolean).join(' ');

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="absolute top-0 left-0 right-0 z-50 px-8 py-6"
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <motion.div
        className="text-2xl font-bold text-white"
        whileHover={{ scale: 1.05 }}
      >
        DevStudio
      </motion.div>
      <nav className="flex gap-8 text-white/90">
        <motion.a
          href="#services"
          className="hover:text-white transition-colors"
          whileHover={{ y: -2 }}
        >
          Services
        </motion.a>
        <motion.a
          href="#contact"
          className="hover:text-white transition-colors"
          whileHover={{ y: -2 }}
        >
          Contact
        </motion.a>
      </nav>
    </div>
  </motion.header>
);

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    <div className="relative backdrop-blur-xl p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 h-full flex flex-col">
      <div className="mb-6 p-3 bg-white/10 rounded-xl w-fit group-hover:bg-white/20 transition-colors">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 mb-6 flex-grow leading-relaxed">{description}</p>

      <div className="flex justify-between items-center">
        <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
          Learn more
        </span>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const LandingPage = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Transform your vision into reality with bespoke software solutions engineered for scalability and performance.",
      delay: 0.2
    },
    {
      icon: Brain,
      title: "AI Development & Integration",
      description: "Harness the power of artificial intelligence to automate processes and unlock intelligent insights for your business.",
      delay: 0.3
    },
    {
      icon: Database,
      title: "Enterprise ERP Solutions",
      description: "Streamline operations with comprehensive ERP systems designed to unify and optimize your business workflows.",
      delay: 0.4
    }
  ];

  return (
    <BackgroundGradientAnimation>
      <Header />

      <div className="relative z-10 flex items-center min-h-screen px-8">
        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="mb-20 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20">
                Welcome to the Future of Software
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Build Products That
              <span className="block bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Drive Real Impact
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-white/80 leading-relaxed max-w-3xl"
            >
              Your trusted development partner focused on creating exceptional software solutions that deliver measurable results and lasting value for your business.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg hover:bg-white/95 transition-all duration-300 shadow-2xl"
            >
              Start Your Project
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(15, 23, 42)",
  gradientBackgroundEnd = "rgb(30, 15, 65)",
  firstColor = "99, 102, 241",
  secondColor = "168, 85, 247",
  thirdColor = "236, 72, 153",
  fourthColor = "59, 130, 246",
  fifthColor = "139, 92, 246",
  pointerColor = "147, 51, 234",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  const interactiveRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={cn("h-screen w-screen relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]", containerClassName)}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("relative z-10", className)}>{children}</div>

      <div className={cn("gradients-container h-full w-full blur-lg absolute inset-0", isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]")}>
        <div className={cn("absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),0.8)_0,_rgba(var(--first-color),0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:center_center]", "animate-first", "opacity-100")} />
        <div className={cn("absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),0.8)_0,_rgba(var(--second-color),0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-400px)]", "animate-second", "opacity-100")} />
        <div className={cn("absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),0.8)_0,_rgba(var(--third-color),0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%+400px)]", "animate-third", "opacity-100")} />
        <div className={cn("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),0.8)_0,_rgba(var(--fourth-color),0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-200px)]", "animate-fourth", "opacity-70")} />
        <div className={cn("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),0.8)_0,_rgba(var(--fifth-color),0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-800px)_calc(50%+800px)]", "animate-fifth", "opacity-100")} />

        {interactive && (
          <div ref={interactiveRef} onMouseMove={handleMouseMove} className={cn("absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),0.8)_0,_rgba(var(--pointer-color),0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2", "opacity-70")} />
        )}
      </div>

      <style jsx>{`
        @keyframes first {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes second {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(50px, 50px) rotate(120deg) scale(1.15); }
          66% { transform: translate(-30px, -30px) rotate(240deg) scale(0.95); }
        }
        @keyframes third {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-40px, 60px) rotate(-120deg) scale(0.9); }
          66% { transform: translate(40px, -40px) rotate(-240deg) scale(1.1); }
        }
        @keyframes fourth {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -50px) scale(1.2); }
          66% { transform: translate(30px, 30px) scale(0.85); }
        }
        @keyframes fifth {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(40px, -40px) rotate(90deg) scale(1.1); }
          66% { transform: translate(-40px, 40px) rotate(180deg) scale(0.95); }
        }
        .animate-first { animation: first 20s ease-in-out infinite; }
        .animate-second { animation: second 25s ease-in-out infinite; }
        .animate-third { animation: third 22s ease-in-out infinite; }
        .animate-fourth { animation: fourth 28s ease-in-out infinite; }
        .animate-fifth { animation: fifth 24s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export { LandingPage };