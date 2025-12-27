import React, { useState } from 'react';

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`p-8 transition-colors bg-[#0A0A0A] ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <div 
        className="flex items-start gap-6 cursor-pointer group" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-bold bg-[#1A1A1A] border border-white/10 w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 group-hover:text-[#C1FF00] transition-colors">
          {number}
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-[#C1FF00]' : 'text-white'}`}>
              {question}
            </h3>
            <span className="ml-4 text-white">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              )}
            </span>
          </div>
          {isOpen && (
            <p className="mt-4 text-gray-400 leading-relaxed text-sm animate-fadeIn">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  { number: "01", question: "What services does SquareUp provide?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
  { number: "02", question: "How can SquareUp help my business?", answer: "We help businesses by creating high-performance digital products that drive growth, enhance user engagement, and streamline internal operations." },
  { number: "03", question: "What industries does SquareUp work with?", answer: "We work with startups, enterprise leaders, media publishers, and social good organizations across various sectors including Fintech, Health, and E-commerce." },
  { number: "04", question: "How long does it take to complete a project?", answer: "Timeline depends on complexity. Typical design phases take 4-6 weeks, while full engineering builds range from 3 to 6 months." },
  { number: "05", question: "Do you offer ongoing support?", answer: "Yes, we provide long-term maintenance, security updates, and performance optimization post-launch." },
  { number: "06", question: "Can you work with existing frameworks?", answer: "Absolutely. We can integrate with your current tech stack or help you migrate to more modern solutions." },
  { number: "07", question: "How involved will I be in the process?", answer: "We follow a highly collaborative approach with weekly check-ins and transparent project tracking via Slack and Jira." },
  { number: "08", question: "Can you help with app maintenance?", answer: "Yes, we offer dedicated support packages to ensure your app stays updated with the latest OS versions and security patches." },
];

const Home = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#C1FF00] selection:text-black">
      
      {/* NAVIGATION BAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-white/5 bg-[#0A0A0A]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#C1FF00] rounded flex items-center justify-center">
             <div className="w-5 h-5 border-[3px] border-black"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight">SquareUp</span>
        </div>

        <div className="hidden md:flex bg-[#1A1A1A] border border-white/5 rounded-full px-2 py-1.5 gap-2 text-sm">
          <a href="#" className="text-white bg-[#262626] px-5 py-2 rounded-full font-medium shadow-lg">Home</a>
          <a href="#" className="text-gray-400 hover:text-white px-5 py-2 transition">Services</a>
          <a href="#" className="text-gray-400 hover:text-white px-5 py-2 transition">Work</a>
          <a href="#" className="text-gray-400 hover:text-white px-5 py-2 transition">Process</a>
          <a href="#" className="text-gray-400 hover:text-white px-5 py-2 transition">About</a>
          <a href="#" className="text-gray-400 hover:text-white px-5 py-2 transition">Careers</a>
        </div>

        <button className="bg-[#C1FF00] text-black font-bold px-7 py-3 rounded-xl text-sm hover:brightness-110 transition shadow-[0_0_20px_rgba(193,255,0,0.2)]">
          Contact Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-4 flex flex-col items-center text-center px-4 min-h-[85vh]">
        
        {/* BACKGROUND IMAGE FIX */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
           <img 
             src="/hero-section.png" 
             alt="background grid" 
             className="w-full h-full object-cover opacity-30 mix-blend-lighten"
           />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold max-w-5xl leading-[1.05] tracking-tight mb-16">
          A Digital Product Studio <br /> that will Work
        </h1>

        {/* Tags Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 p-3 bg-[#1A1A1A]/60 backdrop-blur-md border border-white/5 rounded-[20px] mb-12">
          <span className="px-3 text-gray-500 font-medium text-sm">For</span>
          <span className="bg-[#262626] border border-white/10 px-5 py-2.5 rounded-xl text-sm font-medium">Startups</span>
          <span className="bg-[#262626] border border-white/10 px-5 py-2.5 rounded-xl text-sm font-medium">Enterprise leaders</span>
          <span className="bg-[#262626] border border-white/10 px-5 py-2.5 rounded-xl text-sm font-medium">Media & Publishers</span>
          <span className="px-2 text-gray-500 italic text-sm">and</span>
          <span className="bg-[#262626] border border-white/10 px-5 py-2.5 rounded-xl text-sm font-medium">Social Good</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-24">
          <button className="bg-[#1A1A1A] border border-white/10 hover:bg-[#262626] px-10 py-4 rounded-xl font-semibold transition text-lg">
            Our Works
          </button>
          <button className="bg-[#C1FF00] text-black px-10 py-4 rounded-xl font-bold hover:shadow-[0_0_40px_rgba(193,255,0,0.4)] transition text-lg">
            Contact Us
          </button>
        </div>
      </header>

      {/* TRUSTED BY SECTION */}
      <section className="pb-24 px-6 md:px-16 flex flex-col items-center">
        <div className="mb-14">
           <span className="px-6 py-2 bg-[#1A1A1A] border border-white/10 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 shadow-sm">
             Trusted By 250+ Companies
           </span>
        </div>
        
      {/* Logo Grid */}
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 transition-all duration-500 px-6">
      <img src="https://cdn.worldvectorlogo.com/logos/zapier.svg" className="h-7 md:h-9 invert" alt="Zapier" />
      <img src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" className="h-7 md:h-9 invert" alt="Spotify" />
      <img src="https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg" className="h-7 md:h-9 invert opacity-80 hover:opacity-100 transition-opacity" alt="Zoom" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" className="h-7 md:h-9 invert" alt="Slack" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-7 md:h-9 invert" alt="Amazon" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" className="h-7 md:h-9 invert" alt="Adobe" />
    </div>
    </section>
      {/* OUR SERVICES SECTION */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden bg-[#0F0F0F]">
          
          {/* Card 1: Design (SVG Icon) */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 group">
            <div className="w-14 h-14 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center mb-8">
              <svg className="w-7 h-7 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-5">Design</h3>
            <p className="text-gray-400 leading-relaxed mb-10">At Squareup, our design team is passionate about creating stunning, user-centric designs that elevate your brand.</p>
            <button className="w-full py-4 bg-[#1A1A1A] border border-white/5 rounded-xl font-semibold hover:bg-[#262626] transition text-gray-300">Learn More</button>
          </div>

          {/* Card 2: Engineering (SVG Icon) */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 group">
            <div className="w-14 h-14 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center mb-8">
              <svg className="w-7 h-7 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-5">Engineering</h3>
            <p className="text-gray-400 leading-relaxed mb-10">Our engineering team combines technical expertise with innovation to build robust and scalable digital solutions.</p>
            <button className="w-full py-4 bg-[#1A1A1A] border border-white/5 rounded-xl font-semibold hover:bg-[#262626] transition text-gray-300">Learn More</button>
          </div>

          {/* Card 3: Project Management (SVG Icon) */}
          <div className="p-10 group">
            <div className="w-14 h-14 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center mb-8">
              <svg className="w-7 h-7 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-5">Project Management</h3>
            <p className="text-gray-400 leading-relaxed mb-10">Our experienced team ensures that your projects are delivered on time, within budget, and according to specifications.</p>
            <button className="w-full py-4 bg-[#1A1A1A] border border-white/5 rounded-xl font-semibold hover:bg-[#262626] transition text-gray-300">Learn More</button>
          </div>

        </div>
      </section>
      {/* WHY CHOOSE SQUAREUP SECTION */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose SquareUp?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-3xl overflow-hidden bg-[#0F0F0F]">
          
          {/* 1. Expertise */}
          <div className="p-10 border-b md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Expertise</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
            </p>
          </div>

          {/* 2. Client-Centric Approach */}
          <div className="p-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Client-Centric Approach</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.
            </p>
          </div>

          {/* 3. Results-Driven Solutions */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Results-Driven Solutions</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.
            </p>
          </div>

          {/* 4. Collaborative Partnership */}
          <div className="p-10 hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#C1FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-4.514A9.01 9.01 0 0012 15c1.289 0 2.498.318 3.555.882m-3.555-4.118V5a2 2 0 114 0v1m-4 4H9m4 0h2m-2 4h.01M9 16H5m4 0v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1m4 0h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Collaborative Partnership</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.
            </p>
          </div>
          </div>
      </section>
      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What our Clients say About us</h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-3xl overflow-hidden bg-[#0F0F0F]">
          
          {/* Testimonial 1 */}
          <div className="p-10 border-b md:border-r border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-[#C1FF00] text-xl font-semibold mb-4">SquareUp has been Instrumental in Transforming our Online Presence.</h3>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm">
                Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-xl overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">John Smith</h4>
                  <p className="text-gray-500 text-xs">CEO of Chic Boutique</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#262626] text-xs font-semibold rounded-lg hover:bg-[#333] transition">Open Website</button>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-10 border-b border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-[#C1FF00] text-xl font-semibold mb-4">Working with SquareUp was a breeze.</h3>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm">
                They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-xl overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Sarah Johnson</h4>
                  <p className="text-gray-500 text-xs">Founder of HungryBites</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#262626] text-xs font-semibold rounded-lg hover:bg-[#333] transition">Open Website</button>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-[#C1FF00] text-xl font-semibold mb-4">SquareUp developed a comprehensive booking and reservation system.</h3>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm">
                Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-xl overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mark Thompson</h4>
                  <p className="text-gray-500 text-xs">CEO of EventMasters</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#262626] text-xs font-semibold rounded-lg hover:bg-[#333] transition">Open Website</button>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-[#C1FF00] text-xl font-semibold mb-4">ProTech Solutions turned to SquareUp to automate our workflow</h3>
              <p className="text-gray-400 leading-relaxed mb-10 text-sm">
                They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.
              </p>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-xl overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Laura" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Laura Adams</h4>
                  <p className="text-gray-500 text-xs">COO of ProTech Solutions</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#262626] text-xs font-semibold rounded-lg hover:bg-[#333] transition">Open Website</button>
            </div>
          </div>
          </div>
      </section>
      {/* FAQ SECTION */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Still have any questions? Contact our Team via hello@squareup.com
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {faqData.map((faq, index) => (
            <FAQItem key={index} number={faq.number} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      {/* THANK YOU / CONTACT SECTION */}
<section className="bg-[#0a0a0a] text-white py-20 px-4">
  <div className="max-w-6xl mx-auto">
    
    {/* Header with Background Grid */}
    <div className="relative text-center mb-16 p-12 border border-zinc-800 rounded-2xl overflow-hidden">
      {/* Mountain/Grid Background Overlay */}
      <img 
        src="/Hero Section.png" 
        alt="background" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-[#c1ff00] p-3 rounded-lg mb-6">
          <img src="/vite.svg" alt="SquareUp Logo" className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank you for your Interest in SquareUp.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          We would love to hear from you and discuss how we can help bring your digital ideas to life. 
          Here are the different ways you can get in touch with us.
        </p>
        <button className="bg-[#c1ff00] text-black font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition">
          Start Project
        </button>
      </div>
    </div>

    {/* Contact Form Container */}
    <div className="bg-[#111111] p-8 md:p-12 rounded-2xl border border-zinc-800">
      <form className="space-y-8">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Full Name</label>
            <input type="text" placeholder="Type here" className="bg-[#1a1a1a] border-b border-zinc-700 p-4 rounded-t-lg focus:outline-none focus:border-[#c1ff00]" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email</label>
            <input type="email" placeholder="Type here" className="bg-[#1a1a1a] border-b border-zinc-700 p-4 rounded-t-lg focus:outline-none focus:border-[#c1ff00]" />
          </div>
        </div>

        {/* Why are you contacting us? */}
        <div>
          <label className="block mb-4 font-medium">Why are you contacting us?</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Web Design', 'Collaboration', 'Mobile App Design', 'Others'].map((item) => (
              <div key={item} className="flex items-center space-x-3 bg-[#1a1a1a] p-4 rounded-lg">
                <input type="checkbox" className="w-5 h-5 accent-[#c1ff00]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div>
          <label className="block mb-4 font-medium">Your Budget</label>
          <p className="text-sm text-zinc-500 mb-4">Slide to indicate your budget range</p>
          <input type="range" className="w-full accent-[#c1ff00]" min="1000" max="5000" />
          <div className="flex justify-between text-sm mt-2 text-zinc-400">
            <span>$1000</span>
            <span>$5000</span>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium">Your Message</label>
          <textarea placeholder="Type here" rows="4" className="bg-[#1a1a1a] border-b border-zinc-700 p-4 rounded-t-lg focus:outline-none focus:border-[#c1ff00]"></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="bg-[#c1ff00] text-black font-bold py-4 px-12 rounded-lg hover:bg-opacity-90 transition">
            Submit
          </button>
        </div>
      </form>
    </div>

  </div>
</section>
</div>
  );
};

export default Home;