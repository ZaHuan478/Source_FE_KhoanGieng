export const DRILL_ITEMS = [
  {
    name: 'Khoan giếng vùng địa tầng cát',
    details: ['Khoan tay','Khoan máy thủ công'],
    // note: 'Phù hợp vùng nước nông, địa tầng mềm.',
  },
  {
    name: 'Khoan giếng vùng địa tầng đất đá',
    details: ['Độ sâu khoan từ 200-300m'],
    note: 'Phù hợp hầu hết hộ gia đình và cơ sở sản xuất nhỏ.',
  },
  // {
  //   name: 'Khoan giếng công nghiệp',
  //   details: ['Độ sâu 60m trở lên', 'Thiết kế theo yêu cầu kỹ thuật', 'Đầy đủ hồ sơ pháp lý'],
  //   note: 'Khảo sát thực địa trước khi báo giá chính xác.',
  // },
]

export const MATERIAL_ITEMS = [
  {
    name: 'Ống chống cho giếng vùng địa chất tầng cát',
    details: [
      'Ống nhực PVC chống vách giếng đường kính 90mm.',
      'Ống nhựa PVC chống vách giếng đường kính 114mm.',
    ],
    note: 'Chống sạt lở thành giếng, đảm bảo bền vững theo công trình.',
  },
  {
    name: 'Ống chống cho giếng vùng địa chất đất đá',
    details: [
      'Ống nhựa PVC chống vách giếng đường kính 168mm — lắp đặt từ mặt đất hiện hữu đến đá tảng',
      'Ống nhựa PVC chống vách giếng đường kính 114mm — lắp đặt từ đáy lên mặt đất hiện hữu',
    ],
  },
  {
    name: 'Máy bơm, dây điện & cáp treo bơm',
    details: [
      'Máy bơm loại Hỏa Tiễn',
      'Tùy vào độ sâu giếng khoan chọn máy bơm phù hợp công suất và lưu lượng khai thác',
      'Dây điện 3x4 hoặc 3x6 — tùy theo công suất máy bơm',
      'Dây cáp treo bơm bằng inox',
    ],
  },
  {
    name: 'Thiết bị & phụ kiện',
    details: [
      'Tủ điện điều khiển máy bơm',
      'Ốc siết cáp bằng inox',
      'Keo dán ống PVC',
    ],
  },
  // {
  //   name: 'Máy bơm chìm (chọn theo công suất thực tế)',
  //   details: [
  //     'Lựa chọn sau khi đo lưu lượng thực tế tại giếng',
  //     'Thương hiệu: Pentax, Ebara, Lepono',
  //     'Công suất từ 0,37kW đến 2,2kW tùy độ sâu',
  //   ],
  //   note: 'Tư vấn miễn phí — chọn đúng máy tiết kiệm điện tối đa.',
  // },
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
  { num: '03', title: 'Lắp đặt thiết bị giếng khoan', desc: 'Gia cố thành giếng, bảo vệ nguồn nước lâu dài' },
  { num: '04', title: 'Nghiệm thu – Bàn giao', desc: 'Kiểm tra lưu lượng và hướng dẫn vận hành chi tiết' },
]