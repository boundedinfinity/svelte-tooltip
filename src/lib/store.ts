import { writable } from 'svelte/store';
import type { TTEntry } from './model';

function create() {
	const { subscribe, set } = writable<TTEntry | null>(null);

	return {
		subscribe,
		display: (t: TTEntry) => set(t)
	};
}

const current = create();
export default current;
