import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5f82500a59214daaa3ff785c846f11b0"
    }
})
// 0