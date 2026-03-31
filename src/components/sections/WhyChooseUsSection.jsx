import SectionTitle from '../common/SectionTitle'

function WhyChooseUsSection({ whyPoints }) {
  return (
    <section id="gioi-thieu" className="bg-white py-14">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            align="center"
            title="Tại sao chọn Khoan Giếng Phú Yên?"
          />

          <div className="mx-auto mt-5 max-w-3xl text-left text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
            <p>{whyPoints[0]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
