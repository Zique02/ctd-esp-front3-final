import { toast } from 'react-toastify'

export function success(message: string) {
    toast(message, {
        type: 'success',
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}