import { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";

function TheAddModal({ closeModal }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const uploadImage = async () => {
    if (
      !productData.name ||
      !productData.description ||
      !productData.price ||
      !productData.quantity ||
      !selectedFile
    ) {
      setErrorMessage("Please fill out all fields.");
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 5000);
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);

    try {
      await axios.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSelectedFile(null);
      setProductData({
        name: "",
        description: "",
        price: "",
        quantity: "",
        image: null,
      });
      window.location.reload();
      closeModal();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="fixed right-[5rem] top-[3rem] z-50 overflow-y-auto flex items-center justify-center h-[90vh]">
      <div className="bg-black rounded-lg p-8 w-[50rem] shadow-md border">
        <div className="flex justify-between mb-3">
          <p className="text-lg font-semibold">Add Product</p>
          <button onClick={closeModal} title="Close">
            <IoClose className="text-2xl" />
          </button>
        </div>

        {errorVisible && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}

        <div className="flex flex-col md:flex-row gap-7">
          <div className="w-full">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-sm mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={productData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none text-black"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="price" className="text-sm mb-1">
                Amount
              </label>
              <input
                type="number"
                placeholder="Price"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
                step="any"
                className="border border-gray-300 rounded-md p-2 focus:outline-none text-black"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="quantity" className="text-sm mb-1">
                Quantity
              </label>
              <input
                name="quantity"
                placeholder="Quantity"
                value={productData.quantity}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none text-black"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="text-sm mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Description"
                value={productData.description}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 focus:outline-none text-black"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="file"
              onChange={handleFileChange}
              className="text-xs"
            />
            {selectedFile && (
              <div className="mb-2">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="w-[350px] h-[400px] p-3 object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={uploadImage}
            className="admin-blue hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Add product
          </button>
        </div>
      </div>
    </div>
  );
}

export default TheAddModal;
