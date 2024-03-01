import React from "react";
import { IoClose } from "react-icons/io5";
import TheImageMagnifier from "../../admin-components/TheImageMagnifier";

function TheViewModal({ product, closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-white border rounded-lg shadow-custom-shadow w-full h-[80vh] flex justify-between items-center mt-7 mr-5">
            <div>
              <IoClose
                onClick={closeModal}
                className="cursor-pointer absolute top-[15%] right-[5rem] text-2xl z-[70]"
                title="Close"
              />
            </div>
            <div className="w-full h-[60vh] p-10 py-5">
              <h2 className="text-4xl font-extrabold mb-10">Product Details</h2>
              <div className="flex flex-col">
              <p className="mb-4 text-xl font-semibold">
                Product Id:{" "}
                <span className="font-light text-lg">{product.id}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Product Name:{" "}
                <span className="font-light text-lg">{product.name}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Amount:{" "}
                <span className="font-light text-lg"> Rs.{product.price}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Quantity:{" "}
                <span className="font-light text-lg"> {product.quantity}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Description:{" "}
                <span className="font-light text-lg"> {product.description}</span>
              </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-[300px] h-[400px] -ml-2">
                <TheImageMagnifier
                  imageUrl={`data:image/jpeg;base64,${product.image}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40" onClick={closeModal}></div>
    </div>
  );
}

export default TheViewModal;
