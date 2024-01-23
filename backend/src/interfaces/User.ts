export interface Document<T> {
  _doc: T;
}

export interface UserInterface extends Document<UserInterface> {
  username: string;
  email: string;
  password: string;
  img: string;
  country: string;
  phone: string;
  desc: string;
  isSeller: boolean;
}
