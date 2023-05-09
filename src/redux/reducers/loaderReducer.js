const initialState = {
  loader: true,
};
export default function loaderReducer(state=initialState,action){
    switch(action.type){
        case 'LOAD': 
        return {
            ...state,
            loader:action.payload
        }
        default: 
        return state
    }
}
