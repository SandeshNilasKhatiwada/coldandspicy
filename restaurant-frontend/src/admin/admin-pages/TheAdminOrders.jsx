import { useState, useEffect } from "react";
import axios from "axios";
import { HiMiniEye } from "react-icons/hi2";
import TheOrderViewModal from "../../modal/TheOrderViewModal";

function TheAdminOrder() {
  const [orders, setOrders] = useState([]);
  const [productImages, setProductImages] = useState({});
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      fetchProductImages();
    }
  }, [orders]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const fetchProductImages = async () => {
    try {
      const productIds = orders.reduce((ids, order) => {
        return ids.concat(order.orderItems.map((item) => item.productId));
      }, []);
      const imageRequests = productIds.map((productId) => {
        return axios.get(`/api/products/${productId}`);
      });
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

  return (
    <div className="flex flex-col justify-center h-[88vh] p-4 pt-8 pr-[8%]">
      <div className="h-[85vh] custom-scroll border shadow-custom-shadow p-2">
        <div className="sticky top-0 bg-black">
          <h2 className="text-xl text-center mt-2 font-bold mb-4">
            Orders Details
          </h2>
        </div>{" "}
        <div className="overflow-x-auto h-[75vh] custom-scroll">
          <table className="table-auto min-w-full">
            <thead className="sticky top-0 bg-black border-b">
              <tr className="text-sm">
                <th className="px-4 py-4 font-semibold">Order ID</th>
                <th className="px-4 py-4 font-semibold">Table No.</th>
                <th className="px-4 py-4 font-semibold">Product Name</th>
                <th className="px-8 py-4 font-semibold">Quantity</th>
                <th className="px-8 py-4 font-semibold">Price</th>
                <th className="px-8 py-4 font-semibold">Image</th>
                <th className="px-4 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="text-center text-xs">
                  <td className="border-b px-4 py-5">{order.id}</td>
                  <td className="border-b px-4 py-5">{order.selectedTable}</td>
                  <td className="border-b px-4 py-5">
                    {order.orderItems.map((item) => (
                      <div key={item.id}>{item.productName}</div>
                    ))}
                  </td>
                  <td className="border-b px-4 py-5">
                    {order.orderItems.map((item) => (
                      <div key={item.id}>Rs.{item.productQuantity}</div>
                    ))}
                  </td>
                  <td className="border-b px-4 py-5">
                    {order.orderItems.map((item) => (
                      <div key={item.id}>{item.productPrice}</div>
                    ))}
                  </td>
                  <td className="border-b px-4 py-5">
                    <div className="flex justify-around gap-2">
                      {order.orderItems.slice(0, 4).map((item) => (
                        <div key={item.id}>
                          {productImages[item.productId] && (
                            <img
                              src={productImages[item.productId]}
                              alt={item.productName}
                              className="w-12 h-12 rounded-lg"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="border-b px-4 py-5">
                    {" "}
                    <button onClick={() => handleViewDetails(order)}>
                      <HiMiniEye
                        className="text-sm text-gray-600 hover:text-black"
                        title="View more"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && selectedOrder && (
        <TheOrderViewModal
          order={selectedOrder}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default TheAdminOrder;
