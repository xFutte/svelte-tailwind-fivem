import { writable, type Writable } from "svelte/store";

/** Store containing all values from the config.json file */
export const config: Writable<object> = writable({})