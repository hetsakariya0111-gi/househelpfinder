import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { num: '1,200+', label: 'registered workers' },
  { num: '48',     label: 'cities covered' },
  { num: '4.8★',   label: 'avg. rating' },
  { num: '10,000+',label: 'households served' },
];

const values = [
  { title: 'trust',         desc: 'We connect households with verified and reliable domestic workers.' },
  { title: 'transparency',  desc: 'No hidden fees. Direct contact between workers and households.' },
  { title: 'accessibility', desc: 'Available across 48 cities in India, free for all users.' },
  { title: 'opportunity',   desc: 'Creating employment for thousands of domestic workers.' },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <section className="max-w-2xl mb-14">
        <h1 className="font-serif text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          about house help finder
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
          We are a platform built to simplify how households find domestic
          workers — and how workers find consistent employment across India.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 text-center">
            <p className="font-serif text-3xl text-green-800 dark:text-green-400 font-semibold">{s.num}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 pb-14 border-b border-gray-200 dark:border-gray-700">
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-4 text-gray-900 dark:text-white">our mission</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Finding reliable domestic help has always been a challenge —
            most households rely on word-of-mouth which is slow and limited.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            House Help Finder bridges this gap by providing a centralized,
            transparent platform where workers can showcase their skills and
            households can find the right help quickly.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-4 text-gray-900 dark:text-white">our values</h2>
          <div className="space-y-4">
            {values.map((v) => (
              <div key={v.title} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">{v.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-green-800 dark:text-green-300">
            ready to get started?
          </h3>
          <p className="text-sm text-green-700 dark:text-green-400 mt-1">
            Find workers or register your profile today.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/workers"
            className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
          >
            find workers
          </Link>
          <Link
            to="/register"
            className="border border-green-600 text-green-700 dark:text-green-400 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-50 dark:hover:bg-green-800 transition-colors"
          >
            register
          </Link>
        </div>
      </section>

    </div>
  );
}