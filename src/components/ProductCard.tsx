import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import NutrimentsList from "./NutrimentsList";
import Nutriments from "@/entities/Nutriments";
import noImage from "../images/no-image-placeholder-6f3882e0.webp"

interface Props {
  name: string;
  image_url: string;
  brand: string;
  quantity: number;
  nutriments: Nutriments
}

const ProductCard = ({
  name,
  image_url,
  brand,
  quantity,
  nutriments
}: Props) => {
  return (
    <Card.Root overflow="hidden" bg="grey" borderRadius={20}>
      <Image height="200px" fit="initial" src={image_url ? image_url : noImage} alt={name} />
      <Card.Body p={5}>
        <Card.Title mb={2} fontSize="xl">
          {name}
        </Card.Title>
        <Box display="flex" justifyContent="space-between">
          <Text>{brand}</Text>
          <Badge>{quantity}</Badge>
        </Box>
        <HStack justifyContent="space-between" my={4}>
          <NutrimentsList nutriments={nutriments}/>
        </HStack>
        <Flex justifyContent='space-around' alignItems='center'>
          <Button size='xs' variant="surface">Add to Recipe</Button>
          <Button size='xs' variant="surface">Check details</Button>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCard;
