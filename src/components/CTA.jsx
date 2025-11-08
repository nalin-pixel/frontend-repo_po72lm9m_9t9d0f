import React from 'react';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#07090C] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl font-semibold md:text-4xl">Start with the free-forever tier</h3>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Join the early access waitlist — no credit card needed. Your family’s health, organised.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://getdory.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Join Waitlist
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
