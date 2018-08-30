import mkdirp from 'mkdirp';
import { dirname } from 'path';
import { readFileSync, appendFileSync, writeFileSync } from 'fs';

/**
 * Writes css file to given path (and creates directories)
 *
 * Check existance of CSS string, and compare file contents
 * length. If the CSS string is larger, override the file.
 *
 * @param {String} path
 * @param {String} content
 */
export default function writeCssFile(path, content) {
    mkdirp.sync(dirname(path));
    const contents = readFileSync(path, 'utf8');
    let append = true;
    if (contents && content.length > contents.length) {
        append = false;
    }

    if (append) {
        appendFileSync(path, content);
    } else {
        writeFileSync(path, content);
    }
}
