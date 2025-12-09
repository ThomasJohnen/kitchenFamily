import { Flex, Heading } from "@chakra-ui/react";

type headingProps = {
    titre: string;
    sousTitre: string;
};

const HeadingComponant = ({
    titre,
    sousTitre,
}: headingProps) => {
    return (
        <Flex direction="column" pt="2rem" pb="2rem">
            <Heading as="h1" fontSize={{base: "2rem", sm: "0.8rem", md:"1.5rem", lg:"2rem"}}>{titre}</Heading>
            {sousTitre && (
                <Heading
                as="h2"
                fontSize={{ base: "1.8rem", sm: "0.6rem", md: "1.3rem", lg: "1.5rem" }}
                color="gray.600"
            >
            {sousTitre}
            </Heading>
            )}
        </Flex>
    )
}

export default HeadingComponant