// auth.interface.ts
export interface IUser {
    name: string;
    email: string;
    password: string;
    emergencyContact: string;
    bloodGroup: string;
    isDeleted: boolean;
  }
  
  export interface IAuthResponse {
    user: IUser;
    token: string;
  }
  