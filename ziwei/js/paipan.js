//单个星
var SingleStar = function(isJiaStar,starName)
{
	var that=this;
	this.Name = starName;
	this.Level = (isJiaStar)?1:2;

	var _light = '',_absName = starName;

	var sIdx = starName.indexOf('(');
	var eIdx = starName.indexOf(')');
	if (sIdx!=-1 && eIdx !=-1)
	{
		this.Name = starName.replace('(','').replace(')','');
		_absName = starName.substr(sIdx+1,1);
	}

	//设置生年四化
	this.SetSNSH=function(sh){
		var cObj = $('#'+that.GetStarKey());
		cObj.parent().append('<span class="sn">'+sh+'</span>');
	};
	//设置本命四化
	this.SetBMSH=function(sh){
		var cObj = $('#'+that.GetStarKey());
		cObj.parent().append('<span class="mg">'+sh+'</span>');
	};

	//获取简称
	this.GetAbsName=function(){ return _absName; };

	var _sKey = null;
	this.GetStarKey=function(){
		if (_sKey) return _sKey;
		var len = _absName.length;
		if (len>1)
		{
			var i=1;
			var item=_absName.charCodeAt(0);
			while(i<len)
			{
				item = item ^ _absName.charCodeAt(i);
				i++;
			}
			_sKey='s_'+ len + '_'+item;
		}
		else
		{
			_sKey='s_'+_absName.charCodeAt(0);
		}
		return _sKey;
	};
};


//单个宫位对象
var SingleSpace = function(pid, idx)
{	
	var that=this;
	var sgz,objId=pid;
	var allStars = new Hashtable();

	this.Index = idx;
	this.GetGZ=function(){return sgz;};
	this.GetObjectId=function(){return objId;};

	//保存干支
	this.StoreGZ=function(gz){
		sgz = gz;
		$('#pgz'+that.Index).html(gz);
	};

	this.HasStar=function(sKey) { return allStars.contains(sKey); };
	this.GetStar=function(sKey){ return allStars.items(sKey);};

	this.GetStarCount=function(){
		return allStars.count();
	};

	//存储宫位内星星
	this.StoreStar = function(isJiaStar,starName)
	{
		//擎羊 陀罗 火星 铃星 地空 地劫 禄存
		//天姚 阴煞 红鸾 天刑 天魁 天钺 天喜
		var sObj = new SingleStar(isJiaStar,starName);
		var sKey = sObj.GetAbsName();
		if (!allStars.contains(sKey))
			allStars.add(sKey,sObj);
		var jObj = $('#ps'+that.Index);
		var sid = sObj.GetStarKey();
		if (isJiaStar)
		{
			var cObj = jObj.find('span.yiStar').first();
			if (cObj.length)
			{
				$('<span class="vl"><span class="jiaStar" id="'+sid+'">'+ sObj.Name +'</span></span>').insertBefore(cObj.parent());
			}
			else
			{
				jObj.append('<span class="vl"><span class="jiaStar" id="'+sid+'">'+ sObj.Name +'</span></span>');
			}
		}
		else
		{	
			jObj.append('<span class="vl"><span class="yiStar" id="'+sid+'">'+ sObj.Name +'</span></span>');
		}
	};

	//清除全部星星
	this.ClearStar = function()
	{
		allStars.clear();
		$('#ps'+that.Index).html('');
	};

	//获取宫位定位
	this.GetPosition=function()
	{
		var pObj = $('#p'+ that.Index);
		var pOffset = pObj.offset();
		return {id:pid, left:pOffset.left, top:pOffset.top, width:pObj.width(), height:pObj.height()};
	};


}

//命盘状态
var PlateState = {
	Rendered: false,
	GetSpaceByIndex: function (idx) { return PlateState['Space' + idx]; },
	GetSpaceByObjectId: function (id) {
		return PlateState['Space' + parseInt(id.replace(/[^\d]/g, ''))];
	},
	IsValid: function (pInfo) {//判断条件是否有效
		var dInfo = pInfo.DateInfo
		return pInfo.ByDate && (dInfo.LiFa == 0 || (dInfo.LiFa != 0 && CalConv(0, dInfo.Year, dInfo.Month, dInfo.Day)!=undefined));
	},
	Calculate: function (pInfo) {//依据条件排盘
		//console.log(pInfo);
		if (pInfo.ByDate) {
			var isOk = false;
			var ymd = { Year: pInfo.DateInfo.Year, Month: pInfo.DateInfo.Month, Day: pInfo.DateInfo.Day };
			if (pInfo.DateInfo.LiFa == 0) {
				isOk = true;
				var objResult = CalConv(1, ymd.Year, ymd.Month, ymd.Day);
				if (objResult != undefined) {
					$('#yaln').html(objResult["Year"]);
					$('#yaly').html(objResult["Month"]);
					$('#yalr').html(objResult["Day"]);
				}
				else
				{
					$('#yaln').html('N/A');
					$('#yaly').html('N/A');
					$('#yalr').html('N/A');
				}
			}
			else {
				$('#yaln').html(ymd.Year);
				$('#yaly').html(ymd.Month);
				$('#yalr').html(ymd.Day);
				var objResult = CalConv(0, ymd.Year, ymd.Month, ymd.Day);
				if (objResult != undefined) {
					ymd.Year = objResult["Year"];
					ymd.Month = objResult["Month"];
					ymd.Day = objResult["Day"];
					isOk = true;
				}
			}

			if (isOk) {
				//console.log(ymd);
				var ylGZName = GetYinLiGZ(ymd.Year);

				$('ylnf').val(ymd.Year);
				$('#ylgz').html(ylGZName);
				$('#ylyf').html(ymd.Month);
				$('#ylrq').html(ymd.Day);
				$('#ylsc').html(pInfo.DateInfo.SC);

				var ynTG = ylGZName.substr(0, 1); //天干
				var ynDZ = ylGZName.substr(1, 1);
				var cssc = pInfo.DateInfo.SC; //出生时辰
				var csyf = ymd.Month; //出生月份
				var csrq = ymd.Day; //出生日期
				PlateState.Empty();
				draw12GZ(ynTG); //依天干算出宫位干支
				draw12GW(csyf, dzNames.indexOf(cssc), ynDZ); //依命身年支安天才天寿

				var wxj = draw5XJ(PlateState["MGGZ"]);
				var xb = 1 - YinYang.indexOf(pInfo.DateInfo.Sex.toString()) % 2;
				var yy = 1 - tgNames.indexOf(ynTG) % 2;
				drawSpaceNld(xb, yy, wxj, parseInt(PlateState["MGIndex"]));
				drawZWTFStar(csrq, wxj);
				drawLCYTBSX(ynTG, xb, yy); //禄存12博士
				drawNZStar(ynDZ); //年支星系
				drawShizhi(cssc, ynDZ, csrq); //时支星系
				drawYueStar(csyf, csrq); //月系

				var snSFStr = TGSHConfig[tgNames.indexOf(ynTG)];
				var bmTG = PlateState["MGGZ"].charAt(0);
				var bmSFStr = TGSHConfig[tgNames.indexOf(bmTG)];
				$('#snsh').html(ynTG+snSFStr);
				$('#bmsh').html(bmTG+bmSFStr);
				DrawSpaceSH(snSFStr.split(''), bmSFStr.split(''));
				$('#mzxb').html((tgNames.indexOf(ynTG)%2==0?'阳':'阴') + (pInfo.DateInfo.Sex==1?'男':'女'));
				$('#mzsx').html(sx12Name.charAt(dzNames.indexOf(ynDZ)));
				PlateState.Rendered = true;
			}
		}

	},
	StoreSpace: function (idx, obj) { PlateState['Space' + idx] = obj; },
	Empty: function () { //清除原始数据
		for (var i = 0; i < 12; i++) {
			var space = PlateState.GetSpaceByIndex(i);
			if (space) space.ClearStar();
		}
		//清除飞化显示
		$('.dgfh,.bgfh').remove();
	}
};