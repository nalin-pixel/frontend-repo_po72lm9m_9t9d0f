import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-28 pb-20 md:pt-36 lg:flex-row lg:items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-blue-200 backdrop-blur">
            Meet Dory · Family Health Assistant
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Organise, track and manage your family’s health in one place
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
            A smart, secure hub for prescriptions, lab reports, reminders and verified
            health content — tailored for your family.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://getdory.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Join the early access waitlist
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40"
            >
              Explore features
            </a>
          </div>

          <div className="mt-6 text-sm text-white/60">
            Free-forever tier · No credit card required
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
