import React from "react";

import Footer from "../compoents/Footer";
import Header from "../compoents/Navbar";


// Landing Page Component
const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Smit MicroFinance Program</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Empowering lives with flexible loan options. Explore our categories and apply for a loan that fits your needs.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default LandingPage