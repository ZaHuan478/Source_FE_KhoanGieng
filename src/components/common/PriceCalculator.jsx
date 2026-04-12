import { useState } from 'react'

const PRICE_PER_METER = 120000
const BASE_FEE = 800000

function PriceCalculator() {
  const [depth, setDepth] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleCalculate = () => {
    const d = parseFloat(depth)
    if (!depth || isNaN(d) || d <= 0) {
      setError('Vui lòng nhập độ sâu hợp lệ (m)')
      setResult(null)
      return
    }
    if (d > 500) {
      setError('Độ sâu tối đa ước tính là 500m. Vui lòng liên hệ để khảo sát.')
      setResult(null)
      return
    }
    setError('')
    const est = BASE_FEE + d * PRICE_PER_METER
    setResult({ low: est * 0.9, high: est * 1.15, depth: d })
  }

  const fmt = (n) =>
    new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(n)

  return (
    <div className="rounded-[20px] border border-[#c7d9fd] bg-gradient-to-br from-[#f0f6ff] to-[#e8f0fe] p-7">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#0a3f94] to-[#1a6fd0]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </div>
        <div>
          <h3 className="m-0 text-base font-bold text-slate-900">Ước Tính Chi Phí Khoan</h3>
          <p className="m-0 text-[0.78rem] text-slate-500">Nhập độ sâu (m) để nhận báo giá sơ bộ</p>
        </div>
      </div>

      {/* Input row */}
      <div className="flex items-end gap-2.5">
        <label className="block flex-1">
          <span className="mb-1.5 block text-[0.8rem] font-semibold text-gray-700">
            Độ sâu giếng (m)
          </span>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="500"
              step="1"
              value={depth}
              onChange={(e) => {
                setDepth(e.target.value)
                setError('')
                setResult(null)
              }}
              placeholder="Ví dụ: 60"
              onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
              className={[
                'w-full rounded-[10px] border bg-white py-2.5 pl-3.5 pr-10 text-[0.88rem] text-slate-900 outline-none transition-colors duration-200 focus:border-[#0a3f94] focus:ring-2 focus:ring-[#0a3f94]/10',
                error ? 'border-red-500' : 'border-[#c7d9fd]',
              ].join(' ')}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[0.78rem] font-semibold text-slate-400">
              m
            </span>
          </div>
        </label>
        <button
          onClick={handleCalculate}
          className="cursor-pointer whitespace-nowrap rounded-[10px] border-none bg-gradient-to-br from-[#0a3f94] to-[#1a6fd0] px-5 py-2.5 text-[0.84rem] font-bold text-white shadow-[0_4px_14px_rgba(10,63,148,0.28)] transition-opacity duration-200 hover:opacity-90"
        >
          Tính giá
        </button>
      </div>

      {/* Error */}
      {error && <p className="mt-2 text-[0.78rem] text-red-500">{error}</p>}

      {/* Result */}
      {result && (
        <div className="mt-4 animate-[fadeInUp_0.3s_ease] rounded-[14px] border border-[#c7d9fd] bg-white p-4">
          <p className="mb-1 text-[0.78rem] font-medium text-slate-500">
            Ước tính cho giếng sâu{' '}
            <strong className="text-[#0a3f94]">{result.depth}m</strong>
          </p>
          <p className="mb-1.5 text-xl font-extrabold tracking-tight text-[#0a3f94]">
            {fmt(result.low)} – {fmt(result.high)}
          </p>
          <p className="m-0 text-[0.75rem] leading-relaxed text-slate-400">
            * Giá ước tính chưa bao gồm vật tư đặc biệt, máy bơm và điện. Liên hệ để nhận báo giá chính xác.
          </p>
        </div>
      )}
    </div>
  )
}

export default PriceCalculator
