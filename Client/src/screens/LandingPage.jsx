import React from "react";
import LoanCard from "../compoents/loadcard";
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
          <LoanCard
            title="Wedding Loans"
            subcategories={["Valima", "Furniture", "Valima Food", "Jahez"]}
            maxLoan="PKR 5 Lakh"
            period="3 years"
          />
          <LoanCard
            title="Home Construction Loans"
            subcategories={["Structure", "Finishing", "Loan"]}
            maxLoan="PKR 10 Lakh"
            period="5 years"
          />
          <LoanCard
            title="Business Startup Loans"
            subcategories={["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"]}
            maxLoan="PKR 10 Lakh"
            period="5 years"
          />
          <LoanCard
            title="Education Loans"
            subcategories={["University Fees", "Child Fees Loan"]}
            maxLoan="Based on requirement"
            period="4 years"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default LandingPage