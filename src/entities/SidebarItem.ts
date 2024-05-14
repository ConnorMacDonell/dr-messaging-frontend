import { IconType } from "react-icons";
import { FaGauge, FaGear, FaLocationCrosshairs, FaSnowflake } from "react-icons/fa6";

export interface SidebarItem {
  icon: IconType;
  label: string;
  linkTo: string;
}

export interface SidebarItemProps {
  sidebarItems: SidebarItem[];
}

export const SidebarItems = [
  {
    icon: FaGauge,
    label: "Dashboard",
    linkTo: "/Dashboard"
  },
  {
    icon: FaSnowflake,
    label: "Forecast",
    linkTo: "/Forecast"
  },
  {
    icon: FaLocationCrosshairs,
    label: "Location",
    linkTo: "/Location"
  },
  {
    icon: FaGear,
    label: "Settings",
    linkTo: "/Settings"
  },
];