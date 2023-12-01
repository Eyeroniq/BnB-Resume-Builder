// RegistrationPage.js
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
} from '@chakra-ui/react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    termsAccepted: false,
    favoriteFood: '', // Keep the favoriteFood field
  });

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Simulate registration process (send data to backend, receive confirmation, etc.)
    console.log('Simulating registration process:', formData);

    // Set registrationComplete to true for demo purposes
    setRegistrationComplete(true);
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="#00b0ff">
        <Heading mb={4} textAlign="center" color="white">
          Registration
        </Heading>
        {registrationComplete ? (
          <Box color="white" textAlign="center">
            Registration completed! Check your email for confirmation.
          </Box>
        ) : (
          <form onSubmit={handleRegistration}>
            <FormControl mb={4} isRequired>
              <FormLabel color="white">Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel color="white">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel color="white">Favorite Food</FormLabel>
              <Input
                type="text"
                name="favoriteFood"
                value={formData.favoriteFood}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <Stack spacing={4}>
              <Checkbox
                colorScheme="white"
                isChecked={formData.termsAccepted}
                onChange={handleInputChange}
                name="termsAccepted"
              >
                I accept the terms and conditions
              </Checkbox>
              <Button type="submit" colorScheme="blackAlpha" width="100%" isDisabled={!formData.termsAccepted}>
                Register
              </Button>
            </Stack>
          </form>
        )}
      </Box>
    </Flex>
  );
};

export default RegistrationPage;
