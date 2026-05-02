import ListingCard from "./ListingCard";
import { EmptyState } from "../ui/EmptyState";

type Props = {
  listings: { id: number; title: string }[];
};

export default function ListingList({ listings }: Props) {
  if (!listings.length) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listings.map((item) => (
        <ListingCard key={item.id} item={item} />
      ))}
    </div>
  );
}