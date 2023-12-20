export const roomReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];

        case 'REMOVE':
            const newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case 'CLEAR':
            return []
            
        default:
            throw new Error(`unknown action ${action.type}`);
      }
}

export const shoppingCartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return state + 1;
    }
  }