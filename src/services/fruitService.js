
import axios from "axios";

const API_URL = "http://localhost:8081/api/fruits";

class fruitService  {

    getfruit() {
        return axios.get(API_URL);
    }
}
export default new fruitService(); 