import axios from 'axios';
export const register = (name, email, password) => async (dispatch) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post('/api/users/register', { name, email, password }, config);
    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_FAIL', payload: error.response.data.message });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post('/api/users/login', { email, password }, config);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
  }
};