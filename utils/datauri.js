import DataUriParser from 'datauri/parser.js'
import path from "path";

const getDataUri = (file) => {
    if (!file) return null; // ⛔ Prevent crash if file is undefined

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;
