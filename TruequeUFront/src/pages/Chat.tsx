import { useState, useEffect } from "react";
import { getChats, sendMessage } from "../services/chatService";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Chat() {
  const [chatActivo, setChatActivo] = useState<any>(null);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getChats();
        if (data.length > 0) setChatActivo(data[0]);
      } catch {
        setError(true);
      }
      setLoading(false);
    }
    cargar();
  }, []);

  async function handleSend() {
    if (!mensaje.trim() || !chatActivo) return;
    const nuevoMensaje = await sendMessage(chatActivo.id, mensaje);
    setChatActivo({ ...chatActivo, messages: [...chatActivo.messages, nuevoMensaje] });
    setMensaje("");
  }

  if (loading) return <Loader />;
  if (error) return <ErrorState />;

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      {!chatActivo ? (
        <p className="text-gray-500">No tienes conversaciones.</p>
      ) : (
        <div className="border rounded-xl p-4 space-y-4">
          <div className="space-y-2 h-64 overflow-y-auto">
            {chatActivo.messages.map((msg: any) => (
              <div key={msg.id} className={`p-2 rounded-lg text-sm ${msg.senderId === "u1" ? "bg-blue-100 text-right" : "bg-gray-100"}`}>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribe un mensaje..." />
            <Button onClick={handleSend}>Enviar</Button>
          </div>
        </div>
      )}
    </main>
  );
}