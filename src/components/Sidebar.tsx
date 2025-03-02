import {
  Box,
  Icon,
  useDisclosure,
  FlexProps,
  BoxProps,
  Text,
  Flex,
  CloseButton,
  DrawerRoot,
  DrawerContent,
  IconButton,
  Image,
  Heading,
} from "@chakra-ui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  IoHomeOutline,
  IoFastFoodOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";

const sections = [
  { sectionName: "Home", icon: IoHomeOutline },
  { sectionName: "DashBoard", icon: LuLayoutDashboard },
  { sectionName: "Food", icon: IoFastFoodOutline },
  { sectionName: "Settings", icon: IoSettingsOutline },
];

const SideBar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
      />
      <DrawerRoot open={open} placement="start" size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </DrawerRoot>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg='grey'
      borderRight="1px"
      width='200px'
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="2" justifyContent="space-around" p={2}>
          <Image
            mr={5}
            boxSize="40px"
            borderRadius={50}
            src="src\images\logo_diet_app.jpg"
          ></Image>
          <Heading fontSize="xl">Diet tracker</Heading>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {sections.map((section) => (
        <NavItem key={section.sectionName} icon={section.icon}>
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
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
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

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

export default SideBar;

// <Box minH="100vh">
//   <Box
//     display="flex"
//     alignItems="center"
//     justifyContent="space-around"
//     marginTop={4}
//     marginBottom={8}
//   >
//     <Image
//       boxSize="50px"
//       borderRadius={50}
//       src="src\images\logo_diet_app.jpg"
//     ></Image>
//     <Heading fontSize="xl">Diet tracker</Heading>
//   </Box>

//   <VStack align="stretch">
//     {sections.map((section) => (
//       <HStack
//         key={section.sectionName}
//         display="flex"
//         justifyContent="center"
//         p={4}
//         borderRadius="lg"
//         _hover={{
//           bg: "cyan.400",
//         }}
//       >
//         <Icon mr={2} fontSize={20}>
//           {section.icon}
//         </Icon>
//         <NavLink to="/" end>
//           {section.sectionName}
//         </NavLink>
//       </HStack>
//     ))}
//   </VStack>
// </Box>
