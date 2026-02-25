import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import svgr from "@svgr/rollup";
import * as path from "path";
import { fileURLToPath } from "url";
// Créé un path jusqu'à ce fichier (celui-ci)
const __filename = fileURLToPath(import.meta.url);
// Trouve le dossier racine par rapport à ce fichier (celui-ci)
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
