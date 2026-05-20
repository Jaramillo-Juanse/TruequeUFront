import { Link } from "react-router-dom";
import Card from "../ui/Card";
import type { Listing } from "../../types/types";

type Props = { item: Listing };

export default function ListingCard({ item }: Props) {
  return (
    <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <div className="space-y-2 hover:scale-105 transition-transform">
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-sm text-gray-500">{item.category} · {item.condition}</p>
          <p className="text-sm font-semibold">${item.price.toLocaleString()}</p>
        </div>
      </Card>
    </Link>
  );
}