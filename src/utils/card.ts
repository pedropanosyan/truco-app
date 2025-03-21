import { CARD_WIDTH } from "@/constants/card";
import { type Card, RANKS, SUITS } from "@/types/card";

export const getCardPosition = (card: Card) => {
	const { suit, rank } = card;

	const suitIndex = SUITS.indexOf(suit);
	const rankIndex = RANKS.indexOf(rank);

	return CARD_WIDTH * (rankIndex + 10 * suitIndex);
};
