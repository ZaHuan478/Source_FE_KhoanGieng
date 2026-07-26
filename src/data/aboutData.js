export const aboutTimelineItems = [
  {
    year: '2008',
    title: 'Khởi nghiệp từ tâm',
    desc: 'Thành lập cơ sở khoan giếng gia đình đầu tiên tại Tuy Hòa với 1 máy khoan cơ bản.',
    tone: 'blue',
  },
  {
    year: '2015',
    title: 'Đột phá công nghệ',
    desc: 'Đầu tư hệ thống máy khoan thủy lực Nhật Bản, mở rộng năng lực phục vụ công trình dân dụng và công nghiệp.',
    tone: 'brown',
  },
  {
    year: 'Nay',
    title: 'Vị thế hàng đầu',
    desc: 'Đội ngũ 50+ kỹ thuật viên, sở hữu dàn thiết bị hiện đại và quy trình thi công ổn định tại Phú Yên.',
    tone: 'teal',
  },
]

export const equipmentItems = [
  {
    slug: 'may-khoan-gieng-fyx180',
    name: 'Máy khoan giếng FYX180',
    note: 'Chuyên dùng cho địa hình đá cứng, độ sâu lên đến 200m.',
    imageKey: 'equipmentMachine',
    hasDetail: true,
  },
  {
    slug: 'xe-van-tai-chuyen-dung',
    name: 'Xe vận tải chuyên dụng',
    note: 'Đảm bảo 4 đội kỹ thuật công trình di chuyển liên tỉnh nhanh.',
    imageKey: 'fieldSurvey',
  },
]

export const equipmentDetails = [
  {
    slug: 'may-khoan-gieng-fyx180',
    name: 'Máy khoan giếng FYX180',
    label: 'Máy khoan giếng thủy lực',
    imageKey: 'equipmentMachine',
    summary:
      'Dòng máy khoan giếng cỡ trung, phù hợp công trình dân dụng, nông nghiệp và mặt bằng hẹp cần thi công nhanh. Thông số dưới đây là cấu hình tham khảo cho nhóm máy FY/FYX 180, cần đối chiếu catalogue hoặc serial máy thực tế trước khi dùng cho báo giá kỹ thuật.',
    researchNote:
      'Chưa tìm thấy catalogue công khai đáng tin cậy khớp tuyệt đối với mã FYX180. Các trị số được trình bày theo dạng khoảng tham khảo cho máy khoan giếng bánh xích 180-200m và kinh nghiệm ứng dụng tại công trình.',
    quickStats: [
      { label: 'Độ sâu làm việc', value: '180-200 m' },
      { label: 'Đường kính lỗ khoan', value: '90-254 mm' },
      { label: 'Địa hình phù hợp', value: 'Đất pha đá, đá phong hóa' },
      { label: 'Nguồn lực thi công', value: 'Khí nén + thủy lực' },
    ],
    specs: [
      { label: 'Công năng chính', value: 'Khoan giếng nước, khảo sát tầng chứa nước, khoan tạo lỗ' },
      { label: 'Phương pháp khoan', value: 'DTH búa hơi, xoay rửa bằng bùn hoặc nước tùy địa tầng' },
      { label: 'Độ sâu tham khảo', value: '180 m tiêu chuẩn, có thể đến khoảng 200 m khi địa tầng phù hợp' },
      { label: 'Đường kính lỗ khoan', value: 'Khoảng 90-254 mm tùy mũi khoan, ống chống và yêu cầu giếng' },
      { label: 'Cần khoan thường dùng', value: '60 / 76 / 89 mm, chiều dài cần tùy cấu hình máy' },
      { label: 'Áp suất khí nén khuyến nghị', value: 'Khoảng 1.7-2.5 MPa khi khoan búa hơi' },
      { label: 'Lưu lượng khí nén khuyến nghị', value: 'Khoảng 17-31 m3/phút, phụ thuộc đường kính lỗ khoan' },
      { label: 'Công suất động cơ', value: 'Khoảng 42-55 kW tùy phiên bản động cơ' },
      { label: 'Tốc độ quay', value: 'Khoảng 45-70 vòng/phút' },
      { label: 'Momen xoắn', value: 'Khoảng 3,500-4,500 N.m' },
      { label: 'Khối lượng vận chuyển', value: 'Khoảng 4.5-6 tấn tùy khung gầm và phụ kiện' },
    ],
    strengths: [
      'Di chuyển linh hoạt hơn trong mặt bằng nhỏ so với xe khoan lớn.',
      'Phù hợp giếng dân dụng, giếng tưới tiêu và công trình vừa.',
      'Kết hợp được khoan búa hơi khi gặp đá cứng hoặc đá phong hóa.',
      'Thời gian dựng máy và thu dọn mặt bằng nhanh.',
    ],
    applications: [
      'Giếng sinh hoạt hộ gia đình, nhà vườn, trang trại.',
      'Giếng khai thác nước tưới tiêu quy mô vừa.',
      'Công trình cần kiểm tra địa tầng trước khi lắp bơm.',
      'Khu vực đường vào hẹp, cần thiết bị cơ động.',
    ],
    cautions: [
      'Độ sâu thực tế phụ thuộc địa tầng, đường kính giếng và công suất máy nén khí.',
      'Khi gặp đá rất cứng hoặc đứt gãy phức tạp cần khảo sát trước khi cam kết tiến độ.',
      'Thông số chi tiết nên xác nhận theo catalogue/biển máy nếu dùng cho hồ sơ kỹ thuật.',
    ],
  },
]
