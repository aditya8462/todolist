const initialState={
    product:{},
    user:{}
}
export default function RootReducer(state=initialState,action){
    switch (action.type)
    {
        case 'ADD_USER':
            state.user[action.payload[0]]=action.payload[1]
            console.log(state.user)
            return ({product:state.product,user:state.user})

            case 'DEL_USER':
             delete state.user[action.payload[0]]  
            return ({product:state.product,user:state.user})
  default:
      return(state)
    }
}