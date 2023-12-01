import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import {  Text } from '@chakra-ui/react';

const BasicDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [addressSection, setAddressSection] = React.useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  
  return (
    <Stack>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>First name:</FormLabel>
          <Input
            type="text"
            placeholder="Your first name"
            value={resumeInfo.profile.firstname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                firstname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last name:</FormLabel>
          <Input
            type="text"
            placeholder="Your last name"
            value={resumeInfo.profile.lastname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                lastname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number:</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+" color="blue.600" />
            <Input
              type="tel"
              placeholder="phone number"
              maxLength={10}
              pattern="[0-9]{10}"
              value={resumeInfo.profile.phone}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.profile,
                  phone: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  profile: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Email address:</FormLabel>
          <Input
            type="email"
            placeholder="Your email address"
            value={resumeInfo.profile.email}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                email: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          <FormHelperText>
            Enter email address to get contacted for jobs
          </FormHelperText>
        </FormControl>


        <FormControl>
          <FormLabel>Language</FormLabel> 
          <Input
            type="text"
            placeholder="English/German"
            value={resumeInfo.profile.lang}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                lang: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>        
       
        
        <FormControl>
          <FormLabel>Date of Birth</FormLabel> 
          <Input
            type="date"
            placeholder="dd-mm-yyyy"
            value={resumeInfo.profile.birth}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                birth: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>

        <FormControl>


<FormLabel>Place of Birth / Geburtsort:</FormLabel> 
<Input
  type="text"
  placeholder="Place of Birth / Geburtsort:"
  value={resumeInfo.profile.pob}
  onChange={(e) => {
    const updateValue = {
      ...resumeInfo.profile,
      pob: e.target.value,
    };
    const updateResumeInfo = { ...resumeInfo, profile: updateValue };
    setResumeInfo(updateResumeInfo);
  }}
/>

</FormControl>

        <FormControl>
          <FormLabel>Passport Number / Reisepassnummer:</FormLabel> 
          <Input
            type="text"
            placeholder="Passport Number / Reisepassnummer:"
            value={resumeInfo.profile.pass}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                pass: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>
        <FormControl>
          <FormLabel>Marital Status/ Familienstand:</FormLabel> 
          <Input
            type="text"
            placeholder="Marital Status/ Familienstand:"
            value={resumeInfo.profile.mari}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                mari: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>
        <FormControl>
          <FormLabel>Computer skills / Computerkenntnisse:</FormLabel> 
          <Input
            type="text"
            placeholder="Computer skills / Computerkenntnisse:"
            value={resumeInfo.profile.CS}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                CS: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>
        <FormControl>
          <FormLabel>Hobbies / Hobbies:</FormLabel> 
          <Input
            type="text"
            placeholder="Hobbies / Hobbies:"
            value={resumeInfo.profile.hobbi}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                hobbi: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          
        </FormControl>
     
        <FormControl>
          <FormLabel>Profile-pic</FormLabel>
        
          <Input
          type="file"
          onChange={handleFileChange}
          colorScheme="#00b0ff"
          w="100%"
          rightIcon={<AddIcon />}
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}



        </FormControl>

        <FormControl >
          <FormLabel>Address: </FormLabel>
          <Input
            type="text"
            placeholder="city, country"
            value={resumeInfo.profile.address}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.profile,
                address: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, profile: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>
      </SimpleGrid>
    
      <Center mt={8}>
        <Button
          color="#00b0ff"
          onClick={() => {
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </Center>
    </Stack>
  );
};

export default BasicDetails;
