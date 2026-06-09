const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(
  /\/$/,
  '',
)

export async function submitLead(payload) {
  const response = await fetch(`${API_BASE_URL}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const error = new Error(data.message || 'Unable to submit lead')
    error.details = data.errors || {}
    throw error
  }

  return data
}
