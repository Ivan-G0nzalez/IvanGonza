import NotFoundPage from "~/pages/NoFound";
import Hero from "~/pages/Home";
import Generic from "~/Layouts/Generic";

const routes = [
  {
    path: "/",
    element: <Generic />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "home",
        element: <Hero />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
