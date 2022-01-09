export interface Shop {
  shop_id: number;
  name: string;
}

export interface Item {
  item_id: number;
  shop_id: number;
  name: string;
  description: string;
  categories: ItemCategorie[];
  image: string;
  images: string[];
  stock: number;
  price_before_discount: number;
  price: number;
}

export interface ItemCategorie {
  categorieId: number;
  name: string;
}

export interface User {
  user_id: number;
  username: string;
}

export interface CartItem {
  item_id: number;
  quantity: number;
  price: number;
}

export interface Cart {
  user_id: number;
  items: CartItem[];
}

// ========================================================

export interface Checkout {
  user_id: number;
  items: CartItem[];
  total: number;
}

export interface OrderItem {
  order_id: number;
  item_id: number;
  quantity: number;
  price: number;
}

export interface Order {
  order_id: number;
  user_id: number;
  items: OrderItem[];
  total: number;
}






// export interface Message {
//   shop_id: number;
//   user_id: number;
//   owner_id: number;
//   created_timestamp: string;
//   message: string;
// }