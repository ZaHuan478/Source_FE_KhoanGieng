import { useEffect, useState } from 'react'
import { getMediaAssets } from '../api/mediaApi'
import localMediaCatalog from '../data/localMediaCatalog'

function mergeMediaAssets(remoteAssets) {
  return {
    images: {
      ...localMediaCatalog.images,
      ...(remoteAssets?.images || {}),
    },
    videos: {
      ...localMediaCatalog.videos,
      ...(remoteAssets?.videos || {}),
    },
  }
}

export function useMediaAssets() {
  const [media, setMedia] = useState(localMediaCatalog)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    getMediaAssets()
      .then((assets) => {
        if (isMounted) {
          setMedia(mergeMediaAssets(assets))
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setMedia(localMediaCatalog)
          setError(err)
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { media, loading, error }
}
