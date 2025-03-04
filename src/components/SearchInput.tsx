import { Flex, Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";

const SearchInput = () => {
  const ref = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Flex justifyContent="center" alignItems="center">
        <InputGroup
          startElement={<IoSearchOutline size="20px" color="white" />}
          m={3}
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
    </form>
  );
};

export default SearchInput;
