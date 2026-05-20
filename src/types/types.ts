export interface Listing {
  id: string;
  title: string;
  description: string;
  category: string;
  condition: string;
  price: number;
  state: string;
  location: string;
  isHidden: boolean;
  userId: string;
  user?: User;
  images: Image[];
  createdAt: string;
}

export interface User {
  id: string;
  name?: string;
  program?: string;
  rating?: number;
  isSuspended?: boolean;
  messages: Message[];
  
}

export interface Image {
  id: string;
  url: string;
  listing_id: string;
  listingAsc?: Listing;
}


export interface Chat {
  id: string;
  listingId: string;
  buyerId: string;
  sellerId: string;
  listing?: Listing;
  buyer?: User;
  seller?: User;
  messages: Message[];
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  sentAt: string;
}

export interface CreateListingDto {
  title: string;
  description: string;
  category: string;
  condition: string;
  price: number;
  location: string;
  state: string;
  isHidden: boolean;
  userId: string;

  images: CreateImageDto[];
}

export interface CreateImageDto {
  url: string;
}