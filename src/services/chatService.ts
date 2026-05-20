import { mockChats } from "./mockData";

export async function getChats() {
  await new Promise((r) => setTimeout(r, 500));
  return mockChats;
}

export async function sendMessage(chatId: string, content: string) {
  await new Promise((r) => setTimeout(r, 300));
  const newMsg = { id: "m" + Date.now(), chatId, senderId: "u1", content, sentAt: new Date().toISOString() };
  const chat = mockChats.find((c) => c.id === chatId);
  if (chat) chat.messages.push(newMsg);
  return newMsg;
}