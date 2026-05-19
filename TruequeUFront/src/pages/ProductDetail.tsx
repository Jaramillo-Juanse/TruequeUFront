import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getListingById } from "../services/listingsService";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getListingById(id!);
        setProduct(data);
      } catch {
        setError(true);
      }
      setLoading(false);
    }
    cargar();
  }, [id]);

  if (loading) return <Loader />;
  if (error || !product) return <ErrorState />;

  return (
    <section className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Estado:</strong> {product.condition}</p>
      <p><strong>Precio:</strong> ${product.price?.toLocaleString()}</p>
      <p><strong>Ubicación:</strong> {product.location}</p>
    </section>
  );
}