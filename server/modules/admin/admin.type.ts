export interface CreateAdminDTO {
    email: string;
    password: string;
    role?: 'SUPER_ADMIN' | 'ADMIN';
}

export interface LoginAdminDTO {
    email: string;
    password: string;
}