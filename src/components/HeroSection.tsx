import { Box, Image } from "@chakra-ui/react";
import homeHeroBackGround from "../assets/ski-hero.jpg";

const HeroSection = () => {
  return (
    <Box maxWidth="100vw" width="100vw" height="100%" objectFit="contain">
      <Image height="100%" width="100%" src={homeHeroBackGround}></Image>
    </Box>
  );
};

export default HeroSection;
