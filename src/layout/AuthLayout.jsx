import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="w-full pt-10 flex items-center justify-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-center font-bold mb-2 text-white">
          {title}
        </h1>
        <p className="font-medium text-white mb-8 text-center">
          {type === "login"
            ? "Welcome, Please enter your Email"
            : "Welcome, Please enter your details"}
        </p>
        {children}
        <p className="text-sm text-center mt-5 text-white">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" ? (
            <Link to="/register" className="font-bold text-blue-500">
              Register
            </Link>
          ) : (
            <Link to="/" className="font-bold text-blue-500">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
