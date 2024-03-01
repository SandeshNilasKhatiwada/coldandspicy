import { useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const TheEditModal = ({ product, closeModal }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    image: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setSelectedFile(e.target.files[0]);
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataUpdate = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataUpdate.append(key, formData[key]);
      });
      await axios.put(`/api/products/${product.id}`, formDataUpdate);
      window.location.reload();
      closeModal();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-white border rounded-lg shadow-custom-shadow w-full h-[80vh] flex flex-col justify-between mt-7 mr-5 p-7">
            <IoClose
              onClick={closeModal}
              className="cursor-pointer absolute top-[6rem] right-7 text-2xl z-[70]"
              title="Close"
            />
            <div className="text-center">
              <p className="text-4xl font-bold mb-3">Update this Product</p>
              <hr className="border-t border-gray-300" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex h-[55vh]">
                <div className="w-full flex flex-col justify-evenly">
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-xs font-semibold mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border rounded w-full p-2 text-xs focus:outline-none leading-tight"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 text-xs font-semibold mb-1"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="border rounded w-full p-2 text-xs focus:outline-none leading-tight"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 text-xs font-semibold mb-1"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="border rounded w-full p-2 text-xs focus:outline-none leading-tight"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="quantity"
                      className="block text-gray-700 text-xs font-semibold mb-1"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="border rounded w-full p-2 text-xs focus:outline-none leading-tight"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="image"
                      className="block text-gray-700 text-xs font-semibold mb-1"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleChange}
                      accept="image/*"
                      className="border rounded w-full p-2 text-xs focus:outline-none leading-tight"
                    />
                  </div>
                </div>
                <div className="w-full">
                  {selectedFile && (
                    <div className="mb-2">
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="w-[350px] h-[400px] object-contain rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-center gap-8">
                  <button
                    type="submit"
                    className="border border-[#1900D5] text-[#1900D5] hover:brightness-125 py-2 px-4 rounded mt-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={closeModal}
                    className="border border-red-500 text-red-500 hover:brightness-125 py-2 px-4 rounded mt-4"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEditModal;
