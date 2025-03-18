import { TbMeat } from "react-icons/tb";
import { LuMilk, LuCandy } from "react-icons/lu";
import { PiPlant, PiGrains } from "react-icons/pi";
import { Button, HStack, Text } from "@chakra-ui/react";
import { GiFruitTree } from "react-icons/gi";
import { ProductQuery } from "@/pages/Dashboard";

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
  productQuery: ProductQuery
}

const CategoryList = ({ onSelectCategory, productQuery }: Props) => {
console.log(productQuery.categories);
  return (
    <HStack>
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="surface"
          colorPalette={productQuery.categories.includes(category.name) ? "cyan" : "gray"}

          mr={3}
          _hover={{
            colorPalette: 'cyan'
          }}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.icon}
          <Text display={{base: "none", lg: 'block'}}>{category.name}</Text>
        </Button>
      ))}
    </HStack>
  );
};

export default CategoryList;
