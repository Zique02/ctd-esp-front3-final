import { useContext, createContext } from 'react';

import {
    CheckoutDispatchContextData,
    CheckoutStateContextData,
} from './types';

export const CheckoutStateContext = createContext<
    CheckoutStateContextData | undefined
>(undefined);

export const CheckoutDispatchContext = createContext<
    CheckoutDispatchContextData | undefined
>(undefined);

export const CheckoutStateProvider = CheckoutStateContext.Provider;
export const CheckoutDispatchProvider =
    CheckoutDispatchContext.Provider;

export const useCheckoutState = () => {
    const context = useContext(CheckoutStateContext);
    if (!context) {
        throw new Error('useCheckoutState must be used within a AuthProvider');
    }

    return context;
};

export const useCheckoutDispatch = () => {
    const context = useContext(CheckoutDispatchContext);
    if (!context) {
        throw new Error(
            'useCheckoutDispatch must be used within a AuthProvider',
        );
    }

    return context;
};