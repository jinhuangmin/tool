!function(){var a=jQuery.event,b=function(a,b,c,d){var e,f,g,h,i,j,k,l,m;for(e=0;e<b.length;e++){for(f=b[e],h=f.indexOf(".")<0,h||(k=f.split("."),f=k.shift(),l=new RegExp("(^|\\.)"+k.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")),g=(a[f]||[]).slice(0),i=0;i<g.length;i++){j=g[i],m=h||l.test(j.namespace),m&&(d?j.selector===d&&c(f,j.origHandler||j.handler):null===d?c(f,j.origHandler||j.handler,j.selector):j.selector||c(f,j.origHandler||j.handler))}}};a.find=function(a,c,d){var e=($._data(a)||{}).events,f=[];return e?(b(e,c,function(a,b){f.push(b)},d),f):f},a.findBySelector=function(a,c){var d=$._data(a).events,e={},f=function(a,b,c){var d=e[a]||(e[a]={}),f=d[b]||(d[b]=[]);f.push(c)};return d?(b(d,c,function(a,b,c){f(c||"",a,b)},null),e):e},a.supportTouch="ontouchend" in document,$.fn.respondsTo=function(b){return this.length?a.find(this[0],$.isArray(b)?b:[b]).length>0:!1},$.fn.triggerHandled=function(a,b){return a="string"==typeof a?$.Event(a):a,this.trigger(a,b),a.handled},a.setupHelper=function(b,c,d){d||(d=c,c=null);var e=function(e){var f,g=e.selector||"";g?(f=a.find(this,b,g),f.length||$(this).delegate(g,c,d)):a.find(this,b,g).length||a.add(this,c,d,{selector:g,delegate:this})},f=function(e){var f,g=e.selector||"";g?(f=a.find(this,b,g),f.length||$(this).undelegate(g,c,d)):a.find(this,b,g).length||a.remove(this,c,d,{selector:g,delegate:this})};$.each(b,function(){a.special[this]={add:e,remove:f,setup:function(){},teardown:function(){}}})}}(jQuery),function(a){var b=/Phantom/.test(navigator.userAgent),c=!b&&"ontouchend" in document,e=c?"touchstart":"mousedown",f=c?"touchend":"mouseup",g=c?"touchmove":"mousemove",h=function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;return{time:(new Date).getTime(),coords:[c.pageX,c.pageY],origin:a(b.target)}},i=a.event.swipe={delay:500,max:75,min:30};a.event.setupHelper(["swipe","swipeleft","swiperight","swipeup","swipedown"],e,function(b){function l(a){c&&(d=h(a),Math.abs(c.coords[0]-d.coords[0])>10&&a.preventDefault())}var d,c=h(b),e=b.delegateTarget||b.currentTarget,j=b.handleObj.selector,k=this;a(document.documentElement).bind(g,l).one(f,function(){var h,m,n,o;a(this).unbind(g,l),c&&d&&(h=Math.abs(c.coords[0]-d.coords[0]),m=Math.abs(c.coords[1]-d.coords[1]),n=Math.sqrt(h*h+m*m),d.time-c.time<i.delay&&n>=i.min&&(o=["swipe"],h>=i.min&&m<i.min?o.push(c.coords[0]>d.coords[0]?"swipeleft":"swiperight"):m>=i.min&&h<i.min&&o.push(c.coords[1]<d.coords[1]?"swipedown":"swipeup"),a.each(a.event.find(e,o,j),function(){this.call(k,b,{start:c,end:d})}))),c=d=void 0})})}(jQuery);