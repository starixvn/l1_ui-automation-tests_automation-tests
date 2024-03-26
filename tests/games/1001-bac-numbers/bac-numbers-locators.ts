export const BacNumbersLocators = {
  lobbyGameIcon: "#icon-bacball1",
  inGameUI: {
    "#img-game-name": "gamename.png",
    "#icon-pf": "icopf.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
    "//div[contains(@class,'game-container bet-setting_container')]": "default-chip.png"
  },
  quickBetState: ["quickBetOff.png", "quickBetOn.png"],
  inGameUIE2E: {
    "#img-game-name": "gamename.png",
    "#icon-pf": "icopf.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
  },
  footerValues: {
    "//*[@class='text-center copyright']":
      "© 2024 Bản quyền thuộc về SABA New Number Game",
  },
  placeBetMsg: {
    spb: "Bắt đầu cược",
    epb: "Dừng nhận cược",
    orb: "Công bố kết quả",
  },
  menuItems: [
    "#icon-sound-off",
    "#sound-settings",
    "#icon-history",
    "#icon-guide",
  ],
  pfSettingControls:[
    "//*[@id='manual-seed']/parent::div",
    "#manual-client-seed",
    "//input[@id='random-seed']/parent::div",
    "#random-client-seed",
    "//div[@id='pf-setting']/div[1]/span"
  ],
  chip:  {
    "#chip-10": "chip-10.png",
    "#chip-20": "chip-20.png",
    "#chip-50": "chip-50.png",
    "#chip-100": "chip-100.png",
    "#chip-200": "chip-200.png",
    "#chip-500": "chip-500.png",
    "#chip-1000": "chip-1k.png",
    "#chip-2000": "chip-2k.png",
    "#chip-4000": "chip-4k.png",
    "#chip-5000": "chip-5k.png",
    "#chip-10000": "chip-10k.png",
    // "#chip-20000": "chip-20k.png",
    // "#chip-40000": "chip-40k.png",
    // "#chip-50000": "chip-50k.png",
    // "#chip-100000": "chip-100k.png",
    // "#chip-200000": "chip-200k.png",
  },
  controlsE2E: [
    "#round-id",
    "#user-info_user-name",
    "#user-info_balance",
    "//div[contains(@class,'user-info_avatar')]",
    "#BacBall-choice-player",
    "#BacBall-choice-banker",
    "#BacBall-choice-tie",
  ],
  betchoices: {
    player: "#BacBall-choice-player",
    banker: "#BacBall-choice-banker",
    tie: "#BacBall-choice-tie",
  },
  betchip: { Chip1: "", Chip10: "" },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên Người Chơi hoặc Nhà Cái.",
  },
  quickbetMessage:{
    "//div[contains(@class,'quick-bet-hint_message')]": "Tính năng Cược Nhanh cho phép bạn đặt cược trực tiếp chỉ với một cú click chuột hoặc một chạm vào các cửa cược mong muốn. Bạn có muốn bật tính năng này?",
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
  ticketDetail: {
    drawId: "//div[@id='bet-detail']/div[2]/div[1]/div[1]/span",
    player: "//div[@id='bet-detail']/div[2]/div[1]/div[2]/span[2]",
    banker: "//div[@id='bet-detail']/div[2]/div[1]/div[3]/span[2]",
    choice: "//div[@id='bet-detail']//tbody/tr[1]/td[2]",
    odds: "//div[@id='bet-detail']//tbody/tr[1]/td[3]",
    amount: "//div[@id='bet-detail']//tbody/tr[1]/td[4]",
    winAmount: "//div[@id='bet-detail']//tbody/tr[1]/td[5]",
  },
  guideContent: `GiớiThiệuBacBalllàtròchơigồmhaibộbóng`,
  vnguide1: `Giới Thiệu
  Bac Ball là trò chơi gồm hai bộ bóng, mỗi bộ 30 bóng, một cho Người Chơi và một cho Nhà Cái. Với bốn lượt rút bóng, người chơi có cơ hội dự đoán và đặt cược vào cửa thắng trong từng lượt rút. Các quả bóng đã được rút sẽ không xuất hiện trong các lượt rút tiếp theo, dẫn đến sự thay đổi tỷ lệ cược trong mỗi lượt, đồng thời mang lại tính hấp dẫn cho trò chơi.
  Cách Chơi
  Trong mỗi lượt rút, một quả bóng sẽ được rút ngẫu nhiên cho Người Chơi và Nhà Cái. Kết quả của lượt rút được xác định dựa trên giá trị các quả bóng đã được rút.
  Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho một lượt rút là 10,000. Lưu ý, người chơi không được đặt cược trên cả hai cửa Người Chơi và Nhà Cái.
  Người chơi hoàn thành đặt cược trước khi thời gian đặt cược kết thúc và không thể hủy cược sau khi đặt.
  Lựa Chọn	Điều Kiện Thắng
  Người Chơi	Giá trị trên quả bóng của Người Chơi lớn hơn của Nhà Cái.
  Nhà Cái	Giá trị trên quả bóng của Nhà Cái lớn hơn của Người Chơi.
  Hòa	Giá trị trên quả bóng của Người Chơi và Nhà Cái bằng nhau.
  Trả Thưởng
  Tiền thắng sẽ được cộng vào tài khoản của người chơi ngay khi kết quả được công bố.
  Tiền thắng được tính toán dựa trên tỷ lệ cược.
  Tiền thắng đã bao gồm tiền cược. Lưu ý, tổng tiền thắng không vượt quá 50,000.
  Tỷ lệ cược sẽ thay đổi và được cập nhật sau mỗi lượt rút bóng. Tỷ lệ cược và giới hạn cược tương ứng với các lựa chọn cược có giá trị trong khoảng như sau:
  Lựa Chọn	Tỷ Lệ Cược
  (Min - Max)	Giới Hạn Cược
  (Min - Max)
  Người Chơi`,
  vnguide2: `Trong trường hợp kết quả Hòa, người chơi sẽ được hoàn lại toàn bộ số tiền cược đặt vào hai cửa Người Chơi, Nhà Cái.
  Các Quy Định Trong Game
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
  Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
  Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
