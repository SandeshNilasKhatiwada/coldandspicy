import React from 'react';

function TheAdminMarketing() {
  return (
    <div className="flex m-[5%]">
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Total Leads</h2>
            <p className="text-3xl text-blue-500">150</p>
            <p className="text-lg">Generated this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Conversion Rate</h2>
            <p className="text-3xl text-green-500">25%</p>
            <p className="text-lg">Percentage of leads converted</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Marketing Spend</h2>
            <p className="text-3xl text-yellow-500">$2000</p>
            <p className="text-lg">Invested this month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Top Performing Channel</h2>
            <p className="text-3xl text-purple-500">Social Media</p>
            <p className="text-lg">Highest conversion rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Email Campaign Performance</h2>
            <p className="text-lg">Open Rate: <span className="text-green-500">30%</span></p>
            <p className="text-lg">Click Rate: <span className="text-blue-500">15%</span></p>
            <p className="text-lg">Conversion Rate: <span className="text-purple-500">10%</span></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Website Traffic</h2>
            <p className="text-lg">Organic: <span className="text-blue-500">60%</span></p>
            <p className="text-lg">Referral: <span className="text-purple-500">20%</span></p>
            <p className="text-lg">Paid: <span className="text-yellow-500">15%</span></p>
            <p className="text-lg">Direct: <span className="text-green-500">5%</span></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Campaign ROI</h2>
            <p className="text-3xl text-red-500">35%</p>
            <p className="text-lg">Return on investment</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Customer Acquisition Cost</h2>
            <p className="text-3xl text-blue-500">$20</p>
            <p className="text-lg">Cost per new customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheAdminMarketing;
