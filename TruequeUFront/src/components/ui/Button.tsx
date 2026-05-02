type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
  };
  
  export default function Button({ children, onClick, variant = "primary" }: Props) {
    const base = "px-4 py-2 rounded-xl font-medium transition";
  
    const styles = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-200 hover:bg-gray-300",
    };
  
    return (
      <button onClick={onClick} className={`${base} ${styles[variant]}`}>
        {children}
      </button>
    );
  }