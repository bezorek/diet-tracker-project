import NavComponent from "@/components/layout/NavComponent";
import ProductsGrid from "@/components/ProductsGrid";
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
      <NavComponent/>
      <Box ml={{ base: 0, md: '240px' }} padding='20px'>
        <SearchInput
          productQuery={productQuery}
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
          onSelectCategory={handleCategoryClick}
        />
        <ProductsGrid productQuery={productQuery} />
      </Box>
    </>
  );
};

export default Dashboard;
