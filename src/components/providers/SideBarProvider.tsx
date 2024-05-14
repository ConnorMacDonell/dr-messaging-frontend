import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";
import { useContext } from "react";

export const SidebarContext = createContext<ReturnType<
  typeof useDisclosure
> | null>(null);

export function useSidebar() {
  const sidebar = useContext(SidebarContext);
  if (!sidebar) {
    throw new Error("Cannot use sidebar context outside of SidebarProvider.");
  }
  return { ...(sidebar as ReturnType<typeof useDisclosure>) };
}

export function SidebarProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const disclosure = useDisclosure();
  return (
    <SidebarContext.Provider value={{ ...disclosure }} {...props}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
