import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Center,
  Heading,
  Progress,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react"; 
import BasicDetails from "./BasicDetailsForm";
import EducationDetails from "./Declaration";
import ResumeTemplate from "./ResumeTemplate";
import PersonalDetails from "./Education";
import Educ from "./workExp";

const ResumeForm = () => {
  const [page, setPage] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 798px)");

  const initialState = {
    profile: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      website: "",
      address: "",
      lang:"",
      birth:"",
     pod:"",
      pass :"",                                       
      mari:"",
     CS:"",
     hobbi:""

    },
    edu: {
      city1:"",
      city2:"",
      city3:"",
      city4:"",
      city5:"",
      to1:"",
      from1:"",
      to2:"",
      from2:"",
      to3:"",
      from3:"",
      to4:"",
      from4:"",
      to5:"",
      from5:"",
      quali:"",
      grad:"",
      summary: "",
      skills: "",
      work: [],
    },
    personal: {
      birthday: "",
      placesOf: "",
      passport:"",
      maritial:"",
      gender:"",
      computerSkills:"",
      hobbies:"",
      summary: "",
      skills: "",
      work: [],
    },
    Edu: {
      summary: "",
      skills: "",
      work: [],
    },
    
    education: [],
    certification: [],
  };

  const [resumeInfo, setResumeInfo] = useState(initialState);

  const formPage = [
    "PERSONAL DATA/ PERSÖNLICHE ANGABEN",
    "EDUCATIONAL QUALIFICATION / SCHULISCHE QUALIFIKATION",
    "WORK EXPERIENCE / ARBEITSERFAHRUNG",
    "DECLARATION /  ERKLÄRUNG",
  ];

  const renderForm = () => {
   
    switch (page) {
      case 0:
        return (
          <BasicDetails
            resumeInfo={resumeInfo}
            setResumeInfo={setResumeInfo}
            setPage={setPage}
          />
        );

        case 1:
          return (
            <PersonalDetails
              resumeInfo={resumeInfo}
              setResumeInfo={setResumeInfo}
              setPage={setPage}
            />
          );
     
          case 2:
            return (
              <Educ
                resumeInfo={resumeInfo}
                setResumeInfo={setResumeInfo}
                setPage={setPage}
              />
            );
           
             


          case 3:
            return (
              <EducationDetails
                resumeInfo={resumeInfo}
                setResumeInfo={setResumeInfo}
                setPage={setPage}
              />
            );

    
    
       
      default:
        return;
    }
  };

  return (
    <Stack mb="50px">
      <Center
        style={{ display: page === 4 ? "none" : "flex" }}
        w="100%"
        px="12px"
        flexDir="column"
      >
        <Heading p={4}>
          Build Your Resume <EditIcon boxSize={8} />
        </Heading>
        <Box w="60%" borderRadius="lg">
          <Progress
            color="#00b0ff"
            value={page === 0 ? 33.3 : page === 1 ? 66.6 : 100}
          />
        </Box>
      </Center>
      {isMobile ? (
        <HStack p={4} spacing={3} justify="center">
          <VStack
            justify="center"
            spacing={4}
            width="90%"
            style={{ display: page === 4 ? "none" : "block" }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="white"
              color="gray.900te"
              boxShadow="xl"
              rounded="md"
            >
              <Center>
                <Heading mb={4}>{formPage[page]}</Heading>
              </Center>
              {renderForm()}
            </Box>
          </VStack>
          <VStack style={{ display: page === 4 ? "block" : "none" }}>
            <ResumeTemplate resumeInfo={resumeInfo} page={page} />
          </VStack>
        </HStack>
      ) : (
        <HStack p={4} spacing={3} align="stretch" justify="center">
          <VStack
            justify="center"
            spacing={4}
            width="50%"
            style={{ display: page === 4 ? "none" : "block" }}
          >
            <Box
              p={8}
              borderRadius="lg"
              bg="white"
              color="gray.900"
              boxShadow="xl"
              rounded="md"
              border="2px solid #e2e8f0"
            >
              <Center>
                <Heading mb={4}>{formPage[page]}</Heading>
              </Center>
              {renderForm()}
            </Box>
          </VStack>
          <VStack style={{ width: page === 4 ? "80%" : "50%" }}>
            <ResumeTemplate resumeInfo={resumeInfo} page={page} />
          </VStack>
        </HStack>
      )}
    </Stack>
  );
};

export default ResumeForm;
