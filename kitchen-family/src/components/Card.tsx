import { Badge, Card, Flex, IconButton, Image, Link, Stack, Text } from "@chakra-ui/react"
import { LuExternalLink } from "react-icons/lu";
// import { GrDescend } from "react-icons/gr";
import { RxLapTimer } from "react-icons/rx";

const categoryColors: Record<string, string> = {
  Traditionnel: "yellow",
  Végétarien: "green",
  Halal: "orange",
  Vegan: "teal",
};

type RecipeCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  duringTime: string;
  categories: string[];
};

const ResumeCard = ({
  title,
  description,
  duringTime,
  imageUrl,
  categories,
}: RecipeCardProps) => {
  return (
    <Card.Root w={{ base: "100%", sm: "300px", md: "40rem" }} maxW="sm" overflow="hidden" boxShadow="1px 1px 10px grey" >
      <Image
        src={imageUrl}
        alt="Green double couch with wooden legs"
        h="10rem"
      />
      <Card.Body gap="2">
        <Card.Title fontSize="1.5rem" textAlign="Center">{title}</Card.Title>
        <Flex justify="space-between" >
            <Flex align="center" justify="center">
              <IconButton aria-label="timer" bg="none" color="black" p={0} _hover={{bg:"none", color:"black"}} >     
                <RxLapTimer />        
              </IconButton>
              <Text textStyle="ms" fontWeight="medium" letterSpacing="tight">
                {duringTime}
              </Text>
            </Flex>
            <Stack direction="row" py="0.8rem">
                {categories.map((category) =>(
                    <Badge px="0.5rem" color={category === "Végétarien" ? "white" : "black"} key={category} bg={categoryColors[category]} colorScheme={categoryColors[category]}>
                        {category}
                    </Badge>
                ))}
            </Stack>
        </Flex>
        <Card.Description textAlign={{base: "justify", sm: "center", md: "center"}}>
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Link href="#" ml="auto">
          Voir la recette <LuExternalLink />
        </Link>
      </Card.Footer>
    </Card.Root>
  )
}

export default ResumeCard