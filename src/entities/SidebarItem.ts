import { IconType } from "react-icons";
import { FaArrowRightFromBracket, FaGauge, FaGear, FaLocationCrosshairs, FaSnowflake, FaUser } from "react-icons/fa6";

export interface SidebarItem {
  icon: IconType;
  label: string;
  linkTo: string;
  group: string;
}

export interface SidebarItemProps {
  sidebarItems: SidebarItem[];
}

export const SidebarItems = [
  {
    icon: FaGauge,
    label: "Dashboard",
    linkTo: "/Dashboard",
    group: ""
  },
  {
    icon: FaSnowflake,
    label: "Forecast",
    linkTo: "/Forecast",
    group: ""
  },
  {
    icon: FaLocationCrosshairs,
    label: "Location",
    linkTo: "/Location",
    group: ""
  },
  {
    icon: FaUser,
    label: "User Settings",
    linkTo: "/Settings",
    group: "bottom"
  },
  {
    icon: FaArrowRightFromBracket,
    label: "Logout",
    linkTo: "/Logout",
    group: "bottom"
  }
];