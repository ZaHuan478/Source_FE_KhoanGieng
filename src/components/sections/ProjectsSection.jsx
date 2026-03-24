import SectionTitle from '../common/SectionTitle'

function ProjectsSection({ projects }) {
  const [first, second, third, fourth] = projects

  return (
    <section id="du-an" className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle title="Công trình tiêu biểu tại Phú Yên" />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr] lg:grid-rows-2">
        {[first, fourth].map((project, idx) => (
          <article
            key={project?.name || idx}
            className={`group relative overflow-hidden rounded-lg ${idx === 0 ? 'lg:row-span-2' : ''}`}
          >
            <img
              src={project?.image}
              alt={project?.name}
              className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                idx === 0 ? 'h-[360px] sm:h-[430px]' : 'h-48 sm:h-[210px]'
              }`}
            />
          </article>
        ))}
        <article className="group relative overflow-hidden rounded-lg">
          <img
            src={second?.image}
            alt={second?.name}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[210px]"
          />
        </article>
        <article className="group relative overflow-hidden rounded-lg">
          <img
            src={third?.image}
            alt={third?.name}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[210px]"
          />
        </article>
      </div>
    </section>
  )
}

export default ProjectsSection
