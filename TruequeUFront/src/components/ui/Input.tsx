type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  };
  
  export default function Input({ value, onChange, placeholder }: Props) {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }