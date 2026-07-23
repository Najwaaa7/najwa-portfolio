// Resolve a public/ path against the Vite base so images work on GitHub Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`

// Extract "knowledge-hub-01.png" from a full path — used by image placeholders.
export const filename = (path) => path.split('/').pop()
