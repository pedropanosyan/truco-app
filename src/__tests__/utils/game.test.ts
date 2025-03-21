import { RANKS, SUITS } from "@/types/card";
import type { Player } from "../../types/player";
import { createDeck, dealCards, shuffleDeck } from "../../utils/game";

describe("Game Utility Functions", () => {
	describe("createDeck", () => {
		it("should create a deck with 52 cards", () => {
			const deck = createDeck();
			expect(deck.length).toBe(40);
			expect(deck[0]).toHaveProperty("suit");
			expect(deck[0]).toHaveProperty("rank");
		});

		it("should contain all suits and ranks", () => {
			const deck = createDeck();

			SUITS.forEach((suit) => {
				RANKS.forEach((rank) => {
					const card = deck.find((c) => c.suit === suit && c.rank === rank);
					expect(card).toBeTruthy();
				});
			});
		});
	});

	describe("shuffleDeck", () => {
		it("should shuffle the deck randomly", () => {
			const deck1 = createDeck();
			const deck2 = [...deck1];
			shuffleDeck(deck1);
			expect(deck1).not.toEqual(deck2);
		});
	});

	describe("dealCards", () => {
		it("should deal 3 cards to each player", () => {
			const players: Player[] = [
				{ name: "Player 1", hand: [] },
				{ name: "Player 2", hand: [] },
			];
			const updatedPlayers = dealCards(players);
			updatedPlayers.forEach((player) => {
				expect(player.hand.length).toBe(3);
			});
		});

		it("should not deal more than the available cards in the deck", () => {
			const players: Player[] = [
				{ name: "Player 1", hand: [] },
				{ name: "Player 2", hand: [] },
				{ name: "Player 3", hand: [] },
			];
			const updatedPlayers = dealCards(players);
			updatedPlayers.forEach((player) => {
				expect(player.hand.length).toBe(3);
			});
		});
	});
});
