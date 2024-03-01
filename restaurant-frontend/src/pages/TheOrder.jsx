import React from "react";
import { useNavigate } from "react-router-dom";

function TheOrder({ items, closeModal }) {
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate("/your-order");
  };z
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="mb-8">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    Order List
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 mx-auto">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left py-2 px-4">Item</th>
                          <th className="text-left py-2 px-4">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={index} className="border-b border-gray-300">
                            <td className="py-2 px-4">{item.name}</td>
                            <td className="py-2 px-4">{item.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex justify-center gap-5">
            <div>
              <button
                onClick={closeModal}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Update
              </button>
            </div>
            <div>
              <button
                onClick={handleOrderClick}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium bg-red-500 text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheOrder;
