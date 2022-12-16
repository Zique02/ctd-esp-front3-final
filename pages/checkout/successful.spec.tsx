import { render, screen, waitFor } from "@testing-library/react";
import SuccessFullOrder from "./successfulorder.page";
import { CheckoutProvider } from "contexts/Provider";


describe("SuccessFullOrder", () => {
    describe("when rendering default", () => {
        it("should render the title",
            async () => {
                render(
                    <CheckoutProvider>
                        <SuccessFullOrder />
                    </CheckoutProvider>

                );
                const title = screen.getByText(/Aproveite sua compra!/i);
                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });

            });
    });
});
