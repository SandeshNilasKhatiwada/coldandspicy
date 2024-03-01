import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import TheImageMagnifier from "../../admin-components/TheImageMagnifier";

function TheDeleteConfirm({ handleDelete, productId, onCancel, product }) {
  const confirmDelete = () => {
    handleDelete();
    onCancel();
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("click-close")) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-black border rounded-lg shadow-custom-shadow w-full h-[80vh] flex flex-col justify-between mt-7 mr-5 p-7">
            <IoClose
              onClick={onCancel}
              className="cursor-pointer absolute top-[6rem] right-7 text-2xl z-[70]"
              title="Close"
            />
            <div className="text-center">
              <p className="text-4xl font-bold text-red-500 mb-3">
                Delete this Product
              </p>
              <hr className="border-t border-gray-300" />
            </div>
            <div className="flex justify-center items-center h-[60vh] p-14">
              <div className="flex flex-col items-start">
                <p className="mb-3 text-lg font-semibold">
                  Product Id:{" "}
                  <span className="font-light text-sm">{product.id}</span>
                </p>
                <p className="mb-3 text-lg font-semibold">
                  Product Name:{" "}
                  <span className="font-light text-sm">{product.name}</span>
                </p>
                <p className="mb-3 text-lg font-semibold">
                  Amount:{" "}
                  <span className="font-light text-sm">Rs.{product.price}</span>
                </p>
                <p className="mb-3 text-lg font-semibold">
                  Quantity:{" "}
                  <span className="font-light text-sm">{product.quantity}</span>
                </p>
                <p className="mb-3 text-lg font-semibold">
                  Description:{" "}
                  <span className="font-light text-sm">
                    {product.description}
                  </span>
                </p>
              </div>
              <div className="w-[220px] h-[220px] ml-10">
                <TheImageMagnifier
                  imageUrl={`data:image/jpeg;base64,${product.image}`}
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="border p-2 rounded-lg text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheDeleteConfirm;
