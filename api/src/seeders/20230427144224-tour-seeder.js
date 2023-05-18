'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'Tours',
			[
				{
					name: 'Cửa lò - Quê bác',
					thumbnail:
						'https://firebasestorage.googleapis.com/v0/b/test-8b330.appspot.com/o/imagestour%2Fs%C3%A0i%20g%C3%B2n.jpg?alt=media&token=fd61c62a-6072-4fcf-9872-b667b2b4d852',
					thumbnailName: 'nghệ an.jpg',
					adultPrice: 500000,
					childPrice: 200000,
					babyPrice: 100000,
					trailer: `<iframe width="560" height="315" src="https://www.youtube.com/embed/fpt0YC6eHyA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
					tourDetail: `<h1 style="box-sizing: border-box; margin: 0px; font-size: 30px; font-family: Roboto, sans-serif; font-weight: bold; line-height: 35px; color: rgb(0, 0, 0); padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Kinh nghiệm về thăm quê Bác - Làng Sen</h1><p style="text-align: justify;"><strong style="box-sizing: border-box; font-weight: 700; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Nghệ An là quê hương của&nbsp;nhiều bậc kì tài nên không quá ngạc nhiên khi du khách tới Nghệ An đều&nbsp;muốn tham quan những địa danh gắn liền với các danh nhân này; trong đó&nbsp;làng Sen – quê hương của Chủ tịch Hồ Chí Minh là một điểm sáng.</strong></p><p style="text-align: justify;"></p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Nghệ An là mảnh đất có phong cảnh nên thơ hữu tình và con người hiền hòa đã tốn nhiều giấy mực của các nhà văn, nhà thơ. Đây cũng là quê hương của&nbsp;&nbsp;những con người kiệt xuất mà một trong số đó chính là vị lãnh tụ muôn vàn kính yêu của dân tộc Việt Nam: Hồ Chí Minh.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><div style="box-sizing: border-box; margin: 0px; padding: 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img alt="Kinh nghiệm về thăm quê Bác - Làng Sen" data-ck-zoom="yes" src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/07_2019/nha-bac.jpg" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 100%;"><span class="ck_desc_img" style="box-sizing: border-box; display: block; font-size: 14px; line-height: 20px; font-style: italic; padding: 5px 10px; color: rgb(51, 51, 51); background: rgb(245, 245, 245); max-width: 700px; margin: 0px auto;">Nhà Bác tại làng Sen</span></div><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Cách Thành phố Vinh khoảng 16km, làng Sen (Kim Liên) thuộc xã Kim Liên, huyện Nam Đàn&nbsp;là quê nội của Bác. Cậu bé Nguyễn Sinh Cung ấy đã&nbsp;lớn lên tại làng Sen, huyện Nam Đàn, tỉnh Nghệ An trước khi ra đi tìm đường cứu nước, trở thành người thay đổi vận mệnh của dân tộc. Còn<span>&nbsp;</span><em style="box-sizing: border-box;"><strong style="box-sizing: border-box; font-weight: 700;">quê Bác - Làng Sen</strong></em>&nbsp;giờ đây đã&nbsp;trở thành điểm du lịch nổi tiếng thu hút đông đảo&nbsp;du khách trong và ngoài nước,&nbsp;là 1 trong 4 di tích quan trọng bậc nhất cả nước và cũng là niềm tự hào của người dân xứ Nghệ. Gần thế kỷ trôi qua, không biết đã có bao nhiêu bước chân của những người con Việt Nam tìm đến với niềm thành kính và sự xúc động sâu xa từ trong tâm hồn mình.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Ngôi làng mang tên Làng Sen bởi luôn ngát hương sen mỗi độ tới mùa. Làng đẹp như một bức tranh yên bình, ngay từ trên đường dẫn vào nhà Bác, đôi bờ tre rì rào trong gió, hàng râm bụt đung đưa nhè nhẹ, hoa cau, hoa bưởi thơm nồng động lòng du khách.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><h2 style="box-sizing: border-box; font-family: Roboto, sans-serif; font-weight: bold; line-height: 1.1; color: rgb(0, 0, 0); margin: 0px; font-size: 17px; padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-size: 22px;"><strong style="box-sizing: border-box; font-weight: 700;">Thời gian về thăm quê Bác -&nbsp;làng Sen</strong></span></h2><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Bạn có thể đến làng Sen vào bất cứ thời điểm nào trong năm, mặc dù thời tiết Nghệ An nắng gay gắt khi vào hè nhưng nhiều du khách vẫn muốn<span>&nbsp;</span><em style="box-sizing: border-box;"><strong style="box-sizing: border-box; font-weight: 700;">về thăm quê Bác</strong></em>&nbsp;vào tháng&nbsp;5, khi mà đầm sen nở rộ, tỏa hương thơm ngát, mang lại cảm giác dễ chịu xua tan đi cái oi bức, ngột ngạt lúc này ở miền Trung. Khi nghe tiếng ve ngân vang, ngắm nhìn những đóa hoa sen nở rực rỡ chúng&nbsp;ta như được sống lại với những ngày thơ ấu của vị cha già dân tộc Việt Nam.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><div style="box-sizing: border-box; margin: 0px; padding: 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img alt="Kinh nghiệm về thăm quê Bác - Làng Sen" data-ck-zoom="yes" src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/07_2019/sen-que-bac.jpg" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 100%;"><span class="ck_desc_img" style="box-sizing: border-box; display: block; font-size: 14px; line-height: 20px; font-style: italic; padding: 5px 10px; color: rgb(51, 51, 51); background: rgb(245, 245, 245); max-width: 700px; margin: 0px auto;">Bạn nên về thăm quê Bác vào tháng 5, khi mùa sen nở rộ</span></div><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><h2 style="box-sizing: border-box; font-family: Roboto, sans-serif; font-weight: bold; line-height: 1.1; color: rgb(0, 0, 0); margin: 0px; font-size: 17px; padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-size: 22px;"><strong style="box-sizing: border-box; font-weight: 700;">Di chuyển đến làng Sen</strong></span></h2><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Từ Hà Nội và Thành phố Hồ Chí Minh, bạn có thể lựa chọn đi máy bay, xe khách hay tàu hỏa để đến Nghệ An. Tới thành phố Vinh,&nbsp;đi theo đường 49 đến cây số 13 rẽ vào con đường đất đỏ rợp bóng bạch đàn và những hàng phi lao xanh ngắt là đến làng Sen.<br style="box-sizing: border-box;">&nbsp;</p><h2 style="box-sizing: border-box; font-family: Roboto, sans-serif; font-weight: bold; line-height: 1.1; color: rgb(0, 0, 0); margin: 0px; font-size: 17px; padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-size: 22px;"><strong style="box-sizing: border-box; font-weight: 700;">Ở đâu khi về thăm quê Bác - làng Sen?</strong></span></h2><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Du khách&nbsp;dễ dàng tìm được nơi nghỉ chân và ăn uống tại Nghệ An, từ các nhà nghỉ bình dân có giá từ 200.000 đến những khách sạn 1 sao - 3 sao giá rẻ cũng như những khách sạn 4 sao, 5 sao sang trọng.</p><p></p>`,
					note: `<h1 style="box-sizing: border-box; margin: 0px; font-size: 30px; font-family: Roboto, sans-serif; font-weight: bold; line-height: 35px; color: rgb(0, 0, 0); padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Kinh nghiệm về thăm quê Bác - Làng Sen</h1><p style="text-align: justify;"><strong style="box-sizing: border-box; font-weight: 700; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Nghệ An là quê hương của&nbsp;nhiều bậc kì tài nên không quá ngạc nhiên khi du khách tới Nghệ An đều&nbsp;muốn tham quan những địa danh gắn liền với các danh nhân này; trong đó&nbsp;làng Sen – quê hương của Chủ tịch Hồ Chí Minh là một điểm sáng.</strong></p><p style="text-align: justify;"></p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Nghệ An là mảnh đất có phong cảnh nên thơ hữu tình và con người hiền hòa đã tốn nhiều giấy mực của các nhà văn, nhà thơ. Đây cũng là quê hương của&nbsp;&nbsp;những con người kiệt xuất mà một trong số đó chính là vị lãnh tụ muôn vàn kính yêu của dân tộc Việt Nam: Hồ Chí Minh.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><div style="box-sizing: border-box; margin: 0px; padding: 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img alt="Kinh nghiệm về thăm quê Bác - Làng Sen" data-ck-zoom="yes" src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/07_2019/nha-bac.jpg" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 100%;"><span class="ck_desc_img" style="box-sizing: border-box; display: block; font-size: 14px; line-height: 20px; font-style: italic; padding: 5px 10px; color: rgb(51, 51, 51); background: rgb(245, 245, 245); max-width: 700px; margin: 0px auto;">Nhà Bác tại làng Sen</span></div><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Cách Thành phố Vinh khoảng 16km, làng Sen (Kim Liên) thuộc xã Kim Liên, huyện Nam Đàn&nbsp;là quê nội của Bác. Cậu bé Nguyễn Sinh Cung ấy đã&nbsp;lớn lên tại làng Sen, huyện Nam Đàn, tỉnh Nghệ An trước khi ra đi tìm đường cứu nước, trở thành người thay đổi vận mệnh của dân tộc. Còn<span>&nbsp;</span><em style="box-sizing: border-box;"><strong style="box-sizing: border-box; font-weight: 700;">quê Bác - Làng Sen</strong></em>&nbsp;giờ đây đã&nbsp;trở thành điểm du lịch nổi tiếng thu hút đông đảo&nbsp;du khách trong và ngoài nước,&nbsp;là 1 trong 4 di tích quan trọng bậc nhất cả nước và cũng là niềm tự hào của người dân xứ Nghệ. Gần thế kỷ trôi qua, không biết đã có bao nhiêu bước chân của những người con Việt Nam tìm đến với niềm thành kính và sự xúc động sâu xa từ trong tâm hồn mình.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Ngôi làng mang tên Làng Sen bởi luôn ngát hương sen mỗi độ tới mùa. Làng đẹp như một bức tranh yên bình, ngay từ trên đường dẫn vào nhà Bác, đôi bờ tre rì rào trong gió, hàng râm bụt đung đưa nhè nhẹ, hoa cau, hoa bưởi thơm nồng động lòng du khách.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><h2 style="box-sizing: border-box; font-family: Roboto, sans-serif; font-weight: bold; line-height: 1.1; color: rgb(0, 0, 0); margin: 0px; font-size: 17px; padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-size: 22px;"><strong style="box-sizing: border-box; font-weight: 700;">Thời gian về thăm quê Bác -&nbsp;làng Sen</strong></span></h2><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Bạn có thể đến làng Sen vào bất cứ thời điểm nào trong năm, mặc dù thời tiết Nghệ An nắng gay gắt khi vào hè nhưng nhiều du khách vẫn muốn<span>&nbsp;</span><em style="box-sizing: border-box;"><strong style="box-sizing: border-box; font-weight: 700;">về thăm quê Bác</strong></em>&nbsp;vào tháng&nbsp;5, khi mà đầm sen nở rộ, tỏa hương thơm ngát, mang lại cảm giác dễ chịu xua tan đi cái oi bức, ngột ngạt lúc này ở miền Trung. Khi nghe tiếng ve ngân vang, ngắm nhìn những đóa hoa sen nở rực rỡ chúng&nbsp;ta như được sống lại với những ngày thơ ấu của vị cha già dân tộc Việt Nam.</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><div style="box-sizing: border-box; margin: 0px; padding: 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><img alt="Kinh nghiệm về thăm quê Bác - Làng Sen" data-ck-zoom="yes" src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/07_2019/sen-que-bac.jpg" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 100%;"><span class="ck_desc_img" style="box-sizing: border-box; display: block; font-size: 14px; line-height: 20px; font-style: italic; padding: 5px 10px; color: rgb(51, 51, 51); background: rgb(245, 245, 245); max-width: 700px; margin: 0px auto;">Bạn nên về thăm quê Bác vào tháng 5, khi mùa sen nở rộ</span></div><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">&nbsp;</p><h2 style="box-sizing: border-box; font-family: Roboto, sans-serif; font-weight: bold; line-height: 1.1; color: rgb(0, 0, 0); margin: 0px; font-size: 17px; padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-size: 22px;"><strong style="box-sizing: border-box; font-weight: 700;">Di chuyển đến làng Sen</strong></span></h2><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Từ Hà Nội và Thành phố Hồ Chí Minh, bạn có thể lựa chọn đi máy bay, xe khách hay tàu hỏa để đến Nghệ An. Tới thành phố Vinh,&nbsp;đi theo đường 49 đến cây số 13 rẽ vào con đường đất đỏ rợp bóng bạch đàn và những hàng phi lao xanh ngắt là đến làng Sen.<br style="box-sizing: border-box;">&nbsp;</p><h2 style="box-sizing: border-box; font-family: Roboto, sans-serif; font-weight: bold; line-height: 1.1; color: rgb(0, 0, 0); margin: 0px; font-size: 17px; padding: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span style="box-sizing: border-box; font-size: 22px;"><strong style="box-sizing: border-box; font-weight: 700;">Ở đâu khi về thăm quê Bác - làng Sen?</strong></span></h2><p style="box-sizing: border-box; margin: 0px; padding: 5px 0px; position: relative; background: rgb(255, 255, 255); z-index: 1; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 17px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">Du khách&nbsp;dễ dàng tìm được nơi nghỉ chân và ăn uống tại Nghệ An, từ các nhà nghỉ bình dân có giá từ 200.000 đến những khách sạn 1 sao - 3 sao giá rẻ cũng như những khách sạn 4 sao, 5 sao sang trọng.</p><p></p>`,
					map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7559.495897592519!2d105.55659067275887!3d18.67530324927596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139c5073f757c45%3A0xda807a33b553ce6a!2sKhu%20Di%20t%C3%ADch%20Kim%20Li%C3%AAn!5e0!3m2!1svi!2s!4v1608777276945!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
					duration: 3,
					amount: 20,
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};