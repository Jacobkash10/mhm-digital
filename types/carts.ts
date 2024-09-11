export interface Service {
      id: string;
      name: string;
      description: string;
      icon: string;
}

export interface Cart {
      id: string;
      userId: string | null;
      quantity: number;
      packageDuration: number;
      packageId: string;
      updatedAt: Date;
      package: {
            id: string;
            serviceId: string | null;
            name: string;
            priceByYear: number | null;
            priceByMonth: number | null;
            price: number | null;
            description: string;
            points: string[];
      } | null;
}

export interface Package {
      id: string;
      serviceId: string | null;
      name: string;
      priceByYear: number | null;
      priceByMonth: number | null;
      price: number | null;
      description: string;
      points: string[];
      service: {
            id: string;
      name: string;
      description: string;
      icon: string;
      } | null
}

export interface CartItem {
      packageId: string;
      quantity: number;
      packageDuration: number
      package: Package
}
    
export interface Carts {
      items: CartItem[];
}