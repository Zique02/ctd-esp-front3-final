import { Dispatch, SetStateAction } from "react";

export type Order = {
    title: string;
    path: string;
    extension: string;
    price: number;
}




export type Checkout = {
    name: string;
    lastname: string;
    email: string;
    address1: string;
    address2?: string | null;
    city: string;
    state: string;
    zipCode: string;
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
}


export type CheckoutStateContextData = {
    checkout: Checkout;
    order: Order;

};

export type CheckoutDispatchContextData = {
    registerCheckout: Dispatch<SetStateAction<Checkout>>;
    registerOrder: Dispatch<SetStateAction<Order>>;
};