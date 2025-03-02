import Products from "@/components/Products";
import SideBar from "@/components/SideBar";
import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="aside">
        <SideBar />
      </GridItem>
      <GridItem area="main">
        <Products />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
