import axios from "axios";

export default axios.create({
   baseURL: 'https://world.openfoodfacts.org/cgi/search.pl',
   headers: {
      'User-Agent': 'diet_tracker - Web - Version 1.0',
    },
})