// src/pages/ModernHome.jsx
import React, { useState } from 'react';
// ... imports ...

export default function ModernHome({ user }) {
  // ... state ...

  return (
    <div className="overflow-x-hidden pt-16">
      
      {/* 1. HERO ID */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* 2. SERVICES ID */}
      <div id="services">
        <Services services={services} setServices={setServices} isAdminMode={user?.isAdmin} />
      </div>

      {/* 3. PROJECTS ID */}
      <div id="projects">
        <Projects projects={projects} setProjects={setProjects} isAdminMode={user?.isAdmin} />
      </div>

      {/* 4. TEAM ID */}
      <div id="team">
        <Team team={team} setTeam={setTeam} isAdminMode={user?.isAdmin} />
      </div>

      <Testimonials testimonials={initialTestimonials} />
      
      {/* 5. CONTACT ID */}
      <div id="contact">
        <Contact />
      </div>

      {/* ... footer ... */}
    </div>
  );
}