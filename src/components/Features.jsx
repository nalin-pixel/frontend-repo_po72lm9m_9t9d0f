import React from 'react';
import { ShieldCheck, Clock, FileText, Search, Sparkles, MapPin } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Smart Health Vault',
    desc: 'Store prescriptions, lab reports, insurance docs and doctor’s notes for your whole family — securely and in one place.',
    link: 'https://getdory.app',
  },
  {
    icon: Clock,
    title: 'AI + Reminders',
    desc: 'Get medicine reminders, track adherence and surface any record instantly with a helpful assistant.',
    link: 'https://getdory.app',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Health Content',
    desc: 'Doctors-approved videos, posts and tips tailored to your family’s needs.',
    link: 'https://getdory.app',
  },
  {
    icon: MapPin,
    title: 'Nearby Services',
    desc: 'Discover physiotherapists, labs, pharmacies and nurses near you with ratings and reviews.',
    link: 'https://getdory.app',
  },
  {
    icon: Search,
    title: 'Centralised & Searchable',
    desc: 'Never lose medical records again. Find everything by person, date, doctor or condition.',
    link: 'https://getdory.app',
  },
  {
    icon: Sparkles,
    title: 'Peace of Mind',
    desc: 'Reduce repeat tests and health anxiety with timelines, summaries and smart tracking.',
    link: 'https://getdory.app',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#07090C] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Why families choose Dory</h2>
          <p className="mt-4 text-white/70">
            Centralisation and smart tracking to end lost records, repeated tests and forgotten meds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-[-2px] hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300 ring-1 ring-inset ring-blue-400/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.15), transparent 40%)"}}/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
