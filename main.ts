// coolest-art-01 entry (v2): copy the bundled art to /output/entry.png.
// The picture is a JPEG stored in a file named entry.png (the gate tells PNG
// from JPEG by its first bytes), so the copy is byte for byte and fully
// deterministic: two runs write the same bytes. Standard library only.
//
// The picture (v2, cuter): a chubby baby dragon with huge sparkly amber
// eyes, tiny golden horns and rosy cheeks, joyfully riding a glowing teal
// koi fish through the sky above a neon-lit rainy city at night, rainbow
// reflections, floating pink hearts and golden sparkles, waving one tiny
// paw at the viewer, big smile, vibrant gold and teal colors.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
