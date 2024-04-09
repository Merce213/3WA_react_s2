import {
	DRAGON_SET_VALUE,
	DRAGON_ADD,
	DRAGON_SET_ERROR,
	DRAGON_DELETE,
} from "../constants/action-type";

export const setDragonName = (payload) => ({
	type: DRAGON_SET_VALUE,
	payload,
});

export const addDragon = () => ({
	type: DRAGON_ADD,
});

export const deleteDragon = (payload) => ({
	type: DRAGON_DELETE,
	payload,
});

export const setDragonError = (payload) => ({
	type: DRAGON_SET_ERROR,
	payload,
});
