import React from 'react';

function TheAdminAnalytics() {
  return (
    <div className="flex m-[5%]">
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Traffic</h2>
            <p className="text-3xl text-blue-500">1000</p>
            <p className="text-lg">Visits</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Users</h2>
            <p className="text-3xl text-green-500">800</p>
            <p className="text-lg">Unique Visitors</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Revenue</h2>
            <p className="text-3xl text-yellow-500">$5000</p>
            <p className="text-lg">Total Revenue</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Page Views</h2>
            <p className="text-3xl text-purple-500">2000</p>
            <p className="text-lg">Total Page Views</p>
          </div>
          {/* Add more cards for additional information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Bounce Rate</h2>
            <p className="text-3xl text-red-500">45%</p>
            <p className="text-lg">Percentage of users who leave without interacting</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Conversion Rate</h2>
            <p className="text-3xl text-green-500">3.5%</p>
            <p className="text-lg">Percentage of visitors who take a desired action</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Average Session Duration</h2>
            <p className="text-3xl text-blue-500">2m 30s</p>
            <p className="text-lg">Average time users spend on your site</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">New Users</h2>
            <p className="text-3xl text-purple-500">500</p>
            <p className="text-lg">Number of first-time visitors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheAdminAnalytics;
