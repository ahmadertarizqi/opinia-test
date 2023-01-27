import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import BaseLayout from "./components/base-layout"
import ChatPage from "./pages/chat"
import ChatDetailPage from "./pages/chat-detail"

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <ChatPage />,
        children: [
          {
            path: "chat/:userId",
            element: <ChatDetailPage />
          }
        ]
      },
    ]
  }
]);

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
