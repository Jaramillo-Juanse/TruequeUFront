import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
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
    if (!email || !password) { setError("Completa todos los campos"); return; }
    setLoading(true);
    try {
      await login({ email, password });
      navigate("/listings");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
    setLoading(false);
  }

  return (
    <main className="max-w-sm mx-auto mt-16 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button onClick={() => {}}>{loading ? "Cargando..." : "Entrar"}</Button>
      </form>
    </main>
  );
}