var dzNames = "子丑寅卯辰巳午未申酉戌亥", tgNames = "甲乙丙丁戊己庚辛壬癸", YinYang="10♂♀男女乾坤";
var sx12Name="鼠牛虎兔龙蛇马羊猴鸡狗猪";
var dzsh="申子辰 巳酉丑 寅午戌 亥卯未".split(' ');
var nayin60 = "甲子乙丑海中金丙寅丁卯炉中火戊辰己巳大林木庚午辛未路旁土壬申癸酉剑锋金甲戌乙亥山头火丙子丁丑漳下水戊寅己卯城头土庚辰辛巳白腊金壬午癸未杨柳木甲申乙酉泉中水丙戌丁亥屋上土戊子己丑霹雳火庚寅辛卯松柏木壬辰癸巳长流水甲午乙未砂石金丙申丁酉山下火戊戌己亥平地木庚子辛丑壁上土壬寅癸卯金薄金甲辰乙巳覆灯火丙午丁未天河水戊申已酉大驿土庚戌辛亥钗环金壬子癸丑桑柘木甲寅乙卯大溪水丙辰丁巳沙中土戊午己未天上火庚申辛酉石榴木壬戌癸亥大海水";
var Space12 = ["*命宫","兄弟","夫妻","子女","*财帛","疾厄","*迁移","交友","*官禄","田宅","福德","父母"];
var TGSHLevel = ["禄", "权", "科", "忌"];
var TGSHConfig = ["廉破武阳", "机梁紫阴", "同机昌廉", "阴同机巨", "贪阴右机", "武贪梁曲", "阳武阴同", "巨阳曲昌", "梁紫左武", "破巨阴贪"];

function GetYinLiGZ(y) {
	while (y > 1984) { y -= 60; }
	if (y < 0) y += 1; //无公元0年
	while (y < 1924) { y += 60; }
	y = y - 1900;
	return tgNames.charAt((y - 24) % 10) + dzNames.charAt((y - 24) % 12);
}

//取干支(六十)纳音
function getGZNaYin(gz) {
	var dzIdx = dzNames.indexOf(gz.substr(1, 1));
	var gzIdx = nayin60.indexOf(gz);
	if (dzIdx % 2 == 0) gzIdx += 2;
	return nayin60.substr(gzIdx + 2, 3);
}