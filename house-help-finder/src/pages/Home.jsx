import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const featuredWorkers = [
  { id: 1,  name: 'Priya Sharma',  role: 'maid',       city: 'Mumbai',    exp: '4 years',  salary: 9000,  rating: 5, initials: 'PS', color: 'bg-emerald-100 text-emerald-800' },
  { id: 4,  name: 'Raju Verma',    role: 'driver',     city: 'Delhi',     exp: '7 years',  salary: 14000, rating: 5, initials: 'RV', color: 'bg-blue-100 text-blue-800' },
  { id: 7,  name: 'Sunita Devi',   role: 'cook',       city: 'Bangalore', exp: '5 years',  salary: 10500, rating: 4, initials: 'SD', color: 'bg-amber-100 text-amber-800' },
  { id: 10, name: 'Meena Patel',   role: 'babysitter', city: 'Ahmedabad', exp: '2 years',  salary: 7500,  rating: 5, initials: 'MP', color: 'bg-pink-100 text-pink-800' },
  { id: 13, name: 'Arjun Singh',   role: 'cleaner',    city: 'Pune',      exp: '3 years',  salary: 8000,  rating: 4, initials: 'AS', color: 'bg-green-100 text-green-800' },
  { id: 16, name: 'Fatima Bi',     role: 'maid',       city: 'Hyderabad', exp: '6 years',  salary: 11000, rating: 5, initials: 'FB', color: 'bg-purple-100 text-purple-800' },
];

const stats = [
  { num: '1,200+', label: 'registered workers' },
  { num: '48',     label: 'cities covered' },
  { num: '4.8★',   label: 'avg. rating' },
  { num: '3 min',  label: 'avg. match time' },
];

const steps = [
  { num: '01', title: 'search & filter',  desc: 'Use service type, city, and experience filters to find the right match.' },
  { num: '02', title: 'view profiles',    desc: 'Browse detailed worker profiles with skills, experience and salary.' },
  { num: '03', title: 'contact directly', desc: 'Reach workers directly via phone — no middlemen, no hidden fees.' },
];

export default function Home() {
  const navigate = useNavigate();
  const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-10 border-b border-gray-200 dark:border-gray-700 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-4 text-gray-900 dark:text-white">
            Find trusted{' '}
            <span className="text-green-600">home help</span>{' '}
            in your neighbourhood
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
            Connect with verified maids, cooks, drivers, babysitters and
            cleaners near you — quickly, safely and transparently.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/workers" className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
              find workers
            </Link>
            <Link to="/register" className="border border-green-600 text-green-700 dark:text-green-400 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-50 dark:hover:bg-green-900 transition-colors">
              register as worker
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 text-center">
              <p className="font-serif text-3xl text-green-800 dark:text-green-400 font-semibold">{s.num}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Search */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold mb-4 text-gray-900 dark:text-white">search for help</h2>
        <SearchBar />
      </section>

      {/* Featured Workers */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white">featured workers</h2>
          <Link to="/workers" className="text-sm text-green-600 hover:underline">view all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredWorkers.map((w) => (
            <div
              key={w.id}
              onClick={() => navigate(`/workers/${w.id}`)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-green-400 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${w.color}`}>
                  {w.initials}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{w.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{w.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{w.city}</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{w.exp}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm font-medium text-green-700 dark:text-green-400">₹{w.salary.toLocaleString()}/mo</span>
                <span className="text-amber-500 text-xs tracking-wider">{stars(w.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold mb-5 text-gray-900 dark:text-white">how it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <p className="font-serif text-4xl font-semibold text-green-200 mb-2"
                 style={{ WebkitTextStroke: '1.5px #16a34a' }}>
                {s.num}
              </p>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Worker CTA */}
      <section className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-green-800 dark:text-green-300">
            are you a domestic worker?
          </h3>
          <p className="text-sm text-green-700 dark:text-green-400 mt-1">
            Register your profile for free and get discovered by hundreds of households.
          </p>
        </div>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
        >
          register now — it's free
        </Link>
      </section>

    </div>
  );
}