import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";
import axios from "axios";

const TheLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === "admin@admin" && password === "admin") {
      navigate("/admin-dashboard");
      return;
    }

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      navigate("/");
    } else {
      setErrorMessage("Invalid email or password");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-[88vh]">
      <div className="min-h-[70vh] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="border border-white p-8 rounded shadow-md w-full sm:w-96"
        >
          <h2 className="text-xl font-bold mb-4 text-center primary-color">
            Login
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-xs font-medium primary-color"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-black p-1 text-xs"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-xs font-medium primary-color"
            >
              Password*
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none text-black text-xs p-1 pr-10"
            />
            {showPassword ? (
              <PiEyeThin
                className="absolute right-2 top-6 primary-color cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <PiEyeSlashThin
                className="absolute right-2 top-6 primary-color cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {errorMessage && (
            <div className="text-red-500 mb-4 text-xs">{errorMessage}</div>
          )}
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="primary-color primary-background px-4 py-2 rounded text-xs border primary-border hover:brightness-110"
            >
              Login
            </button>
          </div>
          <div className="text-xs flex justify-center">
            <p>
              Don't have an account ?{" "}
              <Link to="/registration">
                <span className="primary-color hover:brightness-110">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TheLogin;
