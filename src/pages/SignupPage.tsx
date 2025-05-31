// src/pages/SignupPage.tsx
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import SubscriptionOptions from "../components/SubscriptionOptions";
import { User } from "../entities/User";

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<User | null>(null);

  const handleFormSubmit = (data: User) => {
    setUserData(data);
    setCurrentStep(2);
  };

  return (
    <Box height="100vh" width="100vw" overflow="auto">
      {currentStep === 1 && <CreateUserForm onFormSubmit={handleFormSubmit} />}

      {currentStep === 2 && userData && (
        <SubscriptionOptions userData={userData} />
      )}
    </Box>
  );
};

export default SignupPage;
