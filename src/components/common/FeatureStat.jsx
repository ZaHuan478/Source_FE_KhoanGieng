function FeatureStat({ value, label }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="font-display text-lg font-bold text-[#083b88]">{value}</p>
      <p className="mt-1 text-[11px] text-slate-600">{label}</p>
    </div>
  )
}

export default FeatureStat
