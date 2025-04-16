import { Box, Flex, FlexProps, Heading, Image } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { PiCarrot } from "react-icons/pi";
import { ColorModeButton } from "../ui/color-mode";
import CustomIconButton from "../CustomIconButton";

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
      bg="bg"
      borderColor="gray.emphasized"
      {...rest}
    >
      <Box display={{ base: "flex", md: "none" }} onClick={onOpen}>
        <CustomIconButton>
          <IoMenu />
        </CustomIconButton>
      </Box>

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

      <Flex md={{ width: "100%", justifyContent: "space-between" }}>
        <Box pr={3}>
          <ColorModeButton
            variant="surface"
            colorPalette="gray"
            borderColor="border.emphasized"
            size="lg"
          />
        </Box>

        <CustomIconButton>
          <PiCarrot />
        </CustomIconButton>
      </Flex>
    </Flex>
  );
};

export default MobileNav;
