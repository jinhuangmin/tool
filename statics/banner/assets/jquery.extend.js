(function($) {
	$.extend(Date.prototype,{//扩展日期函数
        format : function(format){
			var o = {
				"M+" : this.getMonth()+1, //month
				"d+" : this.getDate(), //day
				"h+" : this.getHours(), //hour
				"m+" : this.getMinutes(), //minute
				"s+" : this.getSeconds(), //second
				"q+" : Math.floor((this.getMonth()+3)/3), //quarter
				"S" : this.getMilliseconds() //millisecond
			}

			if(/(y+)/.test(format)) {
				format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
			}

			for(var k in o) {
				if(new RegExp("("+ k +")").test(format)) {
					format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
				}
			}
			return format;
		},
		add : function(m,v){
			switch(m){
				case 'day':
					this.setDate(this.getDate() + v);
					return this;
				case 'week':
					return this.add('day',v * 7);
				case 'month':
					var d = this.getDate();
				    this.setMonth(this.getMonth() + v);
				    if (this.getDate() < d)
				        this.setDate(0);
					return this;
				case 'year':
					var m = this.getMonth();
				    this.setFullYear(this.getFullYear() + v);
				    if (m < this.getMonth()){
				        this.setDate(0);
				    }
					return this;
			}
			return this;
		}
     });
	$.extend({
		query : function(url,o) {//操作指定的url
			if(!url){				url = window.location.href;			}
			if(!o){//如果为空，则返回url的属性集合对象				var href = url.replace('&amp;','&');
				var vars = {}, hash;
				var hashes = href.slice(href.indexOf('?')+ 1).split('&');
				for (var i = 0; i < hashes.length; i++) {
					hash = hashes[i].split('=');
					vars[hash[0]] = hash[1];
				}
				return vars;
			}else{
				var vars = $.query(url);
				$.extend(vars,o);
				var vs=[];
				for(var k in vars){					vs[vs.length]=k+'='+vars[k];				}
				url = url.slice(0,url.indexOf('?'));
				return url+'?'+vs.join('&');
			}
		},
		styleText : function(v,p,s) {
			if('background-image'==p){
				return 'background-image:url('+v+');';
			}else{
				return p+':'+v+(s?s:'')+';';
			}
		},
		gen6RandomGUID : function(){
		  	var array = [0,1,2,3,4,5,6,7,8,9];
		  	for (var i = 10; i > 1; i--) {
            	var index = parseInt(Math.random() * (0-i) + i);
            	if(index>9||index<0)alert(index);
		      	var tmp = array[index];
		      	array[index] = array[i - 1];
		      	array[i - 1] = tmp;
		  }
		  var result = 0;
		  for(var i = 0; i < 6; i++)
		      result = result * 10 + array[i];
		  return result;
	  }
	});
}(jQuery));

