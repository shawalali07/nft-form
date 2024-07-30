import { HomePage } from "../pages/HomePage";
import { Layout } from "../layout/Layout";
import { NFTPage } from "../pages/NFTPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add/nft",
        element: <NFTPage />,
      },
    ],
  },
];
