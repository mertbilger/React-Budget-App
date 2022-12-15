import { createContext, useReducer } from "react"


const AppReducer = (state, action) => {
    switch (action.type) {
        case 'MASRAF_EKLE':
            return {
                ...state,
                harcamalar: [...state.harcamalar, action.payload],
            }
        case 'HARCAMA_SİL':
            return {
                ...state,
                harcamalar: state.harcamalar.filter(
                    (harcamalar) => harcamalar.id !== action.payload
                ),
            }
        case 'SET_BUDGET':
            return {
                ...state,
                butce: action.payload,
            };

        default:
            return state
    }
}

const initialState = {
    butce: 5500,
    harcamalar: [],


}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider
            value={{
                butce: state.butce,
                harcamalar: state.harcamalar,
                dispatch,

            }}

        >
            {props.children}
        </AppContext.Provider>

    )

}