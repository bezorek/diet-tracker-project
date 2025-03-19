import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  IoFastFoodOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LuLayoutDashboard } from "react-icons/lu";

interface MobileContentProps extends BoxProps {
  onClose: () => void;
}

const sections = [
  { sectionName: "Home", icon: IoHomeOutline },
  { sectionName: "DashBoard", icon: LuLayoutDashboard },
  { sectionName: "Food", icon: IoFastFoodOutline },
  { sectionName: "Settings", icon: IoSettingsOutline },
];

const MenuContent = ({ onClose, ...rest }: MobileContentProps) => {
  return (
    <Box
      bg="gray.800"
      borderRightWidth="1px"
      borderColor="gray.600"
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
        <CloseButton
          borderColor="gray.500"
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        />
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
  icon: IconType;
  children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        alignItems="center"
        p="4"
        mx="4"
        borderRadius="lg"
        cursor="pointer"
        _hover={{
          bg: "cyan.700",
        }}
        fontSize="xl"
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

export default MenuContent;
