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
    loader: loaders.contactsLoader,
    action: actions.createContact,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <IndexRoute />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: loaders.contactLoader,
            action: actions.highlightContact,
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
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
