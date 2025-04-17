import {
  Box,
  Card,
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card.Root borderRadius={20} overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText  noOfLines={4} mb={2}/>
        <Flex justifyContent="space-around" alignItems="center" mt={6}>
          <Skeleton height="36px" width="114px" borderRadius="md" />
          <Skeleton height="36px" width="114px" borderRadius="md" />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCardSkeleton;
