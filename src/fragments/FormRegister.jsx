import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import FormInput from "../components/form/FormInput";

const FormRegister = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    alert("Register success!");
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label className="block text-slate-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="text-sm border rounded w-full py-2 px-3 text-slate-700 "
          label="Name"
          name="name"
          type="text"
          placeholder="Your name"
          value={input.name}
          onChange={handleInputChange}
        />
        <label className="block text-slate-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="text-sm border rounded w-full py-2 px-3 text-slate-700 "
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
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormRegister;
