'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = writeCssFile;

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _path = require('path');

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Writes css file to given path (and creates directories)
 *
 * Check existance of CSS string, and compare file contents
 * length. If the CSS string is larger, override the file.
 *
 * @param {String} path
 * @param {String} content
 */
function writeCssFile(path, content) {
    _mkdirp2.default.sync((0, _path.dirname)(path));
    const contents = (0, _fs.readFileSync)(path, 'utf8');
    let append = true;
    if (contents && content.length > contents.length) {
        append = false;
    }

    if (append) {
        (0, _fs.appendFileSync)(path, content);
    } else {
        (0, _fs.writeFileSync)(path, content);
    }
}