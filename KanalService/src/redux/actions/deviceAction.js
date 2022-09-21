import { SET_IPAD, SET_PHONE } from "../types/types";


export const phone = (data) => ({ type: SET_PHONE, payload: data });
export const ipad = (data) => ({ type: SET_IPAD, payload: data });

