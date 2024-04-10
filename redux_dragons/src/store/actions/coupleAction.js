import { COUPLE_ADD } from "../constants/coupleConstant";

export const addCouple = (payload) => ({
	type: COUPLE_ADD,
	payload,
});
