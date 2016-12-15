//http://blog.mdk-photo.com/post/CSharp-like-Event-Patterns-for-Javascript.aspx

function MyObject2(){
    var EventListeners = [];
   
    this.onEvent = function(Handler)
    {
        EventListeners.push( Handler );
    };
   
    var fireEvent = function()
    {
        for(var i=0,listener ; (Listener=EventListeners[i]) ; i++)
        {
            listener();
        }
    };
}

var obj2 = new MyObject2();

function Handler1(){ alert(1); }
function Handler2(){ alert(2); }

obj2.onEvent( Handler1 );
obj2.onEvent( Handler2 ); 