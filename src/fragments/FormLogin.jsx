import { useState } from "react";
import Button from "../components/button/Button";
import FormInput from "../components/form/FormInput";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("logged", true);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label className="block text-slate-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="text-sm border rounded w-full py-2 px-3 text-slate-700 mb-2 "
          label="Email"
          name="email"
          type="email"
          placeholder="example@email.com"
          value={input.email}
          onChange={handleInputChange}
        />
        <label className="block text-slate-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="text-sm border rounded w-full py-2 px-3 text-slate-700 mb-2 "
          label="Password"
          name="password"
          type="password"
          placeholder="*****"
          value={input.password}
          onChange={handleInputChange}
        />
        <Button variant="bg-red-600 hover:bg-red-500 w-full" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
