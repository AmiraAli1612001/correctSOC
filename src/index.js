import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";

import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/contact";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Cyber from "./pages/cyber";
import Mobile from "./pages/mobile";
import Scanner from "./pages/scanner";
import Portal from "./pages/Portal";
import Privacy from "./pages/privacy";
import Cookie from "./pages/cookie";
import Login from "./pages/login";
import Blog from "./pages/blog";
import Notfound from "./components/html/Notfound";
import Dashboard from "./pages/dashboard";
import Lanscanner from "./pages/back/component/lanscanner";
import Download from "./pages/back/downloads"
import Software from "./pages/back/software";
import Hardware from "./pages/back/hardware";
import DataDisks from "./pages/back/data-disks";
import OsUpdates from "./pages/back/os-updates";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="cyber-platform" element={<Cyber />} />
      <Route path="mobile-network" element={<Mobile />} />
      <Route path="vulnerability-scanner" element={<Scanner />} />
      <Route path="portal" element={<Portal />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="cookie" element={<Cookie />} />
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blog />} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="lan-scanner" element={<Lanscanner/>} />
      <Route path="download" element={<Download/>} />
      <Route path="hardware" element={<Hardware/>} />
      <Route path="software" element={<Software/>} />
      <Route path="data-disks" element={<DataDisks/>} />
      <Route path="os-updates" element={<OsUpdates/>} />


      <Route path="*" element={<Notfound/>} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
