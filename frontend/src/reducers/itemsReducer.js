export default function itemsReducer(state = {items: [], loading: false}, action) {
    switch(action.type) {
        case "LOADING_ITEMS":
           return{
             ...state,
            items: [...state.items],
            loading: true
           }
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.items,
                loading: false
            }
        default:
            return state;
    }
}

