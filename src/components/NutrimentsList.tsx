import Nutriments from "@/entities/Nutriments";
import { Badge, Box, Text } from "@chakra-ui/react";

interface Props {
  nutriments: Nutriments;
}

const NutrimentsList = ({ nutriments }: Props) => {
  return (
    <>
      <Box>
        <Text fontSize="14px">Kalorie</Text>
        <Badge color="gray.solid" fontSize="14px" marginY="4px">
          {nutriments["energy-kcal"]?.toFixed(0)}
        </Badge>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="14px">Białko</Text>
        <Badge
          color="green.fg"
          fontSize="14px"
          marginY="4px"
        >
          {nutriments.proteins?.toFixed(1)}
        </Badge>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="14px">Węglowodany</Text>
        <Badge color="blue.fg" fontSize="14px" marginY="4px">
          {nutriments.carbohydrates?.toFixed(1)}
        </Badge>
      </Box>
      <Box>
        <Text fontSize="14px">Tłuszcze</Text>
        <Badge
          color="red.fg"
          fontSize="14px"
          marginY="4px"
        >
          {nutriments.fat?.toFixed(1)}
        </Badge>
      </Box>
    </>
  );
};

export default NutrimentsList;
