import NavComponent from "@/components/NavComponent";
import Products from "@/components/Products";
import SearchInput from "@/components/SearchInput";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const Dashboard = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    console.log(selectedCategories);
    selectedCategories.includes(category)
      ? setSelectedCategories(selectedCategories.filter((c) => c !== category))
      : setSelectedCategories([...selectedCategories, category]);
  };

  return (
    <>
      <NavComponent />
      <Box ml={{ base: 0, md: 60 }}>
        <SearchInput
          onSearch={(text) => console.log(text)}
          onSelectCategory={handleCategoryClick}
        />
        <Products selectedCategories={selectedCategories}/>
      </Box>
    </>
  );
};

export default Dashboard;
