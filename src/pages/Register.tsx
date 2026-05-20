import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setLoading(true);

    try {
      await register({ email, password });
      navigate("/listings");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error al registrarse");
      }
    }

    setLoading(false);
  }

  return (
    <section className="max-w-sm mx-auto mt-16 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Crear cuenta
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrarse"}
        </Button>
      </form>
    </section>
  );
}