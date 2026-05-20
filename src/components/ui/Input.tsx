type Props = {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

export default function Input({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: Props) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={`w-full px-4 py-2 border rounded-xl ${className}`}
    />
  );
}