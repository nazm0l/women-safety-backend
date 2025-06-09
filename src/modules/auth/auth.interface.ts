// auth.interface.ts
export interface IUser {
  name: string;
  email: string;
  password: string;
  image: string;
  emergencyContact?: string;
  bloodGroup?: string;
  role?: string;
  isDeleted?: boolean;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}
