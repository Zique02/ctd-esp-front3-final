import { render, screen, waitFor } from "@testing-library/react";
import Faq from "./faq.page";




describe("Faq", () => {
    describe("when rendering default", () => {
        it("should render the title",
            async () => {
                render(
                    <Faq />
                );
                const question = screen.getByText(/Quantos comics eles têm\?/i);
                await waitFor(() => {
                    expect(question).toBeInTheDocument()
                });

            });
    });
});
