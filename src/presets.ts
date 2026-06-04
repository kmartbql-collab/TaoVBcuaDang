import { DocumentTypePreset, AuthorPreset } from "./types";

export const DOCUMENT_TYPES: DocumentTypePreset[] = [
  {
    id: "nghi-quyet",
    name: "Nghị quyết",
    abbreviation: "NQ",
    description: "Quyết định chủ trương, đường lối, nhiệm vụ lớn của cấp ủy",
    placeholderText: "ví dụ: Về tăng cường sức chiến đấu và nâng cao chất lượng sinh hoạt chi bộ trong tình hình mới."
  },
  {
    id: "quyet-dinh",
    name: "Quyết định",
    abbreviation: "QĐ",
    description: "Ban hành các quy chế, thành lập ban tổ chức hoặc thi hành nhân sự, kỷ luật",
    placeholderText: "ví dụ: Thành lập Tổ công tác chỉ đạo Đại hội Đảng bộ các cấp nhiệm kỳ tới."
  },
  {
    id: "quy-dinh",
    name: "Quy định",
    abbreviation: "QĐi",
    description: "Xác lập các chế độ, tiêu chuẩn, nghĩa vụ đạo đức trong Đảng bộ",
    placeholderText: "ví dụ: Trách nhiệm nêu gương của cán bộ, đảng viên, người đứng đầu cấp ủy."
  },
  {
    id: "chi-thi",
    name: "Chỉ thị",
    abbreviation: "CT",
    description: "Chỉ đạo các công tác trọng tâm, khẩn cấp cần triển khai đồng bộ",
    placeholderText: "ví dụ: Lãnh đạo thực hiện thắng lợi các mục tiêu phát triển kinh tế xã hội quý III/2026."
  },
  {
    id: "huong-dan",
    name: "Hướng dẫn",
    abbreviation: "HD",
    description: "Giải thích cụ thể quy trình nghiệp vụ tổ chức đảng và kiểm tra giám sát",
    placeholderText: "ví dụ: Nghiệp vụ thẩm tra lý lịch và thủ tục kết nạp quần chúng ưu tú ưu tú vào Đảng."
  },
  {
    id: "ket-luan",
    name: "Kết luận",
    abbreviation: "KL",
    description: "Đánh giá, thống nhất chỉ đạo sau Hội nghị Ban Chấp hành",
    placeholderText: "ví dụ: Hội nghị Ban Thường vụ đánh giá công tác kiểm tra giám sát 6 tháng đầu năm."
  },
  {
    id: "bao-cao",
    name: "Báo cáo",
    abbreviation: "BC",
    description: "Trình bày tổng kết công tác xây dựng Đảng, kiểm điểm tự phê bình",
    placeholderText: "ví dụ: Kết quả thực hiện quy hoạch, đào tạo bổ nhiệm cán bộ nhiệm kỳ qua."
  },
  {
    id: "ke-hoach",
    name: "Kế hoạch",
    abbreviation: "KH",
    description: "Vạch lộ trình, biện pháp và thời gian biểu hoàn thành mục tiêu cụ thể",
    placeholderText: "ví dụ: Tổ chức đại hội các chi bộ trực thuộc tiến tới Đại hội Đảng bộ cơ sở."
  }
];

export const AUTHORS: AuthorPreset[] = [
  {
    id: "bch-trung-uong",
    name: "Ban Chấp hành Trung ương",
    subHeaderSuffix: "TW",
    defaultSignatureTitle: "T/M BAN CHẤP HÀNH TRUNG ƯƠNG\nTỔNG BÍ THƯ"
  },
  {
    id: "bo-chinh-tri",
    name: "Bộ Chính trị",
    subHeaderSuffix: "BCT",
    defaultSignatureTitle: "T/M BỘ CHÍNH TRỊ\nTỔNG BÍ THƯ"
  },
  {
    id: "ban-bi-thu",
    name: "Ban Bí thư",
    subHeaderSuffix: "BBT",
    defaultSignatureTitle: "T/M BAN BÍ THƯ\nTHƯỜNG TRỰC BAN BÍ THƯ"
  },
  {
    id: "uy-ban-kiem-tra",
    name: "Ủy ban Kiểm tra Trung ương",
    subHeaderSuffix: "UBKTTW",
    defaultSignatureTitle: "T/M ỦY BAN KIỂM TRA\nCHỦ NHIỆM"
  },
  {
    id: "tinh-uy",
    name: "Ban Thường vụ Tỉnh ủy",
    subHeaderSuffix: "TU",
    defaultSignatureTitle: "T/M BAN THƯỜNG VỤ\nBÍ THƯ"
  },
  {
    id: "huyen-uy",
    name: "Ban Thường vụ Huyện ủy",
    subHeaderSuffix: "HU",
    defaultSignatureTitle: "T/M BAN THƯỜNG VỤ\nBÍ THƯ"
  },
  {
    id: "dang-uy",
    name: "Đảng ủy Cơ sở",
    subHeaderSuffix: "ĐU",
    defaultSignatureTitle: "T/M ĐẢNG ỦY\nBÍ THƯ"
  },
  {
    id: "chi-bo",
    name: "Chi bộ Cơ sở",
    subHeaderSuffix: "CB",
    defaultSignatureTitle: "T/M CHI BỘ\nBÍ THƯ"
  }
];

export const SAMPLES = [
  {
    label: "Nghị quyết Chi bộ về Doanh nghiệp tư nhân",
    documentType: "Nghị quyết",
    author: "Chi bộ Cơ sở",
    excerpt: "Về việc tăng cường vai trò lãnh đạo và phát triển tổ chức chi bộ bền vững, nâng cao chất lượng đảng viên tại các doanh nghiệp tư nhân trên địa bàn."
  },
  {
    label: "Quyết định kỷ luật đảng viên vi phạm sinh hoạt",
    documentType: "Quyết định",
    author: "Ban Thường vụ Huyện ủy",
    excerpt: "Thi hành kỷ luật cảnh cáo đối với đảng viên có hành vi nể nang, né tránh, dĩ hòa vi quý, vi phạm nguyên tắc tập trung dân chủ trong biểu quyết dự án đầu tư địa phương."
  },
  {
    label: "Quy định trách nhiệm nêu gương của cán bộ",
    documentType: "Quy định",
    author: "Ban Chấp hành Trung ương",
    excerpt: "Quy định trách nhiệm gương mẫu đi đầu của người đứng đầu cấp ủy về phẩm chất chính trị, chống suy thoái đạo đức, lối sống, thực hành tự phê bình và phê bình định kỳ thực chất."
  },
  {
    label: "Hướng dẫn thẩm tra lý lịch kết nạp Đảng",
    documentType: "Hướng dẫn",
    author: "Ủy ban Kiểm tra Trung ương",
    excerpt: "Quy trình thẩm tra lý lịch tỉ mỉ, khách quan và thủ tục kết nạp quần chúng ưu tú đảm bảo chặt chẽ, rút ngắn thời gian xử lý xuống không quá 15 ngày làm việc."
  }
];

export const PARTY_STYLE_QUICK_RULES = [
  {
    rule: "Thuật ngữ chuẩn xác",
    notes: "Ưu tiên: Cấp ủy, Chi bộ, Ban thường vụ, Kiểm tra giám sát, Người đứng đầu, Quần chúng ưu tú."
  },
  {
    rule: "Cụm từ chủ đạo",
    notes: "Nêu bật: 'Chủ trương, đường lối, chính sách...', 'Phẩm chất chính trị...', 'Nguyên tắc tập trung dân chủ...'"
  },
  {
    rule: "Bắt đầu bằng Căn cứ",
    notes: "Bắt buộc bắt đầu bằng: 'Căn cứ Điều lệ Đảng...', 'Căn cứ Quy chế...', 'Căn cứ Quy định số...'"
  },
  {
    rule: "Phong cách Ưu điểm",
    notes: "Độc lập, chủ động, kịp thời xây dựng kế hoạch, tổ chức nghiêm túc, hoàn thành xuất sắc nhiệm vụ."
  },
  {
    rule: "Phong cách Khuyết điểm",
    notes: "Nói rõ khuyết điểm không né tránh: Còn nể nang, cảm tính, dĩ hòa vi quý, ngại va chạm, bề nổi."
  },
  {
    rule: "Tìm rõ nguyên nhân",
    notes: "Tập trung lỗi nhận thức cán bộ chủ chốt, thiếu đôn đốc, thiếu tinh thần tự phê bình."
  },
  {
    rule: "Giải pháp dứt khoát",
    notes: "Động từ mạnh: Tiếp tục, tăng cường, kiên quyết, khẩn trương, chủ động, phân công cụ thể cơ quan."
  },
  {
    rule: "Tính từ, trạng từ mạnh",
    notes: "Ưu tiên: Kịp thời, thường xuyên, nghiêm túc, triệt để, khách quan, minh bạch, đồng bộ."
  },
  {
    rule: "Lượng hóa cụ thể",
    notes: "Tuyệt đối không dùng ước khoảng mơ hồ. Phải dùng số thực, tỷ lệ phần trăm (%), thời gian biểu tuyệt đối."
  },
  {
    rule: "Cách lập luận diễn dịch",
    notes: "Phân bổ chương mục: Phần lớn (I, II) -> Điều khoản -> Mục con rõ ràng, dứt khoát chuyển ý bằng in đậm."
  }
];
