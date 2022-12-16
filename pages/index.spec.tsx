import { render, screen, waitFor } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the title",
      async () => {
        render(
          <QueryClientProvider client={queryClient}>
            <Index />
          </QueryClientProvider>
        );

        const title = screen.getByText(/Obras da Marvel Comics/i);

        await waitFor(() => {
          expect(title).toBeInTheDocument()

        });

      });
  });
});
