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
import noImage from "../images/no-image-placeholder-6f3882e0.webp";

interface Props {
  name: string;
  image_url: string;
  brand: string;
  quantity: string;
  nutriments: Nutriments;
}

const ProductCard = ({
  name,
  image_url,
  brand,
  quantity,
  nutriments,
}: Props) => {
  return (
    <Card.Root
      overflow="hidden"
      bg="bg.emphasized"
      borderRadius={20}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
      }}
    >
      <Image
        height="200px"
        fit="initial"
        src={image_url ? image_url : noImage}
        alt={name}
      />
      <Card.Body>
        <Card.Title mb={2} fontSize="lg">
          {name}
        </Card.Title>
        <Flex justifyContent="space-between">
          <Text>{brand}</Text>
          <Badge fontSize={12} rounded="full" px={2} py={1}>
            {quantity}
          </Badge>
        </Flex>
        <HStack justifyContent="space-between" my={4}>
          <NutrimentsList nutriments={nutriments} />
        </HStack>
        <Flex justifyContent="space-around" alignItems="center">
          <Button size="sm" variant="subtle" colorPalette="teal">
            Add to Recipe
          </Button>
          <Button size="sm" variant="subtle" colorPalette="blue">
            Check details
          </Button>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCard;
