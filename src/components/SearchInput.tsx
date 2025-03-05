import { Box, Flex, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";
import CategoryList from "./CategoryList";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
   <Box m={3}>
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
      <Box mt={5}>
      <CategoryList />
      </Box>
    </form>
    </Box>
  );
};

export default SearchInput;
