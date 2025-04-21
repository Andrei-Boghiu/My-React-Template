import { SidebarConfig } from "../../types";

const config: { [key: string]: SidebarConfig[] } = {
  customer: [
    { route: "/", name: "Home" },
    { route: "/orders", name: "Orders" },
  ],
  admin: [
    { route: "/", name: "Home" },
    { route: "/sales", name: "Sales" },
  ],
};

export default config;
