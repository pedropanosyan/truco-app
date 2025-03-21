import { CARD_WIDTH } from "@/constants/card";
import { RANKS, SUITS } from "@/types/card";
import { getCardPosition } from "@/utils/card";

describe("Card Utility Functions", () => {
	describe("getCardPosition", () => {
		it("should calculate correct position for first card", () => {
			const card = { suit: "CLUB", rank: "1" };
			const position = getCardPosition(card);
			expect(position).toBe(0);
		});

		it("should calculate correct position for middle end card", () => {
			const card = {
				suit: "SWORD",
				rank: "10",
			};
			const position = getCardPosition(card);
			expect(position).toBe(21 * CARD_WIDTH);
		});

		it("should calculate correct position for middle start card", () => {
			const card = { suit: "CUP", rank: "3" };
			const position = getCardPosition(card);
			expect(position).toBe(15 * CARD_WIDTH);
		});

		it("should calculate correct position for last card", () => {
			const card = { suit: "COIN", rank: "10" };
			const position = getCardPosition(card);
			expect(position).toBe(31 * CARD_WIDTH);
		});
	});
});
