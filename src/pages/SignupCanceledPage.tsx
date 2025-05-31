import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Container,
} from "@chakra-ui/react";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupCanceledPage = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    // Restore the user data if it exists
    const storedData = sessionStorage.getItem("pendingUserData");
    if (storedData) {
      // Could navigate back to subscription options
      navigate("/signup");
    } else {
      navigate("/signup");
    }
  };

  return (
    <Container maxW="md" centerContent>
      <Box textAlign="center" py={20}>
        <VStack spacing={6}>
          <Icon as={FaTimesCircle} boxSize={16} color="orange.500" />

          <Heading size="lg" color="orange.600">
            Signup Canceled
          </Heading>

          <Text fontSize="lg" color="gray.600" textAlign="center">
            Your payment was canceled. No charges have been made to your
            account.
          </Text>

          <Text fontSize="md" color="gray.700">
            Would you like to try again or choose a different plan?
          </Text>

          <VStack spacing={3}>
            <Button colorScheme="blue" size="lg" onClick={handleTryAgain}>
              Try Again
            </Button>

            <Button variant="ghost" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default SignupCanceledPage;
