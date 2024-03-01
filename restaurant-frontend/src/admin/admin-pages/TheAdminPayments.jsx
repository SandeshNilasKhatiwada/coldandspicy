import React from 'react';

function TheAdminPayment() {
  return (
    <div className="flex m-[5%]">
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Total Revenue</h2>
            <p className="text-3xl text-yellow-500">$10,000</p>
            <p className="text-lg">This month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Successful Transactions</h2>
            <p className="text-3xl text-green-500">200</p>
            <p className="text-lg">This month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Failed Transactions</h2>
            <p className="text-3xl text-red-500">10</p>
            <p className="text-lg">This month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Pending Transactions</h2>
            <p className="text-3xl text-blue-500">5</p>
            <p className="text-lg">Currently pending</p>
          </div>
          {/* Add more cards for additional information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Average Transaction Value</h2>
            <p className="text-3xl text-purple-500">$50</p>
            <p className="text-lg">This month</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Payment Methods</h2>
            <p className="text-3xl text-blue-500">3</p>
            <p className="text-lg">Accepted</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Top Performing Products</h2>
            <ul className="list-disc list-inside">
              <li>Product A</li>
              <li>Product B</li>
              <li>Product C</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Refunds</h2>
            <p className="text-3xl text-red-500">3</p>
            <p className="text-lg">This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheAdminPayment;
