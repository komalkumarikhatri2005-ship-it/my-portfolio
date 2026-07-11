import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#fff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#a855f7' }}>Komal Kumari</h1>
      <p style={{ fontSize: '1.2rem', color: '#9ca3af' }}>Computer Science Student | Frontend Developer</p>
      
      <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <a href="https://github.com/komalkumarikhatri2005-ship-it" target="_blank" rel="noreferrer" style={{ padding: '10px 20px', backgroundColor: '#9333ea', color: '#fff', textDecoration: 'none', borderRadius: '8px' }}>
          GitHub Profile
        </a>
        <a href="https://www.linkedin.com/in/komal-kumari-0841893b6" target="_blank" rel="noreferrer" style={{ padding: '10px 20px', border: '1px solid #4b5563', color: '#fff', textDecoration: 'none', borderRadius: '8px' }}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}