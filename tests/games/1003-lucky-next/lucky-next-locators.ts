export const LuckyNextLocators = {
  lobbyGameIcon: "#icon-luckynext1",
  lobbyTimmer: "//*[@id='icon-luckynext1']/div/div[2]/div[1]",
  lobbyStatistic: "//*[@id='icon-luckynext1']/div/div[2]/div[2]",
  inGameUI: [
    "#img-game-name",
    "#icon-home",
    "#icon-menu",
],
  slideGameList: ["LUCKY NEXT 1","LUCKY NEXT 2","LUCKY THREE"],
  footerValues: {
    "//*[@class='text-center copyright']":
      "© 2024 Bản quyền thuộc về SABA xD",
  },
  placeBetMsg: {
    spb: "Bắt đầu cược",
    epb: "Dừng nhận cược",
    orb: "Công bố kết quả",
  },
  menuItems: ["#icon-pf", "#icon-history", "#icon-guide"],
  pfSettingControls:[
    "//*[@id='manual-seed']/parent::div",
    "#manual-client-seed",
    "//input[@id='random-seed']/parent::div",
    "#random-client-seed",
    "//div[@id='pf-setting']/div[1]/span"
  ],
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
  statisticbar: [
    '//*[@id="bar-statistic"]/div[1]/div[1]/span[1]',
    '//*[@id="bar-statistic"]/div[1]/div[2]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[1]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[2]/span[1]',
],
  statisticItems:{
  "//div[@id='bead-road']//span[contains(@class,'icon-over')]":"//*[@id='bar-statistic']/div[1]/div[1]/span[2]",
  "//div[@id='bead-road']//span[contains(@class,'icon-under')]": "//*[@id='bar-statistic']/div[1]/div[2]/span[2]"
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
  vnguide: `Giới Thiệu
Lucky Next 1 là trò chơi gồm 75 quả bóng được đánh số. Với tám lượt rút bóng, người chơi có cơ hội dự đoán và đặt cược vào cửa thắng trong từng lượt rút. Các quả bóng đã được rút sẽ không xuất hiện trong các lượt rút tiếp theo, dẫn đến sự thay đổi tỷ lệ cược trong mỗi lượt, đồng thời mang lại tính hấp dẫn cho trò chơi.
Cách Chơi
Giá trị của quả bóng trong mỗi lượt rút sẽ xác định kết quả của lượt rút đó.
Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho một lượt rút là @MAXBET.
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
Tiền thắng đã bao gồm tiền cược. Lưu ý, tổng tiền thắng không vượt quá @MAXWINPERROUND.
Tỷ lệ cược sẽ thay đổi và được cập nhật sau mỗi lượt rút bóng. Tỷ lệ cược và giới hạn cược tương ứng với các lựa chọn cược có giá trị trong khoảng như sau:
Lựa Chọn	Tỷ Lệ Cược
(Min - Max)	Giới Hạn Cược
(Min - Max)
Tài	1.75-2.14	@MM0
Xỉu	1.8-2.22	@MM1
Lẻ	1.75-2.14	@MM2
Chẵn	1.8-2.22	@MM3
Các Quy Định Trong Game
Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
