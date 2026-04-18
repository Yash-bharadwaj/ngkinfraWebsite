
import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_BRANDS } from '../constants';
import ClientLogo from '../components/ClientLogo';
import { ABOUT_GALLERY_IMAGES, ABOUT_HERO_IMAGE } from '../projectImages';

const VALUES = [
  { title: 'Integrity', desc: 'Straightforward contracts, transparent variances, and ethical procurement.' },
  { title: 'Commitment', desc: 'We own the schedule and the snag list — not just the monthly report.' },
  { title: 'Quality first', desc: 'Certified materials, staged inspections, and NBC-oriented supervision.' },
  { title: 'Innovation', desc: 'Modern methods and digital controls where they measurably reduce risk.' },
  { title: 'Client-centric', desc: 'Your success criteria shape how we sequence work and report progress.' }
];

const About: React.FC = () => {
  return (
    <div className="min-w-0 overflow-x-hidden pb-16 pt-24 sm:pb-24 sm:pt-28 md:pt-32">
      <section className="mx-auto mb-20 max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:mb-32 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="min-w-0">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 sm:mb-6 sm:text-xs sm:tracking-[0.4em]">
              About NGK Infra
            </span>
            <h1 className="mb-8 break-words font-serif text-3xl italic leading-tight text-slate-900 sm:mb-12 sm:text-4xl md:text-6xl lg:text-8xl">
              Clarity in <br /> <span className="not-italic text-slate-950">construction.</span>
            </h1>
            <p className="mb-6 text-sm font-light leading-relaxed text-slate-600 sm:mb-8 sm:text-base md:text-lg">
              Founded in Hyderabad in 2023, NGK Infra is a civil construction and EPC contractor focused on the projects that shape communities — schools, hospitals, homes, and selective commercial work across Telangana and Andhra Pradesh.
            </p>
            <p className="mb-10 text-xs leading-relaxed text-slate-500 sm:mb-12 sm:text-sm">
              The practice is led by a NICMAR alumnus: rigorous planning, disciplined site management, and hands-on technical judgement are non-negotiable. We are deliberately selective about sectors so that safety, quality, and programme integrity stay visible every week on site.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10 sm:gap-12 sm:pt-12">
              <div>
                <span className="mb-2 block font-serif text-2xl sm:text-3xl">2023</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Established</span>
              </div>
              <div>
                <span className="mb-2 block font-serif text-2xl sm:text-3xl">Hyderabad</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Headquarters</span>
              </div>
            </div>
          </div>

          <div className="relative min-w-0 space-y-4 overflow-hidden sm:space-y-5">
            <div className="overflow-hidden shadow-2xl">
              <img
                src={ABOUT_HERO_IMAGE}
                alt="NGK Infra — HRDC institutional project at completion"
                className="h-auto w-full max-w-full object-cover object-center grayscale-[0.15] transition-[filter] duration-500 hover:grayscale-0"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  if (!t.dataset.fallback) {
                    t.dataset.fallback = '1';
                    t.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                  }
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {ABOUT_GALLERY_IMAGES.map((item) => (
                <div key={item.src} className="aspect-[4/3] overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -left-4 -z-10 hidden h-28 w-28 border border-slate-900/10 blueprint-grid sm:-bottom-10 sm:-left-10 sm:block sm:h-40 sm:w-40" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-4 font-serif text-2xl text-slate-900 sm:text-3xl">Vision</h2>
              <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                To be a preferred construction partner in South India — known for technically sound delivery, predictable communication, and buildings that age well.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-2xl text-slate-900 sm:text-3xl">Mission</h2>
              <ul className="space-y-3 text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                <li>Deliver on agreed dates without trading away structural or finishing quality.</li>
                <li>Build repeat relationships through transparency in cost, risk, and progress.</li>
                <li>Adopt practical innovation — from digital tracking to lean logistics — where it protects outcomes.</li>
                <li>Keep people safe, sites orderly, and environmental impact proportionate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <div className="mb-16 text-center sm:mb-24">
            <h2 className="mb-6 font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Values</h2>
            <div className="mx-auto h-px w-24 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-white/10 pt-6">
                <h3 className="mb-3 font-serif text-xl italic sm:text-2xl">{v.title}</h3>
                <p className="text-xs font-light uppercase leading-relaxed tracking-wide text-slate-400 sm:text-sm sm:normal-case sm:tracking-normal">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <h2 className="mb-4 font-serif text-2xl text-slate-900 sm:mb-6 sm:text-3xl md:text-4xl">How we execute</h2>
          <p className="mb-12 max-w-2xl text-sm text-slate-600 sm:mb-16 sm:text-base">
            A single thread from mobilisation to handover — planning, control, and closure are treated as deliverables, not paperwork.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {[
              {
                title: 'Pre-construction',
                bullets: ['Scope and interface clarity', 'Budget and value engineering', 'Resource and procurement planning', 'Early risk register']
              },
              {
                title: 'Site execution',
                bullets: ['Structured site leadership', 'Daily labour and vendor rhythm', 'Milestone tracking', 'Design coordination on the ground']
              },
              {
                title: 'Monitoring & control',
                bullets: ['Progress dashboards stakeholders can read', 'Quality holds at critical stages', 'Cost and quantity discipline', 'Transparent change control']
              },
              {
                title: 'Delivery',
                bullets: ['Snag-led completion', 'Documentation for facilities teams', 'Handover walkthroughs', 'Post-handover support window as agreed']
              }
            ].map((block) => (
              <div key={block.title} className="border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">{block.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-900" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 font-serif text-2xl text-slate-900 sm:text-3xl">Quality assurance</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                Quality is embedded in how we buy, store, build, and inspect — not a final-week paint check.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Approved vendors and material traceability where the specification demands it.</li>
                <li>Layered inspections from foundation through services rough-in to finishes.</li>
                <li>Compliance orientation with the National Building Code and applicable state rules.</li>
                <li>Engineering sign-off on critical structural and waterproofing details.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-2xl text-slate-900 sm:text-3xl">Safety</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                A zero-harm culture is a programme requirement: disciplined housekeeping, trained crews, and visible leadership on site.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Mandatory PPE by trade and task; no exceptions on live edges or lifts.</li>
                <li>Toolbox talks and refresher training tied to real hazards on your plot.</li>
                <li>Site-specific safety plans before risky activities scale up.</li>
                <li>Periodic audits — internal and third-party — to keep standards from drifting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <h2 className="mb-4 text-center font-serif text-2xl text-slate-900 sm:mb-6 sm:text-3xl md:text-4xl">
            Organisations we work alongside
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-slate-600 sm:mb-16 sm:text-base">
            Public agencies, developers, and specialist clients — aligned on programme, safety, and long-term performance.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {CLIENT_BRANDS.map((c) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="flex min-h-[88px] items-stretch justify-center"
              >
                <ClientLogo name={c.name} layout="card" className="max-w-[240px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6 md:px-12">
          <h2 className="mb-10 font-serif text-2xl text-slate-900 sm:mb-12 sm:text-3xl">Where we are headed</h2>
          <ul className="grid grid-cols-1 gap-6 text-sm text-slate-600 md:grid-cols-2 md:gap-8 md:text-base">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
              <span>Larger hospital and commercial programmes with the same controls we apply to institutional work.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
              <span>Deeper government and institutional participation where transparency and technical depth matter.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
              <span>End-to-end EPC muscle — engineering, procurement, and construction under one accountable team.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden />
              <span>A premium, engineering-first brand reputation earned project by project.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
