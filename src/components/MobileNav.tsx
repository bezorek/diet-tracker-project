import { Flex, FlexProps, Heading, IconButton } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

interface MobileNavProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileNavProps) => {
  return (
    <Flex
      alignItems="center"
      height="20"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      bg="gray.800"
      borderColor="gray.600"
      pl={5}
      {...rest}
    >
      <IconButton
        aria-label="open menu"
        variant="outline"
        borderColor="gray.500"
        onClick={onOpen}
      >
        <IoMenu color="#71717a" />
      </IconButton>

      <Heading fontSize="2xl" ml="8">
        Diet Tracker
      </Heading>
    </Flex>
  );
};

export default MobileNav;