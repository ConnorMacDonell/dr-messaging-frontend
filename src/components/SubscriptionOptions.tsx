// src/components/SubscriptionOptions.tsx
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { User } from "../entities/User";
import FormLabel from "./FormLabel";

interface Props {
  userData: User;
}

const SubscriptionOptions = ({ userData }: Props) => {
  // TODO: Replace these with your actual Stripe Payment Link URLs from your dashboard
  const basicPlanUrl = `https://buy.stripe.com/eVqeVd0mldIkdDaf7lfrW04`;
  const premiumPlanUrl = `https://buy.stripe.com/6oU8wPc538o0dDaaR5frW05`;

  const handlePlanSelection = (url: string, planType: string) => {
    // Store user data in sessionStorage before redirecting to Stripe
    const userDataWithPlan = {
      ...userData,
      selectedPlan: planType,
    };
    sessionStorage.setItem("pendingUserData", JSON.stringify(userDataWithPlan));

    // Redirect to Stripe Payment Link
    window.location.href = url;
  };

  return (
    <AbsoluteCenter>
      <Box width="80vw" maxW="800px">
        <VStack spacing={8}>
          <FormLabel
            title="Choose Your Plan"
            message={`Select a subscription plan to complete your registration, ${userData.firstName}`}
          />

          <HStack spacing={8} justify="center" align="stretch" wrap="wrap">
            {/* Basic Plan */}
            <Card
              maxW="350px"
              minW="300px"
              variant="outline"
              borderWidth={2}
              _hover={{ borderColor: "blue.300", shadow: "lg" }}
              transition="all 0.2s">
              <CardHeader textAlign="center" pb={2}>
                <Heading size="md" color="blue.600">
                  Basic Plan
                </Heading>
                <HStack justify="center" align="baseline" mt={2}>
                  <Text fontSize="4xl" fontWeight="bold">
                    $29.99
                  </Text>
                  <Text color="gray.500" fontSize="lg">
                    /month
                  </Text>
                </HStack>
              </CardHeader>
              <CardBody pt={0}>
                <VStack spacing={4}>
                  <Text color="gray.600" textAlign="center" fontSize="md">
                    Perfect for small medical practices
                  </Text>

                  <Box textAlign="left" width="100%">
                    <Text fontWeight="semibold" mb={2}>
                      Features included:
                    </Text>
                    <VStack align="start" spacing={2}>
                      <Text fontSize="sm">
                        ✓ Up to 100 SMS messages per month
                      </Text>
                      <Text fontSize="sm">✓ Pre-built message templates</Text>
                      <Text fontSize="sm">✓ Basic patient categories</Text>
                      <Text fontSize="sm">✓ Email support</Text>
                    </VStack>
                  </Box>

                  <Button
                    colorScheme="blue"
                    variant="outline"
                    size="lg"
                    width="100%"
                    onClick={() => handlePlanSelection(basicPlanUrl, "basic")}
                    _hover={{ bg: "blue.50" }}>
                    Start with Basic
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Premium Plan */}
            <Card
              maxW="350px"
              minW="300px"
              variant="outline"
              borderWidth={2}
              borderColor="blue.500"
              bg="blue.50"
              position="relative"
              _hover={{ borderColor: "blue.600", shadow: "xl" }}
              transition="all 0.2s">
              <Badge
                colorScheme="blue"
                position="absolute"
                top="-12px"
                left="50%"
                transform="translateX(-50%)"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold">
                MOST POPULAR
              </Badge>

              <CardHeader textAlign="center" pb={2}>
                <Heading size="md" color="blue.700">
                  Premium Plan
                </Heading>
                <HStack justify="center" align="baseline" mt={2}>
                  <Text fontSize="4xl" fontWeight="bold">
                    $49.99
                  </Text>
                  <Text color="gray.500" fontSize="lg">
                    /month
                  </Text>
                </HStack>
              </CardHeader>
              <CardBody pt={0}>
                <VStack spacing={4}>
                  <Text color="gray.700" textAlign="center" fontSize="md">
                    For growing practices that need more
                  </Text>

                  <Box textAlign="left" width="100%">
                    <Text fontWeight="semibold" mb={2}>
                      Everything in Basic, plus:
                    </Text>
                    <VStack align="start" spacing={2}>
                      <Text fontSize="sm">
                        ✓ <strong>Unlimited</strong> SMS messages
                      </Text>
                      <Text fontSize="sm">✓ Advanced custom templates</Text>
                      <Text fontSize="sm">✓ Message scheduling</Text>
                      <Text fontSize="sm">✓ Analytics dashboard</Text>
                      <Text fontSize="sm">✓ Priority support</Text>
                      <Text fontSize="sm">✓ Multiple user accounts</Text>
                    </VStack>
                  </Box>

                  <Button
                    colorScheme="blue"
                    size="lg"
                    width="100%"
                    onClick={() =>
                      handlePlanSelection(premiumPlanUrl, "premium")
                    }
                    bg="blue.600"
                    _hover={{ bg: "blue.700" }}>
                    Choose Premium
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </HStack>

          <Text fontSize="sm" color="gray.500" textAlign="center" maxW="600px">
            <strong>Note:</strong> You'll be redirected to Stripe's secure
            payment page. Your account will be created automatically after
            successful payment. You can cancel or change your plan anytime.
          </Text>
        </VStack>
      </Box>
    </AbsoluteCenter>
  );
};

export default SubscriptionOptions;
