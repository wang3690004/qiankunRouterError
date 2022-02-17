import Content from "@/views/Content";
import General from "@/views/General";

export const asyncRouteMap = [
  {
    path: "/",
    name: "Content",
    component: Content,
    meta: { title: "", icon: "",  },
    children: [
      {
        path: "/usergeneral",
        name: "general",
        component: General,
      },
    ],
  },
];
