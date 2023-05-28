export interface login {
  userName: string;
  password: string;
}

export interface user {
    id: number,
    userName: string,
    createdAt: string,
}

export interface responseLogin {
  user: user
  token: string;
}

export interface register {
  userName: string;
  password: string;
}


export interface responseRegister {
  user: {
    id: number,
    userName: string,
    createdAt: string,
  };
  message: string;
}
