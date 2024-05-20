import { Box } from "@chakra-ui/react";
import homeHeroBackGround from "../assets/ski-hero.jpg";

const HomePage = () => {
  return (
    <>
      <Box
        maxWidth="100vw"
        width="100vw"
        height="700px"
        bgImage={homeHeroBackGround}
        bgPosition="center"
        bgRepeat="no-repeat"></Box>
    </>
  );
};

export default HomePage;
