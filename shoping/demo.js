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


	var tbody = document.getElementsByTagName("tbody")[0];
	var che = document.getElementsByClassName("che");
	var allselect1 = document.getElementById("allselect1");
	var allselect2 = document.getElementById("allselect2");
	var num = document.getElementsByClassName("num")[0];
	var len = che.length;

	var price = document.getElementsByClassName("price");
	var count = document.getElementsByClassName("count");
	var cinput = document.getElementsByClassName("count-input");
	var sum = document.getElementsByClassName("sum");
	var tsum = document.getElementsByClassName("tsum")[0];
	var operation = document.getElementsByClassName("operation");
	var len1 = price.length;
	var p = parseInt;


	allselect1.onchange = function(){
		if( allselect1.checked){
			allselect2.checked = true;
			var z = 0;
			for(var i =0; i < len; i++){
				che[i].checked = true;
				var s = p(sum[i].firstChild.nodeValue);	
				if(che[i].checked){
						z = z + s;
				}
				tsum.firstChild.nodeValue = z;
			}
			num.innerHTML = len;
		} else{
			allselect2.checked = false;
			for(var i =0; i < len; i++){
				che[i].checked = false;
				var z = 0;
				tsum.firstChild.nodeValue = z;
			}
			num.innerHTML = 0;
		};
	};
	allselect2.onchange = function(){
		if( allselect2.checked){
			allselect1.checked = true;
			var z = 0;
			for(var i =0; i < len; i++){
				che[i].checked = true;
				var s = p(sum[i].firstChild.nodeValue);	
				if(che[i].checked){
						z = z + s;
				}
				tsum.firstChild.nodeValue = z;
			}
			num.innerHTML = len;
		} else{
			allselect1.checked = false;
			for(var i =0; i < len; i++){
				che[i].checked = false;
				var z = 0;
				tsum.firstChild.nodeValue = z;
			}
			num.innerHTML = 0;
		};
	};

	tbody.onchange = function(){
		for(var i = 0; i < len; i++){
			if(che[i].checked){
				allselect1.checked = true;
				allselect2.checked = true;	
			} else {
				allselect1.checked = false;
				allselect2.checked = false;
				break;
			}
		}

		var check = 0;
		for(i = 0; i<len; i++){
			if(che[i].checked){
				check++;
			}

		}
		num.innerHTML = check;

	    var z = 0;
		for(var i = 0; i < len; i++){
			var y =p(price[i].firstChild.nodeValue);
			var x =p(cinput[i].value);
			var s = p(sum[i].firstChild.nodeValue);
			s = x*y;
			sum[i].firstChild.nodeValue = s;
			s = p(sum[i].firstChild.nodeValue);	
			if(che[i].checked){
					z = z + s;
			}
			tsum.firstChild.nodeValue = z;				
		}

	};

	for(var i = 0; i <len ; i++){
		var z =0;
		count[i].onclick = function(e){
			var e = e || window.event;
			var el = e.target || e.srcElement;
			var cl = el.className;
			switch(cl){
				case "add":
					var tel = p(el.previousSibling.value);
					var y = p(el.parentNode.previousSibling.previousSibling.firstChild.nodeValue);
					var s = p(el.parentNode.nextSibling.nextSibling.firstChild.nodeValue);
					var reduce = el.parentNode.firstChild;
					var z = 0;
					tel = tel + 1;
					s = tel * y;
					el.previousSibling.value = tel;
					el.parentNode.nextSibling.nextSibling.firstChild.nodeValue = s;
					reduce.innerHTML = "-";
					for(var j=0; j<len; j++){
						var u = p(sum[j].firstChild.nodeValue);
						if(che[j].checked){
							z =z + u;
						}
						tsum.firstChild.nodeValue = z;
					}
					break;
				case "reduce":
					var tel = p(el.nextSibling.value);
					var y = p(el.parentNode.previousSibling.previousSibling.firstChild.nodeValue);
					var s = p(el.parentNode.previousSibling.previousSibling.firstChild.nodeValue);
					var z = 0;
					tel = tel - 1;
					console.log(tel,y);
					s = tel * y;
					el.nextSibling.value = tel;
					el.parentNode.nextSibling.nextSibling.firstChild.nodeValue = s;
					for(var j=0; j<len; j++){
						var u = p(sum[j].firstChild.nodeValue);
						if (che[j].checked && el) {
							z =z + u;
						}
						tsum.firstChild.nodeValue = z;
					}
					if(tel == 1){
						el.firstChild.nodeValue = "";
						e.stopPropagation();
					}
					break;
			}
		};

		operation[i].onclick = function(e){
			var e = e || window.event;
			var el = e.target || e.srcElement;
			var cl = el.className;
			var mm = el.parentNode;
			var child = mm.childNodes || mm.children;
			var chjc = child[1].firstChild;
			if (chjc.checked) {
				mm.parentNode.removeChild(mm);
			}
			var z = 0;
			for(var j = 0; j < che.length; j++){
				var u = p(sum[j].firstChild.nodeValue);
				if (che[j].checked) {
					z =z + u;
				}
			}
			tsum.firstChild.nodeValue = z;
			num.innerHTML = che.length;
			if (che.length == 0) {
				allselect1.checked = false;
				allselect2.checked = false;
			}
		};
	}

	var del = document.getElementsByClassName("del")[0];
	del.onclick = function(){
		if (allselect1.checked) {
		allselect1.checked = false;
		allselect2.checked = false;
		tbody.parentNode.removeChild(tbody);
		num.innerHTML = 0;
		tsum.firstChild.nodeValue = 0;
		}
	}

}
