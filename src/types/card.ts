const CLUB = "CLUB";
const CUP = "CUP";
const SWORD = "SWORD";
const COIN = "COIN";

const ACE = "1";
const TWO = "2";
const THREE = "3";
const FOUR = "4";
const FIVE = "5";
const SIX = "6";
const SEVEN = "7";
const TEN = "10";
const ELEVEN = "11";
const TWELVE = "12";

export const SUITS = [CLUB, CUP, SWORD, COIN];

export const RANKS = [
	ACE,
	TEN,
	ELEVEN,
	TWELVE,
	TWO,
	THREE,
	FOUR,
	FIVE,
	SIX,
	SEVEN,
];

export type Suit = (typeof SUITS)[number];
export type Rank = (typeof RANKS)[number];

export type Card = {
	suit: Suit;
	rank: Rank;
};
