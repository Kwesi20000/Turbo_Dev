export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_REGISTER_SUCCESS':
        return { loading: false, userInfo: action.payload };
      case 'USER_REGISTER_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
        return { loading: false, userInfo: action.payload };
      case 'USER_LOGIN_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };  