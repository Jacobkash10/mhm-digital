import { DefaultSession } from "next-auth"

declare module "next-auth" {

      interface Session {
            user: User & DefaultSession["user"]
      }

      interface Order {
            id: string;
            userId: string;
            price: number;
            status: string | null;
      }

      interface User {
            role: String | null
            orders: Order[]
      }
}