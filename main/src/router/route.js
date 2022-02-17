import Content from "@/views/layout/Content";
import ContentMinify from "@/views/layout/ContentMinify";

export const asyncRouterMap = [
  {
    path: "/",
    name: "ContentMinify",
    component: ContentMinify,
    meta: { title: "首页", icon: "",  },
    redirect: "/app/",
    children: [
      {
        path: "/app/",
        name: "app",
        component: Content,
        // redirect: "/app/cmdb/",
        meta: { title: "首页", icon: "",  },
        children: [
          {
            path: "cmdb/*",
            name: "cmdb",
            meta: { title: "CMDB", icon: "", permission: ["ADMIN", "STAFF"] },
          },
          {
            path: "auth/*",
            name: "auth",
            meta: { title: "AUTH", icon: "", permission: ["ADMIN", "STAFF"] },
          },
        ],
      },
    ],
  },
];
