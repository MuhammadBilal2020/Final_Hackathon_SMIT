import React from "react";

const AdminDashboard = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Admin Dashboard</h2>
          <p className="text-gray-700">Manage loan applications, approve/reject requests, and monitor repayments here.</p>
        </main>
        <Footer />
      </div>
    );
  };

  export default AdminDashboard