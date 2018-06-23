import { createStore } from "redux";
import reducers from "./reducers/index.js";

const Store = createStore(reducers);

export default Store;
