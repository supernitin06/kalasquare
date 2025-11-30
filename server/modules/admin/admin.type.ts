export interface CreateAdminDTO {
    id: number;
    email: string;
    password: string;
    role: 'SUPER_ADMIN' | 'ADMIN';
    createdAt: Date;
}