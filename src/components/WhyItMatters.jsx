import React from 'react';

const bullets = [
  'Lost or scattered medical records',
  'Repeated tests and duplicate paperwork',
  'Medication forgetfulness and adherence gaps',
  'General health-anxiety for caregivers',
];

const WhyItMatters = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Why it matters</h2>
            <p className="mt-4 text-white/70">
              Families often juggle paperwork, appointments and advice across apps and notebooks.
              Dory centralises everything and adds helpful intelligence.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4">
                <div className="text-3xl font-semibold text-blue-300">1</div>
                <p className="mt-1 text-sm text-white/70">Place for every record</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4">
                <div className="text-3xl font-semibold text-blue-300">0</div>
                <p className="mt-1 text-sm text-white/70">Missed reminders</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4">
                <div className="text-3xl font-semibold text-blue-300">24/7</div>
                <p className="mt-1 text-sm text-white/70">Assistant on standby</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-4">
                <div className="text-3xl font-semibold text-blue-300">100%</div>
                <p className="mt-1 text-sm text-white/70">Peace of mind goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
