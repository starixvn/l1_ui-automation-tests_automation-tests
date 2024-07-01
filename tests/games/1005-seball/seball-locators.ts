export const seballLocators = {
  lobbyGameIcon: "#icon-seball1",
  lobbyTimmer: "//*[@id='icon-seball1']/div/div[2]/div[1]",
  lobbyStatistic: "//*[@id='icon-seball1']/div/div[2]/div[2]",
  inGameUI: [
    "#img-game-name",
    "#icon-home",
    "#icon-menu",
  ],
  slideGameList: ["SE BALL","BAC BALL 1","BAC BALL 2","LUCKY NEXT 1","LUCKY NEXT 2"],
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
    "#SeBall-choice-odd",
    "#SeBall-choice-even",
    "#SeBall-choice-red2",
    "#SeBall-choice-red3",
    "#SeBall-choice-red4",
    "#SeBall-choice-blue3",
    "#SeBall-choice-blue4",
  ],
  betchoices: {
    odd: "#SeBall-choice-odd",
    even: "#SeBall-choice-even",
    red2: "#SeBall-choice-red2",
    red3: "#SeBall-choice-red3",
    red4: "#SeBall-choice-red4",
    blue3: "#SeBall-choice-blue3",
    blue4: "#SeBall-choice-blue4",
    oddOwnBet: "#SeBall-odd-own-bet",
    evenOwnBet: "#SeBall-even-own-bet",
    red2OwnBet: "#SeBall-red2-own-bet",
    red3OwnBet: "#SeBall-red3-own-bet",
    red4OwnBet: "#SeBall-red4-own-bet",
    blue3OwnBet: "#SeBall-blue3-own-bet",
    blue4OwnBet: "#SeBall-blue4-own-bet",
  },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên Lẻ hoặc Chẵn.",
  },
  statisticbar: [
    '//*[@id="bar-statistic"]/div[1]/div[1]/span[1]',
    '//*[@id="bar-statistic"]/div[1]/div[2]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[1]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[2]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[3]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[4]/span[1]',
    '//*[@id="bar-statistic"]/div[2]/div[5]/span[1]',
],
  statisticItems: {
    "//div[@id='bead-road']//span[contains(@class,'icon-odd')]":
      "//*[@id='bar-statistic']/div[1]/div[1]/span[2]",
    "//div[@id='bead-road']//span[contains(@class,'icon-even')]":
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
  guideContent: `GiớiThiệuSeBalllàtròchơithuộcthểloạiNumberGamekếthợpcácyếutốcủagameXócĐĩanhằmđemđến1trảinghiệmhoàntoànmới.Trongmỗiphiên,4quảbóngsẽđượcrútngẫunhiên,ngườichơiđặtcượcvàocáctùychọnyêuthíchtrướckhibóngđượcrút.Kếtquảcủamỗiphiênđượcxácđịnhtrêntổngđiểmcủa4quảbóngđượcrútvàmàusắctươngứngtrêntừngbóng.CáchChơi4bóngđượcrútngẫunhiêntrongbộ60bóng,đượcđánhsốtừ01đến60.Ngườichơicóthểđặtcượcvàonhiềulựachọncùnglúcvàkhôngbịgiớihạnsốlầnđặtcược.Tổngtiềncượctốiđachomộtphiênlà`,
  vnguide: `Giới Thiệu
Se Ball là trò chơi thuộc thể loại Number Game kết hợp các yếu tố của game Xóc Đĩa nhằm đem đến 1 trải nghiệm hoàn toàn mới. Trong mỗi phiên, 4 quả bóng sẽ được rút ngẫu nhiên, người chơi đặt cược vào các tùy chọn yêu thích trước khi bóng được rút. Kết quả của mỗi phiên được xác định trên tổng điểm của 4 quả bóng được rút và màu sắc tương ứng trên từng bóng.
Cách Chơi
4 bóng được rút ngẫu nhiên trong bộ 60 bóng, được đánh số từ 01 đến 60.
Người chơi có thể đặt cược vào nhiều lựa chọn cùng lúc và không bị giới hạn số lần đặt cược. Tổng tiền cược tối đa cho một phiên là @MAXBET.
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
Tiền thắng đã bao gồm tiền cược. Lưu ý, tổng tiền thắng không vượt quá @MAXWINPERROUND.
Lựa Chọn	Tỷ Lệ Cược	Giới Hạn Cược
(Min - Max)
Lẻ	1.96:1	@MM0
Chẵn	1.96:1	@MM1
	14.4:1	@MM6
	14.4:1	@MM4
	3.75:1	@MM2
	3.75:1	@MM3
	2.4:1	@MM5
Các Quy Định Trong Game
Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược trong trường hợp hệ thống xảy ra bất kỳ lỗi kỹ thuật nào, bao gồm nhưng không hạn chế bởi các lỗi về phần mềm, phần cứng hoặc mạng kết nối.
Công ty có quyền hủy hoặc làm mất hiệu lực đối với mọi lượt cược khi nghi ngờ khách hàng có những hoạt động gian lận, tham gia lừa đảo, câu kết, rửa tiền hay các hoạt động bất hợp pháp khác.
Công ty có quyền hủy hoặc làm mất hiệu lực mọi lượt cược khi có lỗi (thuộc về con người hay yếu tố khác) hoặc sự cố hệ thống dẫn đến việc sử dụng sai tỷ lệ trả thưởng.
Tất cả các lượt cược vào các phiên cược đã được chấp nhận vẫn sẽ có hiệu lực ngay cả khi sau đó thành viên đăng xuất hoặc bị ngắt kết nối khỏi hệ thống game vì bất kỳ lý do gì.`,
};
