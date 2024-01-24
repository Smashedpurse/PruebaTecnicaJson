import React from "react";
import ReactDOM from "react-dom/client";
import { ReactBootamp } from "./ReactBootamp";
import { FatherComponent } from "./bases/props/FatherComponent";
import { Counter } from "./bases/01-useState/Counter";
import { MultipleCounter } from "./bases/01-useState/MultipleCounter";
import { Form } from "./bases/01-useState/Form";
import { MultipleInputForm } from "./bases/01-useState/MultipleInputForm";
import { Login } from "./bases/login/Login";
import { Home } from "./bases/home/Home";
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")).render
(
<React.StrictMode>
  <Home />
</React.StrictMode>
);
