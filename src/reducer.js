import { jedisRef } from './config/firebase';

export const GET_JEDIS = 'my-awesome-app/repos/LOAD';
export const GET_JEDIS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_JEDIS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export const MODIFY_JEDIS = 'my-awesome-app/repos/MODIFY';
export const MODIFY_JEDIS_SUCCESS = 'my-awesome-app/repos/MODIFY_SUCCESS';
export const MODIFY_JEDIS_FAIL = 'my-awesome-app/repos/MODIFY_FAIL';

export const DELETE_JEDIS = 'my-awesome-app/repos/DELETE';
export const DELETE_JEDIS_SUCCESS = 'my-awesome-app/repos/DELETE_SUCCESS';
export const DELETE_JEDIS_FAIL = 'my-awesome-app/repos/DELETE_FAIL';

export const ADD_JEDIS = 'my-awesome-app/repos/ADD';
export const ADD_JEDIS_SUCCESS = 'my-awesome-app/repos/ADD_SUCCESS';
export const ADD_JEDIS_FAIL = 'my-awesome-app/repos/ADD_FAIL';

export default function reducer(state = { jedis: [], loading: true }, action) {
  switch (action.type) {
    case GET_JEDIS:
      return { ...state, loading: true };
    case GET_JEDIS_SUCCESS:
      return { ...state, loading: false, jedis: action.payload };
    case MODIFY_JEDIS:
      return { ...state, loading: true };
    case MODIFY_JEDIS_SUCCESS:
      state.jedis.find(o => action.payload.id === o.id).name = action.payload.name;
      return { ...state, loading: false};
    case ADD_JEDIS:
      return { ...state, loading: true };
    case ADD_JEDIS_SUCCESS:
      return { ...state, loading: false, jedis: [...state.jedis, action.payload]};
    case DELETE_JEDIS:
      return { ...state, loading: true };
    case DELETE_JEDIS_SUCCESS:
      return { ...state, loading: false, jedis: [...state.jedis.filter(o => action.payload.id !== o.id)]};
    default:
      return state;
  }
}

export const addJedi = name => async dispatch => {
  jedisRef.add({ name }).then(({ id }) => dispatch({type: ADD_JEDIS_SUCCESS, payload: {id, name}}));
};

export const deleteJedi = id => async dispatch => {
  jedisRef.doc(id).delete().then(() => {
    dispatch({
      type: GET_JEDIS,
    });
    jedisRef.get().then(snapshot => {
      const payload = [];
      snapshot.forEach(function(doc) {
        payload.push({id: doc.id, ...doc.data()});
      })
      dispatch({
        type: GET_JEDIS_SUCCESS,
        payload
      });
    });
  });
};

export const listJedis = () => async dispatch => {
  dispatch({
    type: GET_JEDIS,
  });
  jedisRef.get().then(snapshot => {
    const payload = [];
    snapshot.forEach(function(doc) {
      payload.push({id: doc.id, ...doc.data()});
    })
    dispatch({
      type: GET_JEDIS_SUCCESS,
      payload
    });
  });
};

export const modifyJedi = ({id, name}) => async dispatch => {
  dispatch({type: MODIFY_JEDIS});
  jedisRef.doc(id).set({ name }).then(() => dispatch({type: MODIFY_JEDIS_SUCCESS, payload: {id, name}}));
};