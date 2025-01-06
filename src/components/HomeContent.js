import React from 'react';

const HomeContent = () => {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero-title">Welcome to Synaptic Scope</h1>
        <p className="hero-description">A platform for tracking and analyzing the progression of neurocognitive decline.</p>
        <button 
          className="btn" 
          onClick={() => console.log('Navigating to test setup...')}>
          Start Your Test Journey
        </button>
      </section>
      <section className="dynamic-content">
        <div className="card">
          <h2 className="card-title">Track Your Progress</h2>
          <p className="card-description">Use advanced tools to track the progression of symptoms over time.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Learn & Educate</h2>
          <p className="card-description">Access educational resources and learn more about neurodegenerative conditions.</p>
          <button className="btn" onClick={() => console.log('Navigating to login...')}>
            Login to Explore More
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;
