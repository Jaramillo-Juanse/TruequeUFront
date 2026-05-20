export const mockListings = [
  {
    id: "1",
    title: "Libro de Cálculo",
    description: "Libro en buen estado, usado un semestre.",
    category: "Libros",
    condition: "Bueno",
    price: 15000,
    location: "Bogotá",
    userId: "u1",
    isHidden: false,
    state: "disponible",
    images: [],
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    title: "Bicicleta de montaña",
    description: "Bicicleta usada, funciona perfecto.",
    category: "Deportes",
    condition: "Regular",
    price: 250000,
    location: "Medellín",
    userId: "u2",
    isHidden: false,
    state: "disponible",
    images: [],
    createdAt: "2024-01-05",
  },
];

export const mockChats = [
  {
    id: "c1",
    listingId: "1",
    buyerId: "u2",
    sellerId: "u1",
    messages: [
      { id: "m1", chatId: "c1", senderId: "u2", content: "¿Sigue disponible?", sentAt: "2024-01-15T10:00:00" },
      { id: "m2", chatId: "c1", senderId: "u1", content: "Sí, está disponible!", sentAt: "2024-01-15T10:05:00" },
    ],
  },
];