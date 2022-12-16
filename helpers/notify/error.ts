import { toast } from 'react-toastify'

export function error(message: string) {
    toast(message, {
        type: 'error',
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
