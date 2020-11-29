export default function itemsReducer(state = {items: [], newItem: "", loading: false}, action) {
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
                items: action.payload,
                loading: false
            }

        default:
            return state;
    }
}
