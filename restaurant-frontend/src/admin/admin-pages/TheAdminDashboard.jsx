import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TheAdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [revenueData, setRevenueData] = useState({});
  const [monthlyIncomeData, setMonthlyIncomeData] = useState({});
  const revenueChartRef = useRef(null);
  const monthlyIncomeChartRef = useRef(null);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
    fetchRevenueData();
    fetchMonthlyIncomeData();
  }, []);

  useEffect(() => {
    renderRevenueChart();
    renderMonthlyIncomeChart();

    return () => {
      if (revenueChartRef.current && revenueChartRef.current.chart) {
        revenueChartRef.current.chart.destroy();
      }
      if (
        monthlyIncomeChartRef.current &&
        monthlyIncomeChartRef.current.chart
      ) {
        monthlyIncomeChartRef.current.chart.destroy();
      }
    };
  }, [revenueData, monthlyIncomeData]);

  const fetchOrders = async () => {
    setOrders([
      { id: 1, customer: "John Doe", total: 50, status: "Pending" },
      { id: 2, customer: "Jane Smith", total: 70, status: "Shipped" },
      { id: 3, customer: "Alice Johnson", total: 100, status: "Delivered" },
    ]);
  };

  const fetchProducts = async () => {
    setProducts([
      { id: 101, name: "Product 1", price: 20, stock: 10 },
      { id: 102, name: "Product 2", price: 30, stock: 15 },
      { id: 103, name: "Product 3", price: 25, stock: 20 },
    ]);
  };

  const fetchRevenueData = async () => {
    const revenueData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [2000, 2500, 3000, 2800, 3500, 4000],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };
    setRevenueData(revenueData);
  };

  const fetchMonthlyIncomeData = async () => {
    const monthlyIncomeData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Monthly Income",
          data: [1000, 1200, 1500, 1300, 1700, 1800],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
    setMonthlyIncomeData(monthlyIncomeData);
  };

  const renderRevenueChart = () => {
    if (revenueChartRef.current) {
      if (revenueChartRef.current.chart) {
        revenueChartRef.current.chart.destroy();
      }
      const ctx = revenueChartRef.current.getContext("2d");
      revenueChartRef.current.chart = new Chart(ctx, {
        type: "line",
        data: revenueData,
      });
    }
  };

  const renderMonthlyIncomeChart = () => {
    if (monthlyIncomeChartRef.current) {
      if (monthlyIncomeChartRef.current.chart) {
        monthlyIncomeChartRef.current.chart.destroy();
      }
      const ctx = monthlyIncomeChartRef.current.getContext("2d");
      monthlyIncomeChartRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: monthlyIncomeData,
      });
    }
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "orders":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <ul className="divide-y divide-gray-200">
              {orders.map((order) => (
                <li key={order.id} className="py-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{order.customer}</p>
                      <p className="text-sm text-gray-600">
                        Order ID: {order.id}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Rs.{order.total}</p>
                      <p
                        className={`text-sm font-semibold ${
                          order.status === "Delivered"
                            ? "text-green-600"
                            : order.status === "Shipped"
                            ? "text-blue-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case "products":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul className="divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="py-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-600">ID: {product.id}</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Rs.{product.price}</p>
                      <p className="text-sm text-gray-600">
                        Stock: {product.stock}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container px-[10%] py-[5rem]">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Revenue</h2>
          <canvas ref={revenueChartRef}></canvas>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Monthly Income</h2>
          <canvas ref={monthlyIncomeChartRef}></canvas>
        </div>
      </div>
      <div className="mb-8">
        <button
          onClick={() => {
            setSelectedSection("orders");
          }}
          className={`mr-4 py-2 px-4 rounded-lg focus:outline-none ${
            selectedSection === "orders"
              ? "admin-blue text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          View Orders
        </button>
        <button
          onClick={() => {
            setSelectedSection("products");
          }}
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            selectedSection === "products"
              ? "admin-blue text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          View Products
        </button>
      </div>
      <div>{renderSection()}</div>
    </div>
  );
};

export default TheAdminDashboard;
