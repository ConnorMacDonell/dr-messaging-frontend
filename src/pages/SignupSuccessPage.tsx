import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Container,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignupSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored signup data since registration is complete
    sessionStorage.removeItem("pendingUserData");
  }, []);

  return (
    <Container maxW="md" centerContent>
      <Box textAlign="center" py={20}>
        <VStack spacing={6}>
          <Icon as={FaCheckCircle} boxSize={16} color="green.500" />

          <Heading size="lg" color="green.600">
            Welcome to Medical Messaging!
          </Heading>

          <Text fontSize="lg" color="gray.600" textAlign="center">
            Your account has been successfully created and your subscription is
            now active.
          </Text>

          <VStack spacing={4} align="stretch" w="100%">
            <Text fontSize="md" color="gray.700">
              <strong>What's next?</strong>
            </Text>
            <Text fontSize="sm">
              ✓ Check your email for login credentials
              <br />
              ✓ Log in to start creating message templates
              <br />✓ Begin reaching out to your patients
            </Text>
          </VStack>

          <Button
            colorScheme="blue"
            size="lg"
            onClick={() => navigate("/login")}
            mt={4}>
            Go to Login
          </Button>

          <Text fontSize="xs" color="gray.500">
            Need help? Contact our support team at support@medicalapp.com
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default SignupSuccessPage;
