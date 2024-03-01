import { useState, useEffect } from "react";
import { HiMiniEye } from "react-icons/hi2";
import axios from "axios";

function TheAdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col justify-center h-[88vh] px-[10%]">
      <div className="h-[85vh] custom-scroll border border-white shadow-custom-shadow rounded-md p-2">
        <div className="sticky top-0 bg-black">
          <h2 className="text-xl text-center  mt-2 font-bold mb-4">
            User Details
          </h2>
        </div>{" "}
        <div className="overflow-x-auto h-[75vh] custom-scroll">
          <table className="table-auto min-w-full">
            <thead className="sticky top-0 bg-black border-b">
              <tr className="text-sm">
                <th className="px-4 py-4 font-semibold">User ID</th>
                <th className="px-4 py-4 font-semibold">Full name</th>
                <th className="px-4 py-4 font-semibold">Phone number</th>
                <th className="px-8 py-4 font-semibold">Address</th>
                <th className="px-8 py-4 font-semibold">Email</th>
                <th className="px-8 py-4 font-semibold">Password</th>
                <th className="px-4 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center text-xs">
                  <td className="border-b px-4 py-5">{user.id}</td>
                  <td className="border-b px-4 py-5">{user.fullName}</td>
                  <td className="border-b px-4 py-5">
                    {user.phoneNumber}
                  </td>
                  <td className="border-b px-4 py-5">
                    {user.address}
                  </td>
                  <td className="border-b px-4 py-5">
                    {user.email}
                  </td>
                  <td className="border-b px-4 py-5">
                    {user.password}
                  </td>

                  <td className="border-b px-4 py-5">
                    {" "}
                    <button>
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
    </div>
  );
}

export default TheAdminUsers;
