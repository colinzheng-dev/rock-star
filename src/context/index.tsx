import React from 'react'

export const Store = React.createContext<any>({})

export const intialState = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    salary: '2'
}

export const reducer = (state = intialState, action ) => {
    const newState = { ...state }
    console.log(action)
    switch(action.type){
        case 'UPDATE_FIRST_NAME':
           return { ...state, firstname: action.payload  }
        case 'UPDATE_LAST_NAME':
            return { ...state, lastname: action.payload }
        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload  }
        case 'UPDATE_PHONE': 
            return { ...state, phone: action.payload }
        case 'UPDATE_SALARY':
            return { ...state, salary: action.payload }
    }
    return newState 
}


const Provider: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(reducer, intialState)
    return (
        <Store.Provider value={{state,dispatch}}>{props.children}</Store.Provider>
    )
}

export default Provider 