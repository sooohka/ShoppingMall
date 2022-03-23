import Axios from "axios";
import config from "@Config";

const axios = Axios.create({ baseURL: config.api.url });

export default axios;
