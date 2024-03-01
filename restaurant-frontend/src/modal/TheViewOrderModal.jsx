import React from "react";

function TheViewOrderModal({ products, selectedTable, closeModal }) {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full h-[70vh]">
        <span
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </span>
        <h2 className="text-lg font-semibold text-center primary-color">
          Order Details for Table {selectedTable+1}
        </h2>
        {products.length === 0 ? (
          <p className="text-gray-500 text-sm text-center mb-6">No orders</p>
        ) : (
          <div>
            <p className="text-gray-600 text-sm text-center mb-6">
              Number of Orders: {products.length}
            </p>
            <ul className="flex flex-col items-center h-[40vh] custom-scroll">
              {products.map((product, index) => (
                <li key={index} className="p-2 flex mb-4">
                  <img
                    src={`data:image/jpeg;base64,${product.image}`}
                    alt={product.name}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-gray-500 text-xs">
                      Rs.{product.price} - Quantity: {product.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="font-semibold mt-4 text-center">
              Total: Rs.{calculateTotalPrice()}
            </p>
          </div>
        )}
        <div className="flex justify-center">
          <button
            className="mt-4 border primary-border primary-color py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TheViewOrderModal;
