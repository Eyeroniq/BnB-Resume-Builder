import { PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  StackDivider,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ReactToPrint from "react-to-print";

const ResumeTemplate = (props) => {
  const { resumeInfo, page } = props;

  const ref = React.useRef(null);

  return (
    <Box
    p={8}
    borderRadius="3g"
    bg="white"
    color="gray.900"
    boxShadow="xl"
    rounded="md"
    border="2px solid #e2e8f0"
    width="100%"  
    height="100%"
  >
      <Stack spacing={4} ref={ref} m={6} fontFamily="sans-serif">
        <Stack spacing={1}>
          <Center>
            <Heading as="h1">
              {resumeInfo.profile.firstname} {resumeInfo.profile.lastname}
            </Heading>
          </Center>
          <Center>
            <HStack
              justify="center"
              wrap="wrap"
              divider={<StackDivider borderColor="gray.500" />}
            >
              {resumeInfo.profile.email.length ? (
                <Link
                  href={resumeInfo.profile.email}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  {resumeInfo.profile.email}{" "}
                </Link>
              ) : null}
              
              {resumeInfo.profile.github.length ? (
                <Link
                  href={resumeInfo.profile.github}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Github{" "}
                </Link>
              ) : null}
              {resumeInfo.profile.website.length ? (
                <Link
                  href={resumeInfo.profile.website}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Portfolio{" "}
                </Link>
              ) : null}
            </HStack>
          </Center>
          <HStack justify="center">
            <address>
              <PhoneIcon /> {resumeInfo.profile.phone} &nbsp;
              {resumeInfo.profile.address}
            </address>
          </HStack>
        </Stack>


        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
          PERSONAL DATA/ PERSÖNLICHE ANGABEN
          </Heading>
        
          <Text>Language: {resumeInfo.profile.lang}</Text>
          <Text>Birthdate / Geburtsdatum: {resumeInfo.profile.birth}</Text>
            <Text>	Place of Birth / Geburtsort:  {resumeInfo.profile.pob} </Text>
          	<Text>Passport Number / Reisepassnummer: {resumeInfo.profile.pass} </Text>                                          
          	<Text>Marital Status/ Familienstand: {resumeInfo.profile.mari}</Text>
          	<Text>Computer skills / Computerkenntnisse:{resumeInfo.profile.CS}</Text>
              <Text>Hobbies / Hobbies: {resumeInfo.profile.hobbi}</Text> 
             <Text>Address:  {resumeInfo.profile.address}</Text> {resumeInfo.profile.address}
      
        </VStack>
       

       
       
          
        














       

<VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
          EDUCATIONAL QUALIFICATION / SCHULISCHE QUALIFIKATION
          
          </Heading>
        
          <Text>{resumeInfo.edu.grad}</Text>
          <Text>{resumeInfo.edu.city1}</Text>
          <Text>{resumeInfo.edu.to1}</Text>
          <Text>{resumeInfo.edu.from1}</Text>

          
          <Text>{resumeInfo.edu.quali}</Text>
          <Text>{resumeInfo.edu.city2}</Text>
          <Text>{resumeInfo.edu.to2}</Text>
          <Text>{resumeInfo.edu.from2}</Text>

          <Text>Qualification:- </Text>
          <Text>{resumeInfo.edu.city3}</Text>
          <Text>{resumeInfo.edu.to3}</Text>
          <Text>{resumeInfo.edu.from3}</Text>

          <Text>Qualification:- </Text>
          <Text>{resumeInfo.edu.city4}</Text>
          <Text>{resumeInfo.edu.to4}</Text>
          <Text>{resumeInfo.edu.from4}</Text>

          <Text>Qualification:- </Text>
          <Text>{resumeInfo.edu.city5}</Text>
          <Text>{resumeInfo.edu.to5}</Text>
          <Text>{resumeInfo.edu.from5}</Text>
         

        

</VStack>
       

       
        {resumeInfo.Edu.work.length ? (
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              WORK EXPERIENCE
            </Heading>
            {resumeInfo.Edu.work.map((w, i) => {
              return (
                <VStack align="stretch" key={i}>
                  <HStack justify="space-between" align="baseline">
                    <VStack align="stretch">
                      <Heading as="h5" fontSize="lg">
                        {w.jobTitle}
                      </Heading>
                      <Heading as="h5" fontSize="md">
                        {w.company}
                      </Heading>
                    </VStack>
                    <Heading as="h6" fontSize="md">
                      {w.startDate} &#8212; {w.endDate}
                    </Heading>
                  </HStack>
                  <UnorderedList px="20px">
                    {w.jobDetails.split("\n").map((d, i) => {
                      return d.length ? <ListItem key={i}>{d}</ListItem> : null;
                    })}
                  </UnorderedList>
                </VStack>
              );
            })}
          </VStack>
         ) : null}
















       <VStack spacing={4} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
          WORK EXPERIENCE / ARBEITSERFAHRUNG
          </Heading>
          {resumeInfo.education.map((e, i) => {
            return (
              <HStack justify="space-between" align="baseline" key={i}>
                <VStack align="stretch">
                  <Heading as="h5" fontSize="lg">
                    {e.course}
                  </Heading>
                  <Heading as="h5" fontSize="md">
                    {e.college}
                  </Heading>
                </VStack>
                <Heading as="h6" fontSize="md">
                  {e.startDate} &#8212; {e.endDate}
                </Heading>
              </HStack>
            );
          })}
        </VStack>
        {resumeInfo.certification.length ? (
          <VStack spacing={4} align="stretch">
            <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
              CERTIFICATIONS
            </Heading>
            {resumeInfo.certification.map((c, i) => {
              return (
                <VStack align="stretch" key={i}>
                  <Heading as="h5" fontSize="lg">
                    {c.link}
                  </Heading>
                  <Text>{c.details}</Text>
                </VStack>
              );
            })}
          </VStack>
        ) : null}



      </Stack>
      <HStack divider={<StackDivider />} pt="24px">
        <Button
          w="max-content"
          colorScheme="messenger"
          isDisabled={page !== 4}
          onClick={() => {
            window.location.reload();
          }}
        >
          Create New
        </Button>
        <div>
          <ReactToPrint
            trigger={() => (
              <Button
                colorScheme="messenger"
                w="max-content"
                isDisabled={page !== 4}
              >
                View
              </Button>
            )}
            content={() => ref.current}
          />
        </div>
      </HStack>
      </Box>
  );
};

export default ResumeTemplate;
