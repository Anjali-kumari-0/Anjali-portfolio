type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`z-10 cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-300
      ${
        variant === "primary"
          ? " bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105"
          : "border app-text-primary border-white/20 hover:bg-white/10  "
      }`}
    >
      {children}
    </button>
  );
};