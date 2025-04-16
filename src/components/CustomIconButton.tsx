import { IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CustomIconButton = ({ children }: Props) => {
  return (
    <IconButton
      variant="surface"
      colorPalette="gray"
      borderColor="border.emphasized"
      size="lg"
    >
      {children}
    </IconButton>
  );
};

export default CustomIconButton;
