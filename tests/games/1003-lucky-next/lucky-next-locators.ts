export const LuckyNextLocators = {
  lobbyGameIcon: "#icon-luckynext1",
  lobbyTimmer: "//*[@id='icon-luckynext1']/div/div[2]/div[1]",
  lobbyStatistic: "//*[@id='icon-luckynext1']/div/div[2]/div[2]",
  inGameUI: {
    "#img-game-name": "gamename.png",
    "#icon-pf": "icopf.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
  },
  inGameUIE2E: {
    "#img-game-name": "gamename.png",
    "#icon-pf": "icopf.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
  },
  suggestionBets:{odd: "Tiền cược khả dụng: 1,990Cược số tiền này?", even: "Tiền cược khả dụng: 1,990Cược số tiền này?", over: "Tiền cược khả dụng: 1,990Cược số tiền này?", under: "Tiền cược khả dụng: 1,990Cược số tiền này?"},
  slideGameList: ["LUCKY NEXT 1","LUCKY NEXT 2","BAC BALL 1","BAC BALL 2"],
  footerValues: {
    "//*[@class='text-center copyright']":
      "© 2024 Bản quyền thuộc về SABA xD",
  },
  placeBetMsg: {
    spb: "Bắt đầu cược",
    epb: "Dừng nhận cược",
    orb: "Công bố kết quả",
  },
  menuItems: [
    "#music-settings",
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
    "#chip-1": "chip-1.png",
    "#chip-5": "chip-5.png",
    "#chip-10": "chip-10.png",
    // "#chip-20": "chip-20.png",
    "#chip-50": "chip-50.png",
    "#chip-100": "chip-100.png",
    "#chip-200": "chip-200.png",
    "#chip-500": "chip-500.png",
    "#chip-1000": "chip-1k.png",
    "#chip-2000": "chip-2k.png",
    // "#chip-4000": "chip-4k.png",
    // "#chip-5000": "chip-5k.png",
    // "#chip-10000": "chip-10k.png",
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
    "#NextBall-choice-over",
    "#NextBall-choice-under",
    "#NextBall-choice-odd",
    "#NextBall-choice-even",
  ],
  betchoices: {
    odd: "#NextBall-choice-odd",
    even: "#NextBall-choice-even",
    under: "#NextBall-choice-under",
    over: "#NextBall-choice-over",
    oddOwnBet: "#NextBall-odd-own-bet",
    evenOwnBet: "#NextBall-even-own-bet",
    underOwnBet: "#NextBall-under-own-bet",
    overOwnBet: "#NextBall-over-own-bet",

  },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  statisticbar: {
    '//*[@id="bar-statistic"]/div[1]/div[1]/span[1]': "over.png",
    '//*[@id="bar-statistic"]/div[1]/div[2]/span[1]': "under.png",
    '//*[@id="bar-statistic"]/div[2]/div[1]/span[1]': "odd.png",
    '//*[@id="bar-statistic"]/div[2]/div[2]/span[1]': "even.png",
  },
  statisticItems:{
  "//div[@id='bead-road']//span[contains(@class,'scoreboard-elements_over')]":"//*[@id='bar-statistic']/div[1]/div[1]/span[2]",
  "//div[@id='bead-road']//span[contains(@class,'scoreboard-elements_under')]": "//*[@id='bar-statistic']/div[1]/div[2]/span[2]"
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
    ball: "//tbody/tr[1]/td[3]/div[1]/div[1]",
    amount: "//tbody/tr[1]/td[4]",
    winAmount: "//tbody/tr[1]/td[5]",
  },
  ticketDetail: {
    drawId: "//div[@id='bet-detail']/div[2]/div[1]/div[1]/span",
    ball: "//div[@id='bet-detail']/div[2]/div[1]/div[2]/div",
    choice: "//div[@id='bet-detail']//tbody/tr[1]/td[2]",
    odds: "//div[@id='bet-detail']//tbody/tr[1]/td[3]",
    amount: "//div[@id='bet-detail']//tbody/tr[1]/td[4]",
    winAmount: "//div[@id='bet-detail']//tbody/tr[1]/td[5]",
  },
  guideContent: `GiớiThiệuLuckyNext1làtròchơigồm75quảbóng`,
  vnguide1: `Giới Thiệu
  Lucky Next 1 là trò chơi gồm 75 quả bóng được đánh số. Với tám lượt rút bóng, người chơi có cơ hội dự đoán và đặt cược vào cửa thắng trong từng lượt rút. Các quả bóng đã được rút sẽ không xuất hiện trong các lượt rút tiếp theo, dẫn đến sự thay đổi tỷ lệ cược trong mỗi lượt, đồng thời mang lại tính hấp dẫn cho trò chơi.
  Cách Chơi
  Giá trị của quả bóng trong mỗi lượt rút sẽ xác định kết quả của lượt rút đó.
  Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho một lượt rút là 2,000.
  Người chơi không được đặt cược trên cả hai cửa Tài và Xỉu, hay cả hai cửa Chẵn và Lẻ.
  Người chơi hoàn thành đặt cược trước khi thời gian đặt cược kết thúc và không thể hủy cược sau khi đặt.
  Lựa Chọn	Điều Kiện Thắng
  Tài	Giá trị trên quả bóng nằm trong khoảng 38-75.
  Xỉu	Giá trị trên quả bóng nằm trong khoảng 1-37.
  Lẻ	Giá trị trên quả bóng là số lẻ.
  Chẵn	Giá trị trên quả bóng là số chẵn.
  Trả Thưởng
  Tiền thắng sẽ được cộng vào tài khoản của người chơi ngay khi kết quả được công bố.
  Tiền thắng được tính toán dựa trên tỷ lệ cược.
  Tiền thắng đã bao gồm tiền cược. Lưu ý, tổng tiền thắng không vượt quá 50,000.
  Tỷ lệ cược sẽ thay đổi và được cập nhật sau mỗi lượt rút bóng. Tỷ lệ cược và giới hạn cược tương ứng với các lựa chọn cược có giá trị trong khoảng như sau:
  Lựa Chọn	Tỷ Lệ Cược
  (Min - Max)	Giới Hạn Cược
  (Min - Max)`,
  vnguide2: `Các Quy Định Trong Game
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
  Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
  Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
