import { render, screen, waitFor } from "@testing-library/react";
import CharacterDetail from "./[id].page";
import character from "dh-marvel/test/mocks/character.json"

describe("CharacterDetail", () => {
    describe("when rendering default", () => {
        it("should render the title",
            async () => {
                render(

                    <CharacterDetail data={character} />

                );

                const title = screen.getByText(/3-D Man/i);
                const description = screen.getByText(/Man 3D/i);


                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });
                await waitFor(() => {
                    expect(description).toBeInTheDocument()
                });



            });
    });
});
