import { Flex, FlexProps, Heading, IconButton, Image } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { PiCarrot } from "react-icons/pi";

interface MobileNavProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileNavProps) => {
  return (
    <Flex
      ml={{ base: 0, md: '240px' }}
      px={{ base: 4, md: 4 }}
      alignItems="center"
      height="20"
      borderBottomWidth="1px"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      bg="gray.800"
      borderColor="gray.600"
      {...rest}
    >
      <IconButton
       display={{ base: 'flex', md: 'none' }}
        aria-label="open menu"
        variant="outline"
        borderColor="gray.500"
        onClick={onOpen}
      >
        <IoMenu color="#71717a" />
      </IconButton>
      <Flex alignItems="center" justifyContent="space-around" display={{ base: 'flex', md: 'none' }}>
        <Image
          boxSize="40px"
          borderRadius={20}
          src="src\images\logo_diet_app.jpg"
        ></Image>
        <Heading fontSize="xl" ml={2}>
          Diet Tracker
        </Heading>
      </Flex>

      <IconButton aria-label="open menu" variant="ghost" borderColor="gray.500">
        <PiCarrot />
      </IconButton>
    </Flex>
  );
};

export default MobileNav;
