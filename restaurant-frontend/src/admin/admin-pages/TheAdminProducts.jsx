import { useState, useEffect } from "react";
import axios from "axios";
import { IoFilterSharp } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import TheAddModal from "./crud-product/TheAddModal";
import TheImageMagnifier from "../admin-components/TheImageMagnifier";
import TheViewModal from "./crud-product/TheViewModal";
import TheDeleteConfirm from "./crud-product/TheDeleteConfirm";
import TheEditModal from "./crud-product/TheEditModal";

function TheAdminProducts() {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedViewProduct, setSelectedViewProduct] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEditProduct, setSelectedEditProduct] = useState(null);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openViewModal = (product) => {
    setSelectedViewProduct(product);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedViewProduct(null);
  };

  const openConfirmation = (product) => {
    setDeleteProductId(product.id);
    setShowConfirmation(true);
  };

  const cancelConfirmation = () => {
    setDeleteProductId(null);
    setShowConfirmation(false);
    setSelectedViewProduct(null);
  };

  const openEditModal = (product) => {
    setSelectedEditProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEditProduct(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async () => {
    try {
      if (deleteProductId) {
        await axios.delete(`/api/products/${deleteProductId}`);
        setProducts(
          products.filter((product) => product.id !== deleteProductId)
        );
      } else {
        console.error("Delete confirmation is null or does not contain an id");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      cancelConfirmation();
    }
  };

  return (
    <div className="border-2 border-white rounded-2xl w-[90%] mt-5 mx-12 shadow-custom-shadow">
      <div className="flex justify-between m-5 my-5">
        <div>
          <p className="text-lg font-semibold">Product Details</p>
        </div>
        <div className="flex gap-5">
          <button
            className="bg-black text-white p-1 px-2 rounded-md cursor-pointer flex items-center gap-1"
            onClick={openAddModal}
          >
            Add
            <FaPlus />
          </button>
          <button className="bg-black text-white p-1 px-2 rounded-md cursor-pointer flex items-center gap-1">
            Filter
            <IoFilterSharp />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-sm mt-14">
        <div className="w-[100%] pb-5">
          <div className="max-h-[28rem] custom-scroll">
            <table className="w-full">
              <thead className="sticky top-0 bg-black z-10">
                <tr>
                  <th className="px-6 w-36 text-left font-semibold">
                    Product Id
                  </th>
                  <th className="px-6 w-36 text-left font-semibold">
                    Product Name
                  </th>
                  <th className="px-6 w-36 text-left font-semibold">Amount</th>
                  <th className="px-6 w-36 text-left font-semibold">
                    Quantity
                  </th>
                  <th className="px-6 w-36 text-left font-semibold">Image</th>
                  <th className="px-6 w-36 text-left font-semibold">
                    Description
                  </th>
                  <th className="px-10 w-32 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b-2 border-gray-300">
                    <td className="px-6 py-12">{product.id}</td>
                    <td className="px-6 w-36">{product.name}</td>
                    <td className="px-6 w-36">Rs.{product.price}</td>
                    <td className="px-6 w-36">{product.quantity}</td>
                    <td className="px-6 w-44">
                      <div className="w-[85px] h-[100px] -ml-2">
                        <TheImageMagnifier
                          imageUrl={`data:image/jpeg;base64,${product.image}`}
                        />
                      </div>
                    </td>
                    <td className="px-6">
                      {product.description.length > 15
                        ? `${product.description.slice(0, 15)}...`
                        : product.description}
                    </td>
                    <td className="px-6 flex justify-center items-center h-[7rem] -ml-2">
                      <div className="flex gap-3">
                        <button
                          className="td-button"
                          title="View"
                          onClick={() => openViewModal(product)}
                        >
                          <HiMiniEye />
                        </button>
                        <button
                          className="td-button"
                          title="Delete"
                          onClick={() => openConfirmation(product)}
                        >
                          <MdDelete />
                        </button>
                        <button
                          className="td-button"
                          title="Edit"
                          onClick={() => openEditModal(product)}
                        >
                          <MdEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isAddModalOpen && <TheAddModal closeModal={closeAddModal} />}
      {isViewModalOpen && selectedViewProduct && (
        <TheViewModal
          product={selectedViewProduct}
          closeModal={closeViewModal}
        />
      )}
      {showConfirmation && (
        <TheDeleteConfirm
          handleDelete={handleDelete}
          productId={deleteProductId}
          onCancel={cancelConfirmation}
          product={products.find((product) => product.id === deleteProductId)}
        />
      )}
      {isEditModalOpen && selectedEditProduct && (
        <TheEditModal
          product={selectedEditProduct}
          closeModal={closeEditModal}
        />
      )}
    </div>
  );
}

export default TheAdminProducts;
