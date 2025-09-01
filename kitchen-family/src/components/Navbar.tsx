import { Box, Flex, Button } from "@chakra-ui/react";
import { IoLogInOutline } from "react-icons/io5";
import { IconButton } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box zIndex="1000" bg="white" position="fixed" top="0" left="0" width="100%" px={4} shadow="0 2px 4px rgba(0, 0, 0, 0.1)">
      <Flex align="center" justify="space-between" >
        <Box fontWeight="bold" color="black" fontSize="xl">
         Kitchen Family
        </Box>
        <Flex gap={4}>
          <Button colorScheme="blue" color="black" background="white" transition="all 0.3s ease"  _hover={{ bg: "blue.focusRing", color:"white", transform: "scale(1.05)" }}>Traditionnel</Button>
          <Button colorScheme="blue" color="black" background="white" transition="all 0.3s ease"  _hover={{ bg: "blue.focusRing", color:"white", transform: "scale(1.05)" }}>Végétarien</Button>
          <Button colorScheme="blue" color="black" background="white" transition="all 0.3s ease"  _hover={{ bg: "blue.focusRing", color:"white", transform: "scale(1.05)" }}>Halal</Button>
        </Flex>
        <Flex>
            <IconButton aria-label="Search database" bg="none" color="black" size="2xl" p={0} transition="all 0.3s ease" _hover={{ border:"none", transform: "scale(2)"}} >
                
                <IoLogInOutline />
                
            </IconButton>
        </Flex>
      </Flex>
    </Box>

  );
}
