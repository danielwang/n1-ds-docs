import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(resolve(root, 'design.md'), 'utf8');
const output = resolve(root, 'src/generated/designMarkdown.ts');

await mkdir(dirname(output), {recursive: true});
await writeFile(output, `// Generated from design.md. Do not edit directly.\nexport default ${JSON.stringify(source)};\n`);
