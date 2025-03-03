import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  name: string;
  image_url: string;
  brand: string;
  quantity: number;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fat: number;
}

const ProductCard = ({
  name,
  image_url,
  brand,
  quantity,
  calories,
  proteins,
  carbohydrates,
  fat,
}: Props) => {
  return (
    <Card.Root overflow="hidden" bg="grey" m={3} borderRadius={20}>
      <Image height="220px" fit="initial" src={image_url} alt={name} />
      <Card.Body gap="2">
        <Card.Title>{name}</Card.Title>
        <Box display='flex' justifyContent='space-between'>
          <Text>{brand}</Text>
          <Badge>{quantity}</Badge>
        </Box>
        <HStack justifyContent="space-between">
          <Box>
            <Text fontSize="14px">Kalorie</Text>
            <Badge colorPalette="white" fontSize="14px" marginY="4px">
              {calories}
            </Badge>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="14px">Białko</Text>
            <Badge colorPalette="green" fontSize="14px" marginY="4px">
              {proteins}
            </Badge>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="14px">Węglowodany</Text>
            <Badge colorPalette="blue" fontSize="14px" marginY="4px">
              {carbohydrates}
            </Badge>
          </Box>
          <Box>
            <Text fontSize="14px">Tłuszcze</Text>
            <Badge colorPalette="orange" fontSize="14px" marginY="4px">
              {fat}
            </Badge>
          </Box>
        </HStack>
      </Card.Body>
      <Card.Footer display="flex" justifyContent="space-around">
        <Button variant="solid">Add to Recipe</Button>
        <Button variant="solid">Check details</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
