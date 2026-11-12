// coolest-art-01 entry: copy the bundled art to /output/entry.png.
// The picture is a JPEG stored in a file named entry.png (the gate tells PNG
// from JPEG by its first bytes), so the copy is byte for byte and fully
// deterministic: two runs write the same bytes. Standard library only.
//
// The picture: a majestic glowing koi dragon, gold and teal scales, soaring
// over a neon-lit city at night in the rain, mist and neon reflections on
// the wet streets below, epic fantasy digital art.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
