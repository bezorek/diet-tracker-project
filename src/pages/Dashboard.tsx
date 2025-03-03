import NavComponent from "@/components/NavComponent";
import Products from "@/components/Products";

const Dashboard = () => {
  return (
    <NavComponent >
      <Products />
    </NavComponent>
  )
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
