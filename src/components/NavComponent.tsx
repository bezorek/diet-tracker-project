import { Box, DrawerRoot, DrawerContent } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import MenuContent from "./MenuContent";
import MobileNav from "./MobileNav";

interface NavComponentProps{
  children: ReactNode;
}

const NavComponent = ({children}: NavComponentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <MenuContent
        onClose={() => setOpen(false)}
        display={{ base: "none", md: "block" }}
      />
      <DrawerRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="start"
        size="full"
      >
        <DrawerContent>
          <MenuContent onClose={() => setOpen(false)} />
        </DrawerContent>
      </DrawerRoot>
      {/* mobile  nav */}
      <MobileNav
        onOpen={() => setOpen(true)}
        display={{ base: "flex", md: "none" }}
      />
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default NavComponent;
