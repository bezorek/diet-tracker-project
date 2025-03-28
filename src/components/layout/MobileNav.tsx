import {
  Box,
  Flex,
  FlexProps,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { PiCarrot } from "react-icons/pi";
import { ColorModeButton } from "../ui/color-mode";

interface MobileNavProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileNavProps) => {
  return (
    <Flex
      ml={{ base: 0, md: "240px" }}
      px={4}
      alignItems="center"
      height="20"
      borderBottomWidth="1px"
      justifyContent="space-between"
      bg="gray.800"
      borderColor="gray.600"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="open menu"
        variant="outline"
        borderColor="gray.500"
        size="lg"
        onClick={onOpen}
      >
        <IoMenu />
      </IconButton>

      <Flex
        alignItems="center"
        justifyContent="space-around"
        display={{ base: "flex", md: "none" }}
      >
        <Image
          boxSize="40px"
          borderRadius={20}
          src="src\images\logo_diet_app.jpg"
        />
        <Heading fontSize="xl" ml={3}>
          Diet Tracker
        </Heading>
      </Flex>

      <Flex md={{width: '100%', justifyContent: 'space-between'}}>
        <Box pr={3}>
          <ColorModeButton variant="ghost" borderColor="gray.500" size='lg'/>
        </Box>
        <IconButton
          aria-label="open menu"
          variant="ghost"
          borderColor="gray.500"
          size="lg"
        >
          <PiCarrot />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default MobileNav;
