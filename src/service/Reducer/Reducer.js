import { ADDDOCDATAREJ, ADDDOCDATAREQ, ADDDOCDATARES, DELETDATAREJ, DELETDATAREQ, GETDOCDATAREJ, GETDOCDATAREQ, GETDOCDATARES, GOOGLEWITHREJ, GOOGLEWITHREQ, GoogleWithRES } from "../Const"

const initialState  = {
    isLoading: false,
    isSignin: false,
    user: null,
    err: null,
    products: [],
    product: null,
    data: null
}


export const signReducer = (state = initialState, action) => {
    switch(action.type){
        case GOOGLEWITHREQ:
            return{
                ...state,
                isLoading: true
            }

        case GoogleWithRES:
            return{
                ...state,
                isLoading: false,
                user: action.payload,
                err: null,
                isLogin: true,
            }

        case GOOGLEWITHREJ:
            return{
                ...state,
                isloading: false,
                err:'no google id support',
                isLoading: true
            }

        case ADDDOCDATAREQ:
            return{
                ...state,
                isloading: true
            }

        case ADDDOCDATARES:
            return{
                ...state,
                isloading: false,
                products: action.payload,
                error: null
            }

        case ADDDOCDATAREJ:
            return{
                ...state,
                err: true,
                isloading: false
            }

        case GETDOCDATAREQ:
            return{
                ...state,
                isloading: true
            }

        case GETDOCDATARES:
            return{
                ...state,
                isloading: false,
                products: action.payload,
                error: null
            }

        case GETDOCDATAREJ:
            return{
                ...state,
                err: true,
                isloading: false
            }

        case DELETDATAREQ:
            return {
                ...state,
                isloading: true,
              }

        case DELETDATAREJ:
            return {
                ...state,
                isloading: false,
                error: "error"
              }

        default:
            return state
    }
}

export default signReducer