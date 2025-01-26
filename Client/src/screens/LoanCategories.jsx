import React, { useState } from "react";

const LoanCalculator = () => {
  const [popup, setPopup] = useState(false);
  const categories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      loanPeriod: 3,
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      name: "Business Startup Loans",
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: 4,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loanWant, setLoanWant] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [loanResult, setLoanResult] = useState(null);

  const handleCalculate = () => {
    if (
      !selectedCategory ||
      !selectedSubcategory ||
      !initialDeposit ||
      !loanPeriod ||
      !loanWant
    ) {
      alert("Please fill all fields to calculate the loan breakdown.");
      return;
    }

    const remain = loanWant - initialDeposit;
    if (remain <= 0) {
      alert("Initial deposit cannot be greater than or equal to the loan amount.");
      return;
    }

    const loanPeriodInMonths = loanPeriod * 12;

    // Assume an interest rate of 10% for calculation
    const interestRate = 0.1;
    const totalAmountWithInterest = remain + remain * interestRate;

    const monthlyInstallment = totalAmountWithInterest / loanPeriodInMonths;

    setLoanResult({
      totalLoan: loanWant,
      remainingLoan: remain,
      monthlyInstallment: monthlyInstallment.toFixed(2),
      loanPeriodInMonths: loanPeriodInMonths,
    });
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Loan Calculator</h1>

      <div className="grid grid-cols-1 gap-6">
        {/* Loan Category */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Loan Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory("");
            }}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">-- Select a Category --</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Loan Subcategory */}
        {selectedCategory && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Select Loan Subcategory
            </label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">-- Select a Subcategory --</option>
              {categories
                .find((category) => category.name === selectedCategory)
                .subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Initial Deposit */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Initial Deposit (PKR)
          </label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your initial deposit"
          />
        </div>

        {/* Loan Amount */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Total Loan Amount Desired
          </label>
          <input
            type="number"
            value={loanWant}
            onChange={(e) => setLoanWant(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter the total loan you desire"
          />
        </div>

        {/* Loan Period */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Loan Period (years)
          </label>
          <input
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter loan period (years)"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="bg-blue-600 text-white p-3 rounded-lg mt-4 hover:bg-blue-700"
        >
          Calculate Loan
        </button>
      </div>

      {/* Loan Breakdown */}
      {loanResult && (
        <div className="mt-6 p-4 bg-white border rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Loan Breakdown</h2>
          <p className="text-gray-700">
            <strong>Total Loan Amount:</strong> PKR {loanResult.totalLoan}
          </p>
          <p className="text-gray-700">
            <strong>Initial Deposit:</strong> PKR {initialDeposit}
          </p>
          <p className="text-gray-700">
            <strong>Remaining Loan Amount:</strong> PKR {loanResult.remainingLoan}
          </p>
          <p className="text-gray-700">
            <strong>Time Period:</strong> {loanResult.loanPeriodInMonths} months
          </p>
          <p className="text-gray-700">
            <strong>Monthly Installment:</strong> PKR {loanResult.monthlyInstallment}
          </p>
        </div>
      )}

      {/* Popup Modal */}
      {popup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Personal Details
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  NIC
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your NIC"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="bg-gray-300 text-gray-700 p-2 rounded-lg mr-2"
                >
                  Close
                </button>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
