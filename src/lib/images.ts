// Verified Unsplash CDN photo bases (HTTP 200). The client will swap these for
// their own photography; kept authentic and warm, never stock-cliché.
const cdn = "https://images.unsplash.com/photo-";

export const images = {
  hero: `${cdn}1543616260-4cd60315436d`, // surfer crossing dunes, golden hour
  gear: `${cdn}1671465436084-cdfd74789bbe`, // wetsuits in wooden gear room
  quiver: `${cdn}1547955973-d7c7a6ec4970`, // row of boards against a shack
  hug: `${cdn}1632334738554-95c79fb27eb7`, // person hugging board, sepia shore
} as const;

export function unsplash(base: string, w: number, q = 70) {
  return `${base}?auto=format&fit=crop&w=${w}&q=${q}`;
}
