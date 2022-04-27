import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export interface LoginReqType {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  books: BooksState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

export interface BookType {}
