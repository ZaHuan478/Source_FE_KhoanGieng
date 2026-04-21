import { Clock3, Mail, MapPinHouse, Phone } from 'lucide-react'

export const contactHighlights = [
    {
        id: 'address',
        label: 'Địa chỉ văn phòng',
        value: 'Số 165 Hùng Vương, Phường Tuy Hòa, Tỉnh Đắk Lắk, Việt Nam',
        Icon: MapPinHouse,
    },
    {
        id: 'hotline',
        label: 'Hotline 24/7',
        value: '0945 455 458',
        Icon: Phone,
        accent: true,
    },
    {
        id: 'email',
        label: 'Email hỗ trợ',
        value: 'huan1234@gmail.com',
        Icon: Mail,
    },
    {
        id: 'hours',
        label: 'Thời gian làm việc',
        value: 'Hoạt động 24/7 (Kể cả ngày lễ)',
        Icon: Clock3,
    },
]

export const consultationOptions = [
    'Khoan giếng gia đình',
    'Khoan giếng công nghiệp',
    'Sửa chữa máy bơm',
    'Khảo sát địa chất',
    'Khác',
]