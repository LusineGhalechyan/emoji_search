import thunk from "redux-thunk";
import emojiReducer from "./Reducers/emojiReducer";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(emojiReducer, applyMiddleware(thunk));

