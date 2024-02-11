import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { actions } from "@actions";
import { ErrorPage } from "@components";
import { loaders } from "@loaders";
import { App, Contact } from "@routes";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: loaders.contactsLoader,
    action: actions.createContact,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: loaders.contactLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
