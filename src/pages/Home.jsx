import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import ImpactStats from '../components/ImpactStats';
// import ProgramGrid from '../components/ProgramGrid';
import Achievements from '../components/Achievements'; // New
import Gallery from '../components/Gallery'; // New
// import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ContactSection from '../components/Contactsection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* <ImpactStats />
        <ProgramGrid /> */}
        
        {/* New Sections Integrated Here */}
        <Achievements />
        <Gallery />
        <ContactSection />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;