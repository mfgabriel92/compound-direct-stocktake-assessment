import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StocktakeProvider, ModalProvider } from "./contexts";

createRoot(document.getElementById("root")!).render(
  <StocktakeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StocktakeProvider>,
);
