import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBeDXeWQ8-YA8rj-djFjRINNxIcaMNYHB4",

  authDomain: "sabastore-afe1a.firebaseapp.com",

  projectId: "sabastore-afe1a",

  storageBucket: "sabastore-afe1a.appspot.com",

  messagingSenderId: "957387708035",

  appId: "1:957387708035:web:daf4980954b2ce02442db6",

  measurementId: "G-GZ2GY4QQGT",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
