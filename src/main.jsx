import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { actions } from "@actions";
import { ErrorPage } from "@components";
import { loaders } from "@loaders";
import { App, Contact, IndexRoute } from "@routes";

import "./index.css";
import { EditContact } from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: loaders.contactsLoader,
    action: actions.createContact,
    children: [
      {
        index: true,
        element: <IndexRoute />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: loaders.contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: loaders.contactLoader,
        action: actions.updateContact,
      },
      {
        path: "contacts/:contactId/destroy",
        action: actions.deleteContact,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
