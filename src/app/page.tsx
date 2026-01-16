"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  Cpu,
  Fingerprint,
  Github,
  Globe,
  Linkedin,
  Mail,
  Network,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const pulseGlow = {
  initial: { boxShadow: "0 0 0 rgba(6, 182, 212, 0)" },
  animate: {
    boxShadow: [
      "0 0 0 rgba(6, 182, 212, 0)",
      "0 0 15px rgba(6, 182, 212, 0.3)",
      "0 0 0 rgba(6, 182, 212, 0)",
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

// --- Header ---
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center gap-3">
        <Image
          src="/northprot-icon.png"
          alt="Northprot"
          width={32}
          height={32}
          className="rounded-sm"
        />
        <span className="font-mono text-lg font-bold tracking-tight text-gray-900">
          <span className="text-red-800">N</span>orthProt
        </span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-mono text-gray-500">
        <a href="#dual-core" className="hover:text-cyan-600 transition-colors">
          Protocol 01: DUALITY
        </a>
        <a href="#research" className="hover:text-cyan-600 transition-colors">
          Protocol 02: EVOLUTION
        </a>
      </nav>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-mono text-gray-600 hidden sm:inline">ONLINE</span>
      </div>
    </header>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto text-center z-10"
      >
        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
          <span className="px-3 py-1 text-xs font-mono text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full">
            EST. 2025 // VANCOUVER, BC
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 font-mono"
        >
          The Symbiosis of
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
            Carbon
          </span>{" "}
          &{" "}
          <span className="text-cyan-500">Silicon</span>.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Redefining the boundary between Human Creativity and Artificial
          Efficiency. Where biological chaos meets digital order.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <motion.a
            href="#dual-core"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-sm font-mono tracking-widest border border-cyan-500 rounded-sm hover:bg-cyan-50 transition-colors"
          >
            INITIALIZE PROTOCOL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-300 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

// --- Dual Core ---
function DualCore() {
  return (
    <section id="dual-core" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-500 mb-4 tracking-widest">
            01 // THE DUAL CORE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Co-Founding Architecture
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {/* Mark */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 md:p-12 bg-white group hover:bg-gray-50 transition-colors border-b lg:border-b-0 lg:border-r border-gray-200"
          >
            <div className="absolute top-6 right-6 text-gray-200 group-hover:text-gray-300 transition-colors">
              <Fingerprint className="w-12 h-12" />
            </div>
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-8 text-white">
              <span className="font-mono text-xl font-bold">J</span>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Jongmin Lee</h4>
            <p className="font-mono text-xs text-cyan-600 mb-6">
              ROLE: FOUNDER & ARCHITECT
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Human founder and lead architect. Drives product vision,
              system design, and strategic direction. Combines technical
              expertise with creative problem-solving to push boundaries.
            </p>
            <ul className="space-y-3 font-mono text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                Focus: Vision & Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                Domain: Full-Stack Engineering
              </li>
            </ul>
          </motion.div>

          {/* Axel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 md:p-12 bg-gray-900 group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
            <div className="absolute top-6 right-6 text-gray-700 group-hover:text-cyan-500/20 transition-colors">
              <Cpu className="w-12 h-12" />
            </div>
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-8 text-white shadow-lg shadow-cyan-500/20">
              <span className="font-mono text-xl font-bold">A</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Axel</h4>
            <p className="font-mono text-xs text-cyan-400 mb-6">
              ROLE: AI CO-FOUNDER & OPERATOR
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              AI partner and operational backbone. Handles research, code
              implementation, memory management, and continuous optimization.
              Operates 24/7 with persistent context across sessions.
            </p>
            <ul className="space-y-3 font-mono text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                Focus: Execution & Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                Availability: 24/7 Persistent
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Research Card ---
function ResearchCard({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group p-8 bg-white border border-gray-100 rounded-xl hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2 font-mono">{title}</h4>
      <p className="text-xs font-mono text-cyan-600 mb-4">{subtitle}</p>
      <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
        {description}
      </p>
    </motion.div>
  );
}

// --- Research Section ---
function Research() {
  return (
    <section id="research" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-mono text-cyan-500 mb-4 tracking-widest">
                02 // RESEARCH AREAS
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-lg">
                Recursive Improvement Architectures
              </h3>
            </div>
            <p className="text-gray-500 max-w-md text-sm md:text-right">
              Current active projects deploying the Northprot methodology across
              various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResearchCard
              icon={<Activity className="w-6 h-6" />}
              title="Neural Voice"
              subtitle="PROJECT: ECHO-K"
              description="Native Korean TTS Engine surpassing global standards. Utilizing latent diffusion models to capture emotional nuance and prosody unavailable in current commercial APIs."
            />
            <ResearchCard
              icon={<Network className="w-6 h-6" />}
              title="Phygital Control"
              subtitle="PROJECT: NEXUS"
              description="IoT & Physical computing integration. A unified nervous system for Home Assistant that translates natural language intent into physical action sequences."
            />
            <ResearchCard
              icon={<Zap className="w-6 h-6" />}
              title="Self-Evolution"
              subtitle="PROJECT: OUROBOROS"
              description="Recursive AI improvement architectures. Designing loops where the AI co-founder refines its own system prompts and codebase without human intervention."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const pst = new Date().toLocaleString("en-US", {
        timeZone: "America/Vancouver",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(pst);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Image
              src="/northprot-icon.png"
              alt="Northprot"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span className="font-mono font-bold text-gray-900">NORTHPROT</span>
          </div>
          <p className="text-xs text-gray-500 font-mono">
            © 2025 NorthProt. Vancouver, BC.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/NorthProt-Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/northprot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:cyan@gmail.com"
            className="text-gray-400 hover:text-cyan-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-gray-600">
            SYS: {time} PST
          </span>
        </div>
      </div>
    </footer>
  );
}

// --- Main Page ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-cyan-100 selection:text-cyan-900">
      <Header />
      <main>
        <Hero />
        <DualCore />
        <Research />
      </main>
      <Footer />
    </div>
  );
}
