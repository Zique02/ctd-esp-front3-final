import { render, screen, waitFor } from "@testing-library/react";
import ComicDetail from "./[id].page";



describe("ComicDetail", () => {
    describe("when rendering default", () => {
        it("should render the title",
            async () => {
                render(

                    <ComicDetail data={{
                        id: "1258",
                        title: "FANTASTIC FOUR",
                        thumbnail: {
                            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                            extension: "jpg"
                        },
                        description:"" ,
                        price: 15,
                        stock: 20,
                        characters: {
                            available: 0,
                            returned: 0,
                            collectionURI: "",
                            items: []
                        }
                    }} />



                );

                const title = screen.getByText(/FANTASTIC FOUR/i);
                const price = screen.getByText(/15/i);



                await waitFor(() => {
                    expect(title).toBeInTheDocument()
                });

                await waitFor(() => {
                    expect(price).toBeInTheDocument()
                });





            });
    });
});
