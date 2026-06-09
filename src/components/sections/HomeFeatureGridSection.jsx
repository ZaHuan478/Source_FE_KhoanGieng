import { useState } from 'react'
import { homeFeatureTiles } from '../../data/homeFeatureTiles'

function HomeFeatureGridSection({ mediaImages = {} }) {
  const [startIndex, setStartIndex] = useState(0)
  const featureTiles = homeFeatureTiles.map((tile) => ({
    ...tile,
    image: mediaImages[tile.imageKey]?.url,
    alt: mediaImages[tile.imageKey]?.alt || tile.alt,
  }))
  const itemsToShow = 3
  const maxIndex = Math.max(0, featureTiles.length - itemsToShow)

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const nextSlide = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 flex h-12 w-12 -translate-x-4 sm:-translate-x-6 items-center justify-center rounded-full bg-white text-slate-600 shadow-md ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-900"
            aria-label="Previous slide"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="w-[1220px] overflow-hidden px-2 py-4">
            <div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (380 + 32)}px)` }}
            >
              {featureTiles.map((tile) => (
                <article
                  key={tile.title}
                  className="w-[380px] h-[330px] shrink-0 flex flex-col overflow-hidden rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                    {tile.image ? (
                      <img
                        src={tile.image}
                        alt={tile.alt}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-200" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{tile.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {tile.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 flex h-12 w-12 translate-x-4 sm:translate-x-6 items-center justify-center rounded-full bg-white text-slate-600 shadow-md ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-900"
            aria-label="Next slide"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  )
}

export default HomeFeatureGridSection
