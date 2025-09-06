import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "src/assets/TradefairPageImage/supplier");
const dataDir = path.join(__dirname, "src/data");

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const files = fs
    .readdirSync(assetsDir)
    .filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f));

function cleanVarName(file) {
    let name = path.parse(file).name;
    name = name.replace(/[^a-zA-Z0-9]+/g, "_");
    if (/^\d/.test(name)) name = "_" + name;
    return name;
}

const used = new Set();
function unique(name) {
    let n = name, i = 1;
    while (used.has(n)) n = `${name}_${i++}`;
    used.add(n);
    return n;
}

const importLines = [];

files.forEach((file) => {
    const v = unique(cleanVarName(file));
    importLines.push(`import ${v} from "../assets/TradefairPageImage/supplier/${file}";`);
});

const output = importLines.join("\n") + "\n";

fs.writeFileSync(path.join(dataDir, "suppliers.js"), output, "utf8");
console.log("generated successfully!");
