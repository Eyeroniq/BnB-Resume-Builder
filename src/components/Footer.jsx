import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack p={3} bg="gray.900" justify="center"  w='100%' bottom={0}>
      <Text color="white">
        Designed and developed by {" "}
        <Link href="bnb" isExternal color="cyan.200">
          BnB Developers <ExternalLinkIcon />
        </Link>{" "}
      </Text>
    </HStack>
  );
};

export default Footer;
