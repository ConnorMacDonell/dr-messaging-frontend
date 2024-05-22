import { IconType } from "react-icons";
import { FaArrowRightFromBracket, FaRegMessage, FaRegPaperPlane, FaUser } from "react-icons/fa6";

export interface SidebarItem {
  icon: IconType;
  label: string;
  linkTo: string;
  group: string;
}

export interface SidebarItemProps {
  sidebarItems: SidebarItem[][];
}

export const SidebarItems = [[
  {
    icon: FaRegPaperPlane,
    label: "Send Messages",
    linkTo: "/send_message",
    group: ""
  },
  {
    icon: FaRegMessage,
    label: "Create Messages",
    linkTo: "/create_message",
    group: ""
  },
],
[
  {
    icon: FaUser,
    label: "User Settings",
    linkTo: "/user_settings",
    group: "bottom"
  },
  {
    icon: FaArrowRightFromBracket,
    label: "Logout",
    linkTo: "/",
    group: "bottom"
  }
]];