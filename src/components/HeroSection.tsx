import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
  imageSource: string;
}

const HeroSection = ({ imageSource }: Props) => {
  return (
    <Box
      maxWidth="100vw"
      width="100vw"
      height="100%"
      objectFit="contain"
      position="relative">
      <Image
        height="100%"
        width="100%"
        src={imageSource}
        position="absolute"
        zIndex="0"></Image>
      <Box
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
        position="absolute">
        <Text
          textShadow="1px 1px 2px black"
          textColor="white"
          fontSize="64px"
          fontWeight="600"
          align="center">
          Medical Messaging
        </Text>
        <Text
          textShadow="1px 1px 2px black"
          textColor="white"
          fontSize="28px"
          fontWeight="600"
          align="center">
          Rethink patient outreach
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
