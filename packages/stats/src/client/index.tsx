import "./styles.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initChineseUi } from "./i18n";

const root = document.getElementById("root");
if (!root) throw new Error("missing #root");
initChineseUi();
createRoot(root).render(<App />);
