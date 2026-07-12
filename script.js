console.log("[DEBUG] script.js loaded and executing!");
// ===== CONFIGURING STATIC APP DATA =====
function generateImgArray(prefix, start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(`${prefix}${i}.JPG`);
  }
  return arr;
}

const ROOM_DATABASE = {
  1: {
    name: "Phòng trưng bày 01",
    subtitle: "Phú Giáo trên đường phát triển",
    subtitleEN: "Phu Giao on the path of development",
    views: [
      "anhphong1/anhtoanphong1/anhtoanphong1.1.JPG",
      "anhphong1/anhtoanphong1/anhtoanphong1.2.JPG"
    ],
    audio: "",
    description: `
      <p>Phòng trưng bày 01 giới thiệu tổng quan về huyện Phú Giáo trên con đường xây dựng và phát triển. Nơi đây lưu giữ các hình ảnh, hiện vật về sự thay đổi diện mạo kinh tế, xã hội địa phương qua các thời kỳ.</p>
    `,
    descriptionEN: `
      <p>Exhibition Room 01 introducing an overview of Phu Giao district on its path of construction and development. It houses images and artifacts illustrating the transformation of local socio-economic aspects throughout different periods.</p>
    `,
    artifacts: [
      {
        id: "room1_marker1",
        name: "Tư liệu phát triển kinh tế, xã hội Phú Giáo",
        nameEN: "Phu Giao Socio-Economic Development Documents",
        viewIndex: 0,
        xRatio: 0.24,
        yRatio: 0.70,
        audio: "",
        description: `
          <p>Khu vực trưng bày tập hợp các biểu đồ, số liệu thống kê và hình ảnh tư liệu phản ánh kết quả phát triển kinh tế, văn hóa và xã hội của huyện Phú Giáo qua các giai đoạn đổi mới.</p>
        `,
        descriptionEN: `
          <p>The display area collects charts, statistical data, and documentary photographs reflecting the economic, cultural, and social development achievements of Phu Giao district through regional renovation periods.</p>
        `,
        images: generateImgArray("anhphong1/anhhienvat1/anhhienvat1.", 1, 48)
      },
      {
        id: "room1_marker2",
        name: "Mô hình sa bàn tổng quan di tích",
        nameEN: "Mansion General Mockup Model",
        viewIndex: 0,
        xRatio: 0.53,
        yRatio: 0.61,
        audio: "",
        description: `
          <p>Mô hình sa bàn 3D chi tiết mô phỏng sơ đồ di tích Dinh Tỉnh Trưởng Phước Thành cùng khuôn viên xung quanh, giúp khách tham quan dễ dàng hình dung toàn bộ cấu trúc địa thế của khu di tích.</p>
        `,
        descriptionEN: `
          <p>Detailed 3D mockup model showing the mapping of Phuoc Thanh Governor's Mansion and its surrounding grounds, helping visitors visualize the spatial layout of the historic site.</p>
        `,
        images: generateImgArray("anhphong1/anhhienvat1/anhhienvat1.", 49, 52)
      },
      {
        id: "room1_marker3",
        name: "Hình ảnh hoạt động văn hóa, giáo dục địa phương",
        nameEN: "Local Culture & Education Activities",
        viewIndex: 1,
        xRatio: 0.405,
        yRatio: 0.53,
        audio: "",
        description: `
          <p>Hình ảnh ghi lại các sự kiện văn hóa nghệ thuật, phong trào thi đua dạy và học, cùng các hoạt động cộng đồng nổi bật của nhân dân huyện Phú Giáo qua thời gian.</p>
        `,
        descriptionEN: `
          <p>Photographs capturing cultural events, teaching and learning movements, and outstanding community activities of the people of Phu Giao District over time.</p>
        `,
        images: generateImgArray("anhphong1/anhhienvat1/anhhienvat1.", 53, 69)
      },
      {
        id: "room1_marker4",
        name: "Danh sách lãnh đạo và cán bộ thời kỳ trước",
        nameEN: "List of Past Leaders & Officers",
        viewIndex: 1,
        xRatio: 0.54,
        yRatio: 0.55,
        audio: "",
        description: `
          <p>Bảng danh chính lưu danh các cán bộ lãnh đạo, đảng viên và chiến sĩ cách mạng tiêu biểu có đóng góp quan trọng trong các thời kỳ kháng chiến và kiến thiết xây dựng quê hương Phú Giáo.</p>
        `,
        descriptionEN: `
          <p>Honor board listing executive leaders, party members, and outstanding revolutionary soldiers with significant contributions to the resistance wars and growth of Phu Giao.</p>
        `,
        images: generateImgArray("anhphong1/anhhienvat1/anhhienvat1.", 70, 72)
      },
      {
        id: "room1_marker5",
        name: "Hiện vật lịch sử và tư liệu xây dựng",
        nameEN: "Historical Artifacts & Construction Records",
        viewIndex: 1,
        xRatio: 0.885,
        yRatio: 0.57,
        audio: "",
        description: `
          <p>Tủ kính lưu giữ các kỷ vật, công văn chỉ đạo, bản vẽ quy hoạch cùng tư liệu hiện vật ghi dấu chặng đường đấu tranh và kiến thiết huyện Phú Giáo qua nhiều thế hệ.</p>
        `,
        descriptionEN: `
          <p>Glass display cases preserving relics, official directives, urban plans, and artifacts marking the path of struggle and construction of Phu Giao district over generations.</p>
        `,
        images: generateImgArray("anhphong1/anhhienvat1/anhhienvat1.", 73, 116)
      }
    ],
    available: true
  },
  2: {
    name: "Phòng trưng bày 02",
    subtitle: "Quê hương, đất nước, con người và cuộc đấu tranh chống thực dân Pháp",
    subtitleEN: "Homeland, Country, People and the anti-French colonialist struggle",
    views: [
      "anhphong2/anhtoanphong2/anhtoanphong2.1.JPG",
      "anhphong2/anhtoanphong2/anhtoanphong2.2.png",
      "anhphong2/anhtoanphong2/anhtoanphong2.3.png"
    ],
    audio: "audiophong2.mp3",

    description: `
      <p>Tại đây trưng bày một số tài liệu, bản đồ, hình ảnh và hiện vật tiêu biểu về quê hương, đất nước, con người Phú Giáo cùng cuộc đấu tranh bền bỉ chống thực dân Pháp xâm lược.</p>
    `,
    descriptionEN: `
      <p>This section showcases typical documents, maps, photographs, and artifacts about the homeland, country, and people of Phu Giao, alongside their persistent struggle against the French colonialist invasion.</p>
    `,
    artifacts: [
      {
        id: "room2_marker1",
        name: "Hiện vật trưng bày phòng 2 - Nhóm 1",
        nameEN: "Room 2 Exhibits - Group 1",
        viewIndex: 1,
        xRatio: 0.615,
        yRatio: 0.505,
        audio: "",
        description: `
          <p>Tài liệu, bản đồ giới thiệu về dân cư và địa bàn hoạt động. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Documents and maps depicting the population and area of activity. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong2/anhhienvat2/anhhienvat2.1.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.2.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.3.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.4.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.5.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.6.JPG"
        ]
      },
      {
        id: "room2_marker2",
        name: "Hiện vật trưng bày phòng 2 - Nhóm 2",
        nameEN: "Room 2 Exhibits - Group 2",
        viewIndex: 2,
        xRatio: 0.499,
        yRatio: 0.450,
        audio: "",
        description: `
          <p>Tranh vẽ tư liệu lịch sử và tủ trưng bày khí giới tự tạo thời kỳ kháng chiến chống Pháp. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Historical documentary paintings and a display cabinet of homemade weapons during the anti-French resistance. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong2/anhhienvat2/anhhienvat2.7.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.8.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.9.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.10.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.11.JPG",
          "anhphong2/anhhienvat2/anhhienvat2.12.JPG"
        ]
      }
    ],
    available: true
  },
  3: {
    name: "Phòng trưng bày 03",
    subtitle: "Dân – Quân Phú Giáo trong cuộc kháng chiến chống Mỹ",
    subtitleEN: "Phu Giao Soldiers and People in the anti-American resistance war",
    views: [
      "anhphong3/anhtoanphong3/IMG_8712.JPG"
    ],
    audio: "audiophong3.mp3",

    description: `
      <p>Tại đây trưng bày một số tài liệu, bản đồ, hình ảnh và hiện vật tiêu biểu về lịch sử dân và quân Phú Giáo oai hùng trong cuộc kháng chiến chống đế quốc Mỹ cứu nước đầy gian khổ.</p>
    `,
    descriptionEN: `
      <p>Displays representative documents, maps, photos, and artifacts illustrating the heroic history of Phu Giao's soldiers and people during the arduous anti-American resistance war for national salvation.</p>
    `,
    artifacts: [
      {
        id: "room3_marker1",
        name: "Hiện vật trưng bày phòng 3 - Nhóm 1",
        nameEN: "Room 3 Exhibits - Group 1",
        viewIndex: 0,
        xRatio: 0.305,
        yRatio: 0.420,
        audio: "",
        description: `
          <p>Các hình ảnh và tranh tư liệu lịch sử mô tả trận chiến quyết liệt. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Historical images and paintings depicting the fierce battle. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong3/anhhienvat3/anhhienvat3.5.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.6.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.7.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.8.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.9.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.10.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.11.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.12.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.13.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.14.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.15.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.16.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.17.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.18.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.19.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.20.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.21.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.22.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.23.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.24.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.25.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.26.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.27.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.28.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.29.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.30.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.31.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.32.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.33.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.34.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.35.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.36.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.37.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.38.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.39.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.40.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.41.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.42.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.43.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.44.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.45.JPG"
        ]
      },
      {
        id: "room3_marker2",
        name: "Hiện vật trưng bày phòng 3 - Nhóm 2",
        nameEN: "Room 3 Exhibits - Group 2",
        viewIndex: 0,
        xRatio: 0.699,
        yRatio: 0.490,
        audio: "",
        description: `
          <p>Bảng vàng danh dự vinh danh Bà mẹ Việt Nam Anh hùng của huyện Phú Giáo. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Roll of Honor dedicating the Heroic Vietnamese Mothers of Phu Giao District. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong3/anhhienvat3/anhhienvat3.46.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.47.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.48.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.49.JPG"
        ]
      },
      {
        id: "room3_marker3",
        name: "Hiện vật trưng bày phòng 3 - Nhóm 3",
        nameEN: "Room 3 Exhibits - Group 3",
        viewIndex: 0,
        xRatio: 0.778,
        yRatio: 0.785,
        audio: "",
        description: `
          <p>Tủ kính trưng bày trang thiết bị quân nhu như mũ sắt, quân trang của chiến sĩ. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Display cabinet containing military equipment, steel helmets, and gear of soldiers. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong3/anhhienvat3/anhhienvat3.1.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.2.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.3.JPG",
          "anhphong3/anhhienvat3/anhhienvat3.4.JPG"
        ]
      }
    ],
    available: true
  },
  4: {
    name: "Phòng trưng bày 04",
    subtitle: "Khu Trù Mật - Ấp chiến lược kiểu mới của Mỹ - Ngụy",
    subtitleEN: "The Agrovilles - New-style Strategic Hamlets of the US-Diem regime",
    views: [
      "anhphong4/anhtoanphong4/anhtoanphong4.1.JPG",
      "anhphong4/anhtoanphong4/anhtoanphong4.2.png",
      "anhphong4/anhtoanphong4/anhtoanphong4.3.JPG"
    ],
    audio: "audiophong4.mp3",

    description: `
      <p>Tại đây trưng bày một số hình ảnh, hiện vật về Khu Trù Mật và Ấp chiến lược kiểu mới của Mỹ - Ngụy tại Phước Thành xưa.</p>
    `,
    descriptionEN: `
      <p>Displays photographs and artifacts about the Agroville and the new-type Strategic Hamlet constructed by the US-Diem regime in Phuoc Thanh in the past.</p>
    `,
    artifacts: [
      {
        id: "room4_marker1",
        name: "Hiện vật trưng bày phòng 4 - Nhóm 1",
        nameEN: "Room 4 Exhibits - Group 1",
        viewIndex: 0,
        xRatio: 0.347,
        yRatio: 0.555,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc tủ trưng bày số 1 phòng 4. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display cabinet 1 in Room 4. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong4/anhhienvat4/anhhienvat4.5.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.6.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.7.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.8.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.9.JPG"
        ]
      },
      {
        id: "room4_marker2",
        name: "Hiện vật trưng bày phòng 4 - Nhóm 2",
        nameEN: "Room 4 Exhibits - Group 2",
        viewIndex: 0,
        xRatio: 0.573,
        yRatio: 0.540,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc khu vực trưng bày số 2 phòng 4. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display area 2 in Room 4. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong4/anhhienvat4/anhhienvat4.1.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.2.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.3.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.4.JPG"
        ]
      },
      {
        id: "room4_marker3",
        name: "Hiện vật trưng bày phòng 4 - Nhóm 3",
        nameEN: "Room 4 Exhibits - Group 3",
        viewIndex: 0,
        xRatio: 0.771,
        yRatio: 0.574,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc tủ trưng bày số 3 phòng 4. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display cabinet 3 in Room 4. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong4/anhhienvat4/anhhienvat4.23.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.24.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.25.JPG"
        ]
      },
      {
        id: "room4_marker4",
        name: "Hiện vật trưng bày phòng 4 - Nhóm 4",
        nameEN: "Room 4 Exhibits - Group 4",
        viewIndex: 1,
        xRatio: 0.608,
        yRatio: 0.570,
        audio: "",
        description: `
          <p>Các tư liệu, hình ảnh lịch sử thuộc khu vực trưng bày số 4 phòng 4. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Historical documents and images belonging to display area 4 in Room 4. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong4/anhhienvat4/anhhienvat4.10.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.11.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.12.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.13.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.14.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.15.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.16.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.17.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.18.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.19.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.20.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.21.JPG",
          "anhphong4/anhhienvat4/anhhienvat4.22.JPG"
        ]
      }
    ],
    available: true
  },
  5: {
    name: "Phòng trưng bày 05",
    subtitle: "Chiến thắng Phước Thành",
    subtitleEN: "The Phuoc Thanh Victory",
    views: [
      "anhphong5/anhtoanphong5/anhtoanphong5.1.JPG",
      "anhphong5/anhtoanphong5/anhtoanphong5.2.JPG",
      "anhphong5/anhtoanphong5/anhtoanphong5.3.JPG",
      "anhphong5/anhtoanphong5/anhtoanphong5.4.JPG",
      "anhphong5/anhtoanphong5/anhtoanphong5.5.JPG"
    ],
    audio: "audiophong5.mp3",

    description: `
      <p>Tại đây trưng bày một số hình ảnh, hiện vật về Chiến Thắng Phước Thành vẻ vang.</p>
    `,
    descriptionEN: `
      <p>Showcases historical photographs and artifacts detailing the glorious Phuoc Thanh victory.</p>
    `,
    artifacts: [
      {
        id: "room5_marker1",
        name: "Hiện vật trưng bày phòng 5 - Nhóm 1",
        nameEN: "Room 5 Exhibits - Group 1",
        viewIndex: 0,
        xRatio: 0.288,
        yRatio: 0.490,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc tủ trưng bày số 1 phòng 5. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display cabinet 1 in Room 5. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong5/anhhienvat5/anhhienvat5.1.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.2.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.3.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.4.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.5.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.6.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.7.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.8.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.9.JPG"
        ]
      },
      {
        id: "room5_marker2",
        name: "Hiện vật trưng bày phòng 5 - Nhóm 2",
        nameEN: "Room 5 Exhibits - Group 2",
        viewIndex: 1,
        xRatio: 0.169,
        yRatio: 0.570,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc khu vực trưng bày số 2 phòng 5. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display area 2 in Room 5. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong5/anhhienvat5/anhhienvat5.39.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.40.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.41.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.42.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.43.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.44.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.50.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.51.JPG"
        ]
      },
      {
        id: "room5_marker3",
        name: "Hiện vật trưng bày phòng 5 - Nhóm 3",
        nameEN: "Room 5 Exhibits - Group 3",
        viewIndex: 2,
        xRatio: 0.228,
        yRatio: 0.585,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc tủ trưng bày số 3 phòng 5. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display cabinet 3 in Room 5. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong5/anhhienvat5/anhhienvat5.45.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.46.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.47.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.48.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.49.JPG"
        ]
      },
      {
        id: "room5_marker4",
        name: "Hiện vật trưng bày phòng 5 - Nhóm 4",
        nameEN: "Room 5 Exhibits - Group 4",
        viewIndex: 3,
        xRatio: 0.310,
        yRatio: 0.450,
        audio: "",
        description: `
          <p>Các tư liệu, hình ảnh lịch sử thuộc sa bàn hoặc mô hình trung tâm phòng 5. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Historical documents and images belonging to the center map or base model in Room 5. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong5/anhhienvat5/anhhienvat5.10.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.11.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.12.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.13.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.14.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.15.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.16.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.17.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.18.JPG"
        ]
      },
      {
        id: "room5_marker5",
        name: "Hiện vật trưng bày phòng 5 - Nhóm 5",
        nameEN: "Room 5 Exhibits - Group 5",
        viewIndex: 3,
        xRatio: 0.729,
        yRatio: 0.500,
        audio: "",
        description: `
          <p>Mẫu hiện vật thuộc tủ trưng bày số 5 phòng 5. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Sample exhibits belonging to display cabinet 5 in Room 5. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong5/anhhienvat5/anhhienvat5.19.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.20.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.21.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.22.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.23.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.24.JPG"
        ]
      },
      {
        id: "room5_marker6",
        name: "Hiện vật trưng bày phòng 5 - Nhóm 6",
        nameEN: "Room 5 Exhibits - Group 6",
        viewIndex: 4,
        xRatio: 0.551,
        yRatio: 0.520,
        audio: "",
        description: `
          <p>Hình ảnh, hiện vật thuộc tủ trưng bày số 6 phòng 5. Nội dung thuyết minh chi tiết đang được cập nhật...</p>
        `,
        descriptionEN: `
          <p>Images and artifacts belonging to display cabinet 6 in Room 5. Detailed description is being updated...</p>
        `,
        images: [
          "anhphong5/anhhienvat5/anhhienvat5.25.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.26.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.27.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.28.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.29.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.30.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.31.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.32.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.33.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.34.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.35.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.36.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.37.JPG",
          "anhphong5/anhhienvat5/anhhienvat5.38.JPG"
        ]
      }
    ],
    available: true
  }
};

// Main interactive Dinh image dimensions (1200x900)
const DIATICS_MAP = {
  src: "anhdinh/dinhtinhtruong.png",
  width: 1210,
  height: 864,
  roomPins: [
    { roomId: 1, x: 519, y: 601 }, // Phòng 1
    { roomId: 2, x: 617, y: 605 }, // Phòng 2
    { roomId: 3, x: 790, y: 596 }, // Phòng 3
    { roomId: 4, x: 520, y: 465 }, // Phòng 4
    { roomId: 5, x: 781, y: 461 }  // Phòng 5
  ]
};

// Global Gallery of the Dinh
const DINH_GALLERY_IMAGES = [
  "anhdinh/dinhtinhtruong.png",
  "anhdinh/dinh-tinh-truong-phuoc-thanh-diem-den-du-lich-thu-vi-tren-vung-que-phu-giao-3-1655399170.jpg",
  "anhdinh/0967C44491EF8086B5772E2A2DD1C1C7.jpg",
  "anhdinh/IMG_8815.JPG",
  "anhdinh/IMG_8816.JPG",
  "anhdinh/IMG_8817.JPG",
  "anhdinh/IMG_8820.JPG",
  "anhdinh/IMG_8821.JPG",
  "anhdinh/IMG_8822.JPG",
  "anhdinh/IMG_8823.JPG",
  "anhdinh/IMG_8824.JPG",
  "anhphong1/anhtoanphong/anhtoanphong1.1.png"
];

// Global parameters
let currentViewMode = "building"; // "building" | "room"
let activeRoomId = null;
let currentViewIndex = 0; // for room image slideshow
let activeOverlayImage = null;
let activeLeafletMarkers = [];
let currentViewWidth = 1200;
let currentViewHeight = 900;

// Selected artifact state
let currentArtifact = null;
let activeTab = "info";
let galleryIndex = 0;

// Leaflet Map Initialization
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -5,
  maxZoom: 5,
  zoomSnap: 0.05, // Cho phép zoom lẻ thập phân mượt mà không bị làm tròn
  zoomControl: false,
  attributionControl: false
});

// Configure default bounds
const baseBounds = [[0, 0], [DIATICS_MAP.height, DIATICS_MAP.width]];
map.fitBounds(baseBounds);

// Close drawer when clicking outside (on map canvas)
map.on('click', () => {
  if (document.body.classList.contains("drawer-open")) {
    hideArtifactDrawer();
  }
});

// Custom markers using premium SVG icon styling matching the blue mockups
function createCustomPin(color = "#1d87e5", text = "") {
  const isMobile = window.innerWidth <= 768;
  const w = isMobile ? 24 : 36;
  const h = isMobile ? 30 : 46;
  const anchor = isMobile ? [12, 30] : [18, 46];
  const fontSize = isMobile ? '9px' : '11px';
  const cx = isMobile ? 12 : 19;
  const cy = isMobile ? 12 : 19;
  const r1 = isMobile ? 5 : 8;
  const r2 = isMobile ? 2.5 : 4.5;

  return L.divIcon({
    className: 'custom-pin-element',
    html: `
      <div style="cursor: pointer; position: relative;">
        <svg width="${w}" height="${h}" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.3)); display: block;">
          <path d="M19 0C8.5 0 0 8.5 0 19C0 32.2 19 50 19 50C19 50 38 32.2 38 19C38 8.5 29.5 0 19 0Z" fill="${color}"/>
          <circle cx="19" cy="19" r="8" fill="#FFFFFF"/>
          <circle cx="19" cy="19" r="4.5" fill="${color}"/>
        </svg>
        ${text ? `<div style="position: absolute; top: ${isMobile ? '-14px' : '-20px'}; left: 50%; transform: translateX(-50%); background: white; white-space: nowrap; padding: ${isMobile ? '1px 5px' : '2px 8px'}; border-radius: 4px; border: 1.5px solid ${color}; font-size: ${fontSize}; font-weight: bold; color: ${color};">${text}</div>` : ''}
      </div>
    `,
    iconSize: [w, h],
    iconAnchor: anchor
  });
}

// Red Marker for Artifacts (pin with exclamation point)
function createArtifactPin() {
  const isMobile = window.innerWidth <= 768;
  const w = isMobile ? 22 : 34;
  const h = isMobile ? 28 : 42;

  return L.divIcon({
    className: 'artifact-pin-element',
    html: `
      <div style="cursor: pointer;">
        <svg width="${w}" height="${h}" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.35)); display: block;">
          <path d="M17 0C7.6 0 0 7.6 0 17C0 28.8 17 44 17 44C17 44 34 28.8 34 17C34 7.6 26.4 0 17 0Z" fill="#bd3107"/>
          <circle cx="17" cy="17" r="7" fill="#FFFFFF"/>
          <text x="17" y="21.5" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="11" fill="#bd3107">!</text>
        </svg>
      </div>
    `,
    iconSize: [w, h],
    iconAnchor: [w / 2, h]
  });
}

// ===== BUILDING OVERVIEW: Show 3D model + room panel =====
function showBuildingOverview() {
  currentViewMode = "building";
  activeRoomId = null;

  // Hide title capsule in building mode
  const headerCapsule = document.querySelector(".header-capsule");
  if (headerCapsule) headerCapsule.style.display = "none";

  // Hide room controls and info button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.style.display = "none";

  const sliderPrevBtn = document.getElementById("sliderPrevBtn");
  if (sliderPrevBtn) sliderPrevBtn.style.display = "none";

  const sliderNextBtn = document.getElementById("sliderNextBtn");
  if (sliderNextBtn) sliderNextBtn.style.display = "none";

  const roomInfoBtn = document.getElementById("roomInfoBtn");
  if (roomInfoBtn) roomInfoBtn.style.display = "none";

  const zoomCtrl = document.querySelector(".custom-zoom-control");
  if (zoomCtrl) zoomCtrl.style.display = "none";

  // Clear any Leaflet state
  if (activeOverlayImage) {
    try { map.removeLayer(activeOverlayImage); } catch (e) { }
    activeOverlayImage = null;
  }
  clearMarkers();

  // Hide Leaflet #map, show 3D model-viewer + room panel
  const mapEl = document.getElementById("map");
  if (mapEl) mapEl.style.display = "none";

  const dinhModel = document.getElementById("dinhModel");
  if (dinhModel) dinhModel.style.display = "block";

  const roomPanel = document.getElementById("roomPanel");
  if (roomPanel) roomPanel.style.display = "block";
}

// Load Room Display Mode
function loadRoomScreen(roomId) {
  // Auto close popups/drawers when opening a room
  hideArtifactDrawer();
  closeGlobalModal();
  pauseIntroAudio();

  const room = ROOM_DATABASE[roomId];
  if (!room) return;

  if (!room.available) {
    const updatingLabel = document.getElementById("updatingLabel");
    if (updatingLabel) {
      updatingLabel.textContent = currentLang === 'en' ? 'Exhibition Room 01' : room.name;
    }
    const updatingMsg = document.getElementById("updatingMessage");
    if (updatingMsg) {
      updatingMsg.innerHTML = currentLang === 'en'
        ? 'The content of this exhibition room is currently being updated.<br>Please check back later!'
        : 'Nội dung phòng này đang được cập nhật.<br>Vui lòng quay lại sau!';
    }
    const okBtn = document.querySelector(".updating-btn-ok");
    if (okBtn) {
      okBtn.textContent = currentLang === 'en' ? 'OK' : 'ĐỒNG Ý';
    }
    const updatingDialog = document.getElementById("updatingDialog");
    if (updatingDialog) updatingDialog.style.display = "flex";
    return;
  }

  activeRoomId = roomId;
  currentViewMode = "room";
  currentViewIndex = 0;

  // Update and show capsule title
  const titleNumberStr = currentLang === 'en'
    ? room.name.replace("Phòng trưng bày", "Exhibition Room")
    : room.name.replace("Phòng trưng bày", "Phòng trưng bày số");
  const subtitle = currentLang === 'en' ? room.subtitleEN : room.subtitle;
  const appTitle = document.getElementById("appTitle");
  if (appTitle) appTitle.textContent = `${titleNumberStr} - ${subtitle}`;

  const headerCapsule = document.querySelector(".header-capsule");
  if (headerCapsule) headerCapsule.style.display = "block";

  // Show back button, show zoom controls, show room info button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.style.display = "flex";

  const roomInfoBtn = document.getElementById("roomInfoBtn");
  if (roomInfoBtn) roomInfoBtn.style.display = "inline-flex";

  const zoomCtrl = document.querySelector(".custom-zoom-control");
  if (zoomCtrl) zoomCtrl.style.display = "flex";

  // Hide 3D model, hide room panel, show Leaflet map
  const dinhModel = document.getElementById("dinhModel");
  if (dinhModel) dinhModel.style.display = "none";

  const roomPanel = document.getElementById("roomPanel");
  if (roomPanel) roomPanel.style.display = "none";

  const mapEl = document.getElementById("map");
  if (mapEl) mapEl.style.display = "block";

  // Invalidate Leaflet size before rendering
  setTimeout(() => {
    map.invalidateSize();
    renderRoomView();
  }, 50);
}

// Render dynamic room view image & details
function renderRoomView() {
  const room = ROOM_DATABASE[activeRoomId];
  if (!room || !room.views.length) return;

  const currentViewSrc = room.views[currentViewIndex];

  // Setup room carousel arrows if multiple images exist
  if (room.views.length > 1) {
    document.getElementById("sliderPrevBtn").style.display = "flex";
    document.getElementById("sliderNextBtn").style.display = "flex";
  } else {
    document.getElementById("sliderPrevBtn").style.display = "none";
    document.getElementById("sliderNextBtn").style.display = "none";
  }

  // Load Image dimension dynamically before drawing overlay
  const imgTemp = new Image();
  imgTemp.src = currentViewSrc;
  imgTemp.onload = function () {
    const w = this.naturalWidth || 1920;
    const h = this.naturalHeight || 1080;
    currentViewWidth = w;
    currentViewHeight = h;

    if (activeOverlayImage) {
      map.removeLayer(activeOverlayImage);
    }
    clearMarkers();

    const bounds = [[0, 0], [h, w]];
    activeOverlayImage = L.imageOverlay(currentViewSrc, bounds).addTo(map);

    map.setMaxBounds(null);
    map.setView([h / 2, w / 2], -1);
    map.fitBounds(bounds);
    map.setMaxBounds(bounds);

    // Render Room Artifact markers
    room.artifacts.forEach(artifact => {
      if (artifact.viewIndex !== undefined && artifact.viewIndex !== currentViewIndex) {
        return;
      }
      const lat = h - (artifact.yRatio * h);
      const lng = artifact.xRatio * w;

      const name = currentLang === 'en' ? (artifact.nameEN || artifact.name) : artifact.name;
      const artPin = L.marker([lat, lng], { icon: createArtifactPin() }).addTo(map);
      artPin.bindTooltip(name, {
        permanent: false,
        direction: 'top',
        className: 'room-tooltip',
        offset: [0, -38]
      });

      artPin.on('click', () => {
        showArtifactDrawer(artifact);
      });

      activeLeafletMarkers.push(artPin);
    });
  };
}

// Carousel view arrows navigation inside room
function slideRoomView(direction) {
  const room = ROOM_DATABASE[activeRoomId];
  if (!room || !room.views.length) return;

  currentViewIndex = (currentViewIndex + direction + room.views.length) % room.views.length;
  renderRoomView();
}

// Return to building overview (3D model)
function navigateBackToBuilding() {
  hideArtifactDrawer();

  // Hide Leaflet room view and room controls
  document.getElementById("map").style.display = "none";
  document.getElementById("sliderPrevBtn").style.display = "none";
  document.getElementById("sliderNextBtn").style.display = "none";
  document.getElementById("roomInfoBtn").style.display = "none";

  showBuildingOverview();
}
function clearMarkers() {
  activeLeafletMarkers.forEach(marker => {
    try {
      if (marker) map.removeLayer(marker);
    } catch (e) {
      console.warn("Failed to remove marker from map:", e);
    }
  });
  activeLeafletMarkers = [];
}

// Trigger custom zoom action
function triggerZoom(step) {
  if (step > 0) {
    map.zoomIn();
  } else {
    map.zoomOut();
  }
}

// ===== MENU LIST CONFIG (Toggle vertical list on Menu Click) =====
function toggleMainMenu() {
  document.getElementById("verticalActions").classList.toggle("show");
}



// ===== POPUP DRAWER ACTIONS =====
function showArtifactDrawer(artifact) {
  currentArtifact = artifact;
  activeDrawerSliderIndex = 0;

  // Set title & badge details
  const room = ROOM_DATABASE[activeRoomId];
  const rName = currentLang === 'en' ? room.name.replace("Phòn trưng bày", "Exhibition Room").replace("Phòng trưng bày", "Exhibition Room") : room.name;
  const rSubtitle = currentLang === 'en' ? room.subtitleEN : room.subtitle;
  const aName = currentLang === 'en' ? (artifact.nameEN || artifact.name) : artifact.name;
  const aDesc = currentLang === 'en' ? (artifact.descriptionEN || artifact.description) : artifact.description;

  document.getElementById("drawerRoomName").textContent = rName;
  document.getElementById("drawerRoomSubtitle").textContent = rSubtitle;
  document.getElementById("drawerArtifactName").textContent = aName;

  // Insert description text
  document.getElementById("artifactTextDesc").innerHTML = aDesc;

  // Open drawer
  const drawer = document.getElementById("drawerPanel");
  drawer.classList.add("open");
  document.body.classList.add("drawer-open");

  // Hiển thị backdrop trên mobile
  if (window.innerWidth <= 768) {
    document.getElementById("mobileDrawerBackdrop").style.display = "block";
  }

  // Load Audio if source exists
  setupAudioPlayer(artifact.audio);

  // Setup tab images (chỉ chứa các ảnh hiện vật)
  setupArtifactImagesTab();

  // Reset tab to Info
  activateTab("info");
}

// Hiển thị thông tin tổng quan giới thiệu của phòng trong popup drawer
function showRoomInfo() {
  const room = ROOM_DATABASE[activeRoomId];
  if (!room) return;

  currentArtifact = null; // Set to null because we are introducing the room itself

  // Set titles
  const rName = currentLang === 'en' ? room.name.replace("Phòng trưng bày", "Exhibition Room") : room.name;
  const rSubtitle = currentLang === 'en' ? room.subtitleEN : room.subtitle;
  const aName = currentLang === 'en' ? "EXHIBITION ROOM INTRODUCTION" : "GIỚI THIỆU PHÒNG TRƯNG BÀY";
  const rDesc = currentLang === 'en' ? (room.descriptionEN || room.description) : room.description;

  document.getElementById("drawerRoomName").textContent = rName;
  document.getElementById("drawerRoomSubtitle").textContent = rSubtitle;
  document.getElementById("drawerArtifactName").textContent = aName;

  // Description
  const defaultEmptyDesc = currentLang === 'en'
    ? "<p style='font-style: italic; color:#8c7365;'>Details of this exhibition room are being updated...</p>"
    : "<p style='font-style: italic; color:#8c7365;'>Thông tin chi tiết của phòng này đang được cập nhật...</p>";
  document.getElementById("artifactTextDesc").innerHTML = rDesc || defaultEmptyDesc;

  // Load Audio timeline/narration if available
  setupAudioPlayer(room.audio);

  // Setup room images/videos inside Images Tab
  const grid = document.getElementById("artifactImagesGrid");
  grid.innerHTML = "";

  // Render videos first if available
  if (room.videos && room.videos.length) {
    room.videos.forEach((videoUrl) => {
      const videoWrapper = document.createElement("div");
      videoWrapper.className = "mosaic-item video-item";

      const videoEl = document.createElement("video");
      videoEl.src = videoUrl;
      videoEl.controls = true;
      videoEl.playsInline = true;

      videoEl.addEventListener("play", () => {
        // Pause all other video elements in the grid
        document.querySelectorAll("#artifactImagesGrid video").forEach(v => {
          if (v !== videoEl) v.pause();
        });
        // Pause narrator audio
        pauseAudio();
      });

      videoWrapper.appendChild(videoEl);
      grid.appendChild(videoWrapper);
    });
  }

  if (room.views && room.views.length) {
    room.views.forEach((v, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "mosaic-item";

      const viewsJson = JSON.stringify(room.views).replace(/"/g, "'");
      itemEl.setAttribute("onclick", `showLightbox(${viewsJson}, ${index})`);

      const imgEl = document.createElement("img");
      imgEl.src = v;
      imgEl.alt = `${room.name} view ${index + 1}`;
      imgEl.loading = "lazy";

      itemEl.appendChild(imgEl);
      grid.appendChild(itemEl);
    });
  }

  // If no views and no videos are available
  if ((!room.views || !room.views.length) && (!room.videos || !room.videos.length)) {
    const noImagesText = currentLang === 'en' ? "No exhibition room images available." : "Chưa có hình ảnh phòng.";
    grid.innerHTML = `<div style="grid-column: span 3; text-align: center; color: #8c7365; font-size: 13.5px; padding: 30px; font-style: italic;">${noImagesText}</div>`;
  }

  // Activate default info tab and slide open panel
  activateTab("info");
  document.getElementById("drawerPanel").classList.add("open");
  document.body.classList.add("drawer-open");

  if (window.innerWidth <= 768) {
    document.getElementById("mobileDrawerBackdrop").style.display = "block";
  }
}

function hideArtifactDrawer() {
  const drawer = document.getElementById("drawerPanel");
  drawer.classList.remove("open");
  document.body.classList.remove("drawer-open");

  // Ẩn backdrop trên mobile
  document.getElementById("mobileDrawerBackdrop").style.display = "none";

  // Pause audio playback
  pauseAudio();

  // Pause and reset all video elements in the grid
  document.querySelectorAll("#artifactImagesGrid video").forEach(v => {
    v.pause();
    v.currentTime = 0;
  });

  currentArtifact = null;
}

// Switch between Info and Image Tabs
function activateTab(tabId) {
  activeTab = tabId;
  const btnInfo = document.getElementById("btnTabInfo");
  const btnImages = document.getElementById("btnTabImages");
  const contentInfo = document.getElementById("tabContentInfo");
  const contentImages = document.getElementById("tabContentImages");

  if (tabId === "info") {
    btnInfo.classList.add("active");
    btnImages.classList.remove("active");
    contentInfo.style.display = "block";
    contentImages.style.display = "none";
  } else {
    btnInfo.classList.remove("active");
    btnImages.classList.add("active");
    contentInfo.style.display = "none";
    contentImages.style.display = "block";
  }
}

// Setup custom gallery photos inside tab (Chỉ chứa các ảnh của hiện vật này)
function setupArtifactImagesTab() {
  const grid = document.getElementById("artifactImagesGrid");
  grid.innerHTML = "";

  const sliderContainer = document.getElementById("drawerSliderContainer");
  const thumbsContainer = document.getElementById("drawerSliderThumbs");

  if (!currentArtifact || !currentArtifact.images || !currentArtifact.images.length) {
    const noImagesText = currentLang === 'en' ? "No exhibit images available." : "Chưa có hình ảnh hiện vật.";
    grid.innerHTML = `<div style="grid-column: span 3; text-align: center; color: #8c7365; font-size: 13.5px; padding: 30px; font-style: italic;">${noImagesText}</div>`;
    if (sliderContainer) sliderContainer.style.display = "none";
    return;
  }

  // Setup slider
  if (sliderContainer && thumbsContainer) {
    sliderContainer.style.display = "flex";
    thumbsContainer.innerHTML = "";

    currentArtifact.images.forEach((imgSrc, idx) => {
      const thumb = document.createElement("div");
      thumb.className = "drawer-slider-thumb" + (idx === activeDrawerSliderIndex ? " active" : "");
      thumb.onclick = () => {
        activeDrawerSliderIndex = idx;
        updateDrawerSlider();
      };

      const thumbImg = document.createElement("img");
      thumbImg.src = imgSrc;
      thumbImg.alt = `Thumb-${idx + 1}`;
      thumb.appendChild(thumbImg);
      thumbsContainer.appendChild(thumb);
    });

    updateDrawerSlider();
  }

  currentArtifact.images.forEach((imgSrc, idx) => {
    const item = document.createElement("div");
    item.className = "mosaic-item";
    item.onclick = () => {
      activeDrawerSliderIndex = idx;
      updateDrawerSlider();
      showLightbox(currentArtifact.images, idx);
    };

    const img = document.createElement("img");
    img.src = imgSrc;
    img.loading = "lazy";
    const altText = currentLang === 'en' ? `Exhibit image ${idx + 1}` : `Hình ảnh hiện vật ${idx + 1}`;
    img.alt = altText;

    item.appendChild(img);
    grid.appendChild(item);
  });
}

// ===== AUDIO TRANSCRIPT COREPLAYER =====
const audioElement = document.getElementById("coreAudioPlayer");
let isAudioPlaying = false;

function setupAudioPlayer(audioUrl) {
  const audioSec = document.getElementById("audioSection");
  if (!audioUrl) {
    audioSec.style.display = "none";
    audioElement.src = "";
    return;
  }

  // Handle English audio file name mapping (e.g., audiophong2.mp3 -> audiophong2EN.mp3)
  let finalUrl = audioUrl;
  if (currentLang === 'en') {
    finalUrl = audioUrl.replace(".mp3", "EN.mp3");
  }

  audioSec.style.display = "flex";
  audioElement.src = finalUrl;
  audioElement.load();

  // Reset UI
  document.getElementById("audioBarIndicator").style.width = "0%";
  document.getElementById("audioDurationLabel").textContent = "00:00";
  setAudioPlayState(false);
}

function setAudioPlayState(playState) {
  isAudioPlaying = playState;
  const playSvg = document.getElementById("svgPlay");
  const pauseSvg = document.getElementById("svgPause");
  if (isAudioPlaying) {
    playSvg.style.display = "none";
    pauseSvg.style.display = "block";
  } else {
    playSvg.style.display = "block";
    pauseSvg.style.display = "none";
  }
}

function controlAudio() {
  if (!audioElement.src) return;
  if (isAudioPlaying) {
    pauseAudio();
  } else {
    // Pause any playing videos when starting room/artifact audio
    document.querySelectorAll("#artifactImagesGrid video").forEach(v => v.pause());
    audioElement.play().then(() => {
      setAudioPlayState(true);
    }).catch(err => console.log("Audio play error: ", err));
  }
}

function pauseAudio() {
  audioElement.pause();
  setAudioPlayState(false);
}

audioElement.addEventListener("timeupdate", () => {
  if (!audioElement.duration) return;
  const curTime = audioElement.currentTime;
  const duration = audioElement.duration;
  const percentage = (curTime / duration) * 100;

  document.getElementById("audioBarIndicator").style.width = `${percentage}%`;
  document.getElementById("audioDurationLabel").textContent = formatAudioTime(curTime);
});

audioElement.addEventListener("ended", () => {
  setAudioPlayState(false);
  document.getElementById("audioBarIndicator").style.width = "0%";
});

function audioSeek(event) {
  if (!audioElement.duration || !audioElement.src) return;
  const progressArea = document.getElementById("audioProgressArea");
  const widthTotal = progressArea.clientWidth;
  const rect = progressArea.getBoundingClientRect();
  const clickedX = event.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickedX / widthTotal));
  audioElement.currentTime = ratio * audioElement.duration;
}

function formatAudioTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// ===== DRAWER SLIDESHOW CONTROL =====
let activeDrawerSliderIndex = 0;

function updateDrawerSlider() {
  if (!currentArtifact || !currentArtifact.images || !currentArtifact.images.length) return;
  
  const total = currentArtifact.images.length;
  const currentImg = currentArtifact.images[activeDrawerSliderIndex];
  
  const sliderImg = document.getElementById("drawerSliderImg");
  if (sliderImg) sliderImg.src = currentImg;
  
  const sliderCounter = document.getElementById("drawerSliderCounter");
  if (sliderCounter) sliderCounter.textContent = `${activeDrawerSliderIndex + 1} / ${total}`;
  
  // Highlight active thumbnail and scroll into view
  const thumbs = document.querySelectorAll(".drawer-slider-thumb");
  thumbs.forEach((thumb, idx) => {
    if (idx === activeDrawerSliderIndex) {
      thumb.classList.add("active");
      try {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (e) {
        // Fallback for older browsers (no block/inline options)
        thumb.scrollIntoView(false);
      }
    } else {
      thumb.classList.remove("active");
    }
  });
}

function slideDrawerImg(direction) {
  if (!currentArtifact || !currentArtifact.images || !currentArtifact.images.length) return;
  const total = currentArtifact.images.length;
  activeDrawerSliderIndex = (activeDrawerSliderIndex + direction + total) % total;
  updateDrawerSlider();
}

function openDrawerImgLightbox() {
  if (!currentArtifact || !currentArtifact.images || !currentArtifact.images.length) return;
  showLightbox(currentArtifact.images, activeDrawerSliderIndex);
}

// ===== LIGHTBOX POPUP IMAGE GALLERY VIEWER =====
let activeLightboxImages = [];
let activeLightboxIndex = 0;

function showLightbox(imgList, idx) {
  activeLightboxImages = imgList;
  activeLightboxIndex = idx;

  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "flex";

  updateLightboxContent();
}

function updateLightboxContent() {
  if (!activeLightboxImages.length) return;
  const currentImg = activeLightboxImages[activeLightboxIndex];

  const lbImg = document.getElementById("lightboxImg");
  lbImg.src = currentImg;

  // Counter
  const total = activeLightboxImages.length;
  document.getElementById("lightboxCounter").textContent = `${activeLightboxIndex + 1} / ${total}`;

  // Dynamic hide arrows on single image
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  if (total <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}

function changeLightboxIndex(direction) {
  if (!activeLightboxImages.length) return;
  activeLightboxIndex = (activeLightboxIndex + direction + activeLightboxImages.length) % activeLightboxImages.length;
  updateLightboxContent();
}

function dismissLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Lightbox keyboard binding & swipe
document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (lb.style.display === "flex") {
    if (e.key === "ArrowLeft") changeLightboxIndex(-1);
    if (e.key === "ArrowRight") changeLightboxIndex(1);
    if (e.key === "Escape") dismissLightbox();
  }
});

// Close popup dialog details for Room 2-5 updating
function closeDocUpdating() {
  document.getElementById("updatingDialog").style.display = "none";
}

// ===== DRAG SIZE FOR POPUP DRAWER (Kéo ra kéo vào) =====
const drawerEl = document.getElementById("drawerPanel");
const dragHandle = document.getElementById("drawerDragWidthHandle");
let isResizing = false;

dragHandle.addEventListener("mousedown", (e) => {
  isResizing = true;
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const screenW = window.innerWidth;
  const clientX = e.clientX;

  // Calculate new width relative to right side
  let newWidth = screenW - clientX;

  // Constrain width
  const minW = 320;
  const maxW = screenW * 0.85;
  if (newWidth < minW) newWidth = minW;
  if (newWidth > maxW) newWidth = maxW;

  drawerEl.style.width = `${newWidth}px`;
});

document.addEventListener("mouseup", () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }
});

// ===== MENU POPUPS ACTIONS =====
function viewSiteInfo() {
  const title = "Thông Tin Di Tích Dinh Tỉnh Trưởng Phước Thành";
  const body = `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524;">
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px;">1. Lịch sử hình thành</h3>
      <p style="margin-bottom:14px; text-align:justify; line-height:1.7;">
        <b>Dinh Tỉnh Trưởng Phước Thành</b> là tòa nhà hành chính đầu não của tỉnh Phước Thành – một đơn vị hành chính lâm thời tồn tại từ năm 1959 đến năm 1965 tại miền Nam Việt Nam. Toà nhà được khởi công và hoàn thành vào khoảng năm 1960.
      </p>
      
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px;">2. Kiến trúc độc đáo</h3>
      <p style="margin-bottom:14px; text-align:justify; line-height:1.7;">
        Đặc trưng của di tích Dinh Tỉnh Trưởng là phong cách kiến trúc Pháp thuộc kết hợp vật liệu và chi tiết trang trí Nam Bộ. Đứng từ xa, toà nhà vô cùng nổi bật với hệ cột trụ dẹt sơn cam màu gạch, ngọn tháp nhọn cổ kính vút cao và các bức bích hoạt vẽ tay đồ sộ tại hai cánh nhà tả - hữu.
      </p>
      
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px;">3. Ý nghĩa lịch sử</h3>
      <p style="text-align:justify; line-height:1.7;">
        Nơi đây từng ghi dấu những trận đánh hiển hách của quân và dân Phước Thành năm xưa, tiêu biểu là chiến thắng Phước Thành ngày 18/9/1961 chấn động địa cầu. Ngày nay, Dinh Tỉnh Trưởng Phước Thành là địa chỉ đỏ giáo dục lòng yêu nước và là di sản lịch sử quan trọng cần bảo tồn.
      </p>
    </div>
  `;
  openGlobalModal(title, body);
}

// Hình ảnh Dinh chứa toàn bộ ảnh của cả Dinh (mặt ngoài + các phòng trong)
function viewBuildingImages() {
  const title = "Hình Ảnh Dinh Tỉnh Trưởng Phước Thành";
  const body = `
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
      ${DINH_GALLERY_IMAGES.map((src, i) => `
        <div style="aspect-ratio: 1; overflow: hidden; border-radius: 6px; border: 1.5px solid #dca05f; cursor: pointer;" 
             onclick="showLightbox(DINH_GALLERY_IMAGES, ${i})">
          <img src="${src}" style="width: 100%; height: 100%; object-fit: cover;" alt="Hình ảnh Dinh ${i + 1}">
        </div>
      `).join("")}
    </div>
  `;
  openGlobalModal(title, body);
}

// ===== DIALOG ACTIONS FOR ROOMS =====
function handleMenuInfoClick() {
  if (currentViewMode === "building") {
    viewSiteInfo();
  } else if (currentViewMode === "room") {
    viewRoomInfo(activeRoomId);
  }
}

function handleMenuImagesClick() {
  if (currentViewMode === "building") {
    viewBuildingImages();
  } else if (currentViewMode === "room") {
    viewRoomImages(activeRoomId);
  }
}

// Hiển thị thông tin tổng quan của phòng
function viewRoomInfo(roomId) {
  const room = ROOM_DATABASE[roomId];
  if (!room) return;
  const title = `Thông Tin ${room.name.replace("Phòng trưng bày", "Phòng trưng bày số")}`;

  let audioPlayerHTML = "";
  if (room.audio) {
    audioPlayerHTML = `
      <div style="margin-top: 20px; padding: 14px; background: rgba(189, 49, 7, 0.04); border-radius: 8px; border: 1.5px dashed rgba(189, 49, 7, 0.2);">
        <p style="margin: 0 0 10px 0; font-weight: bold; color: #bd3107; font-size:13.5px; display: flex; align-items: center; gap: 6px;">
          <svg style="width:16px; height:16px; fill:#bd3107;" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg> 
          THUYẾT MINH PHÒNG TRƯNG BÀY:
        </p>
        <audio src="${room.audio}" controls style="width: 100%; outline: none;"></audio>
      </div>
    `;
  }

  const body = `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524; line-height: 1.7;">
      <h3 style="color:#bd3107; font-family:'Playfair Display',serif; margin-bottom:12px; font-size:18px;">
        Nội dung: ${room.subtitle}
      </h3>
      ${room.description || '<p style="font-style: italic; color:#8c7365;">Thông tin chi tiết của phòng này đang được cập nhật...</p>'}
      ${audioPlayerHTML}
    </div>
  `;
  openGlobalModal(title, body);
}

// Hiển thị hình ảnh tổng hợp của phòng (ảnh view chính + ảnh các hiện vật)
function viewRoomImages(roomId) {
  const room = ROOM_DATABASE[roomId];
  if (!room) return;

  // Thu thập mọi bức ảnh trong phòng
  let roomAllImages = [...room.views];
  room.artifacts.forEach(artifact => {
    if (artifact.images && artifact.images.length) {
      roomAllImages.push(...artifact.images);
    }
  });

  const title = currentLang === 'en'
    ? `Images of ${room.name.replace("Phòng trưng bày", "Exhibition Room")}`
    : `Hình Ảnh ${room.name.replace("Phòng trưng bày", "Phòng trưng bày số")}`;
  let gridHTML = "";

  if (!roomAllImages.length) {
    const emptyMsg = currentLang === 'en'
      ? "Exhibition room images are being updated..."
      : "Hình ảnh phòng trưng bày đang được cập nhật...";
    gridHTML = `<p style="text-align: center; color: #8c7365; font-style: italic; padding: 25px;">${emptyMsg}</p>`;
  } else {
    gridHTML = `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
        ${roomAllImages.map((src, i) => `
          <div style="aspect-ratio: 1; overflow: hidden; border-radius: 6px; border: 1.5px solid #dca05f; cursor: pointer;" 
               onclick="showLightbox(${JSON.stringify(roomAllImages).replace(/"/g, "'")}, ${i})">
            <img src="${src}" style="width: 100%; height: 100%; object-fit: cover;" alt="${currentLang === 'en' ? 'Room image' : 'Hình ảnh phòng'} ${i + 1}">
          </div>
        `).join("")}
      </div>
    `;
  }

  openGlobalModal(title, gridHTML);
}

function viewProjectDetails() {
  // Pause general guide audio when viewing project details
  pauseIntroAudio();

  const title = currentLang === 'en' ? "Digital Preservation Project Info" : "Thông Tin Dự Án Số Hoá";
  const body = currentLang === 'en' ? `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524; line-height:1.7;">
      <p style="margin-bottom:14px; text-align:justify;">
        The project <b>"Digitization of the Phuoc Thanh Governor's Mansion Red Address Historical Monument"</b> is part of a digital transformation initiative designed to preserve, archive, and promote local historical heritage to the general public.
      </p>
      
      <div style="background-color:rgba(189, 49, 7, 0.05); padding:16px; border-left:4px solid #bd3107; border-radius:4px; margin-bottom:16px;">
        <p style="font-weight:700; color:#bd3107; margin-bottom:6px;">Implemented by:</p>
        <p>Advanced Digital Skills Specialized Volunteers Team</p>
        <p>Economics Students green summer volunteer campaign &copy; 2026</p>
      </div>

      <p style="font-size:13.5px; color:#8c7365; font-style:italic;">
        All visual media, audio narration, and historical documents are referenced directly from the monument's management board and local media archives.
      </p>
    </div>
  ` : `
    <div style="font-family: inherit; font-size: 15px; color: #4e3524; line-height:1.7;">
      <p style="margin-bottom:14px; text-align:justify;">
        Dự án <b>"Số hoá địa chỉ đỏ di tích kiến trúc nghệ thuật Dinh Tỉnh Trưởng Phước Thành"</b> nằm trong khuôn khổ chương trình chuyển đổi số nhằm lưu trữ, bảo tồn và quảng bá di tích lịch sử đến quần chúng nhân dân.
      </p>
      
      <div style="background-color:rgba(189, 49, 7, 0.05); padding:16px; border-left:4px solid #bd3107; border-radius:4px; margin-bottom:16px;">
        <p style="font-weight:700; color:#bd3107; margin-bottom:6px;">Đơn vị thực hiện:</p>
        <p>Đội hình Chuyên Nâng cao Kỹ năng số</p>
        <p>Chiến dịch tình nguyện Mùa hè xanh sinh viên Kinh tế &copy; 2026</p>
      </div>

      <p style="font-size:13.5px; color:#8c7365; font-style:italic;">
        Mọi dữ liệu hình ảnh, âm thanh và tư liệu lịch sử được tham khảo trực tiếp từ ban quản lý di tích và phòng truyền thống văn hoá thông tin địa phương.
      </p>
    </div>
  `;
  openGlobalModal(title, body);
}

// Global modal dialog controls
function openGlobalModal(title, bodyHTML) {
  document.getElementById("globalModalTitle").textContent = title;
  document.getElementById("globalModalBody").innerHTML = bodyHTML;
  document.getElementById("globalModal").style.display = "flex";
}

function closeGlobalModal() {
  document.getElementById("globalModal").style.display = "none";

  // Dừng phát âm thanh thuyết minh phòng khi đóng modal
  const modalAudio = document.querySelector("#globalModalBody audio");
  if (modalAudio) {
    modalAudio.pause();
  }
}

// Close popup on click outside
window.addEventListener('click', (e) => {
  const gm = document.getElementById("globalModal");
  if (e.target === gm) {
    closeGlobalModal();
  }
});

// ===== INTRO AUDIO PLAYER =====
const introAudioEl = new Audio();
let introAudioPlaying = false;
let introAudioPart = 1;

function pauseIntroAudio() {
  if (introAudioPlaying) {
    introAudioEl.pause();
    introAudioPlaying = false;
    document.getElementById('introAudioPlayIcon').style.display = 'block';
    document.getElementById('introAudioPauseIcon').style.display = 'none';
  }
}

function toggleIntroAudio() {
  // If source isn't set yet, configure it to correct lang part 1
  if (!introAudioEl.src || introAudioEl.src === window.location.href || introAudioEl.src.includes('undefined')) {
    const langSuffix = currentLang === 'en' ? 'EN' : '';
    introAudioEl.src = `audiodinh1${langSuffix}.mp3`;
    introAudioEl.load();
    introAudioPart = 1;
  }

  // Pause any other playing room narrations or videos
  pauseAudio();
  document.querySelectorAll("#artifactImagesGrid video").forEach(v => v.pause());

  if (introAudioPlaying) {
    introAudioEl.pause();
    introAudioPlaying = false;
  } else {
    introAudioEl.play().then(() => {
      introAudioPlaying = true;
    }).catch(err => {
      console.log("Intro audio play error:", err);
    });
  }
  document.getElementById('introAudioPlayIcon').style.display = introAudioPlaying ? 'none' : 'block';
  document.getElementById('introAudioPauseIcon').style.display = introAudioPlaying ? 'block' : 'none';
}

introAudioEl.addEventListener('timeupdate', () => {
  if (!introAudioEl.duration) return;
  const pct = (introAudioEl.currentTime / introAudioEl.duration) * 100;
  document.getElementById('introAudioFill').style.width = pct + '%';
  const m = Math.floor(introAudioEl.currentTime / 60);
  const s = Math.floor(introAudioEl.currentTime % 60);
  document.getElementById('introAudioTime').textContent =
    `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
});

introAudioEl.addEventListener('ended', () => {
  if (introAudioPart === 1) {
    // Chain to part 2
    introAudioPart = 2;
    const langSuffix = currentLang === 'en' ? 'EN' : '';
    introAudioEl.src = `audiodinh2${langSuffix}.mp3`;
    introAudioEl.load();
    introAudioEl.play().then(() => {
      introAudioPlaying = true;
    }).catch(err => console.log("Intro audio part 2 play error:", err));
  } else {
    // Finished part 2
    introAudioPlaying = false;
    introAudioPart = 1;
    document.getElementById('introAudioPlayIcon').style.display = 'block';
    document.getElementById('introAudioPauseIcon').style.display = 'none';
    document.getElementById('introAudioFill').style.width = '0%';
  }
});

function introAudioSeek(event) {
  if (!introAudioEl.duration) return;
  const track = document.getElementById('introAudioTrack');
  const rect = track.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  introAudioEl.currentTime = ratio * introAudioEl.duration;
}

// ===== LANGUAGE SYSTEM =====
let currentLang = 'vi';
function setLang(lang) {
  currentLang = lang;
  document.getElementById('btnVI').classList.toggle('active', lang === 'vi');
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.querySelectorAll('[data-vi]').forEach(el => {
    const content = el.getAttribute('data-' + lang);
    if (content !== null) el.innerHTML = content;
  });

  // 1. Reset/switch General Guide Audio
  pauseIntroAudio();
  introAudioPart = 1;
  const langSuffix = currentLang === 'en' ? 'EN' : '';
  introAudioEl.src = `audiodinh1${langSuffix}.mp3`;
  introAudioEl.load();
  document.getElementById('introAudioFill').style.width = '0%';
  document.getElementById('introAudioTime').textContent = '00:00';

  // 2. Set backBtn and roomInfoBtn tooltips
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.title = lang === 'en' ? "Back to Mansion" : "Quay lại dinh";
  }
  const roomInfoBtn = document.getElementById("roomInfoBtn");
  if (roomInfoBtn) {
    roomInfoBtn.title = lang === 'en' ? "Exhibition room info" : "Thông tin phòng";
  }

  // 3. Update view status
  if (currentViewMode === 'room') {
    const room = ROOM_DATABASE[activeRoomId];
    if (room) {
      // Re-set room page title
      const titleNumberStr = currentLang === 'en'
        ? room.name.replace("Phòng trưng bày", "Exhibition Room")
        : room.name.replace("Phòng trưng bày", "Phòng trưng bày số");
      const subtitle = currentLang === 'en' ? room.subtitleEN : room.subtitle;
      document.getElementById("appTitle").textContent = `${titleNumberStr} - ${subtitle}`;

      // Re-render Leaflet maps, overlays, and pins in the new language
      renderRoomView();

      // Re-render open drawers if active
      if (document.body.classList.contains("drawer-open")) {
        if (currentArtifact) {
          showArtifactDrawer(currentArtifact);
        } else {
          showRoomInfo();
        }
      }
    }
  } else if (currentViewMode === 'building') {
    const title = currentLang === 'en'
      ? "Phuoc Thanh Governor's Mansion Historical Monument"
      : "Di Tích Lịch Sử Dinh Tỉnh Trưởng Phước Thành";
    document.getElementById("appTitle").textContent = title;
  }
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== MOBILE NAV TOGGLE =====
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('mobile-open');
}

// ===== PAGE NAVIGATION =====
function navigateToIntro() {
  // Auto close popups/drawers
  hideArtifactDrawer();
  closeGlobalModal();

  // Ẩn map, dừng audio
  const appEl = document.getElementById('appContainer');
  appEl.classList.remove('active');
  appEl.style.display = 'none';
  pauseAudio();

  // Hiện intro
  document.getElementById('introPage').classList.add('visible');
  document.getElementById('mainNavbar').classList.add('visible');
  document.body.classList.remove('map-mode');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('navIntro').classList.add('active');
  document.getElementById('navMap').classList.remove('active');
  document.getElementById('navLinks').classList.remove('mobile-open');
}

function navigateToMap() {
  // Reset scroll position to top to prevent vertical offset shifts
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Auto close popups/drawers
  hideArtifactDrawer();
  closeGlobalModal();

  // Stop intro page audio narration
  pauseIntroAudio();

  // Ẩn intro
  document.getElementById('introPage').classList.remove('visible');
  document.getElementById('navLinks').classList.remove('mobile-open');

  // Bật map-mode (overflow hidden)
  document.body.classList.add('map-mode');
  document.body.style.height = '100vh';

  // Hiện map
  const appEl = document.getElementById('appContainer');
  if (appEl) {
    appEl.style.display = 'block';
    appEl.classList.add('active');
  }

  // Luôn quay về sơ đồ 3d dinh chính đồng bộ ngay lập tức để tránh độ trễ layout
  showBuildingOverview();

  requestAnimationFrame(() => {
    try {
      map.invalidateSize();
    } catch (e) {
      console.warn("Failed to invalidate map size:", e);
    }
  });

  document.getElementById('navMap').classList.add('active');
  document.getElementById('navIntro').classList.remove('active');
}

// ===== LAUNCH APP (called from Splash Screen) =====
function launchApp() {
  const splash = document.getElementById('splashScreen');
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    // Hiện navbar + trang giới thiệu
    document.getElementById('mainNavbar').classList.add('visible');
    document.getElementById('introPage').classList.add('visible');
    document.body.classList.remove('map-mode');
  }, 800);
}

// ===== RESIZE HANDLER =====
window.addEventListener('resize', () => {
  // Only invalidate Leaflet when in room mode (map is visible)
  if (currentViewMode === 'room') {
    map.invalidateSize();
  }
});

// Lắng nghe sự kiện click trên bản đồ để hỗ trợ lấy toạ độ marker cực nhanh
map.on('click', function (e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  if (currentViewMode === "building") {
    const pixelX = Math.round(lng);
    const pixelY = Math.round(currentViewHeight - lat);
    console.log(`%c[TOẠ ĐỘ MẶT TIỀN DINH] => roomId: X, x: ${pixelX}, y: ${pixelY}`, "color: #1d87e5; font-weight: bold; font-size: 12px;");
  } else {
    // Với ảnh trong phòng, hiển thị toạ độ pixel kèm theo xRatio, yRatio cho dễ copy paste vào danh sách artifacts
    const pixelX = Math.round(lng);
    const pixelY = Math.round(currentViewHeight - lat);
    const xRatio = (lng / currentViewWidth).toFixed(4);
    const yRatio = ((currentViewHeight - lat) / currentViewHeight).toFixed(4);
    console.log(`%c[TOẠ ĐỘ TRONG PHÒNG] => pixel: x: ${pixelX}, y: ${pixelY} | Cấu hình: xRatio: ${xRatio}, yRatio: ${yRatio}`, "color: #bd3107; font-weight: bold; font-size: 12px;");
  }
});

// Gắn sự kiện click-to-log để hỗ trợ đo đạc toạ độ 3D thực tế
const modelViewerEl = document.getElementById('dinhModel');

if (modelViewerEl) {
  modelViewerEl.addEventListener('click', (event) => {
    const rect = modelViewerEl.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hit = modelViewerEl.positionAndNormalFromPoint(x, y);
    if (hit) {
      console.log(`%c[3D CLICK HIT] => Position: ${hit.position.x.toFixed(4)} ${hit.position.y.toFixed(4)} ${hit.position.z.toFixed(4)} | Normal: ${hit.normal.x.toFixed(4)} ${hit.normal.y.toFixed(4)} ${hit.normal.z.toFixed(4)}`, "color: #2e7d32; font-weight: bold; font-size: 13px;");
    }
  });

  // Vòng lặp kiểm tra thông minh để xử lý mô hình Three.js (Tránh lỗi cache, display:none trì hoãn load)
  let attempts = 0;
  const initInterval = setInterval(() => {
    attempts++;
    if (attempts > 300) { // Giới hạn 60 giây quét
      clearInterval(initInterval);
      return;
    }

    try {
      const sceneSymbol = Object.getOwnPropertySymbols(modelViewerEl).find(s => {
        const val = modelViewerEl[s];
        return val && (val.isScene || val.type === 'Scene');
      });
      const scene = sceneSymbol ? modelViewerEl[sceneSymbol] : null;

      if (attempts % 5 === 0) {
        console.log(`[THREE.JS DEBUG] Attempt: ${attempts}, sceneSymbol: ${sceneSymbol ? "Found" : "Null"}, scene: ${scene ? "Found" : "Null"}`);
      }

      if (!scene) return; // Tiếp tục chờ ở chu kỳ sau

      // 2. Tìm mesh chính của mô hình Dinh (Mesh_0) bằng cách duyệt toàn bộ scene
      let mainMesh = null;
      scene.traverse((child) => {
        if (child.isMesh && child.name === "Mesh_0") {
          mainMesh = child;
        }
      });

      if (attempts % 5 === 0) {
        console.log(`[THREE.JS DEBUG] Attempt: ${attempts}, mainMesh: ${mainMesh ? "Found" : "Null"}`);
      }

      if (!mainMesh) return; // Tiếp tục chờ model tải xong

      const modelRoot = mainMesh.parent || scene;

      // Khi đã tìm thấy mainMesh: dừng quét và tiến hành xử lý
      clearInterval(initInterval);
      console.log(`[THREE.JS] Đã tìm thấy mesh chính: ${mainMesh.name}. Bắt đầu xử lý...`);

      // === BƯỚC 1: XÓA/SAN PHẲNG MÁI CHE MẶT SAU (HỆ TOẠ ĐỘ LOCAL GLB: Y-HEIGHT, Z-DEPTH) ===
      const geometry = mainMesh.geometry;
      const position = geometry.attributes.position;
      const tempV = new THREE.Vector3();
      let modifiedCount = 0;

      for (let i = 0; i < position.count; i++) {
        tempV.fromBufferAttribute(position, i);

        // Trong tệp GLB gốc (đã được verify qua phân tích nhị phân):
        // Local Y là trục đứng (chiều cao), đáy là -0.8210, mái che dưới 6.7m tương đương Y < -0.186
        // Local Z là trục sâu (chiều sâu), phần nhô ra ở mặt sau tương đương Z < -0.473
        if (tempV.y < -0.186 && tempV.z < -0.473) {
          tempV.z = -0.473; // San phẳng mặt sau về Z = -0.473
          position.setXYZ(i, tempV.x, tempV.y, tempV.z);
          modifiedCount++;
        }
      }

      position.needsUpdate = true;
      geometry.computeVertexNormals();
      console.log(`[THREE.JS] Đã san phẳng ${modifiedCount} đỉnh mặt sau.`);

      // === BƯỚC 2: TẠO BỨC TƯỜNG MỎNG CHE MẶT SAU (HỆ TOẠ ĐỘ LOCAL CỦA MODELROOT) ===
      geometry.computeBoundingBox();
      const localSize = geometry.boundingBox.getSize(new THREE.Vector3());

      const localWallW = localSize.x * 0.94; // Chiều rộng khít mép viền bên (1.78)
      const localWallH = 0.582; // Chiều cao tường đứng (world 6.15m)
      const localWallD = 0.005; // Chiều dày tường mỏng (world 0.05m)

      // BoxGeometry(width, height, depth) -> (X=rộng, Y=cao, Z=dày)
      const coverWallGeo = new THREE.BoxGeometry(localWallW, localWallH, localWallD);
      const coverWallMat = new THREE.MeshStandardMaterial({
        color: 0xE7D5BC, // Tông màu kem ấm giống dinh-tinh-truong
        roughness: 0.9,
        metalness: 0.05,
        side: THREE.DoubleSide
      });
      const coverWall = new THREE.Mesh(coverWallGeo, coverWallMat);
      coverWall.name = "backWallCover";

      // Vị trí local chuẩn:
      // X = 0
      // Y = -0.478 (Tâm đứng của tường trên trục Y local: planter top -0.769 + H/2)
      // Z = -0.476 (Vị trí lùi sau world Z = -5.03)
      coverWall.position.set(0, -0.478, -0.476);
      coverWall.castShadow = true;
      coverWall.receiveShadow = true;

      // Xóa tường cũ trên modelRoot nếu có trước khi thêm mới
      const oldWall = modelRoot.getObjectByName("backWallCover");
      if (oldWall) {
        modelRoot.remove(oldWall);
      }

      modelRoot.add(coverWall);
      console.log("[THREE.JS] Đã tạo thành công bức tường mỏng đứng che phủ mặt sau.");

      // Yêu cầu model-viewer render lại
      modelViewerEl.requestUpdate();

    } catch (e) {
      console.error("[THREE.JS Error] Không thể xử lý mặt sau:", e);
      clearInterval(initInterval);
    }
  }, 200);
}

// ===== TOGGLE ROOM SELECTION PANEL (COLLAPSE/EXPAND) =====
function toggleRoomPanel() {
  const panel = document.getElementById("roomPanel");
  if (!panel) return;
  panel.classList.toggle("collapsed");

  const iconPath = document.getElementById("roomPanelTogglePath");
  if (iconPath) {
    if (panel.classList.contains("collapsed")) {
      // Down arrow for collapsed state
      iconPath.setAttribute("d", "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z");
    } else {
      // Up arrow for expanded state
      iconPath.setAttribute("d", "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z");
    }
  }
}

