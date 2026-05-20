import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getListingById } from "../services/listingsService";
import { addFavorite } from "../services/favoritesService";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [favoriteLoading, setFavoriteLoading] =
    useState(false);

  const [favoriteMessage, setFavoriteMessage] =
    useState("");

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

  async function handleAddFavorite() {
    try {
      setFavoriteLoading(true);

      await addFavorite(product.id);

      setFavoriteMessage(
        "Producto añadido a favoritos"
      );

    } catch (err) {
      console.error(err);

      setFavoriteMessage(
        "No se pudo añadir a favoritos"
      );
    }

    setFavoriteLoading(false);
  }

  if (loading) return <Loader />;

  if (error || !product)
    return <ErrorState />;

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {product.title}
      </h1>

      {/* Imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

        {product.images &&
        product.images.length > 0 ? (

          product.images.map(
            (image: any, index: number) => (
              <img
                key={index}
                src={image.url}
                alt={product.title}
                className="
                  w-full 
                  h-50
                  object-cover
                  rounded-2xl
                  border
                "
              />
            )
          )

        ) : (

          

          <div
            className="
              h-80
              flex
              items-center
              justify-center
              border
              rounded-2xl
              text-gray-400
            "
          >
            Sin imágenes
          </div>

        )}

      </div>

      {/* Información */}
      <div className="space-y-4">

        <p className="text-gray-600">
          {product.description}
        </p>

        <p>
          <strong>Categoría:</strong>{" "}
          {product.category}
        </p>

        <p>
          <strong>Estado:</strong>{" "}
          {product.condition}
        </p>

        <p className="text-xl font-semibold">
          ${product.price?.toLocaleString()}
        </p>

        <p>
          <strong>Ubicación:</strong>{" "}
          {product.location}
        </p>

        {/* Botón favoritos */}
        <button
          onClick={handleAddFavorite}
          disabled={favoriteLoading}
          className="
            bg-red-500
            hover:bg-red-600
            disabled:bg-red-300
            text-white
            px-5
            py-2
            rounded-xl
            transition
          "
        >
          {favoriteLoading
            ? "Añadiendo..."
            : "Añadir a favoritos"}
        </button>

        {/* Mensaje */}
        {favoriteMessage && (
          <p className="text-sm text-gray-600">
            {favoriteMessage}
          </p>
        )}

      </div>
    </section>
  );
}