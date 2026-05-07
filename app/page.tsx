"use client";
import React from "react";
import Image from "next/image";

const bills = [
  { amount: "₹3.8L", label: "Surgery bill", save: "Saved ₹92K" },
  { amount: "₹48K", label: "MRI + Tests", save: "Saved ₹11K" },
  { amount: "₹1.2L", label: "Hospital stay", save: "Saved ₹30K" },
  { amount: "₹18K", label: "Medicines", save: "Saved ₹4.5K" },
];

const stories = [
  "We didn’t know hospital bills could be negotiated.",
  "Everyone was calling contacts. We had no one.",
  "The bill shocked us more than the treatment.",
  "If this system existed earlier, we could have saved more.",
  "Medical savings should not depend on jugaad.",
  "CMB feels like backup before emergency starts.",
];

const plans = [
  { name: "Everyday", discount: "Up to 20%", price: "₹999/mo" },
  { name: "Vital", discount: "Up to 25%", price: "₹1999/mo" },
  { name: "Thrive", discount: "Up to 30%", price: "₹2999/mo" },
  { name: "Infinity", discount: "Up to 40%", price: "Premium" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#07182f]">
    <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/30">       
     <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Image src="/oxxy_logo.png" alt="Oxxy" width={125} height={48} />
            <nav className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
              <a href="#">Home</a>
              <a href="#">Plans</a>
              <a href="#">FAQ</a>
              <a href="#">Media</a>
              <a href="#">Contact</a>
            </nav>
          <a
            href="#upload"
            className="rounded-full bg-[#0E9F6E] px-6 py-3 text-white font-bold shadow-lg hover:scale-105 transition"          >
            Upload Story
          </a>
        </div>
      </header>

      {/* HERO - AD CAMPAIGN */}
<section className="hero-gradient relative px-6 pt-28 pb-28 md:px-12 lg:px-20">
  {/* Background circles */}
<div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-white/35 blur-sm" />
<div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-white/30 blur-sm" />
  <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

    {/* LEFT SIDE */}
    <div>

      {/* TAG */}
      <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0E9F6E] shadow">
        ● Let’s reduce your medical expenses with OXXY
      </div>

      {/* HEADING */}
      <h1 className="text-5xl font-bold leading-tight">
        Your new{" "}
        <span className="bg-gradient-to-r from-green-600 to-lime-400 bg-clip-text text-transparent">
          Jugaad
        </span>{" "}
        is
        <br />
        <span className="block text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(16,185,129,0.3)]">
          OXXY.
        </span>
      </h1>

      {/* TEXT */}
      <p className="mt-5 max-w-xl text-lg text-slate-600">
        Share your medical bill jugaad story. If we like your story, you get a
        smarter way to save on hospital bills, diagnostics and medicines.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex gap-4">
        <button className="bg-[#1aa36f] text-white px-7 py-3.5 rounded-full shadow-[0_10px_30px_rgba(26,163,111,0.3)] hover:shadow-[0_15px_40px_rgba(26,163,111,0.4)] hover:scale-105 transition-all duration-300">
          Share My Jugaad Story
        </button>

        <a
          href="#faq"
          className="rounded-full bg-white px-6 py-3 font-semibold text-[#0874DE] shadow transition hover:scale-105"
        >
          See OXXY Benefits
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-5">
  Trusted by <span className="font-semibold text-[#0b1c2c]">10,000+</span> families across India
</p>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative flex justify-center items-start">

  {/* gradient glow */}
  <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#bfe5d6] via-[#a8d5e2] to-[#8ecae6] blur-[120px] rounded-full opacity-60 z-0" />

  {/* image */}
  <Image
    src="/banner.png"
    alt="Family"
    width={600}
    height={520}
    priority
className="w-full max-w-[650px] h-auto object-contain relative z-10 scale-110 mt-10 translate-y-19 transition-transform duration-500 drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"/>
</div>

  </div>
</section>

{/*bread width to make img premium */}
<section className="w-full py-20 -mt-30 bg-[#1f5b4f] text-center relative overflow-hidden">

  {/* subtle top divider glow */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>

  {/* soft gradient overlay (premium feel) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#1f5b4f] via-[#256d5f] to-[#1f5b4f] opacity-90"></div>

  {/* content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    
    <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
      Why OXXY is Best for You?
    </h2>

    <p className="text-white/70 mt-3 text-base md:text-lg">
      Smart healthcare savings, zero hassle, trusted by thousands of families.
    </p>

  </div>
</section>

      {/* TRUSTED BY THOUSANDS */}
<section className="px-6 py-20" style={{background: '#fff'}}>
  <div className="mx-auto max-w-7xl">

    <h2 className="text-4xl font-black text-[#07182F] md:text-5xl">Trusted by Thousands</h2>
    <p className="mt-3 text-slate-500">Join the Community of Indians saving on Medical expenses.</p>

    {/* STATS ROW */}
    <div className="mt-12 grid gap-4 md:grid-cols-4">
      {[
        { icon: (<svg width="28" height="28" fill="none" stroke="#00A99D" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M9 12h6M12 9v6"/></svg>), num: "20,000+", label: "Partner Facilities" },
        { icon: (<svg width="28" height="28" fill="none" stroke="#00A99D" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>), num: "1800+", label: "Cities Covered" },
        { icon: (<svg width="28" height="28" fill="none" stroke="#00A99D" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>), num: "Up to 40%", label: "Average Savings" },
        { icon: (<svg width="28" height="28" fill="none" stroke="#00A99D" strokeWidth="1.8" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>), num: "4.8/5", label: "Member Rating" },
      ].map((s) => (
        <div key={s.label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0faf9]">
            {s.icon}
          </div>
          <div>
            <p className="text-2xl font-black text-[#07182F]">{s.num}</p>
            <p className="text-sm text-slate-500">{s.label}</p>
          </div>
        </div>
      ))}
    </div>

    {/* REAL SAVINGS EXAMPLE */}
    <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-8">
      <p className="mb-6 text-center text-base font-black text-[#07182F]">Real savings example</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-red-100 bg-red-50 p-6">
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-red-400">Without OXXY</p>
          <p className="text-4xl font-black text-red-500">₹50,000</p>
          <p className="mt-3 text-sm text-slate-500">Full price for cataract surgery at a private hospital</p>
        </div>
        <div className="rounded-xl border border-[#00A99D]/20 bg-[#f0faf9] p-6">
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#00A99D]">With OXXY</p>
          <p className="text-4xl font-black text-[#00A99D]">₹22,000</p>
          <p className="mt-3 text-sm text-slate-500">Discounted price — Save ₹28,000!</p>
        </div>
      </div>
    </div>

  </div>
</section>

      <section id="wall" className="relative px-6 py-24" style={{background: '#f4faf7'}}>
  <div className="mx-auto max-w-7xl">
    
    {/* HEADER */}
    <div className="mb-12 text-center">
      <p className="text-xs font-black uppercase tracking-widest text-[#00A99D]">Real Stories. Real Savings.</p>
      <h2 className="mt-3 text-4xl font-black text-[#07182F] md:text-5xl">Families Who Saved with OXXY</h2>
      <p className="mt-3 text-slate-500">Thousands of families reduced their medical bills using our OXXY system</p>
    </div>

    {/* STATS ROW */}
    <div className="mx-auto mb-14 grid max-w-2xl grid-cols-3 gap-4">
      {[
        ["₹2.4Cr+", "Total Saved"],
        ["12,000+", "Families Helped"],
        ["40%", "Avg Bill Savings"],
      ].map(([num, lbl]) => (
        <div key={lbl} className="rounded-2xl border border-[#00A99D]/15 bg-white p-5 text-center shadow-sm">
          <p className="text-2xl font-black text-[#00A99D]">{num}</p>
          <p className="mt-1 text-xs font-semibold text-slate-500">{lbl}</p>
        </div>
      ))}
    </div>

    {/* STORY CARDS - AUTO SCROLL */}
<div className="overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
  <div className="flex gap-6" style={{
    width: 'max-content',
    animation: 'marqueeScroll 18s linear infinite',
  }}>
    {[
      { name: "Suparna Malik", city: "Noida", type: "Surgery", saved: "Saved ₹92K", text: "My mom's surgery bill was ₹3.8L. OXXY helped us save ₹92,000. I didn't know this was even possible." },
      { name: "Rahul Sharma", city: "Delhi", type: "Surgery", saved: "Saved ₹1.2L", text: "Saved ₹1.2 Lakhs during a critical surgery. The whole family was in shock — OXXY was a huge relief." },
      { name: "Priya Mehta", city: "Bangalore", type: "Diagnostics", saved: "Saved ₹8.5K", text: "Diagnostics became affordable overnight. MRI, blood tests — all discounted. Saved ₹8,500 easily." },
      { name: "Amit Verma", city: "Mumbai", type: "Hospital Bill", saved: "Saved ₹45K", text: "Hospital bill came to ₹1.8L. With OXXY we paid much less. Wish we had known earlier." },
      { name: "Kavita Singh", city: "Jaipur", type: "Lab Tests", saved: "Saved ₹6K", text: "All our lab tests discounted. Simple process, instant savings. Very happy with the service." },
      { name: "Deepak Nair", city: "Chennai", type: "Medicines", saved: "Saved ₹3.2K", text: "Post surgery medicines were expensive. OXXY brought the cost down significantly every month." },
      // duplicate for seamless loop
      { name: "Suparna Malik", city: "Noida", type: "Surgery", saved: "Saved ₹92K", text: "My mom's surgery bill was ₹3.8L. OXXY helped us save ₹92,000. I didn't know this was even possible." },
      { name: "Rahul Sharma", city: "Delhi", type: "Surgery", saved: "Saved ₹1.2L", text: "Saved ₹1.2 Lakhs during a critical surgery. The whole family was in shock — OXXY was a huge relief." },
      { name: "Priya Mehta", city: "Bangalore", type: "Diagnostics", saved: "Saved ₹8.5K", text: "Diagnostics became affordable overnight. MRI, blood tests — all discounted. Saved ₹8,500 easily." },
      { name: "Amit Verma", city: "Mumbai", type: "Hospital Bill", saved: "Saved ₹45K", text: "Hospital bill came to ₹1.8L. With OXXY we paid much less. Wish we had known earlier." },
      { name: "Kavita Singh", city: "Jaipur", type: "Lab Tests", saved: "Saved ₹6K", text: "All our lab tests discounted. Simple process, instant savings. Very happy with the service." },
      { name: "Deepak Nair", city: "Chennai", type: "Medicines", saved: "Saved ₹3.2K", text: "Post surgery medicines were expensive. OXXY brought the cost down significantly every month." },
    ].map((s, i) => (
      <div key={i} className="relative rounded-[1.5rem] border border-[#00A99D]/15 bg-white p-6 shadow-md" style={{width: '320px', flexShrink: 0}}>
        <span className="absolute right-5 top-5 rounded-full bg-[#e6faf4] px-3 py-1 text-xs font-black text-[#007a6a]">{s.saved}</span>
        <p className="mb-6 text-sm leading-7 text-slate-600 italic">&ldquo;{s.text}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4f0e8] text-sm font-black text-[#00755e]">{s.name.charAt(0)}</div>
          <div>
            <p className="text-sm font-black text-[#07182F]">{s.name}</p>
            <p className="text-xs text-slate-400">{s.city} · {s.type}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <p className="text-gray-500 mt-4 ml-20">
  Trusted by 10,000+ families across India
</p>
</div>

    {/* CTA */}
    <div className="mt-12 text-center">
      <a href="#form" className="rounded-full bg-[#00A99D] px-8 py-4 font-black text-white shadow-lg transition hover:scale-105 hover:bg-[#008f84]">
        Share Your Story
      </a>
    </div>

  </div>
</section>

      {/* HOW IT WORKS */}
<section id="system" className="relative px-6 py-24" style={{background: '#fff'}}>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mb-16">
      <p className="text-xs font-black uppercase tracking-widest text-[#00A99D]">Simple Steps</p>
      <div className="mt-3 h-1 w-10 rounded-full bg-[#00A99D]" />
      <h2 className="mt-5 text-4xl font-black text-[#07182F] md:text-5xl">How we works</h2>
      <p className="mt-3 text-slate-500">Start saving on medical bills in four simple steps.</p>
    </div>

    {/* STEPS */}
    <div className="grid gap-0 md:grid-cols-4">
      {[
        {
          num: "01",
          title: "Choose & Activate",
          desc: "Select & buy the most suitable plan online.",
          icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
            </svg>
          ),
          active: false,
        },
        {
          num: "02",
          title: "Book an appointment",
          desc: "Schedule at any partner hospital or facility.",
          icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          ),
          active: false,
        },
        {
          num: "03",
          title: "Show Your Code",
          desc: "Present your cut medi bills code before services.",
          icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="3" height="3" rx="0.5"/>
              <rect x="18" y="14" width="3" height="3" rx="0.5"/><rect x="14" y="18" width="3" height="3" rx="0.5"/>
              <rect x="18" y="18" width="3" height="3" rx="0.5"/>
            </svg>
          ),
          active: true,
        },
        {
          num: "04",
          title: "Get instant Discount",
          desc: "Discount applied at the time of payment.",
          icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M12 12v4M10 14h4"/>
            </svg>
          ),
          active: false,
        },
      ].map((step, i) => (

        <div key={step.num} className="relative flex flex-col">
          

          <div className="mx-3 flex flex-col rounded-[1.5rem] border border-[#00A99D]/20 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* TOP ROW */}
            <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A99D] text-white">
                {step.icon}
              </div>
            </div>

            <h3 className="text-lg font-black text-[#07182F]">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{step.desc}</p>

            {/* BOTTOM BAR */}
            <div className="mt-8 h-[2px] w-full bg-slate-100">
              <div className="h-full w-12 bg-[#00A99D]" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* BOTTOM TAGLINE */}
    <div className="mt-14 flex items-center justify-center gap-6 rounded-2xl border border-slate-100 bg-slate-50 py-5">
      <span className="flex items-center gap-2 text-sm font-semibold text-slate-600">
        <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
        No paperwork. No waiting periods. No hassle.
      </span>
      <span className="flex items-center gap-2 text-sm font-black text-[#00A99D]">
        <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
        Just savings.
      </span>
    </div>

  </div>
</section>

      {/* UPLOAD FORM */}
<section id="form" className="relative overflow-hidden px-6 py-28">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#fff4a8,transparent_25%),radial-gradient(circle_at_80%_70%,#bdf8d2,transparent_28%)]" />

  <div className="relative mx-auto max-w-6xl rounded-[3rem] bg-[#07182f] p-8 text-white shadow-2xl md:p-14">
    <div className="absolute -left-8 -top-8 hidden rounded-3xl bg-yellow-300 px-6 py-4 font-black text-[#07182f] shadow-xl md:block">
      Bill Shock?
    </div>

    <div className="absolute -right-8 top-16 hidden rounded-3xl bg-green-400 px-6 py-4 font-black text-[#07182f] shadow-xl md:block">
      Share it.
    </div>

    <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="font-black text-yellow-300">Upload Story</p>

        <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Your story can protect another family.
        </h2>

        <p className="mt-5 text-lg leading-8 text-blue-100">
          Tell us what happened with your medical bill — hospital bill,
          diagnostics, lab tests, surgery, or medicines. Your story helps others
          understand why Cut Medi Bills exists.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Step 01</p>
            <h3 className="text-xl font-black">Share your bill experience</h3>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Step 02</p>
            <h3 className="text-xl font-black">We feature real stories</h3>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm text-blue-200">Step 03</p>
            <h3 className="text-xl font-black">Families discover CMB</h3>
          </div>
        </div>
      </div>

      <form className="rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
        <input className="input" placeholder="Your name" />
        <input className="input mt-4" placeholder="City" />
        <input className="input mt-4" placeholder="Phone number" />
        <input className="input mt-4" placeholder="Email address" />
        <input className="input mt-4" placeholder="Bill amount e.g. ₹3,80,000" />

        <select className="input mt-4">
          <option>What was the expense for?</option>
          <option>Hospital bill</option>
          <option>Diagnostics</option>
          <option>Lab test</option>
          <option>Medicines</option>
          <option>Surgery</option>
          <option>Other</option>
        </select>

        <textarea
          className="input mt-4 min-h-36"
          placeholder="Tell us what happened..."
        />

        <button className="mt-5 w-full rounded-full bg-[#0874de] py-4 text-lg font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-[#0564c2]">
          Upload Your Medical Bill Story
        </button>

        <p className="mt-4 text-center text-sm text-slate-500">
          We never show personal details without permission.
        </p>
      </form>
    </div>
  </div>
</section>

      {/* PLANS */}
<section id="plans" className="relative px-6 py-24" style={{background: '#f8fbff'}}>
  <div className="mx-auto max-w-7xl">

    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-widest text-[#0874DE]">Access to 2,00,000+ Medical Facilities</p>
      <h2 className="mt-4 text-4xl font-black leading-tight text-[#07182F] md:text-5xl">Choose your plan</h2>
      <p className="mt-4 text-slate-500">No waiting periods. No health screening. Savings on every bill.</p>
    </div>

    <div className="grid gap-4 lg:grid-cols-4 items-stretch">
      {[
        {
          name: "CUT BILLS EVERYDAY",
          old: "Rs. 2000",
          price: "Rs. 999",
          savings: "GUARANTEED ANNUAL SAVINGS of Rs. 40000*",
          color: "#0874DE",
          features: [
            "Works on Bills up to 10 Lacs",
            "Works on OPD",
            "Applicable on New Diseases",
            "Works on Eye & Dental Check ups",
            "Age limit Upto 70 Years",
            "Up to 20% Discounts on all Treatments",
            "50 Medical Records on Cloud for Free",
            "Appointment Booking",
            "Activation in 72 Hours",
            "Health Screening Not Required",
          ],
          highlight: false,
          
        },
        {
          name: "CUT BILLS VITAL",
          old: "Rs. 4000",
          price: "Rs. 1999",
          savings: "GUARANTEED ANNUAL SAVINGS of Rs. 60000*",
          color: "#00A99D",
          features: [
            "Works on Bills up to 20 Lacs",
            "Works on OPD & IPD",
            "Applicable on New Diseases",
            "Works on Eye, Dental & Skin Check ups",
            "Age limit Upto 75 Years",
            "Up to 25% Discounts on all Treatments",
            "100 Medical Records on Cloud for Free",
            "Priority Appointment Booking",
            "Activation in 48 Hours",
            "Health Screening Not Required",
            "Works during Pregnancy",
            "No Treatment Exclusion",
          ],
          highlight: true,
        },
        {
          name: "CUT BILLS THRIVE",
          old: "Rs. 6000",
          price: "Rs. 2999",
          savings: "GUARANTEED ANNUAL SAVINGS of Rs. 100000*",
          color: "#0874DE",
          features: [
            "Works on Bills up to 30 Lacs",
            "Works on OPD & IPD",
            "Applicable on New & Pre-Existing Diseases",
            "Works on Eye, Dental & Skin Treatments",
            "Age limit Upto 80 Years",
            "Up to 30% Discounts on all Treatments",
            "200 Medical Records on Cloud for Free",
            "Priority Appointment Booking",
            "Activation in 24 Hours",
            "Health Screening Not Required",
            "Works during Pregnancy",
            "No Treatment Exclusion",
            "Good for Cancers & Heart Patients",
          ],
          highlight: false,
        },
        {
          name: "CUT BILLS INFINITY",
          old: "Rs. 8000",
          price: "Rs. 3999",
          savings: "GUARANTEED ANNUAL SAVINGS of Rs. 140000*",
          color: "#0874DE",
          features: [
            "Works on Bills with No Upper Limit",
            "Works on OPD & IPD",
            "Applicable on New & Pre-Existing Diseases",
            "Works on Eye, Dental, Skin & Cosmetic Treatments",
            "No Age limit",
            "Up to 40% Discounts on all Treatments",
            "500 Medical Records on Cloud for Free",
            "Priority Appointment Booking",
            "Activation in 24 Hours",
            "Health Screening Not Required",
            "Works during Pregnancy",
            "No Treatment Exclusion",
            "Good for Covid, Cancers & Heart Patients",
          ],
          highlight: false,
        },
      ].map((plan) => (
        <div
          key={plan.name}
          className="flex flex-col rounded-2xl border-2 border-[#00A99D] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          {/* ICON */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A99D]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>

          {/* NAME */}
          <h3 className="text-sm font-black uppercase tracking-wide text-[#07182F]">{plan.name}</h3>

          {/* PRICE */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-sm font-semibold text-slate-400 line-through">{plan.old}</span>
            <span className="text-2xl font-black text-[#07182F]">{plan.price}</span>
            <span className="text-sm text-slate-400">/ Month</span>
          </div>

          {/* SAVINGS BADGE */}
          <div className="mt-4 rounded-lg bg-[#07182F] px-4 py-3 text-center text-xs font-black uppercase leading-5 text-white">
            {plan.savings}
          </div>

          {/* DIVIDER */}
          <div className="my-5 h-px bg-slate-100" />

          {/* FEATURES */}
          <ul className="flex flex-col gap-3 min-h-[430px]">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A99D" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
<button className="mt-auto w-full rounded-xl py-3.5 text-sm font-black transition hover:scale-105 bg-[#00A99D] text-white">            Buy Now →
          </button>
        </div>
      ))}
    </div>

  </div>
</section>

{/* FAQ */}
<section id="faq" className="px-6 py-24 bg-white">
  <div className="mx-auto max-w-4xl">
    <div className="mb-12 text-center">
      <p className="text-xs font-black uppercase tracking-widest text-[#00A99D]">
        FAQ
      </p>
      <h2 className="mt-3 text-4xl font-black text-[#07182F] md:text-5xl">
        OXXY Benefits, Explained
      </h2>
      <p className="mt-3 text-slate-500">
        Everything families need to know before choosing OXXY.
      </p>
    </div>

    <div className="space-y-4">
      {[
        {
          q: "How does OXXY help reduce medical bills?",
          a: "OXXY gives access to partner hospitals, diagnostic centers, labs and healthcare facilities where members can get discounts.",
        },
        {
          q: "Is OXXY health insurance?",
          a: "No. OXXY is a healthcare savings program. It helps reduce expenses through discounts, but it is not insurance or reimbursement.",
        },
        {
          q: "Where can I use OXXY benefits?",
          a: "You can use it for hospitals, OPD, IPD, diagnostics, lab tests, medicines, dental, eye care and selected treatments depending on your plan.",
        },
        {
          q: "Do I need medical screening?",
          a: "No medical screening is required to activate OXXY benefits.",
        },
        {
          q: "How much can families save?",
          a: "Depending on the plan, families can access savings up to 20%, 25%, 30% or 40%.",
        },
      ].map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-[#00A99D]/15 bg-[#f8fbff] p-6 shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#07182F]">
            {item.q}
            <span className="text-2xl text-[#00A99D] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>

{/* CTA BANNER */}
<section className="relative overflow-hidden px-6 py-28 text-center" style={{background: 'linear-gradient(135deg, #07182f 0%, #0a2540 50%, #063b54 100%)'}}>
  {/* subtle orbs */}
  <div style={{position:'absolute', width:'500px', height:'500px', borderRadius:'50%', top:'-200px', left:'-100px', background:'rgba(0,169,157,0.12)', filter:'blur(80px)'}} />
  <div style={{position:'absolute', width:'400px', height:'400px', borderRadius:'50%', bottom:'-150px', right:'-80px', background:'rgba(8,116,222,0.12)', filter:'blur(70px)'}} />

  <div className="relative mx-auto max-w-3xl">
    <p className="text-xs font-black uppercase tracking-widest text-[#00A99D]">Start Saving Today</p>
    <div className="mx-auto mt-3 h-0.5 w-10 bg-[#00A99D]" />
    <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
      Start saving on medical bills<br/>from day one
    </h2>
    <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
      Join thousands of Indians reducing healthcare costs with OXXY. No waiting periods, no exclusions, no hassle.
    </p>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <a href="#plans" className="flex items-center gap-2 rounded-xl bg-[#00A99D] px-8 py-4 font-black text-white shadow-xl shadow-[#00A99D]/20 transition hover:scale-105 hover:bg-[#008f84]">
        Buy a Plan
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="tel:8800855340" className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:scale-105 hover:bg-white/15">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Speak to a Health Advisor
      </a>
    </div>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
      {["No hidden charges", "Fastest activation", "Cancel anytime"].map((t) => (
        <span key={t} className="flex items-center gap-2 text-sm text-slate-400">
          <span className="h-2 w-2 rounded-full bg-[#00A99D]" />{t}
        </span>
      ))}
    </div>
  </div>
</section>

{/* FOOTER */}
<footer style={{background: '#07182f'}}>
  <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

<div className="flex flex-col gap-6">

  {/* FOLLOW US */}
  <div>
    <p className="mb-4 text-xs font-black uppercase tracking-widest text-[#00A99D]">
      Follow Us
    </p>

    <div className="flex items-center gap-3">

      {/* Facebook */}
      <a
        href="#"
        target="_blank"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#00A99D] hover:text-white"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="#"
        target="_blank"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#00A99D] hover:text-white"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        target="_blank"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#00A99D] hover:text-white"
      >
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5z"/>
        </svg>
      </a>

    </div>
  </div>

  {/* POWERED BY */}
  <div>
    <p className="mb-4 text-xs font-black uppercase tracking-widest text-[#00A99D]">
      Powered By
    </p>

    <div className="inline-flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">

  <a
    href="https://fabulousmedia.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-105"
  >
    <img
      src="/fabulous-logo.png"
      alt="Fabulous Media"
      className="h-8 w-auto object-contain opacity-80 transition hover:opacity-100"
    />
  </a>

  <div className="h-5 w-px bg-white/10" />

  <a
    href="https://gocommercially.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-105"
  >
    <img
      src="/gocommercially-logo.png"
      alt="Go Commercially"
      className="h-8 w-auto object-contain opacity-80 transition hover:opacity-100"
    />
  </a>

</div>
  </div>

</div>

      {/* QUICK LINKS */}
      <div>
        <p className="mb-5 text-xs font-black uppercase tracking-widest text-[#00A99D]">Quick Links</p>
        <ul className="flex flex-col gap-3">
          {["How it works", "Benefits", "Plans", "Story Wall", "FAQ"].map((l) => (
            <li key={l}><a href="#" className="text-sm text-slate-400 transition hover:text-white">{l}</a></li>
          ))}
        </ul>
      </div>

      {/* SUPPORT */}
      <div>
        <p className="mb-5 text-xs font-black uppercase tracking-widest text-[#00A99D]">Support</p>
        <ul className="flex flex-col gap-3">
          {["Help Center", "Terms of Service", "Privacy Policy", "Refund Policy"].map((l) => (
            <li key={l}><a href="#" className="text-sm text-slate-400 transition hover:text-white">{l}</a></li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <p className="mb-5 text-xs font-black uppercase tracking-widest text-[#00A99D]">Contact</p>
        <ul className="flex flex-col gap-4">
          {[
            { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, text: "info@oxxy.in" },
            { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, text: "8800855340" },
            { icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>, text: "Delhi, India" },
          ].map((c) => (
            <li key={c.text} className="flex items-center gap-3 text-sm text-slate-400">
              <span className="text-[#00A99D]">{c.icon}</span>{c.text}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* DISCLAIMER */}
    <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm leading-7 text-slate-400">
        <span className="font-black text-[#FFD600]">Important disclaimer: </span>
        OXXY is a healthcare savings program and not a health insurance product. OXXY provides discounts on medical services at partner facilities and does not provide insurance coverage, reimbursement, or guarantees of payment. All discounts are subject to availability and terms of partner facilities. Members are responsible for paying discounted amounts directly to service providers.
      </p>
    </div>

    

    {/* BOTTOM BAR */}
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
      <p className="text-sm text-slate-500">© 2026 OXXY Healthcare Savings Program. All rights reserved.</p>
      <p className="text-sm text-slate-500">Made with ❤️ for families</p>
    </div>
  </div>
</footer>
    </main>
  );
}

