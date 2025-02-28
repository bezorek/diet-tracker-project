import { Box, Heading, HStack, Icon, Image, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  IoHomeOutline,
  IoFastFoodOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const sections = [
  { sectionName: "Home", icon: <IoHomeOutline /> },
  { sectionName: "DashBoard", icon: <LuLayoutDashboard /> },
  { sectionName: "Food", icon: <IoFastFoodOutline /> },
  { sectionName: "Settings", icon: <IoSettingsOutline /> },
];

const SideBar = () => {
  return (
    <Box h="100vh">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        marginTop={4}
        marginBottom={8}
      >
        <Image
          boxSize="50px"
          borderRadius={50}
          src="src\images\logo_diet_app.jpg"
        ></Image>
        <Heading fontSize="xl">Diet tracker</Heading>
      </Box>

      <VStack align="stretch">
        {sections.map((section) => (
          <HStack display='flex' justifyContent='center'
            p={4}
            borderRadius="lg"
            _hover={{
              bg: "cyan.400",
            }}
          >
            <Icon mr={2} fontSize={20}>
              {section.icon}
            </Icon>
            <NavLink to="/" end>
              {section.sectionName}
            </NavLink>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default SideBar;
