/**********************************************************************************************************************
 * Copyright 2011-2020 Cassius Cai <cassiuscai@gmail.com>                                                             *
 *                                                                                                                    *
 * Licensed under the Apache License, Version 2.0 (the "License");                                                    *
 * you may not use this file except in compliance with the License.                                                   *
 * You may obtain a copy of the License at                                                                            *
 *                                                                                                                    *
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                     *
 *                                                                                                                    *
 * Unless required by applicable law or agreed to in writing, software                                                *
 * distributed under the License is distributed on an "AS IS" BASIS,                                                  *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                           *
 * See the License for the specific language governing permissions and                                                *
 * limitations under the License.                                                                                     *
 **********************************************************************************************************************/
function getValue(value, _default) {
    return value ? value : _default;
}
module.exports = {
    book: {
        "assets": "./assets",
        "css": ["style.css"]
    },
    blocks: {
        bilibili: {
            process: function (block) {
                const matches = block.body.trim().match(/^((?:av)?\d+)(?:#(\d+))?(?:@(.+)x(.+))?$/);
                if (!matches) {
                    throw new Error('Format Error');
                }
                const av = matches[1];
                const page = getValue(matches[2], 1);
                const width = getValue(matches[3], '100%');
                const height = getValue(matches[4], '100%');
                return `<div class="bilibili"><iframe width="${width}" height="${height}" src="https://player.bilibili.com/player.html?aid=${av}&page=${page}" allowfullscreen></iframe></div>`;
            }
        }
    }
};
