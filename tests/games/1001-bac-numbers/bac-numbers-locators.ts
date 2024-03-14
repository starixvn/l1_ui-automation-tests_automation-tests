export const BacNumbersLocators = {
  inGameUI: {
    "#img-game-name": "gamename.png",
    "#icon-pf": "icopf.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
  },
  inGameValues: {
    "//*[@class='text-center copyright']":
      "Copyright © 2024 SABA New Number Game",
  },
  menuItems: [
    "#icon-sound-off",
    "#sound-settings",
    "#icon-history",
    "#icon-guide",
  ],
  betchoices: {
    player: "#BacBall-choice-player",
    banker: "#BacBall-choice-banker",
    tie: "#BacBall-choice-tie",
  },
  betchip: { Chip1: "", Chip10: "" },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên player hoặc banker.",
  },
  statisticbar: {
    '//*[@id="bar-statistic"]/div[1]/span[1]': "p.png",
    '//*[@id="bar-statistic"]/div[2]/span[1]': "b.png",
    '//*[@id="bar-statistic"]/div[3]/span[1]': "t.png",
  },
  historyHeader: {
    "//thead//th[1]": "Thời Gian",
    "//thead//th[2]": "Phiên",
    "//thead//th[3]": "Kết Quả",
    "//thead//th[4]": "Tổng Cược",
    "//thead//th[5]": "Thắng",
  },
  ticketHistory: {
    drawId: "//tbody/tr[1]/td[2]",
    player: "//tbody/tr[1]/td[3]/div[1]/div[1]",
    banker: "//tbody/tr[1]/td[3]/div[1]/div[2]",
    amount: "//tbody/tr[1]/td[4]",
    winAmount: "//tbody/tr[1]/td[5]",
  },
  guideContent: `Giới Thiệu
  Trò chơi Bac Ball bao gồm hai bộ số, mỗi bộ gồm 75 số từ 01 đến 75, một bộ cho Người Chơi và một bộ cho Nhà Cái. Trò chơi bao gồm bốn lượt rút bóng, người chơi sẽ dự đoán và đặt cược trên giá trị bóng rút ra cho Người Chơi và Nhà Cái trong mỗi lượt. Để tạo thêm sự hứng thú cho trò chơi, các bóng đã rút trong các lượt trước không được bao gồm trong các lượt sau.
  Cách Chơi
  Trong mỗi lượt rút, một quả bóng sẽ được rút ngẫu nhiên cho từng Người Chơi và Nhà Cái. Kết quả của lượt rút được xác định dựa trên giá trị các quả bóng đã được rút.
  Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho 1 phiên là 20,000. Lưu ý, người chơi không được đặt cược trên cả hai cửa Người Chơi và Nhà Cái.
  All bets must be placed before betting time expires, and they cannot be canceled.
  Lựa Chọn	Mô Tả
  Người Chơi	Giá trị trên quả bóng của Nhà Con lớn hơn của Nhà Cái
  Nhà Cái	Giá trị trên quả bóng của Nhà Cái lớn hơn của Nhà Con
  Hòa	Giá trị trên quả bóng của Nhà Cái và Nhà Con bằng nhau
  Trả Thưởng
  Hệ thống sẽ tiến hành trả thưởng ngay sau khi phiên chơi có kết quả.
  Tiền thắng được tính toán dựa trên tỷ lệ trả thưởng và đã bao gồm tiền cược. Lưu ý tổng tiền thắng sẽ không vượt quá 0.
  Tỷ lệ cược sẽ thay đổi sau mỗi lượt rút bóng. Tỷ lệ cược và Giới hạn cược có giá trị tương ứng với các lựa chọn cược như sau:
  Lựa Chọn	Tỷ Lệ Cược
  (Min - Max)	Giới Hạn Cược
  (Min - Max)
  Người Chơi	0-0	10-20,000
  Nhà Cái	0-0	10-20,000
  Hòa	0-0	10-2,000
  Trong trường hợp kết quả Hòa, người chơi sẽ được hoàn lại số tiền cược đặt vào 2 cửa Người Chơi, Nhà Cái.
  Các Quy Định Trong Game
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
  Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
  Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
