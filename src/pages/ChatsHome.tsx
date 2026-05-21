import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getChats } from "../services/chatService";

import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";
import { EmptyState } from "../components/ui/EmptyState";

export default function ChatsHome() {
  const navigate = useNavigate();

  const [chats, setChats] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    async function cargar() {
      try {
        const data =
          await getChats();

        setChats(data);

      } catch (err) {
        console.error(err);
        setError(true);
      }

      setLoading(false);
    }

    cargar();
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorState />;

  if (!chats.length)
    return (
      <EmptyState
        title="No tienes chats"
        description="Tus conversaciones aparecerán aquí."
      />
    );

  return (
    <main className="p-4 max-w-4xl mx-auto">

      <h1
        className="
          text-3xl
          font-bold
          mb-6
        "
      >
        Mis chats
      </h1>

      <div className="space-y-4">

        {chats.map((chat) => {

          const ultimoMensaje =
            chat.messages &&
            chat.messages.length > 0
              ? chat.messages[
                  chat.messages.length - 1
                ]
              : null;

          return (

            <div
              key={chat.id}
              onClick={() =>
                navigate(
                  `/chat/${chat.id}`
                )
              }
              className="
                border
                rounded-2xl
                p-4
                flex
                items-center
                gap-4
                hover:bg-gray-50
                cursor-pointer
                transition
                shadow-sm
              "
            >

              {/* Imagen producto */}
              <img
                src={
                  chat.listing
                    ?.images?.[0]?.url ||
                  "https://via.placeholder.com/80"
                }
                alt={
                  chat.listing?.title
                }
                className="
                  w-20
                  h-20
                  object-cover
                  rounded-xl
                  border
                "
              />

              {/* Información */}
              <div className="flex-1">

                <div
                  className="
                    flex
                    justify-between
                    items-start
                  "
                >

                  <div>

                    <h2
                      className="
                        font-semibold
                        text-lg
                      "
                    >
                      {
                        chat.listing
                          ?.title
                      }
                    </h2>

                    <div className="flex  justify-center gap-4 text-sm text-gray-500">
                    <p>
                      Vendedor: {chat.seller?.name}
                    </p>

                    <p>
                      Comprador: {chat.buyer?.name}
                    </p>
                  </div>

                  </div>

                </div>

                {/* Último mensaje */}
                <p
                  className="
                    text-sm
                    text-gray-600
                    mt-2
                    truncate
                  "
                >
                  {ultimoMensaje
                    ? ultimoMensaje.content
                    : "Sin mensajes aún"}
                </p>

              </div>

            </div>

          );
        })}

      </div>

    </main>
  );
}