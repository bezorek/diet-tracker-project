import NavComponent from "@/components/NavComponent";
import Products from "@/components/Products";
import SearchInput from "@/components/SearchInput";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export interface ProductQuery {
  searchText: string
  categories: string[];
}

const Dashboard = () => {
  // const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // const [searchText, setSearchText] = useState('')

  const [productQuery, setProductQuery] = useState<ProductQuery>({searchText: '', categories: []});

  const handleCategoryClick = (category: string) => {
    productQuery.categories.includes(category)
      ? setProductQuery({...productQuery, categories: productQuery.categories.filter((c) => c !== category)})
      : setProductQuery({...productQuery, categories: [...productQuery.categories, category]});
  };

  return (
    <>
      <NavComponent />
      <Box ml={{ base: 0, md: 60 }}>
        <SearchInput
          onSearch={(searchText) => setProductQuery({...productQuery, searchText})}
          onSelectCategory={handleCategoryClick}
        />
        <Products
          productQuery={productQuery}
        />
      </Box>
    </>
  );
};

export default Dashboard;
