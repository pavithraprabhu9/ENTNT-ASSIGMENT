import React from "react";
import * as Icons from "react-icons/tb";

// Navigation Items
const navigation = [
  // Dashboard
  {
    name: "Dashboard",
    url: "/",
    icon: <Icons.TbLayout className="menu_icon" />,
  },
  // Catalog
  {
    name: "Catalog",
    icon: <Icons.TbBuildingWarehouse className="menu_icon" />,
    url: "/catalog",
    subMenu: [
      // Products
      {
        name: "Products",
        url: "/product/manage",
        icon: <Icons.TbGardenCart className="menu_icon" />,
      },
      {
        name: "add Product",
        url: "/product/add",
        icon: <Icons.TbCirclePlus className="menu_icon" />,
      },
      // Categories
      {
        name: "Categories",
        url: "/categories/manage",  
        icon: <Icons.TbCategory className="menu_icon" />,
      },
      // Attributes
      {
        name: "Attributes",
        url: "/product/attribute",
        icon: <Icons.TbCalendar className="menu_icon" />,
      },
    ],
  },
  // Orders
  {
    name: "Orders",
    url: "/orders",
    icon: <Icons.TbChecklist className="menu_icon" />,
    subMenu:[
      {
        name: "Manage Order",
        url: "/manage",
        icon: <Icons.TbList className="menu_icon" />,
      },
      {
        name: "add Order",
        url: "/add",
        icon: <Icons.TbCirclePlus className="menu_icon" />,
      },
    ]
  },
  // Customers
  {
    name: "Customers",
    url: "/customers",
    icon: <Icons.TbUsers className="menu_icon" />,
    subMenu:[
      {
        name: "Manage Customers",
        url: "/manage",
        icon: <Icons.TbList className="menu_icon" />,
      },
      {
        name: "add Customers",
        url: "/add",
        icon: <Icons.TbCirclePlus className="menu_icon" />,
      },
    ]
  },
 
 

];

export default navigation;