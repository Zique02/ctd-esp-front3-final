import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Checkout from "./[id].page";
import comic from "dh-marvel/test/mocks/comic.json"
import { QueryClient, QueryClientProvider } from "react-query";
import { CheckoutProvider } from "contexts/Provider";
import userEvent from "@testing-library/user-event";


const queryClient = new QueryClient();

describe("Checkout", () => {
    describe("when rendering default", () => {
        it("should render the title, price",
            async () => {
                render(
                    <QueryClientProvider client={queryClient}>
                        <CheckoutProvider>
                            <Checkout data={comic} />
                        </CheckoutProvider>
                    </QueryClientProvider >
                )

                const title = screen.getByText(/Marvel Previews/i);
                const price = screen.getByText(/15/i);


                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });
                await waitFor(() => {
                    expect(price).toBeInTheDocument()
                });

            });
        it("should render the error",
            async () => {
                render(
                    <QueryClientProvider client={queryClient}>
                        <CheckoutProvider>
                            <Checkout data={comic} />
                        </CheckoutProvider>
                    </QueryClientProvider >
                )
                const buttonSubmit = screen.getByRole('button', { name: "Finalizar compra" })
                await userEvent.click(buttonSubmit)
                const error = await screen.findAllByText(/Campo obrigatório/i);

                await waitFor(() => {
                    expect(error[0]).toBeInTheDocument()
                    expect(error[1]).toBeInTheDocument()
                    expect(error[2]).toBeInTheDocument()
                    expect(error[3]).toBeInTheDocument()
                    expect(error[4]).toBeInTheDocument()
                    expect(error[5]).toBeInTheDocument()
                    expect(error[6]).toBeInTheDocument()
                    expect(error[7]).toBeInTheDocument()
                    expect(error[8]).toBeInTheDocument()
                    expect(error[9]).toBeInTheDocument()
                }, { timeout: 5000 });


            });

    });
});
