import {
	KNIGHT_ADD,
	KNIGHT_DELETE,
	KNIGHT_SET_ERROR,
	KNIGHT_SET_VALUE,
} from "../constants/knightConstant";

export const setKnightValue = (payload) => ({
	type: KNIGHT_SET_VALUE,
	payload,
});

export const addKnight = () => ({
	type: KNIGHT_ADD,
});

export const deleteKnight = (payload) => ({
	type: KNIGHT_DELETE,
	payload,
});

export const setKnightError = (payload) => ({
	type: KNIGHT_SET_ERROR,
	payload,
});
