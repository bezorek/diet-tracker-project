import axios from "axios";

export default axios.create({
   baseURL: 'https://world.openfoodfacts.org/cgi/search.pl',
   headers: {
      'User-Agent': 'MyRecipeApp/1.0 (contact@myrecipeapp.com)',
    },
})