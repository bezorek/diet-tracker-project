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
        <Badge colorPalette="white" fontSize="14px" marginY="4px">
          {nutriments["energy-kcal"]}
        </Badge>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="14px">Białko</Text>
        <Badge colorPalette="green" fontSize="14px" marginY="4px">
          {nutriments.proteins}
        </Badge>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="14px">Węglowodany</Text>
        <Badge colorPalette="blue" fontSize="14px" marginY="4px">
          {nutriments.carbohydrates}
        </Badge>
      </Box>
      <Box>
        <Text fontSize="14px">Tłuszcze</Text>
        <Badge colorPalette="orange" fontSize="14px" marginY="4px">
          {nutriments.fat}
        </Badge>
      </Box>
    </>
  );
};

export default NutrimentsList;
