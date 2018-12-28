export const GET_JEDIS = 'my-awesome-app/repos/LOAD';
export const GET_JEDIS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_JEDIS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export const DELETE_JEDI = 'my-awesome-app/repos/DELETE';
export const DELETE_JEDI_SUCCESS = 'my-awesome-app/repos/DELETE_SUCCESS';
export const DELETE_JEDI_FAIL = 'my-awesome-app/repos/DELETE_FAIL';

export const ADD_JEDI = 'my-awesome-app/repos/ADD';
export const ADD_JEDI_SUCCESS = 'my-awesome-app/repos/ADD_SUCCESS';
export const ADD_JEDI_FAIL = 'my-awesome-app/repos/ADD_FAIL';

export const MODIFY_JEDI = 'my-awesome-app/repos/MODIFY';
export const MODIFY_JEDI_SUCCESS = 'my-awesome-app/repos/MODIFY_SUCCESS';
export const MODIFY_JEDI_FAIL = 'my-awesome-app/repos/MODIFY_FAIL';

export default function reducer(state = { jedis: [] }, action) {
  switch (action.type) {
    case GET_JEDIS:
      return { ...state, loading: true };
    case GET_JEDIS_SUCCESS:
      return { ...state, loading: false, jedis: action.payload.data };
    case GET_JEDIS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case DELETE_JEDI:
      return { ...state, loading: true };
    case DELETE_JEDI_SUCCESS:
      state.jedis.splice(state.jedis.findIndex(jedi => jedi.id === parseInt(action.payload.config['url'].split('/')[action.payload.config['url'].split('/').length - 1])), 1)
      return { ...state, loading: false };
    case DELETE_JEDI_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case ADD_JEDI:
      return { ...state, loading: true };
    case ADD_JEDI_SUCCESS:
      return { ...state, loading: false, jedis: [...state.jedis, action.payload.data] };
    case ADD_JEDI_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case MODIFY_JEDI:
      return { ...state, loading: true };
    case MODIFY_JEDI_SUCCESS:
      state.jedis.splice(state.jedis.findIndex(jedi => jedi.id === parseInt(action.payload.config['url'].split('/')[action.payload.config['url'].split('/').length - 1])), 1, action.payload.data)
      return { ...state, loading: false, jedis: [...state.jedis] };
    case MODIFY_JEDI_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

export function listJedis() {
  return {
    type: GET_JEDIS,
    payload: {
      request: {
        url: `/jedi`
      }
    }
  };
}

export function deleteJedi(id) {
  return {
    type: DELETE_JEDI,
    payload: {
      request: {
        url: `jedi/${id}`,
        method: 'DELETE',
      }
    }
  }
}

export function addJedi(name) {
  return {
    type: ADD_JEDI,
    payload: {
      request: {
        url: `jedi`,
        method: 'POST',
        data: {
          name,
        }
      }
    }
  }
}

export function modifyJedi({id, name}) {
  return {
    type: MODIFY_JEDI,
    payload: {
      request: {
        url: `jedi/${id}`,
        method: 'PATCH',
        data: {
          name,
        },
      }
    }
  }
}