import { Box, Image } from "@chakra-ui/react";

interface Props {
  imageSource: string;
}

const HeroSection = ({ imageSource }: Props) => {
  return (
    <Box maxWidth="100vw" width="100vw" height="100%" objectFit="contain">
      <Image height="100%" width="100%" src={imageSource}></Image>
    </Box>
  );
};

export default HeroSection;
