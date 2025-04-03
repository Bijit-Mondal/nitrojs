import { d as defineEventHandler } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const index = defineEventHandler((event) => {
  return "Hello Moon!";
});

export { index as default };
//# sourceMappingURL=index.mjs.map
