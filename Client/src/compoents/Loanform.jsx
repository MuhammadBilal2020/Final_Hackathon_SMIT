import React from "react";
const LoanForm = () => {

    return (
      <form className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-lg font-bold text-blue-600 mb-4">Apply for a Loan</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Loan Category
          </label>
          <select
            id="category"
            className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option>Select Category</option>
            <option>Wedding Loans</option>
            <option>Home Construction Loans</option>
            <option>Business Startup Loans</option>
            <option>Education Loans</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="amount">
            Loan Amount (PKR)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Loan Amount"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    );
  };


export default LoanForm

  