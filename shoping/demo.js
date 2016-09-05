window.onload = function(){
	if (!document.getElementsByClassName) {
	    document.getElementsByClassName = function (cls) {
	        var ret = [];
	        var els = document.getElementsByTagName('*');
	        for (var i = 0, len = els.length; i < len; i++) {
	            if (els[i].className === cls
	                || els[i].className.indexOf(cls + ' ') >= 0
	                || els[i].className.indexOf(' ' + cls + ' ') >= 0
	                || els[i].className.indexOf(' ' + cls) >= 0) {
	                ret.push(els[i]);
	            }
	        }
	        return ret;
	    }
	}

	var che = document.getElementsByClassName("che");
	var allselect1 = document.getElementById("allselect1");
	var allselect2 = document.getElementById("allselect2");
	var num = document.getElementsByClassName("num")[0];
	var len = che.length;

	allselect1.onchange = function(){
		if( allselect1.checked){
			allselect2.checked = true;
			for(var i =0; i < len; i++){
				che[i].checked = true;
			}
			num.innerHTML = len;
		} else{
			allselect2.checked = false;
			for(var i =0; i < len; i++){
				che[i].checked = false;
			}
			num.innerHTML = 0;
		};
	};
	allselect2.onchange = function(){
		if( allselect2.checked){
			allselect1.checked = true;
			for(var i =0; i < len; i++){
				che[i].checked = true;
			}
			num.innerHTML = len;
		} else{
			allselect1.checked = false;
			for(var i =0; i < len; i++){
				che[i].checked = false;
			}
			num.innerHTML = 0;
		};
	};





}