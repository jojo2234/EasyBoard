var cv=document.getElementById("cv");
var lwhL=5;
var whL=5;
var clkd=false;
var evSel=false;
var clrs="#111";
var ro=17,gr=17,bl=17;
var gumSel=false;
var laypg=false;
var formeGeo=false;
var csiOp=false;
var txtSel=false;
var txCol=false;
var fbold=false;
var fcors=false;
var funde=false;
cv.width=window.innerWidth;
cv.height=window.innerHeight;
cv.style.display='block';
var ctx=cv.getContext("2d");
let smyel=getComputedStyle(document.getElementById("Mcr"));
var gumH=-(parseInt(smyel.height)/4);
var gumW=-(parseInt(smyel.width)/4);
var testClr="#111";
var grascorsot="unset";
var setCr=function(e){document.getElementById("Mcr").style.top=((e.pageY-gumH)+"px");document.getElementById("Mcr").style.left=((e.pageX-gumW)+"px");};
window.addEventListener("resize",function(ev){let img=new Image;let src=cv.toDataURL();ev.stopPropagation();img.src=src;cv.width=window.innerWidth;cv.height=window.innerHeight;let nctx=cv.getContext("2d");nctx.drawImage(img,0,0,cv.width,cv.height);});
function remEv(){if(evSel==true){evSel=false;document.getElementById("cv").style.cursor="default";}}
function remGum(){if(gumSel==true){document.removeEventListener("mousemove",setCr);document.getElementById("Mcr").style.display="none";gumSel=false;ctx.globalCompositeOperation='source-over';whL=lwhL;document.getElementById("trt").value=whL;}}
function ho(em){const ocl=event=>{if(!em.contains(event.target) && isV(em)){em.style.display="none";rcl();}};const rcl=()=>{clkd=false;if(em==document.getElementById("geom")){formeGeo=false;}if(document.getElementById("ap").style.display=="block"){document.getElementById("colorpicker").style.position="fixed";}if(em==document.getElementById("sfd")){csiOp=false;}};document.addEventListener("click",ocl);};const isV=em=>!!em && !!(em.offsetWidth || em.offsetHeight);
function w(e){remGum();remEv();if(clkd==true){clkd=false;document.getElementById("ap").style.display="none";}else{clkd=true;let vd=document.getElementById("ap");vd.style.display="block";if(document.getElementById("geom").style.display=="block"){document.getElementById("colorpicker").style.position="static";}e.stopPropagation();evSel=false;document.getElementById("trt").addEventListener("input",function(e){this.value=this.value});
document.getElementById("trt").addEventListener("click",lWR);whL=lwhL;document.getElementById("trt").value=whL;(function(){colorPicker.draw();})();}}
function ho2(em){const ocl=event=>{if(!em.contains(event.target) && isV2(em)){em.style.display="none";document.getElementById("rf").innerText=">>";laypg=false;document.getElementById("rf").style="margin-left:0%;";}};document.addEventListener("click",ocl);};const isV2=em=>!!em && !!(em.offsetWidth || em.offsetHeight);
ho(document.getElementById("ap"));
ho(document.getElementById("sfd"));
ho2(document.getElementById("pgl"));
ho(document.getElementById("geom"));
function Rcss(){document.getElementsByTagName("link")[0].href+="";}
document.getElementById("wr").addEventListener("click",w);
document.getElementById("frm").addEventListener("click",function(e){e.stopPropagation();if(clkd==true){document.getElementById("colorpicker").style.position="static";}if(formeGeo==false){formeGeo=true;document.getElementById("geom").style.display="block";}else{if(clkd==true){document.getElementById("colorpicker").style.position="fixed";}formeGeo=false;document.getElementById("geom").style.display="none";}});
document.getElementById("blk").addEventListener("click",function(){remGum();clrs="#111";remEv();});
document.getElementById("ylw").addEventListener("click",function(){remGum();clrs="#ff0";remEv();});
document.getElementById("red").addEventListener("click",function(){remGum();clrs="#f00";remEv();});
document.getElementById("grn").addEventListener("click",function(){remGum();clrs="#0f0";remEv();});
document.getElementById("ble").addEventListener("click",function(){remGum();clrs="#00f";remEv();});
document.getElementById("fntdec").childNodes[0].addEventListener("click",function(){if(fbold==false){fbold=true;document.getElementById("txbx").style.fontWeight="bold";}else{fbold=false;document.getElementById("txbx").style.fontWeight="normal";}});
document.getElementById("fntdec").childNodes[1].addEventListener("click",function(){if(fcors==false){fcors=true;document.getElementById("txbx").style.fontStyle="oblique";}else{fcors=false;document.getElementById("txbx").style.fontStyle="normal";}});
document.getElementById("fntdec").childNodes[2].addEventListener("click",function(){if(funde==false){funde=true;document.getElementById("txbx").style.textDecoration="underline";}else{funde=false;document.getElementById("txbx").style.textDecoration="unset";}});
document.getElementById("slnsz").addEventListener("change",function(e){e.stopPropagation();document.getElementById("txbx").style.fontSize=(this.value+"px");});
document.getElementById("slnfnt").addEventListener("change",function(e){e.stopPropagation();document.getElementById("txbx").style.fontFamily=this.value;});
document.getElementById("anctx").addEventListener("click",function(e){e.stopPropagation;let ctg=document.getElementById("itxtbx");let conte=document.getElementById("txbx");ctx.font=(""+document.getElementById("txbx").style.fontWeight+" "+document.getElementById("txbx").style.fontSize+" "+document.getElementById("txbx").style.fontFamily);ctx.fillStyle=testClr;if(document.getElementById("txbx").style.fontStyle=="oblique"){ctx.font="italic "+ctx.font;}ctx.fillText(conte.value,parseInt(ctg.style.left.slice(0,-2))+4,parseInt(ctg.style.top.slice(0,-2))+28);conte.value="";txtSel=false;document.getElementById("itxtbx").style.display="none";});
document.getElementById("pencl").addEventListener("click",function(e){e.stopPropagation();if(txCol==false){txCol=true;document.getElementById("txbxclr").style.display="block";}else{txCol=false;document.getElementById("txbxclr").style.display="none";}});
var spancl=document.getElementById("txbxclr").childNodes;
spancl.forEach(sp=>{sp.addEventListener("click",function(e){e.stopPropagation();document.getElementById("txbx").style.color=this.style.backgroundColor;testClr=this.style.backgroundColor;});});
document.getElementById("txtbox").addEventListener("click",function(){if(txtSel==true){document.getElementById("itxtbx").style.display="none";txtSel=false;}else{txtSel=true;document.getElementById("itxtbx").style.display="block";}});
document.getElementById("ev").addEventListener("click",function(evi){remGum();clrs="#fffb000a";whL=20;evi.stopPropagation();evSel=true;document.getElementById("cv").style.cursor="cell";});
document.getElementById("rub").addEventListener("click",function(re){if(gumSel==true){document.removeEventListener("mousemove",setCr);document.getElementById("Mcr").style.display="none";gumSel=false;wHL=lwhL;clrs="#111";ctx.globalCompositeOperation='source-over';}else{gumSel=true;clrs="#000";remEv();document.getElementById("Mcr").style.display="block";document.addEventListener("mousemove",setCr);ctx.globalCompositeOperation='destination-out';}whL=44;re.stopPropagation();});
var movetxt=false;
var beY=0;
var beX=0;
document.getElementById("itxtbx").addEventListener("mouseleave",function(e){movetxt=false;e.stopPropagation();});
document.getElementById("itxtbx").addEventListener("mouseup",function(e){movetxt=false;e.stopPropagation();});

//INSERIMENTO IMMAGINI
document.getElementById("insimg").addEventListener("click",function(){let inp=document.createElement("input");inp.type="file";inp.onchange=e=>{alert("Switch to Pro to unlock this feature!");/*let img=new Image();img.src=e.target.files[0];ctx.drawImage(img,0,0,220,220);*/};inp.click();});

document.getElementById("itxtbx").addEventListener("mousedown",function(e){movetxt=true;e.stopPropagation();beY=(this.offsetTop-e.clientY);beX=(this.offsetLeft-e.clientX);});
document.getElementById("itxtbx").addEventListener("mousemove",function(e){e.stopPropagation();if(movetxt==true){document.getElementById("itxtbx").style.top=(e.clientY+beY+"px");document.getElementById("itxtbx").style.left=(e.clientX+beX+"px");}});
let vray=document.getElementById("insfd").childNodes;
document.getElementById("ccb").addEventListener("click",function(e){csiOp=false;document.getElementById("sfd").style.display="none";Rcss();e.stopPropagation();});
vray.forEach(ele => {
	ele.addEventListener("click",function(){this.style="border:4px solid #00b761;border-radius:4px;";document.getElementById("cv").style.backgroundImage="url("+this.src+")";let lray=document.getElementById("insfd").childNodes;lray.forEach(elm => {if(elm!=this){elm.style="none";}});});
});
let bray=document.getElementById("clbk").childNodes;
bray.forEach(cbk => {cbk.addEventListener("click",function(){let acbc=this.style.backgroundColor;document.getElementById("cv").style.backgroundColor=acbc;this.style='border:1px solid #00b761;'+'background-color:'+acbc+';';document.getElementById("cv").style.backgroundImage="none";let cray=document.getElementById("clbk").childNodes;cray.forEach(lm => {if(lm!=this){lm.style.borderColor="gray";}})});});

document.getElementById("csi").addEventListener("click",function(e){if(csiOp==true){csiOp=false;document.getElementById("sfd").style="display:none;";}else{csiOp=true;document.getElementById("sfd").style="display:block;";e.
stopPropagation();}});
var geometrie=document.getElementById("geom").childNodes;
geometrie.forEach(geo=>{geo.addEventListener("click",function(e){e.stopPropagation();alert("Switch to Pro Version to get all geometries unlocked!")});});
document.getElementById("rf").addEventListener("click",function(e){e.stopPropagation();if(laypg==false){document.getElementById("pgl").style="display:block;";document.getElementById("rf").style="margin-left:22%;";document.getElementById("rf").innerText="<<";laypg=true;}else{document.getElementById("rf").innerText=">>";laypg=false;document.getElementById("rf").style="margin-left:0%;";document.getElementById("pgl").style="display:none;";}});
lines();
var rRTL=0;
function lines(){if(rRTL==1){cv.removeEventListener('mousedown', rectMouseDown);cv.removeEventListener('mouseup', rectMouseUp);cv.removeEventListener('mousemove', rectMouseMove);cv.removeEventListener('mouseout', rectMouseout);};var mouse={x:0,y:0};
paint=function(){ctx.lineTo(mouse.x,mouse.y);ctx.lineWidth=lWR();ctx.lineJoin='round';ctx.lineCap='round';ctx.strokeStyle=clrs;ctx.stroke();};
	lmM = function(e){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	};
	lmD = function(){
		ctx.beginPath();
		ctx.moveTo(mouse.x, mouse.y);
		cv.addEventListener('mousemove', paint, false);
	};
	lmU = function(){
		cv.removeEventListener('mousemove', paint, false);
	};
	lmO = function() {
		cv.removeEventListener('mousemove', paint, false);
	};
	cv.addEventListener('mousedown', lmD, false);
	cv.addEventListener('mousemove', lmM, false);
	cv.addEventListener('mouseup', lmU, false);
	cv.addEventListener('mouseout', lmO, false);

};
function lWR(){if(document.getElementById("trt")!=null){if(evSel==false && gumSel==false){whL=document.getElementById("trt").value;lwhL=whL;}}return whL;};

//Clear canvas
function del() {
	ctx.clearRect(0, 0, cv.width, cv.height);
};
document.getElementById("cls").addEventListener("click",del);
/*
//Save image
var button = document.getElementById('dwnld');
button.addEventListener('click', function (e) {
var dataURL = cv.toDataURL('image/png');
button.href = dataURL;
});*/

//Rectangle shape
function rectangle() {
	rRTL = 1;

	cv.removeEventListener('mousedown', lmD, false);
	cv.removeEventListener('mousemove', lmM, false);
	cv.removeEventListener('mouseup', lmU, false);
	cv.removeEventListener('mouseout', lmO, false);
	
	//Initialize mouse coordinates to 0,0
	var mouse = {x: 0, y: 0};

	//Draw rectangle
	draw = function() {
		ctx.fillStyle = "black";
		ctx.fillStyle = clrs;
		ctx.fillRect(mouse.x, mouse.y, mouse.w, mouse.h);
	};

	//Find mouse coordinates relative to canvas
	rectMouseMove = function(e) {
	    mouse.w = (e.pageX - this.offsetLeft) - mouse.x;
	    mouse.h = (e.pageY - this.offsetTop) - mouse.y ;
	};

	//User clicks down on canvas to trigger draw
	rectMouseDown = function(e) {
		ctx.beginPath();
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		cv.addEventListener('mousemove', draw, false);		  
	};

	//When mouse lifts up, line stops drawing
	rectMouseUp = function() {
		cv.removeEventListener('mousemove', draw, false);
	};

	//When mouse leaves canvas, line stops drawing
	rectMouseout = function() {
		cv.removeEventListener('mousemove', draw, false);
	};

	//Event listeners that will trigger the draw functions when
	//mousedown, mousemove, mouseup, mouseout
	cv.addEventListener('mousedown', rectMouseDown, false);
	cv.addEventListener('mouseup', rectMouseUp, false);
	cv.addEventListener('mousemove', rectMouseMove, false);
	cv.addEventListener('mouseout', rectMouseout, false);
};

//Triangle shape
function triangle() {
	rRTL = 1;

	cv.removeEventListener('mousedown', lmD, false);
	cv.removeEventListener('mousemove', lmM, false);
	cv.removeEventListener('mouseup', lmU, false);
	cv.removeEventListener('mouseout', lmO, false);
	
	//Initialize mouse coordinates to 0,0
	var mouse = {x: 0, y: 0};

	//Draw triangle
	draw = function() {
		//Top of triangle
		ctx.moveTo(mouse.x,mouse.y);
		ctx.lineTo(mouse.y, mouse.x);
		ctx.lineTo(mouse.x, mouse.x);
		ctx.closePath();

		ctx.strokeStyle = clrs;
		ctx.stroke();

		ctx.fillStyle = "black";
		ctx.fillStyle = clrs;
		ctx.fill();

	};

	//Find mouse coordinates relative to canvas
	rectMouseMove = function(e) {
	    mouse.w = (e.pageX - this.offsetLeft) - mouse.x;
	    mouse.h = (e.pageY - this.offsetTop) - mouse.y ;
	};

	//User clicks down on canvas to trigger draw
	rectMouseDown = function(e) {
		ctx.beginPath();
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		cv.addEventListener('mousemove', draw, false);		  
	};

	//When mouse lifts up, line stops drawing
	rectMouseUp = function() {
		cv.removeEventListener('mousemove', draw, false);
	};

	//When mouse leaves canvas, line stops drawing
	rectMouseout = function() {
		cv.removeEventListener('mousemove', draw, false);
	};

	//Event listeners that will trigger the draw functions when
	//mousedown, mousemove, mouseup, mouseout
	cv.addEventListener('mousedown', rectMouseDown, false);
	cv.addEventListener('mouseup', rectMouseUp, false);
	cv.addEventListener('mousemove', rectMouseMove, false);
	cv.addEventListener('mouseout', rectMouseout, false);
};


//COLORPICKER CODE
(function(){function CPF(config){this.config=config;this.el=document.getElementById(this.config.id);this.colorPicker=this.config.colorPicker;this.colorDisplay=new ColorDisplay(null);this.colorDisplay.setRGB(ro,gr,bl);this.attachEventListeners();}CPF.prototype.attachEventListeners=function(){var self=this;this.colorPicker.canvas.addEventListener(CanvasColorPicker.COLOR_PICKED, function(e){var detail=e.detail,rgb=detail.rgb,r=rgb[0], g=rgb[1], b=rgb[2];self.colorDisplay.setRGB(r,g,b);}, false);};window.CPF=CPF;function ColorDisplay(el){this.el=el;}ColorDisplay.prototype.setRGB=function(r, g, b){clrs=rgbToHex(r, g, b);document.getElementById("ts").style.backgroundColor=clrs;};function toHex(c){var hex=c.toString(16);return hex.length == 1 ? "0" + hex : hex;}function rgbToHex(r, g, b) {return "#"+toHex(r)+toHex(g)+toHex(b);}function hexToRgb(hex){var n=parseInt(hex,16);var r=(n>>16) & 255;var g=(n>>8)&255;var b=n&255;return [r,g,b];}
})();
var colorPicker = new CanvasColorPicker({id: "colorpicker",size: 120});var cp=new CPF({id: "cp",colorPicker: colorPicker});