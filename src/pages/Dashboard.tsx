import NavComponent from "@/components/layout/NavComponent";
import Products from "@/components/Products";
import SearchInput from "@/components/SearchInput";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export interface ProductQuery {
  searchText: string;
  categories: string[];
}

const Dashboard = () => {
  const [productQuery, setProductQuery] = useState<ProductQuery>({
    searchText: "",
    categories: [],
  });

  const handleCategoryClick = (category: string) => {
    productQuery.categories.includes(category)
      ? setProductQuery({
          ...productQuery,
          categories: productQuery.categories.filter((c) => c !== category),
        })
      : setProductQuery({
          ...productQuery,
          categories: [...productQuery.categories, category],
        });
  };

  return (
    <>
      <NavComponent />
      <Box ml={{ base: 0, md: 60 }}>
        <SearchInput
          productQuery={productQuery}
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
          onSelectCategory={handleCategoryClick}
        />
        <Products productQuery={productQuery} />
      </Box>
    </>
  );
};

export default Dashboard;
