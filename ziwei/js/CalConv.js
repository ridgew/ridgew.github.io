//阴阳历转换1936-2031
 function CalConv(tDate,bYear,bMonth,bDay) {
	
	/* 闰年, 返回 0 平年, 1 闰年 */
	var GetLeap=function (year) {
		if (year % 400 == 0) return 1;
		else if (year % 100 == 0) return 0;
		else if (year % 4 == 0) return 1;
		else return 0;
	}

	var LCData=function(d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) 
	{
		this.BaseDays = d; /*1月1日到正月初一的累计日*/
		this.Intercalation = i; /*闰月月份. 0==此年沒有闰月*/
		this.BaseWeekday = w; /* 此年1月1日为星期减 1 */
		this.BaseKanChih = k; /* 此年1月1日之干支序号减 1 */
		this.MonthDays = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13]; /* 此农历年每月之大小, 0==小月(29日), 1==大月(30日) */
	}

    var yBegin = 1936,yEnd = 2031;
    var LunarCal = [
        new LCData(23, 3, 2, 17, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0), /* 1936 */
        new LCData(41, 0, 4, 23, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1),
        new LCData(30, 7, 5, 28, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1),
        new LCData(49, 0, 6, 33, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
        new LCData(38, 0, 0, 38, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1), /* 1940 */
        new LCData(26, 6, 2, 44, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0),
        new LCData(45, 0, 3, 49, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
        new LCData(35, 0, 4, 54, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
        new LCData(24, 4, 5, 59, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1), /* 1944 */
        new LCData(43, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1),
        new LCData(32, 0, 1, 10, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1),
        new LCData(21, 2, 2, 15, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
        new LCData(40, 0, 3, 20, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1), /* 1948 */
        new LCData(28, 7, 5, 26, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
        new LCData(47, 0, 6, 31, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1),
        new LCData(36, 0, 0, 36, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
        new LCData(26, 5, 1, 41, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1), /* 1952 */
        new LCData(44, 0, 3, 47, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1),
        new LCData(33, 0, 4, 52, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0),
        new LCData(23, 3, 5, 57, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1),
        new LCData(42, 0, 6, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1), /* 1956 */
        new LCData(30, 8, 1, 8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0),
        new LCData(48, 0, 2, 13, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0),
        new LCData(38, 0, 3, 18, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
        new LCData(27, 6, 4, 23, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0), /* 1960 */
        new LCData(45, 0, 6, 29, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0),
        new LCData(35, 0, 0, 34, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1),
        new LCData(24, 4, 1, 39, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0),
        new LCData(43, 0, 2, 44, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0), /* 1964 */
        new LCData(32, 0, 4, 50, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
        new LCData(20, 3, 5, 55, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0),
        new LCData(39, 0, 6, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0),
        new LCData(29, 7, 0, 5, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1), /* 1968 */
        new LCData(47, 0, 2, 11, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
        new LCData(36, 0, 3, 16, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0),
        new LCData(26, 5, 4, 21, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1),
        new LCData(45, 0, 5, 26, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1), /* 1972 */
        new LCData(33, 0, 0, 32, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1),
        new LCData(22, 4, 1, 37, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
        new LCData(41, 0, 2, 42, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1),
        new LCData(30, 8, 3, 47, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1), /* 1976 */
        new LCData(48, 0, 5, 53, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1),
        new LCData(37, 0, 6, 58, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
        new LCData(27, 6, 0, 3, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0),
        new LCData(46, 0, 1, 8, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0), /* 1980 */
        new LCData(35, 0, 3, 14, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1),
        new LCData(24, 4, 4, 19, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1),
        new LCData(43, 0, 5, 24, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1),
        new LCData(32, 10, 6, 29, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1), /* 1984 */
        new LCData(50, 0, 1, 35, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
        new LCData(39, 0, 2, 40, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1),
        new LCData(28, 6, 3, 45, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0),
        new LCData(47, 0, 4, 50, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1), /* 1988 */
        new LCData(36, 0, 6, 56, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0), /*1989*/
        new LCData(26, 5, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1),
        new LCData(45, 0, 1, 6, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0),
        new LCData(34, 0, 2, 11, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0), /* 1992 */
        new LCData(22, 3, 4, 17, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
        new LCData(40, 0, 5, 22, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0),
        new LCData(30, 8, 6, 27, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1),
        new LCData(49, 0, 0, 32, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1), /* 1996 */
        new LCData(37, 0, 2, 38, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1),
        new LCData(27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1),
        new LCData(46, 0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1), /* 1999 */
        new LCData(35, 0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1), /* 2000 */
        new LCData(23, 4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
        new LCData(42, 0, 1, 4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
        new LCData(31, 0, 2, 9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0),
        new LCData(21, 2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1), /* 2004 */
        new LCData(39, 0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
        new LCData(28, 7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
        new LCData(48, 0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1),
        new LCData(37, 0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1), /* 2008 */
        new LCData(25, 5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
        new LCData(44, 0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
        new LCData(33, 0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
        new LCData(22, 4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0), /* 2012 */
        new LCData(40, 0, 1, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
        new LCData(30, 9, 2, 7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
        new LCData(49, 0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1),
        new LCData(38, 0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0), /* 2016 */
        new LCData(27, 6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1),
        new LCData(46, 0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0),
        new LCData(35, 0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0),
        new LCData(24, 4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1), /* 2020 */
        new LCData(42, 0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
        new LCData(31, 0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0),
        new LCData(21, 2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
        new LCData(40, 0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1), /* 2024 */
        new LCData(28, 6, 2, 5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0),
        new LCData(47, 0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1),
        new LCData(36, 0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
        new LCData(25, 5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0), /* 2028 */
        new LCData(43, 0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1),
        new LCData(32, 0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0),
        new LCData(22, 3, 2, 36, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0)];

    /* 西曆年每月之日數 */
    var SolarCal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /* 西曆年每月之累積日數, 平年與閏年 */
    var SolarDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396,
        0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397];

	var tarObj={};
    if (tDate == 0) { //阳历到阴历
        if (bYear < yBegin || bYear > yEnd) 
			return alert("请输入"+yBegin+"-"+yEnd+"有效年份");
        stDate = bMonth - 1;
        if (stDate < 0 || stDate > 11) return alert('请输入有效月份');
        leap = GetLeap(bYear);
        if (stDate == 1) 
			d = leap + 28;
        else 
			d = SolarCal[stDate];

        if (bDay < 1 || bDay > d) return 3;
        y = bYear - yBegin;
        acc = SolarDays[leap * 14 + stDate] + bDay;
        kc = acc + LunarCal[y].BaseKanChih;
		tarObj["KCIndex"]=kc;
        if (acc <= LunarCal[y].BaseDays) {
            y--;
            tarObj["Year"] = bYear - 1;
            leap = GetLeap(tarObj["Year"]);
            stDate += 12;
            acc = SolarDays[leap * 14 + stDate] + bDay;
        } else tarObj["Year"] = bYear;
        l1 = LunarCal[y].BaseDays;
        for (i = 0; i < 13; i++) {
            l2 = l1 + LunarCal[y].MonthDays[i] + 29;
            if (acc <= l2) break;
            l1 = l2;
        }
        tarObj["Month"] = i + 1;
        tarObj["Day"] = acc - l1;
        itDate = LunarCal[y].Intercalation;
        if (itDate != 0 && tarObj["Month"] > itDate) {
            tarObj["Month"]--;
            if (tarObj["Month"] == itDate) tarObj["Month"] = -itDate;
        }
        if (tarObj["Month"] > 12) tarObj["Month"] -= 12;
    } 
	else /* 阴历转阳历 */
    {
        if (bYear < yBegin || bYear >= yEnd) return alert("请输入"+yBegin+"-"+yEnd+"有效年份");
        y = bYear - yBegin;
        itDate = LunarCal[y].Intercalation;
        ltDate = bMonth;
        if (ltDate < 0) {
            if (ltDate != -itDate) return alert('请输入有效月份');
        } else if (ltDate < 1 || ltDate > 12) return alert('请输入有效月份');

        if (itDate != 0) {
            if (ltDate > itDate) ltDate++;
            else if (ltDate == -itDate) ltDate = itDate + 1;
        }
        ltDate--;
        if (bDay > LunarCal[y].MonthDays[ltDate] + 29) return alert("农历日期不正确");
        acc = 0;
        for (i = 0; i < ltDate; i++) {
            acc += LunarCal[y].MonthDays[i] + 29;
        }
        acc += LunarCal[y].BaseDays + bDay;
        leap = GetLeap(bYear);
        for (i = 13; i >= 0; i--) {
            if (acc > SolarDays[leap * 14 + i]) break;
        }
        tarObj["Day"] = acc - SolarDays[leap * 14 + i];
        if (i <= 11) {
            tarObj["Year"] = bYear;
            tarObj["Month"] = i + 1;
        } else {
            tarObj["Year"] = bYear + 1;
            tarObj["Month"] = i - 11;
        }
        leap = GetLeap(tarObj["Year"]);
        y = tarObj["Year"] - yBegin;
        acc = SolarDays[leap * 14 + tarObj["Month"] - 1] + tarObj["Day"];
        weekday = (acc + LunarCal[y].BaseWeekday) % 7;
        kc = acc + LunarCal[y].BaseKanChih;
		tarObj["KCIndex"]=kc;
    }
	return tarObj;
}