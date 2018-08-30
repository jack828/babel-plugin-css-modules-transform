import mkdirp from 'mkdirp';
import { dirname } from 'path';
import { readFileSync, appendFileSync, writeFileSync } from 'fs';

/**
 * Writes css file to given path (and creates directories)
 *
 * Check existance of CSS string, and compare file contents
 * length. If the CSS string is larger, overwrite the file.
 * If the CSS string is empty, then overwrite the file with it (read: delete it)
 *
 * @param {String} path
 * @param {String} content
 */
export default function writeCssFile(path, content) {
    mkdirp.sync(dirname(path));
    const fileContents = readFileSync(path, { encoding: 'utf8', flag: 'a+' });
    let append = true;
    if (content.length === 0 || content.length >= fileContents.length) {
        append = false;
    }

    if (append) {
        appendFileSync(path, content);
    } else {
        writeFileSync(path, content);
    }
}
