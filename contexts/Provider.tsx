import { PropsWithChildren, useMemo, useState } from 'react';

import { CheckoutStateProvider, CheckoutDispatchProvider } from './Context'

import { Checkout, Order } from './types';

export function CheckoutProvider({
    children,
}: PropsWithChildren<unknown>) {
    const [checkout, setCheckout] = useState<Checkout>({} as Checkout);
    const [order, setOrder] = useState<Order>({} as Order);




    const checkoutState = useMemo(
        () => ({
            checkout,
            order,

        }),
        [checkout],
    );

    const checkoutDispatch = useMemo(
        () => ({
            registerCheckout: setCheckout,
            registerOrder: setOrder

        }),
        [setCheckout],
    );

    return (
        <CheckoutStateProvider value={checkoutState}>
            <CheckoutDispatchProvider value={checkoutDispatch}>
                {children}
            </CheckoutDispatchProvider>
        </CheckoutStateProvider>
    );
}