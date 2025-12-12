export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  callingNumber: string;
  city: string;
  gender: string;
  age: number;
  videoLink?: string | null;
  status?: boolean; // optional → default handled by Prisma
}
