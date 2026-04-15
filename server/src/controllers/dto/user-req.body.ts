export interface CreateUserRequestBody {
  name: string;
  email: string;
  password?: string;
  role?: 'super_admin' | 'admin' | 'staff';
}

export interface UpdateUserRequestBody extends Partial<CreateUserRequestBody> {}
