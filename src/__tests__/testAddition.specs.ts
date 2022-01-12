import {addition} from "../index";

describe("Test addition", () => {
    it("12 + 12 = 24", () => {
        expect(addition(12, 12)).toBe(24)
    })
})