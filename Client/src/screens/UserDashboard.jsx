import React from "react";
const UserDashboard = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">User Dashboard</h2>
          <p className="text-gray-700">Welcome to your dashboard. Here you can view your loan applications and their statuses.</p>
        </main>
        <Footer />
      </div>
    );
  };

  export default UserDashboard
