export function createActionTypes(base, actions = []) {
  return actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;

    return acc;
  }, {});
}

export function createAction(type, data = {}) {
  return { type, payload: data };
}

export const API_KEY = "f5e1997e1aee777bf58aab88b75ffadb";
