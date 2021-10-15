export default function foodReducer(state, action) {
  switch (action.type) {
    case "CREATE_FOOD":
      return createFood(state, action);
    case "UPDATE_FOOD":
      return updateFood(state, action);
    case "SET_FOOD":
      return setFood(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}
function createFood(state, action) {
  const { payload } = action;
  return [...state, payload];
}

function updateFood(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setFood(action) {
  const { payload } = action;
  return payload;
}
