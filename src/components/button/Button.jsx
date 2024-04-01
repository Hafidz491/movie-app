const Button = ({ children, variant, type, onClick = () => {} }) => {
  return (
    <button
      className={`h-10 px-6 font-bold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
