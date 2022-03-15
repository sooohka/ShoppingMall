import productHandlers from "./products";
import userHandlers from "./users";
import categoryHandlers from "./categories";

const handlers = [...categoryHandlers, ...productHandlers, ...userHandlers];

export default handlers;
