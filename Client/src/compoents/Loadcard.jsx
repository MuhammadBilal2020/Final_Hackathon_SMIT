import React from "react";
// LoanCard Component
const LoanCard = ({ title, subcategories, maxLoan, period }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-blue-600 mb-2">{title}</h2>
        <ul className="text-gray-700 mb-4">
          {subcategories.map((sub, index) => (
            <li key={index} className="list-disc ml-4">{sub}</li>
          ))}
        </ul>
        <p className="text-gray-800 font-medium">Maximum Loan: {maxLoan}</p>
        <p className="text-gray-800 font-medium">Loan Period: {period}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    );
  };

export default LoanCard
