export interface UserTokenInterface {
  token?: string;
}

export interface CredentialsInterface {
  username?: string;
  password?: string;
}

export interface UserDetailsInterface {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  products?: productCode[];
}
