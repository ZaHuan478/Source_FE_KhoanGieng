export const navItems = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Giới Thiệu', path: '/gioi-thieu' },
  { label: 'Dịch Vụ', path: '/dich-vu' },
  { label: 'Bảng Giá', path: '/bang-gia' },
  { label: 'Liên Hệ', path: '/lien-he' },
]

export const services = [
  {
    key: 'drill',
    title: 'Khoan Giếng',
    description:
      'Khoan giếng công nghiệp, gia đình với công nghệ hiện đại, độ sâu tối ưu.',
  },
  {
    key: 'homeWater',
    title: 'Sửa Chữa Giếng',
    description:
      'Khắc phục tắc nghẽn, nước yếu, nước đục; kiểm tra nguồn nước nhanh 24/7.',
  },
  {
    key: 'pump',
    title: 'Lắp Đặt Máy Bơm',
    description:
      'Cung cấp và lắp đặt máy bơm chính hãng, tiết kiệm điện năng tối đa.',
  },
  {
    key: 'shield',
    title: 'Khảo Sát Địa Chất',
    description:
      'Thăm dò mạch nước ngầm và phân tích cấu trúc địa chất chính xác.',
  },
]

export const whyStats = [
  { value: '24/7', label: 'Đội ngũ kinh nghiệm' },
  { value: '5 bước', label: 'Thiết bị hiện đại' },
]

export const whyPoints = [
  'Chúng tôi không chỉ khoan giếng, chúng tôi kiến tạo giải pháp nước sạch bền vững cho mọi công trình gia đình và doanh nghiệp tại địa phương.',
]

export const projects = [
  {
    name: 'Hệ thống tưới tiêu',
    image:
      'https://images.unsplash.com/photo-1531660095419-5e94f7e89f6a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Khoan tia áp lực',
    image:
      'https://images.unsplash.com/photo-1592982537447-6f2a6a0c8d49?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Vận hành kỹ thuật',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cấp nước ven biển',
    image:
      'https://images.unsplash.com/photo-1576670159805-5166c9e0d4e2?auto=format&fit=crop&w=900&q=80',
  },
]

export const testimonials = [
  {
    name: 'Anh Minh',
    role: 'Sông Hinh, Phú Yên',
    comment:
      'Dịch vụ chuyên nghiệp. Khoan nhanh và rất sạch sẽ. Nước lên mạnh và trong, cảm ơn đội ngũ kỹ thuật.',
  },
  {
    name: 'Chi Lan',
    role: 'Tuy Hòa, Phú Yên',
    comment:
      'Giá cả được báo rõ ràng, tư vấn các bước chi tiết. Máy móc hiện đại, đội ngũ đến đúng giờ và thái độ tận tâm.',
  },
  {
    name: 'Bao Hung',
    role: 'Đông Hòa, Phú Yên',
    comment:
      'Tư vấn kỹ, làm việc sạch sẽ, vận hành ổn định. Tôi rất yên tâm khi đối tác có báo giá phù hợp.',
  },
]

export const footerServices = [
  'Khoan giếng công nghiệp',
  'Khoan giếng dân dụng',
  'Lắp đặt hệ thống bơm',
  'Bảo trì và phục hồi giếng',
]

export const pricingPlans = [
  {
    name: 'Giếng Phi 48',
    subtitle: 'Phù hợp hộ gia đình nhỏ',
    price: '~3.5 Tr',
    depth: 'Độ sâu trung bình 25m - 40m',
    features: ['Ống nhựa PVC chất lượng cao', 'Lọc cát, sỏi thạch anh', 'Bảo hành 2 năm'],
    cta: 'Chọn gói này',
    featured: false,
  },
  {
    name: 'Giếng Phi 60',
    subtitle: 'Tiêu chuẩn cho mọi nhà',
    price: '~5.5 Tr',
    depth: 'Độ sâu lên đến 60m',
    features: [
      'Lưu lượng nước ổn định hơn',
      'Ống dày chịu áp lực cao',
      'Hỗ trợ lắp đặt máy bơm',
      'Bảo hành 5 năm',
    ],
    cta: 'Tư vấn ngay',
    featured: true,
    badge: true,
  },
  {
    name: 'Giếng Công Nghiệp',
    subtitle: 'Sản xuất & Tưới tiêu',
    price: 'Liên hệ',
    depth: 'Theo khảo sát thực tế',
    features: ['Thiết kế theo yêu cầu kỹ thuật', 'Khoan độ sâu 60+, tầng độ cứng', 'Đầy đủ hồ sơ pháp lý'],
    cta: 'Yêu cầu khảo sát',
    featured: false,
  },
]

export const pricingAddons = [
  {
    name: 'Máy Bơm Chìm',
    note: 'Thương hiệu: Pentax, Ebara, Lepono',
    price: 'Từ 2.800.000đ',
    icon: 'MB',
  },
  {
    name: 'Sục Rửa Giếng',
    note: 'Vệ sinh định kỳ, tăng lưu lượng',
    price: 'Từ 500.000đ',
    icon: 'SR',
  },
  {
    name: 'Sửa Máy Bơm',
    note: 'Thay tụ, quấn dây, thay phớt',
    price: 'Từ 300.000đ',
    icon: 'SM',
  },
  {
    name: 'Thay Lọc Nước',
    note: 'Cát lọc thô, lõi lọc gia đình',
    price: 'Từ 150.000đ',
    icon: 'TL',
  },
]
