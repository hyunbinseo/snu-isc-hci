import { writeFileSync } from 'node:fs';
import * as _bodies from './bodies.ts';

type Id = keyof typeof _bodies;
let bodies: Record<Id, string> = { ..._bodies };

const maxLength = 300;

for (const id of Object.keys(bodies) as Id[]) {
	if (bodies[id].length <= maxLength) continue;
	bodies[id] = bodies[id].substring(0, maxLength) + '…';
}

writeFileSync('bodies.json', JSON.stringify(bodies));
