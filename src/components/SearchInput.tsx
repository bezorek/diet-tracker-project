import { Box, Flex, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";
import CategoryList from "./CategoryList";
import { ProductQuery } from "@/pages/Dashboard";

interface Props {
  onSearch: (searchText: string) => void;
  onSelectCategory: (category: string) => void;
  productQuery: ProductQuery
}

const SearchInput = ({ onSearch, onSelectCategory, productQuery }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
   <Box>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Flex justifyContent="center" alignItems="center">
        <InputGroup
          startElement={<IoSearchOutline size="20px" color="white" />}
          w="100vw"
        >
          <Input
            ref={ref}
            placeholder="Search products..."
            borderRadius={20}
            size="lg"
            bg="gray.800"
          />
        </InputGroup>
      </Flex>
      <Box my={5}>
      <CategoryList productQuery={productQuery} onSelectCategory={onSelectCategory}/>
      </Box>
    </form>
    </Box>
  );
};

export default SearchInput;
