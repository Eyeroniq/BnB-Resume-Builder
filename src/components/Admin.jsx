import React from 'react';
import { ChakraProvider, Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';

const students = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Smith' },
  { id: 5, name: 'Eve Davis' },
  { id: 6, name: 'Even Danel' },
  { id: 7, name: 'Ete Davis' },
];

const Admin = () => {
  return (
    <ChakraProvider>
    
        <Box textAlign="center" p="8" marginBottom={'4%'}>
          <Heading mb="4">Registered Students</Heading>
          <Table variant="simple">
            <Thead>
              <Tr bg="#00b0ff" >
                <Th color="White">Name</Th>
                <Th color="White">View</Th>
                <Th color="White">status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => (
                <Tr key={student.id}>
                  <Td bg="white" color="black">
                    {student.name}
                  </Td>
                  <Td>
                    <Link to={`/view/${student.id}`} color="#00b0ff">
                      View
                    </Link>
                  </Td>
                  <Td>
                  <Link to={`/view/${student.id}`} color="#00b0ff">
                      Waiting to aprrove
                    </Link>

                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
    
    </ChakraProvider>
  );
};

export default Admin;
