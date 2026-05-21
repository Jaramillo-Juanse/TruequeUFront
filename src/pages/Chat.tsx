import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  getChats,
  sendMessage,
} from "../services/chatService";

import type {
  Chat as ChatType,
  Message,
} from "../types/types";

import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Chat() {
  const { id } = useParams();

  const [chatActivo, setChatActivo] =
    useState<ChatType | null>(null);

  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // =========================
  // USER ID DIRECTO (SIN JWT)
  // =========================
  const currentUserId = localStorage.getItem("userId");

  // =========================
  // CARGAR CHAT
  // =========================
  useEffect(() => {
    async function cargar() {
      try {
        const chats = await getChats();

        const chatEncontrado = chats.find(
          (c) => c.id === id
        );

        if (chatEncontrado) {
          setChatActivo(chatEncontrado);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }

      setLoading(false);
    }

    cargar();
  }, [id]);

  // =========================
  // ENVIAR MENSAJE
  // =========================
  async function handleSend() {
    if (!mensaje.trim() || !chatActivo) return;

    try {
      const nuevoMensaje = await sendMessage(
        chatActivo.id,
        mensaje
      );

      setChatActivo({
        ...chatActivo,
        messages: [
          ...chatActivo.messages,
          nuevoMensaje,
        ],
      });

      setMensaje("");
    } catch (err) {
      console.error(err);
    }
  }

  // =========================
  // ESTADOS
  // =========================
  if (loading) return <Loader />;
  if (error) return <ErrorState />;
  if (!chatActivo)
    return <div className="p-6">Chat no encontrado.</div>;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="border rounded-2xl overflow-hidden shadow-sm bg-white">

        {/* HEADER */}
        <div className="border-b p-4 flex items-center gap-4 bg-gray-50">

          {chatActivo.listing?.images?.[0]?.url && (
            <img
              src={chatActivo.listing.images[0].url}
              alt={chatActivo.listing?.title}
              className="w-16 h-16 rounded-xl object-cover border"
            />
          )}

          <div>
            <h2 className="text-xl font-semibold">
              {chatActivo.listing?.title}
            </h2>

            <p className="text-sm text-gray-500">
              Vendedor: {chatActivo.seller?.name}. Comprador: {chatActivo.buyer?.name}
            </p>
          </div>

        </div>

        {/* MENSAJES */}
        <div className="h-[500px] overflow-y-auto p-4 bg-gray-100 space-y-3">

          {chatActivo.messages?.length > 0 ? (
            chatActivo.messages.map((msg: Message) => {

              const esMio =
                String(msg.senderId) ===
                String(currentUserId);

              return (
                <div
                  key={msg.id}
                  className={`flex ${
                    esMio
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm shadow-sm break-words ${
                      esMio
                        ? "bg-blue-500 text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-500 mt-10">
              No hay mensajes aún.
            </div>
          )}

        </div>

        {/* INPUT */}
        <div className="border-t p-4 flex gap-2 bg-white">

          <Input
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe un mensaje..."
          />

          <Button onClick={handleSend}>
            Enviar
          </Button>

        </div>

      </div>
    </main>
  );
}