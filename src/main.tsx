import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import BaseLayout from "./components/base-layout"
import LoginPage from "./pages/login"
import ChatPage from "./pages/chat"
import ChatDetailPage from "./pages/chat-detail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/chat",
        element: <ChatPage />,
        children: [
          {
            path: "/chat/:userId",
            element: <ChatDetailPage />
          }
        ]
      },
    ],
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
