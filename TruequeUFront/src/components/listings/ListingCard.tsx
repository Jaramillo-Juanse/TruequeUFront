import Card from "../ui/Card";

type Props = {
  item: {
    id: number;
    title: string;
  };
};

export default function ListingCard({ item }: Props) {
  return (
    <Card>
      <div className="space-y-2 hover:scale-105 transition-transform">
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p className="text-sm text-gray-500">Producto disponible</p>
      </div>
    </Card>
  );
}