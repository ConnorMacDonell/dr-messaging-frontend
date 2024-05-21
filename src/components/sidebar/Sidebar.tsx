import { SidebarItems } from "../../entities/SidebarItem";
import SidebarMobile from "./SidebarMobile";
import SidebarDesktop from "./SidebarDesktop";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useSidebar } from "../../providers/SideBarProvider";
import logo from "../../assets/hermes-staff.jpeg";

const Sidebar = () => {
  const { isOpen, onClose } = useSidebar();
  return (
    <>
      <VStack
        spacing="5"
        as="nav"
        display={{ base: "none", md: "flex" }}
        width="100%"
        height="100%">
        <Image src={logo} boxSize="60px" objectFit="cover" borderRadius={2} />
        <SidebarDesktop sidebarItems={SidebarItems} />
      </VStack>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>BOILERPLATE</DrawerHeader>
          <DrawerBody>
            <SidebarMobile sidebarItems={SidebarItems} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
