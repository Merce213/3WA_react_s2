import {
	COUPLE_ADD,
	COUPLE_SET_ERROR,
	COUPLE_SET_VALUE,
} from "../constants/coupleConstant";

export const setCoupleValue = (payload) => ({
	type: COUPLE_SET_VALUE,
	payload,
});

export const addCouple = (payload) => ({
	type: COUPLE_ADD,
	payload,
});

export const setCoupleError = (payload) => ({
	type: COUPLE_SET_ERROR,
	payload,
});
