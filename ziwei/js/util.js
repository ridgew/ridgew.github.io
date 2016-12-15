/************* 画直线 **************
  x1,y1   起点所在的屏幕坐标（像素）
  x2,y2   终点所在的屏幕坐标（像素）
  color   颜色（字符串值）
  size    大小（像素）
  render   样式 0=实线 1=虚线 2=虚实线
**********************************/
function DrawLine(x1,y1,x2,y2,color,size,render,dotClass,returnHtml){

	var drawDot =function(x,y,c,s,render) {
		var renderStr = '<div class="' +("dot" + ((dotClass)?" " + dotClass:""))+ '" style="top:'+y+'px;left:'+x+'px;width:'+s+'px;height:'+s+'px;background-color:'+c+'"></div>';
		if (render) return renderStr;
		$(document.body).append(renderStr);
	   };

  var i, r=Math.floor(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)));
  var theta=Math.atan((x2-x1)/(y2-y1));
  if(((y2-y1)<0&&(x2-x1)>0)||((y2-y1)<0&&(x2-x1)<0))
    theta=Math.PI+theta;
  var dx=Math.sin(theta);//alert(dx)
  var dy=Math.cos(theta);
  var htmlArr = new Array();
  for(i=0;i<r;i++)
  {
    switch(render)
	{
      case 0:
        break;
      case 1:
        i+=size*2;
        break;
      case 2:
        if(!(Math.floor(i/4/size)%2==0)) i+=size*2;
        break;
      default:
        break;
    }
	if (returnHtml)
		htmlArr[htmlArr.length] = drawDot(x1+i*dx, y1+i*dy, color, size, true);
	else
		drawDot(x1+i*dx, y1+i*dy, color, size);
  }
  if (returnHtml) return htmlArr.join('');
}

function Hashtable()
{
    var _hash= new Object();
    this.add=function(key,value){
		if(typeof(key)!="undefined"){
			if(this.contains(key)==false){
				_hash[key]=typeof(value)=="undefined"?null:value;
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
      }
    this.remove=function(key){delete _hash[key];}
    this.count=function(){var i=0;for(var k in _hash){i++;} return i;}
    this.items=function(key){return _hash[key];}
    this.contains=function(key){ return typeof(_hash[key])!="undefined";}
    this.clear = function(){for(var k in _hash){delete _hash[k];}}
}

function fixRange(val,min,max)
{
	var range=max-min+1;
	while (val<min) {val+=range;}
	while (val>max) {val-=range;}
	return val;
}