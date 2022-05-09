import axios from "axios";

export default axios.create({
  // create a new instance of axios
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer toE3FNGp0uemSnAbSdhr4MlOuyTiF7EDfU6OFdHG_BJI_-TI-X5eRyXX548luMGwppaHOyeq9NnOEj-H7UjhEzfLRGHhxqkVipYWt0V4IB6enYLpn9YWa4SAhAZ4YnYx",
  },
});
