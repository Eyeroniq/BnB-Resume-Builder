import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Select,
  Input,
  SimpleGrid,
  extendTheme,
  Stack,
  Textarea,
  Text,
} from "@chakra-ui/react";
import React , { useState } from "react";

const theme = extendTheme({
    components: {
      Input: {
        baseStyle: {
          _focus: {
            boxShadow: 'none',
          },
        },
        variants: {
          whatsapp: {
            border: '1px solid green.500',
            _hover: {
              borderColor: 'green.600',
            },
            _active: {
              borderColor: 'green.700',
            },
          },
        },
      },
    },
  });
 
const PersonalDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;
const [workSection, setWorkSection] = React.useState([]);
const [workData, setWorkData] = React.useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDetails: "",
  });
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const [printedData, setPrintedData] = useState("");
  
  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x.trim() === "");
    if (isEmpty) return;
    const duplicate = () => {
      let arr = resumeInfo.professional.work;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(workData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updatedValue = {
      ...resumeInfo.personal,
      work: resumeInfo.personal.work.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      personal: updatedValue,
    };
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  const createWorkSection = () => {
    setWorkSection(workSection.concat(workExperienceForm()));
  };
  const handlePrint = () => {
    // Generate the string to be displayed based on the selected values
    const printedText = `Program: ${selectedProgram}, Qualification: ${selectedQualification}`;
    setPrintedData(printedText);
  };
  const [selectedFile, setSelectedFile] = useState(null);
      
  const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

  const workExperienceForm = () => {
    return (
      <SimpleGrid spacing={4} columns={[1, 1, 1, 2]} key={workSection.length} placeItems="center">
         
      
        
        
        
        
        
        
        
        
        <FormControl>
          <FormLabel>Job Title: </FormLabel>
          <Input
            type="text"
            placeholder="Software developer"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, jobTitle: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company/Employer: </FormLabel>
          <Input
            type="text"
            placeholder="Employer(Company) name"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, company: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date: </FormLabel>
          <Input
            type="text"
            placeholder="Enter start date jan 2022"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, startDate: e.target.value }));
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>End date: </FormLabel>
          <Input
            type="text"
            placeholder="Enter end date jan 2023"
            onChange={(e) => {
              setWorkData((prev) => ({ ...prev, endDate: e.target.value }));
            }}
          />
          <FormHelperText>write present if ongoing</FormHelperText>
        </FormControl>
        <GridItem colSpan={[1, 1, 1, 2]}>
          <FormControl>
            <FormLabel>JOb Details:</FormLabel>
            <Textarea
              placeholder="Describe your role and achievements"
              onChange={(e) => {
                setWorkData((prev) => ({
                  ...prev,
                  jobDetails: e.target.value,
                }));
              }}
            />
            <FormHelperText>Hit enter for newline</FormHelperText>
          </FormControl>
        </GridItem>
      </SimpleGrid>
    );
  };

  return (
    <Stack>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">


<FormControl>
          <FormLabel>Selection-based field</FormLabel>
          <Select
            placeholder="Select an option"
            onChange={(e) => { setSelectedProgram(e.target.value)
              const updateValue = {
                grad : ` Program: ${selectedProgram}`};
               
                const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
              }}
          >
            <option value="postBSc">Post B.Sc.</option>
            <option value="postGrad">Post Graduation</option>
            <option value="master">Master Program</option>
            <option value="other">Any other course</option>
          </Select>
        </FormControl>


     <FormControl>
    <FormLabel>City, Country/Stadt, Land
</FormLabel>
        <Input
            type="text"
            placeholder="Delhi/India"
            value={resumeInfo.edu.city1}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                city1: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>
      

     <FormControl>
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.from1}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                from1: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>

     <FormControl>
    <FormLabel>To/bis </FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.to1}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                to1: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>
     <Input
          type="file"
          onChange={handleFileChange}
          variant="whatsapp" // Apply the WhatsApp variant
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}
<br/>


     



      


      <FormControl>
          <FormLabel>Selection-based field</FormLabel>
          <Select
            placeholder="Select an option"
            value={resumeInfo.edu.quali}
            onChange={(e) => {setSelectedQualification(e.target.value)
              const updateValue = {
                ...resumeInfo.edu,
                quali : ` Qualification: ${selectedQualification}`};
               
                const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
              }}
          >
            <option value="graduation">Graduation</option>
            <option value="diploma">Diploma</option>
          </Select>
        </FormControl>



  <FormControl>
    <FormLabel>City, Country/Stadt, Land
</FormLabel>
        <Input
            type="text"
            placeholder="Delhi/India"
            value={resumeInfo.edu.city2}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                city2: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>
      

     <FormControl>
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.from2}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                from2: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>

     <FormControl>
    <FormLabel>To/bis </FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.to2}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                to2: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
      </FormControl>
     <Input
          type="file"
          onChange={handleFileChange}
          variant="whatsapp" // Apply the WhatsApp variant
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}
<br/>
     <FormControl>
    <FormLabel>11th to 12th Standard</FormLabel>
       
     </FormControl>




     <FormControl>
    <FormLabel>City, Country/Stadt, Land
</FormLabel>
        <Input
            type="text"
            placeholder="Delhi/India"
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
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
    <FormLabel>To/bis </FormLabel>
    <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.to3}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                to3: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>
    
     <Input
          type="file"
          onChange={handleFileChange}
          variant="whatsapp" // Apply the WhatsApp variant
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}
<br/>

     <FormControl>
    <FormLabel>10th Standard*</FormLabel>
       
     </FormControl>
     



     <FormControl>
    <FormLabel>City, Country/Stadt, Land
</FormLabel>
        <Input
            type="text"
            placeholder="Delhi/India"
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
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
    <FormLabel>To/bis </FormLabel>
    <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.to4}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                to4: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>
     <Input
          type="file"
          onChange={handleFileChange}
          variant="whatsapp" // Apply the WhatsApp variant
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}
<br/>
    
     <FormControl>
    <FormLabel>1st to 9th Standard*</FormLabel>
       
     </FormControl>




     <FormControl>
    <FormLabel>City, Country/Stadt, Land
</FormLabel>
        <Input
            type="text"
            placeholder="Delhi/India"
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
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
    <FormLabel>To/bis </FormLabel>
    <Input
            type="text"
            placeholder="mm/yyyy"
            value={resumeInfo.edu.to5}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                to5: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
     </FormControl>
     <Input
          type="file"
          onChange={handleFileChange}
          variant="whatsapp" // Apply the WhatsApp variant
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}
<br/>
<FormControl>
    <FormLabel>Blank Year(if any)</FormLabel>
</FormControl><br/>
<FormControl>
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
    <FormLabel>To/bis </FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
    <FormLabel>Language Proficiency / Sprachkenntnisse: </FormLabel>
</FormControl><br/>
<FormControl>
    <FormLabel>Mother tongue/ Muttersprache</FormLabel>
        <Input
            type="text"
            placeholder="Mothen tongue"
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
          <FormLabel>English/ Englisch </FormLabel>
          <Select
            placeholder="Select an option"
            onChange={(e) => setSelectedQualification(e.target.value)}
          >
            <option value="graduation">Good/ Gut  </option>
            <option value="diploma">Average/ Durchschnittlich   </option>
            <option value="diploma">Poor /Schlecht </option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>	German / Deutsch</FormLabel>
          <Select
            placeholder="Select an option"
            onChange={(e) => setSelectedQualification(e.target.value)}
          >
            <option value="graduation">A1</option>
            <option value="diploma">A2</option>
            <option value="diploma">B3</option>
            <option value="diploma">B2</option>
          </Select>
        </FormControl><br/>


        <FormControl>
    <FormLabel>German Language Training / Deutsch-Sprachtraining</FormLabel>
       
     </FormControl><br/>




     <FormControl>
    <FormLabel>Current Level -Course/Aktuelles Niveau/Kurs

</FormLabel>
        <Input
            type="text"
            placeholder=" "
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
    <FormLabel>from/von</FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
    <FormLabel>To/bis </FormLabel>
        <Input
            type="text"
            placeholder="mm/yyyy"
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
     <Input
          type="file"
          onChange={handleFileChange}
          variant="whatsapp" // Apply the WhatsApp variant
        />
        {selectedFile && (
          <Text mt={2}>Selected file: {selectedFile.name}</Text>
        )}



      
    
      <HStack spacing={8} justify="center">
        <Button
          colorScheme="blue"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>
        <Button
          color="#00b0ff"
          onClick={() => {
            saveData();
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </HStack>
      </SimpleGrid>
    </Stack>
  );
};

export default PersonalDetails;
