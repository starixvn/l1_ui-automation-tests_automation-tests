export const luckythreeLocators = {
  lobbyGameIcon: "#icon-luckythree",
  lobbyTimmer: "//*[@id='icon-luckythree']/div/div[2]/div[1]",
  lobbyStatistic: "//*[@id='icon-luckythree']/div/div[2]/div[2]",
  inGameUI: {
    "#img-game-name": "gamename.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
    "//button[contains(@class,'setting_button-setting')]/span": "iconsetting.png",
  },
  inGameUIE2E: {
    "#img-game-name": "gamename.png",
    "#icon-home": "icohome.png",
    "#icon-menu": "icomenu.png",
  },
  suggestionBets: {
    over: "Tiền cược khả dụng: 990Cược số tiền này?",
    under: "Tiền cược khả dụng: 990Cược số tiền này?",
    red2: "Tiền cược khả dụng: 990Cược số tiền này?",
    red3: "Tiền cược khả dụng: 990Cược số tiền này?",
    blue3: "Tiền cược khả dụng: 990Cược số tiền này?",
    blue2: "Tiền cược khả dụng: 240Cược số tiền này?",
  },
  slideGameList: ["SE BALL","BAC BALL 1","BAC BALL 2","LUCKY NEXT 1","LUCKY NEXT 2"],
  footerValues: {
    "//*[@class='text-center copyright']": "© 2024 Bản quyền thuộc về SABA xD",
  },
  placeBetMsg: {
    spb: "Bắt đầu cược",
    epb: "Dừng nhận cược",
    orb: "Công bố kết quả",
  },
  menuItems: [
    "#icon-pf",
    "#icon-history",
    "#icon-guide",
  ],
  pfSettingControls: [
    "//*[@id='manual-seed']/parent::div",
    "#manual-client-seed",
    "//input[@id='random-seed']/parent::div",
    "#random-client-seed",
    "//div[@id='pf-setting']/div[1]/span",
  ],
  chip: {
    // "#chip-1": "chip-1.png",
    // "#chip-5": "chip-5.png",
    "#chip-10": "chip-10.png",
    "#chip-20": "chip-20.png",
    "#chip-50": "chip-50.png",
    "#chip-100": "chip-100.png",
    "#chip-200": "chip-200.png",
    "#chip-500": "chip-500.png",
    "#chip-1000": "chip-1k.png",
    // "#chip-2000": "chip-2k.png",
  },
  controlsE2E: [
    "#round-id",
    "#user-info_user-name",
    "#user-info_balance",
    "//div[contains(@class,'user-info_avatar')]",
    "#LuckyThree-choice-over",
    "#LuckyThree-choice-under",
    "#LuckyThree-choice-red2",
    "#LuckyThree-choice-red3",
    "#LuckyThree-choice-blue3",
    "#LuckyThree-choice-blue2",
  ],
  betchoices: {
    over: "#LuckyThree-choice-over",
    under: "#LuckyThree-choice-under",
    red2: "#LuckyThree-choice-red2",
    red3: "#LuckyThree-choice-red3",
    blue3: "#LuckyThree-choice-blue3",
    blue2: "#LuckyThree-choice-blue2",
    overOwnBet: "#LuckyThree-over-own-bet",
    underOwnBet: "#LuckyThree-under-own-bet",
    red2OwnBet: "#LuckyThree-red2-own-bet",
    red3OwnBet: "#LuckyThree-red3-own-bet",
    blue3OwnBet: "#LuckyThree-blue3-own-bet",
    blue2OwnBet: "#LuckyThree-blue2-own-bet",
  },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  statisticbar: {
    '//*[@id="bar-statistic"]/div[1]/div[1]/span[1]': "over.png",
    '//*[@id="bar-statistic"]/div[1]/div[2]/span[1]': "under.png",
    '//*[@id="bar-statistic"]/div[2]/div[1]/span[1]': "blue3.png",
    '//*[@id="bar-statistic"]/div[2]/div[2]/span[1]': "blue2.png",
    '//*[@id="bar-statistic"]/div[2]/div[3]/span[1]': "red2.png",
    '//*[@id="bar-statistic"]/div[2]/div[4]/span[1]': "red3.png",
  },
  statisticItems: {
    "//div[@id='bead-road']//span[contains(@class,'scoreboard-elements_over')]":
      "//*[@id='bar-statistic']/div[1]/div[1]/span[2]",
    "//div[@id='bead-road']//span[contains(@class,'scoreboard-elements_under')]":
      "//*[@id='bar-statistic']/div[1]/div[2]/span[2]",
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
  guideContent: `GiớiThiệuLuckyThreelàtròchơigồm60quảbóngđượcđánhsố.Vớibalượtrútbóng,ngườichơicócơhộidựđoánvàđặtcượcvàolựachọnyêuthíchtrongtừnglượtrút.Cácquảbóngđãđượcrútsẽkhôngxuấthiệntrongcáclượtrúttiếptheodẫnđếnsựthayđổitỷlệcượctrongmỗilượt,đồngthờimanglạitínhhấpdẫnchotròchơi.CáchChơiTổngđiểmvàmàusắccủabaquảbóngtrongmỗilượtrútsẽxácđịnhkếtquảcủalượtrútđó.Ngườichơicóthểđặtcượcvàonhiềulựachọncùnglúcvàkhôngbịgiớihạnsốlầnđặtcược.Tổngtiềncượctốiđachomộtlượtrútlà`,
  vnguide1: `Giới Thiệu
  Lucky Three là trò chơi thuộc thể loại Number Game kết hợp các yếu tố của game Xóc Đĩa nhằm đem đến 1 trải nghiệm hoàn toàn mới. Trong mỗi phiên, 4 quả bóng sẽ được rút ngẫu nhiên, người chơi đặt cược vào các tùy chọn yêu thích trước khi bóng được rút. Kết quả của mỗi phiên được xác định trên tổng điểm của 4 quả bóng được rút và màu sắc tương ứng trên từng bóng.
  Cách Chơi
  4 bóng được rút ngẫu nhiên trong bộ 60 bóng, được đánh số từ 01 đến 60.
  Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho một phiên là 1,000.
  Trong một phiên, người chơi chỉ có thể đặt cược vào Chẵn hoặc Lẻ.
  Người chơi hoàn thành đặt cược trước khi thời gian đặt cược kết thúc và không thể hủy cược sau khi đặt.
  Lựa Chọn	Điều Kiện Thắng
  Lẻ	Tổng điểm 4 bóng là số lẻ.
  Chẵn	Tổng điểm 4 bóng là số chẵn.
    4 bóng đỏ
    4 bóng xanh
    3 bóng đỏ và 1 bóng xanh
    1 bóng đỏ và 3 bóng xanh
    2 bóng đỏ và 2 bóng xanh
  Trả Thưởng
  Tiền thắng sẽ được cộng vào tài khoản của người chơi ngay khi kết quả được công bố.
  Tiền thắng được tính toán dựa trên tỷ lệ cược.
  Tiền thắng đã bao gồm tiền cược. Lưu ý, tổng tiền thắng không vượt quá 25,000.
  Lựa Chọn	Tỷ Lệ Cược	Giới Hạn Cược
  (Min - Max)`,
  vnguide2: `Các Quy Định Trong Game
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
  Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
  Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
  Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
