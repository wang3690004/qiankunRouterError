import Content from "@/views/Content";

import General from "@/views/General";

export const asyncRouterMap = [
  {
    path: "/",
    component: Content,
    redirect: "/general",
    meta: { title: "首页", icon: "" },
    children: [
      {
        path: "/general",
        name: "general",
        component: General,
        meta: { title: "概览", icon: "gailan" },
      },
    ],
  },
];
