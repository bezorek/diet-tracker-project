import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FiHome, FiBarChart2, FiSettings } from "react-icons/fi";

import { PiHamburger } from "react-icons/pi";

import { LuX } from "react-icons/lu";
import CustomIconButton from "../CustomIconButton";
import { ReactNode } from "react";

interface MobileContentProps extends BoxProps {
  onClose: () => void;
}

const sections = [
  { sectionName: "Home", icon: <FiHome /> },
  { sectionName: "DashBoard", icon: <FiBarChart2 /> },
  { sectionName: "Food", icon: <PiHamburger /> },
  { sectionName: "Settings", icon: <FiSettings /> },
];

const MenuContent = ({ onClose, ...rest }: MobileContentProps) => {
  return (
    <Box
      bg="bg"
      borderRightWidth="1px"
      borderColor="border.emphasized"
      w={{ base: "full", md: "240px" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          h="20"
          alignItems="center"
          mx="3"
          justifyContent="space-around"
          p={2}
        >
          <Image
            boxSize="40px"
            borderRadius={20}
            src="src\images\logo_diet_app.jpg"
          ></Image>
          <Heading fontSize="2xl" ml={3}>
            Diet tracker
          </Heading>
        </Flex>
        <Box mr={2} display={{ base: "flex", md: "none" }} onClick={onClose}>
          {/* CLOSE BUTTON */}
          <CustomIconButton>
            <LuX />
          </CustomIconButton>
        </Box>
      </Flex>

      {sections.map((section) => (
        <NavItem key={section.sectionName} icon={section.icon} mb={3}>
          {section.sectionName}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: ReactNode;
  children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      alignItems="center"
      p="4"
      mx="4"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        bg: "bg.emphasized",
      }}
      fontSize="lg"
      {...rest}
    >
      <Box mr={2}>{icon}</Box>
      {children}
    </Flex>
  );
};

export default MenuContent;
