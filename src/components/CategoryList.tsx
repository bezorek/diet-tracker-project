import { TbMeat } from "react-icons/tb";
import { LuMilk, LuCandy } from "react-icons/lu";
import { PiPlant, PiGrains } from "react-icons/pi";
import { IconButton } from "@chakra-ui/react";
import { GiFruitTree } from "react-icons/gi";

const categories = [
  { name: "fruit", icon: <GiFruitTree /> },
  { name: "vegetables", icon: <PiPlant /> },
  { name: "meat", icon: <TbMeat /> },
  { name: "dairy", icon: <LuMilk /> },
  { name: "grain", icon: <PiGrains /> },
  { name: "sweets", icon: <LuCandy /> },
];

const CategoryList = () => {
  return (
    <>
      {categories.map((category) => (
        <IconButton key={category.name} variant="surface" mr={5}>
          {category.icon}
        </IconButton>
      ))}
    </>
  );
};

export default CategoryList;
