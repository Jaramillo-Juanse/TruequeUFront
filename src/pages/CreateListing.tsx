import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createListing } from "../services/listingsService";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import type { CreateListingDto } from "../types/types";

export default function CreateListing() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    location: "",
    images: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setError("");

    if (!form.title || !form.price || !form.category) {
      setError("Título, categoría y precio son obligatorios.");
      return;
    }

    setLoading(true);

    try {
      // convertir JWT
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No autenticado");
      }

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      // parse imágenes
      const imageArray: CreateListingDto["images"] =
        form.images
          .split(",")
          .map((url) => url.trim())
          .filter(Boolean)
          .map((url) => ({ url }));

      const dto: CreateListingDto = {
        title: form.title,
        description: form.description,
        category: form.category,
        condition: form.condition,
        price: Number(form.price),
        location: form.location,

        userId: payload.sub,
        isHidden: false,
        state: "Available",

        images: imageArray,
      };

      await createListing(dto);

      navigate("/listings");
    } catch (err) {
      console.error(err);
      setError("Error al publicar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Publicar producto
      </h1>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          placeholder="Título *"
          value={form.title}
          onChange={handleChange}
        />

        <Input
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
        />

        <Input
          name="category"
          placeholder="Categoría *"
          value={form.category}
          onChange={handleChange}
        />

        <Input
          name="condition"
          placeholder="Estado (Bueno, Regular...)"
          value={form.condition}
          onChange={handleChange}
        />

        <Input
          name="price"
          type="number"
          placeholder="Precio *"
          value={form.price}
          onChange={handleChange}
        />

        <Input
          name="location"
          placeholder="Ciudad"
          value={form.location}
          onChange={handleChange}
        />

        <Input
          name="images"
          placeholder="https://img1.jpg, https://img2.jpg"
          value={form.images}
          onChange={handleChange}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Publicando..." : "Publicar"}
        </Button>
      </form>
    </main>
  );
}