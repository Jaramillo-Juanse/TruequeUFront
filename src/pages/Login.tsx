import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "../services/authService";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      // 1. LOGIN
      const response = await login({
        email,
        password,
      });

      localStorage.setItem("token", response.token);

      // 2. GET USER INFO (ME)
      const me = await getMe();

      localStorage.setItem("userId", me.userId);

      // 3. REDIRECT
      navigate("/listings");

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error al iniciar sesión");
      }
    }

    setLoading(false);
  }

  return (
    <section className="max-w-sm mx-auto mt-16 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Iniciar sesión
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </Button>
      </form>
    </section>
  );
}