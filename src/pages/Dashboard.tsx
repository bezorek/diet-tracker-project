import NavComponent from "@/components/NavComponent";
import Products from "@/components/Products";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  
  return (
    <>
    <NavComponent />
    <Box ml={{base: 0, md: 60}} p='4'>
      <Products />
    </Box>
    </>
  );
  // return (
  //   <Grid
  //     templateAreas={{
  //       base: `"main"`,
  //       lg: `"aside main"`,
  //     }}
  //     templateColumns={{
  //       base: "1fr",
  //       lg: "240px 1fr",
  //     }}

  //   >
  //     <GridItem area='aside'>
  //       <NavComponent />
  //     </GridItem>
  //     <GridItem area='main'>
  //       <Products />
  //     </GridItem>
  //   </Grid>
  // );
};

export default Dashboard;
