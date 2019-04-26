import React from 'react';
import reducer from './reducers';

const Store = React.createContext();

const createStore = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return {state, dispatch};
}

const Provider = ({children}) => {
    const store = createStore(reducer, initialState);
    return <Store.Provider value={store}>{children}</Store.Provider>;
}

export { Store, Provider};