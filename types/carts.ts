// export interface Package {
//       id: string;
//       serviceId: string | null;
//       name: string;
//       priceByYear: number;
//       priceByMonth: number;
//       description: string;
//       points: string[];
// }

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
            priceByYear: number;
            priceByMonth: number;
            description: string;
            points: string[];
      } | null;
}