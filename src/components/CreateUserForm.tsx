import { Box, Button, Center, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../entities/User";

const CreateUserForm = () => {
  const { register, handleSubmit } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) =>
    console.log(JSON.stringify(data));

  return (
    <>
      <Center>
        <Box width="33vw">
          Signup
          <form onSubmit={handleSubmit(onSubmit)}>
            <label></label>
            <Input
              {...register("firstName")}
              name="firstName"
              placeholder="First Name"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              {...register("lastName")}
              name="lastName"
              placeholder="Last Name"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              type="email"
              {...register("email")}
              name="email"
              placeholder="Email"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Input
              {...register("password")}
              name="password"
              placeholder="Password"
              variant="filled"
              borderRadius={4}
              marginBottom={3}></Input>
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default CreateUserForm;
