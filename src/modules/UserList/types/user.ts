import { UserActionConstants } from "modules/UserList/constants/constants";

export interface IUserState {
  users: Array<IUser>;
  usersReset: Array<IUser>;
  loading: boolean;
  error: null | string;
  info: null | string;
}

export interface IUserAddressGeo {
  lat: string;
  lng: string;
}
export interface IUserAddress {
  city: string;
  geo: IUserAddressGeo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface IUserCompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IUser {
  address: IUserAddress;
  company: IUserCompany;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface FetchUsersAction {
  type: UserActionConstants.ADD_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionConstants.ADD_USERS_SUCCESS;
  payload: Array<IUser>;
}

interface FetchUsersErrorAction {
  type: UserActionConstants.ADD_USERS_ERROR;
  payload: string;
}

interface DeleteUserAction {
  type: UserActionConstants.DELETE_USER;
  payload: Array<IUser>;
}

interface ResetUsersAction {
  type: UserActionConstants.RESET_USERS;
}

interface CloseInfoAction {
  type: UserActionConstants.CLOSE_INFO;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersErrorAction
  | FetchUsersSuccessAction
  | DeleteUserAction
  | ResetUsersAction
  | CloseInfoAction;

export interface IUserBlock {
  openModal: (id: number) => void;
  user: IUser;
}
