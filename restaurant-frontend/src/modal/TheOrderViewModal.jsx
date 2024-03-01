import { useState, useEffect } from "react";
import axios from "axios";

function TheOrderViewModal({ order, closeModal }) {
  const [productImages, setProductImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");

  useEffect(() => {
    if (order.orderItems.length > 0) {
      fetchProductImages(order.orderItems);
    }
  }, [order]);

  const fetchProductImages = async (orderItems) => {
    try {
      const productIds = orderItems.map((item) => item.productId);
      const imageRequests = productIds.map((productId) =>
        axios.get(`/api/products/${productId}`)
      );
      const imageResponses = await Promise.all(imageRequests);
      const images = {};
      imageResponses.forEach((response, index) => {
        const productId = productIds[index];
        images[productId] = `data:image/jpeg;base64,${response.data.image}`;
      });
      setProductImages(images);
    } catch (error) {
      console.error("Error fetching product images:", error);
    }
  };

  const handleImageClick = (productId) => {
    setSelectedImage(productImages[productId]);
    setSelectedImageName(productImages[productId].name);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg w-[1000px] h-[70vh]">
        <h2 className="text-xl font-bold mb-4 text-center primary-color">
          Order Details
        </h2>
        <div className="flex flex-col justify-around h-[60vh]">
          <div className="flex">
            <div>
              <div className="overflow-auto max-h-[70vh] text-xs leading-6">
                <p className="font-bold">Order ID: {order.id}</p>
                <h3 className="text-sm font-semibold mt-2">Products:</h3>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.id}>
                      <div className="w-[20rem] flex">
                        <span className="w-[40%]">
                          Product name : {item.productName}
                        </span>{" "}
                        <span className="w-[20%] flex justify-center">
                          -{" "}
                        </span>
                        <span className="w-[40%]">
                          Quantity: {item.productQuantity}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mt-1">Images:</h3>
                <div className="flex gap-5 flex-wrap w-[265px] h-[15vh] p-1 custom-scroll">
                  {order.orderItems.map((item) => (
                    <img
                      key={item.id}
                      src={productImages[item.productId]}
                      alt={item.productName}
                      className="w-12 h-12 rounded-lg cursor-pointer object-cover"
                      onClick={() => handleImageClick(item.productId)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="border rounded h-[350px] w-full flex justify-center items-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="w-[300px] h-[350px] object-contain p-3"
                />
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={closeModal}
              className="mt-4 py-2 px-4 rounded border primary-border primary-color hover:brightness-150"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheOrderViewModal;
