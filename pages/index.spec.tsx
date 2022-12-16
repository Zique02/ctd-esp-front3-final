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

        const title = screen.getByText(/Seja bem vindo ao DH Marvel/i);
        const buttonloadingMoreComics = screen.getByRole('button', { name: "Carregar mais + 12..." })
        await userEvent.click(buttonloadingMoreComics)
        const buttonloadingLessComics = screen.getByRole('button', { name: "Carregar menos - 12..." })
        await userEvent.click(buttonloadingLessComics)



        await waitFor(() => {
          expect(title).toBeInTheDocument()

        });

      });
  });
});
