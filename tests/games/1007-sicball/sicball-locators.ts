export const sicballLocators = {
  lobbyGameIcon: "//img[@alt='icon-sicball']",
  lobbyTimmer: "//*[@id='icon-sicball']/div/div[2]/div[1]",
  lobbyStatistic: "//*[@id='icon-sicball']/div/div[2]/div[2]",
  inGameUI: ["#img-game-name", "#icon-list-game", "#icon-menu"],
  slideGameList: [
    "SIC BALL",
    "LUCKY THREE",
    "SE BALL",
  ],
  footerValues: {
    "//*[@class='text-center copyright']": "© 2024 Bản quyền thuộc về SABA xD",
  },
  placeBetMsg: {
    spb: "Bắt đầu cược",
    epb: "Dừng nhận cược",
    orb: "Công bố kết quả",
  },
  menuItems: ["#icon-pf", "#icon-history", "#icon-guide"],
  pfSettingControls: [
    "//*[@id='manual-seed']/parent::div",
    "#manual-client-seed",
    "//input[@id='random-seed']/parent::div",
    "#random-client-seed",
    "//div[@id='pf-setting']/div[1]/span",
  ],
  controlsE2E: [
    "#round-id",
    "#user-info_user-name",
    "#user-info_balance",
    "//div[contains(@class,'user-info_avatar')]",
    "#SicBall-choice-big",
    "#SicBall-choice-small",
    "#SicBall-choice-specific1",
    "#SicBall-choice-specific2",
    "#SicBall-choice-specific3",
    "#SicBall-choice-specific4",
    "#SicBall-choice-specific5",
    "#SicBall-choice-specific6",
  ],
  betchoices: {
    big: "#SicBall-choice-big",
    small: "#SicBall-choice-small",
    specific1: "#SicBall-choice-specific1",
    specific2: "#SicBall-choice-specific2",
    specific3: "#SicBall-choice-specific3",
    specific4: "#SicBall-choice-specific4",
    specific5: "#SicBall-choice-specific5",
    specific6: "#SicBall-choice-specific6",
    bigOwnBet: "#SicBall-big-own-bet",
    smallOwnBet: "#SicBall-small-own-bet",
    specific1OwnBet: "#SicBall-specific1-own-bet",
    specific2OwnBet: "#SicBall-specific2-own-bet",
    specific3OwnBet: "#SicBall-specific3-own-bet",
    specific4OwnBet: "#SicBall-specific4-own-bet",
    specific5OwnBet: "#SicBall-specific5-own-bet",
    specific6OwnBet: "#SicBall-specific6-own-bet",
  },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  statisticbar: [
    '//*[@id="bar-statistic"]/div[1]/div',
    '//*[@id="bar-statistic"]/div[2]/div[1]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[2]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[3]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[4]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[5]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[6]/span[1]',
  ],
  statisticItems: {
    "//div[@id='bead-road']//span[contains(@class,'icon-big')]":
      "//*[@id='bar-statistic']/div[1]//div[1]/span[2]",
    "//div[@id='bead-road']//span[contains(@class,'icon-small')]":
      "//*[@id='bar-statistic']/div[1]//div[2]/span[2]",
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
    balls: "//tbody/tr[1]/td[3]",
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
  guideContent: `GiớiThiệuSicBalllàmộttròchơihấpdẫnvớibabộbóng,mỗibộgồmsáuquảbóngđượcđánhsốtừ1đến6.Trongmỗiphiênchơicóbaquảbóngđượcrútngẫunhiên,ngườichơicóthểdựđoánvàđặtcượcvàocáclựachọnưathíchtrướckhibấtkỳquảbóngnàođượcrút`,
  vnguide: `Giới Thiệu
Sic Ball là một trò chơi hấp dẫn với ba bộ bóng, mỗi bộ gồm sáu quả bóng được đánh số từ 1 đến 6. Trong mỗi phiên chơi có ba quả bóng được rút ngẫu nhiên, người chơi có thể dự đoán và đặt cược vào các lựa chọn ưa thích trước khi bất kỳ quả bóng nào được rút.
Cách Chơi
Tổng điểm của ba quả bóng và giá trị trên mỗi quả bóng sẽ xác định kết quả của phiên chơi.
Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược.
Số tiền cược phải nằm trong khoảng 1-@MAXBET cho một lần đặt cược và tổng tiền cược tối đa cho 1 phiên là @MAXBET.
Người chơi chỉ có thể đặt cược vào Tài hoặc Xỉu.
Người chơi hoàn thành đặt cược trước khi thời gian đặt cược kết thúc và không thể hủy cược sau khi đặt.
Trả Thưởng
Tiền thắng sẽ được cộng vào tài khoản của người chơi ngay khi kết quả được công bố.
Tiền thắng được tính toán dựa trên tỷ lệ cược.
Tiền thắng đã bao gồm tiền cược. Lưu ý, tổng tiền thắng không vượt quá @MAXWINPERROUND.
Lựa Chọn	Điều Kiện Thắng	Tỷ Lệ Trả Thưởng
Tài	Tổng điểm ba quả bóng nằm trong khoảng 11-18.	1:1.96
Xỉu	Tổng điểm ba quả bóng nằm trong khoảng 3-10.	1:1.96
Bóng từ 1 đến 6	Bóng được chọn xuất hiện 1 lần.	1:2
Bóng được chọn xuất hiện 2 lần.	1:3.5
Bóng được chọn xuất hiện 3 lần.	1:6
Các Quy Định Trong Game
Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
