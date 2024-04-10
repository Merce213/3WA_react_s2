import { MIDDLEWARE_ADD_LOG } from "../constants/middlewareConstant";

export const addLog = (payload) => ({
	type: MIDDLEWARE_ADD_LOG,
	payload,
});
