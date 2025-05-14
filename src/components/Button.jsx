const Button = ({ isOutline, icon, text, ...rest }) => {
  const baseStyles =
    "py-4 px-2 rounded-md flex items-center gap-2 min-w-[220px] text-base justify-center cursor-pointer w-full";
  const primaryStyles = "bg-black text-white";
  const outlineStyles = "bg-white text-black border border-black";

  return (
    <button
      {...rest}
      className={`${baseStyles} ${isOutline ? outlineStyles : primaryStyles}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
