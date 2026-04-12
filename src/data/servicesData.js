export const DRILL_ITEMS = [
  {
    name: 'Khoan giếng phi 48 (Hộ gia đình nhỏ)',
    details: ['Độ sâu 25 – 40m', 'Ống PVC chuẩn, lọc cát sỏi thạch anh', 'Bảo hành công trình 2 năm'],
    note: 'Phù hợp vùng nước nông, địa tầng mềm.',
  },
  {
    name: 'Khoan giếng phi 60 (Tiêu chuẩn)',
    details: ['Độ sâu đến 60m', 'Ống dày chịu áp lực cao', 'Hỗ trợ lắp đặt máy bơm', 'Bảo hành 5 năm'],
    note: 'Phù hợp hầu hết hộ gia đình và cơ sở sản xuất nhỏ.',
  },
  {
    name: 'Khoan giếng công nghiệp',
    details: ['Độ sâu 60m trở lên', 'Thiết kế theo yêu cầu kỹ thuật', 'Đầy đủ hồ sơ pháp lý'],
    note: 'Khảo sát thực địa trước khi báo giá chính xác.',
  },
]

export const MATERIAL_ITEMS = [
  {
    name: 'Ống chống nhựa PVC',
    details: [
      'Ống chống PVC dk 168mm, dày 3,5mm — 170.000đ/mét',
      'Ống chống PVC dk 114mm, dày 3,5mm — 120.000đ/mét',
    ],
    note: 'Chống sạt lở thành giếng, đảm bảo bền vững theo công trình.',
  },
  {
    name: 'Ống dẫn nước từ bơm lên miệng giếng',
    details: [
      'Ống PVC dk 34mm — 24.000đ/mét',
      'Ống PVC dk 42mm — 28.000đ/mét',
    ],
    note: 'Chịu áp lực tốt, không nhiễm kim loại nặng vào nước.',
  },
  {
    name: 'Dây điện & cáp treo bơm',
    details: [
      'Dây điện 3x4 — 44.000đ/mét',
      'Dây cáp treo bơm inox — 35.000đ/mét',
    ],
    note: 'Cáp inox chịu lực cao, không gỉ theo thời gian dưới nước.',
  },
  {
    name: 'Thiết bị điện & phụ kiện',
    details: [
      'CB (Aptomat) 20A — 134.000đ/cái',
      'Tủ điện vận hành máy bơm — 3.000.000đ/cái',
      'Nối thẳng ren trong dk 34mm — 8.000đ/cái',
      'Nối thẳng ren ngoài dk 34mm — 8.000đ/cái',
      'Phụ kiện lắp đặt, keo dán ống chống... — 500.000đ/giếng',
    ],
    note: 'Toàn bộ vật tư điện đạt tiêu chuẩn an toàn điện Việt Nam.',
  },
  {
    name: 'Máy bơm chìm (chọn theo công suất thực tế)',
    details: [
      'Lựa chọn sau khi đo lưu lượng thực tế tại giếng',
      'Thương hiệu: Pentax, Ebara, Lepono',
      'Công suất từ 0,37kW đến 2,2kW tùy độ sâu',
    ],
    note: 'Tư vấn miễn phí — chọn đúng máy tiết kiệm điện tối đa.',
  },
]

export const PUMP_ITEMS = [
  {
    name: 'Máy bơm chìm Pentax',
    details: ['Công suất 0.37kW – 2.2kW', 'Bảo hành chính hãng 12 tháng', 'Phù hợp giếng sâu > 20m'],
  },
  {
    name: 'Máy bơm Ebara / Lepono',
    details: ['Tiết kiệm điện', 'Kết nối phao tự động', 'Bảo hành 12 tháng'],
  },
  {
    name: 'Sục rửa & vệ sinh giếng',
    details: ['Tăng lưu lượng nước', 'Vệ sinh đầu lọc', 'Kiểm tra chất lượng nước'],
  },
]

export const ELECTRIC_ITEMS = [
  {
    name: 'Tủ điện điều khiển máy bơm',
    details: ['Aptomat bảo vệ quá tải', 'Relay nhiệt', 'Đi dây gọn, chuẩn kỹ thuật'],
  },
  {
    name: 'Lắp đặt hệ thống điện đồng bộ',
    details: ['Khảo sát thực tế', 'Thiết kế sơ đồ điện', 'Bảo hành 12 tháng'],
  },
]

export const STEPS = [
  { num: '01', title: 'Khảo sát địa tầng', desc: 'Đánh giá địa chất và vị trí khoan phù hợp' },
  { num: '02', title: 'Khoan tạo lỗ', desc: 'Triển khai đúng kỹ thuật, hạn chế ảnh hưởng xung quanh' },
  { num: '03', title: 'Lắp ống – Chống cát', desc: 'Gia cố thành giếng, bảo vệ nguồn nước lâu dài' },
  { num: '04', title: 'Nghiệm thu – Bàn giao', desc: 'Kiểm tra lưu lượng và hướng dẫn vận hành chi tiết' },
]