import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("logged");
    navigate("/login");
  };

  return (
    <div className="flex items-center px-4">
      <div className="hidden absolute py-5 bg-white shadow-lg dark:shadow-slate-500 rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent">
        <div className="flex items-center">
          <p className="text-md text-white pr-4">
            Hello,{" "}
            <span className="font-bold">{userName.name.substring(0, 7)}</span>
          </p>
          <Button
            variant="bg-red-600 hover:bg-red-500 h-8 text-sm"
            type="Logout"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
