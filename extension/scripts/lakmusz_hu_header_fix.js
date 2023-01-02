
function slide_header_to_top() {

	var elm = document.getElementsByTagName("header")[0];
	if (elm == null) return;

	var pos = elm.style.top;
	if (pos === 0) return;

	if (pos === "") pos = elm.offsetTop;
	if (pos === -1) pos = elm.offsetTop;
	if (pos === 0) return;

	pos = parseInt(pos) - 5;
	if (pos < 0) pos = 0;
	elm.style.top = "" + pos + "px";
	if (pos == 0) return;

	setTimeout(slide_header_to_top, 5);
}

setTimeout(slide_header_to_top, 100);
