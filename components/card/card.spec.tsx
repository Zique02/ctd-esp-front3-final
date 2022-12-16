import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Card from "./card"

describe("Testing component card", () => {
    it("Should render component card", async () => {
        const propsCard = {
            "imgSrc": "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e.jpg",
            "title": "Sentry, the (Trade Paperback)",
            "id": 291
        }
        render(<Card id={propsCard.id} imgSrc={propsCard.imgSrc} title={propsCard.title} />)
        const title = screen.getByText(/Sentry, the \(Trade Paperback\)/i)
        expect(title).toBeInTheDocument();
        await userEvent.hover(title);
        expect(title.hasAttribute("aria-owns")).toBe(true);
        await userEvent.unhover(title);
    })
})