const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(
  /\/$/,
  '',
)

export async function getMediaAssets() {
  const response = await fetch(`${API_BASE_URL}/api/media`)

  if (!response.ok) {
    throw new Error('Unable to load media assets')
  }

  return response.json()
}
