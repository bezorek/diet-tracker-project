import { TbMeat } from "react-icons/tb";
import { LuMilk, LuCandy } from "react-icons/lu";
import { PiPlant, PiGrains } from "react-icons/pi";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { GiFruitTree } from "react-icons/gi";
import { ProductQuery } from "@/pages/Dashboard";
import CustomIconButton from "./CustomIconButton";

const categories = [
  { name: "Fruit", icon: <GiFruitTree /> },
  { name: "Vegetables", icon: <PiPlant /> },
  { name: "Meat", icon: <TbMeat /> },
  { name: "Dairy", icon: <LuMilk /> },
  { name: "Grain", icon: <PiGrains /> },
  { name: "Sweets", icon: <LuCandy /> },
];

interface Props {
  onSelectCategory: (category: string) => void;
  productQuery: ProductQuery;
}

const CategoryList = ({ onSelectCategory, productQuery }: Props) => {
  return (
    <HStack display={{ base: "none", md: "block" }}>
      {categories.map((category) => (
        // TODO - zmien generowanie przycisków za pomocą CustomIconButton
        // <Box
        //   key={category.name}
        //   mr={3}
        //   _hover={{
        //     colorPalette: "cyan",
        //   }}
        //   onClick={() => onSelectCategory(category.name)}
        // >
        //   <CustomIconButton>
        //     {category.icon}
        //     <Text display={{ base: "none", lg: "block" }}>{category.name}</Text>
        //   </CustomIconButton>
        // </Box>

        <Button
          key={category.name}
          variant="surface"
          rounded='full'
          colorPalette={
            productQuery.categories.includes(category.name) ? "cyan" : "gray"
          }
          mr={3}
          _hover={{
            colorPalette: "cyan",
          }}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.icon}
          <Text display={{ base: "none", lg: "block" }}>{category.name}</Text>
        </Button>
      ))}
    </HStack>
  );
};

export default CategoryList;
