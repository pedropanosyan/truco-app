import { type Card, RANKS, SUITS } from "@/types/card";
import type { Player } from "@/types/player";

export const createDeck = (): Card[] => {
	const deck: Card[] = [];

	SUITS.forEach((suit) => {
		RANKS.forEach((rank) => {
			deck.push({ suit, rank });
		});
	});

	return deck;
};

export const shuffleDeck = (deck: Card[]): Card[] => {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	return deck;
};

export const dealCards = (players: Player[]): Player[] => {
	const deck = shuffleDeck(createDeck());

	const updatedPlayers = players.map((player) => {
		const hand: Card[] = [deck.pop()!, deck.pop()!, deck.pop()!];
		return { ...player, hand };
	});

	return updatedPlayers;
};
