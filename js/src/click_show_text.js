!function(e,t,a){function r(){for(var e=0;e<o.length;e++)o[e].alpha<=0?(t.body.removeChild(o[e].el),o.splice(e,1)):(o[e].y--,o[e].scale+=.004,o[e].alpha-=.013,o[e].el.style.cssText="left:"+o[e].x+"px;top:"+o[e].y+"px;opacity:"+o[e].alpha+";transform:scale("+o[e].scale+","+o[e].scale+") rotate(45deg);background:"+o[e].color+";z-index:99999");requestAnimationFrame(r)}function n(e){var a=t.createElement("div");a.className="heart",o.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),t.body.appendChild(a)}var o=[];e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(){var t;(function(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)})(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 500%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),t="function"==typeof e.onclick&&e.onclick,e.οnclick=function(e){t&&t(),n(e)},r()}()}(window,document);