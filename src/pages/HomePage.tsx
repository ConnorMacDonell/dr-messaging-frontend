import HeroSection from "../components/HeroSection";
import homeHeroBackGround from "../assets/ski-hero.jpg";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Grid width="100vw" templateRows="1fr auto">
        <GridItem height="12vh" width="100vw">
          <NavBar />
        </GridItem>
        <GridItem height="88vh" width="100vw">
          <HeroSection imageSource={homeHeroBackGround} />
        </GridItem>
        <GridItem height="12vh" width="100vw"></GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
