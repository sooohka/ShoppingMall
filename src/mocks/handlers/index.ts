import productHandlers from "./products";
import userHandlers from "./users";

const handlers = [...productHandlers, ...userHandlers];

export default handlers;
