import { request } from "./api";
import type {
  Chat,
  Message,
} from "../types/types";

// =========================
// INICIAR CHAT
// =========================
export function startChat(
  listingId: string
) {
  return request<Chat>(
    `/Chat/start?listingId=${listingId}`,
    {
      method: "POST",
    }
  );
}

// =========================
// OBTENER MENSAJES
// =========================
export function getMessages(
  chatId: string
) {
  return request<Message[]>(
    `/Chat/${chatId}`
  );
}

// =========================
// ENVIAR MENSAJE
// =========================
export function sendMessage(
  chatId: string,
  content: string
) {
  return request<Message>(
    `/Chat/send?chatId=${chatId}&content=${encodeURIComponent(content)}`,
    {
      method: "POST",
    }
  );
}

// =========================
// OBTENER CHATS
// =========================
export function getChats() {
  return request<Chat[]>(
    "/Chat"
  );
}