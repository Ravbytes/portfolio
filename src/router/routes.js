import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About Us",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/products",
    name: "Our Products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/services",
    name: "Our Services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/SingleProduct.vue"),
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: () => import("../views/SingleBlog.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: () => import("../views/errors/404.vue"),
  },
];

export default routes;
