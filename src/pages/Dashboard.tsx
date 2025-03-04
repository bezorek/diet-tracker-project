import NavComponent from "@/components/NavComponent";
import Products from "@/components/Products";
import SearchInput from "@/components/SearchInput";
import { Box, HStack } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <NavComponent />
      <Box ml={{ base: 0, md: 60 }}>
        <SearchInput />
        <Products />
      </Box>
    </>
  );
};

export default Dashboard;
