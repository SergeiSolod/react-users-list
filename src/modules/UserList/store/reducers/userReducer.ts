import { UserAction, IUserState } from "modules/UserList/types/user";
import { UserActionConstants } from "modules/UserList/constants/constants";

const initialState: IUserState = {
  users: [],
  usersReset: [],
  loading: false,
  error: null,
  info: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction,
): IUserState => {
  switch (action.type) {
    case UserActionConstants.ADD_USERS:
      return {
        loading: true,
        error: null,
        users: [],
        usersReset: [],
        info: null,
      };
    case UserActionConstants.ADD_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload,
        usersReset: action.payload,
        info: null,
      };
    case UserActionConstants.ADD_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: [],
        usersReset: [],
        info: null,
      };
    case UserActionConstants.DELETE_USER:
      return {
        loading: false,
        error: null,
        users: action.payload,
        usersReset: state.usersReset,
        info: null,
      };
    case UserActionConstants.RESET_USERS:
      return {
        loading: false,
        error: null,
        users: state.usersReset,
        usersReset: state.usersReset,
        info: "All users restored",
      };
    case UserActionConstants.CLOSE_INFO:
      return {
        loading: false,
        error: null,
        users: state.users,
        usersReset: state.usersReset,
        info: null,
      };
    default:
      return state;
  }
};
