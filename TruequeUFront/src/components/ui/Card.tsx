type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-all">
      {children}
    </div>
  );
}