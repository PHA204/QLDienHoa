typeof Object.create!="function"&&(Object.create=function(obj){function F(){}return F.prototype=obj,new F}),function($,window2,document2,undefined){var ElevateZoom={init:function(options,elem){var self2=this;self2.elem=elem,self2.$elem=$(elem),self2.imageSrc=self2.$elem.data("zoom-image")?self2.$elem.data("zoom-image"):self2.$elem.attr("src"),self2.options=$.extend({},$.fn.elevateZoom.options,options),self2.options.tint&&(self2.options.lensColour="none",self2.options.lensOpacity="1"),self2.options.zoomType=="inner"&&(self2.options.showLens=!1),self2.$elem.parent().removeAttr("title").removeAttr("alt"),self2.zoomImage=self2.imageSrc,self2.refresh(1),$("#"+self2.options.gallery+" a").click(function(e){return self2.options.galleryActiveClass&&($("#"+self2.options.gallery+" a").removeClass(self2.options.galleryActiveClass),$(this).addClass(self2.options.galleryActiveClass)),e.preventDefault(),$(this).data("zoom-image")?self2.zoomImagePre=$(this).data("zoom-image"):self2.zoomImagePre=$(this).data("image"),self2.swaptheimage($(this).data("image"),self2.zoomImagePre),!1})},refresh:function(length){var self2=this;setTimeout(function(){self2.fetch(self2.imageSrc)},length||self2.options.refresh)},fetch:function(imgsrc){var self2=this,newImg=new Image;newImg.onload=function(){self2.largeWidth=newImg.width,self2.largeHeight=newImg.height,self2.startZoom(),self2.currentImage=self2.imageSrc,self2.options.onZoomedImageLoaded(self2.$elem)},newImg.src=imgsrc},startZoom:function(){var self2=this;if(self2.nzWidth=self2.$elem.width(),self2.nzHeight=self2.$elem.height(),self2.isWindowActive=!1,self2.isLensActive=!1,self2.isTintActive=!1,self2.overWindow=!1,self2.options.imageCrossfade&&(self2.zoomWrap=self2.$elem.wrap('<div style="height:'+self2.nzHeight+"px;width:"+self2.nzWidth+'px;" class="zoomWrapper" />'),self2.$elem.css("position","absolute")),self2.zoomLock=1,self2.scrollingLock=!1,self2.changeBgSize=!1,self2.currentZoomLevel=self2.options.zoomLevel,self2.nzOffset=self2.$elem.offset(),self2.widthRatio=self2.largeWidth/self2.currentZoomLevel/self2.nzWidth,self2.heightRatio=self2.largeHeight/self2.currentZoomLevel/self2.nzHeight,self2.options.zoomType=="window"&&(self2.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(self2.options.zoomWindowBgColour)+";width: "+String(self2.options.zoomWindowWidth)+"px;height: "+String(self2.options.zoomWindowHeight)+"px;float: left;background-size: "+self2.largeWidth/self2.currentZoomLevel+"px "+self2.largeHeight/self2.currentZoomLevel+"px;display: none;z-index:100;border: "+String(self2.options.borderSize)+"px solid "+self2.options.borderColour+";background-repeat: no-repeat;position: absolute;"),self2.options.zoomType=="inner"){var borderWidth=self2.$elem.css("border-left-width");self2.zoomWindowStyle="overflow: hidden;margin-left: "+String(borderWidth)+";margin-top: "+String(borderWidth)+";background-position: 0px 0px;width: "+String(self2.nzWidth)+"px;height: "+String(self2.nzHeight)+"px;px;float: left;display: none;cursor:"+self2.options.cursor+";px solid "+self2.options.borderColour+";background-repeat: no-repeat;position: absolute;"}self2.options.zoomType=="window"&&(self2.nzHeight<self2.options.zoomWindowWidth/self2.widthRatio?lensHeight=self2.nzHeight:lensHeight=String(self2.options.zoomWindowHeight/self2.heightRatio),self2.largeWidth<self2.options.zoomWindowWidth?lensWidth=self2.nzWidth:lensWidth=self2.options.zoomWindowWidth/self2.widthRatio,self2.lensStyle="background-position: 0px 0px;width: "+String(self2.options.zoomWindowWidth/self2.widthRatio)+"px;height: "+String(self2.options.zoomWindowHeight/self2.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+self2.options.lensOpacity+";filter: alpha(opacity = "+self2.options.lensOpacity*100+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+self2.options.lensColour+";cursor:"+self2.options.cursor+";border: "+self2.options.lensBorderSize+"px solid "+self2.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"),self2.tintStyle="display: block;position: absolute;background-color: "+self2.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+self2.nzWidth+"px;height: "+self2.nzHeight+"px;",self2.lensRound="",self2.options.zoomType=="lens"&&(self2.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(self2.options.borderSize)+"px solid "+self2.options.borderColour+";width:"+String(self2.options.lensSize)+"px;height:"+String(self2.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),self2.options.lensShape=="round"&&(self2.lensRound="border-top-left-radius: "+String(self2.options.lensSize/2+self2.options.borderSize)+"px;border-top-right-radius: "+String(self2.options.lensSize/2+self2.options.borderSize)+"px;border-bottom-left-radius: "+String(self2.options.lensSize/2+self2.options.borderSize)+"px;border-bottom-right-radius: "+String(self2.options.lensSize/2+self2.options.borderSize)+"px;"),self2.zoomContainer=$('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+self2.nzOffset.left+"px;top:"+self2.nzOffset.top+"px;height:"+self2.nzHeight+"px;width:"+self2.nzWidth+'px;"></div>'),$("body").append(self2.zoomContainer),self2.options.containLensZoom&&self2.options.zoomType=="lens"&&self2.zoomContainer.css("overflow","hidden"),self2.options.zoomType!="inner"&&(self2.zoomLens=$("<div class='zoomLens' style='"+self2.lensStyle+self2.lensRound+"'>&nbsp;</div>").appendTo(self2.zoomContainer).click(function(){self2.$elem.trigger("click")}),self2.options.tint&&(self2.tintContainer=$("<div/>").addClass("tintContainer"),self2.zoomTint=$("<div class='zoomTint' style='"+self2.tintStyle+"'></div>"),self2.zoomLens.wrap(self2.tintContainer),self2.zoomTintcss=self2.zoomLens.after(self2.zoomTint),self2.zoomTintImage=$('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+self2.nzWidth+"px; height: "+self2.nzHeight+'px;" src="'+self2.imageSrc+'">').appendTo(self2.zoomLens).click(function(){self2.$elem.trigger("click")}))),isNaN(self2.options.zoomWindowPosition)?self2.zoomWindow=$("<div style='z-index:999;left:"+self2.windowOffsetLeft+"px;top:"+self2.windowOffsetTop+"px;"+self2.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){self2.$elem.trigger("click")}):self2.zoomWindow=$("<div style='z-index:999;left:"+self2.windowOffsetLeft+"px;top:"+self2.windowOffsetTop+"px;"+self2.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(self2.zoomContainer).click(function(){self2.$elem.trigger("click")}),self2.zoomWindowContainer=$("<div/>").addClass("zoomWindowContainer").css("width",self2.options.zoomWindowWidth),self2.zoomWindow.wrap(self2.zoomWindowContainer),self2.options.zoomType=="lens"&&self2.zoomLens.css({backgroundImage:"url('"+self2.imageSrc+"')"}),self2.options.zoomType=="window"&&self2.zoomWindow.css({backgroundImage:"url('"+self2.imageSrc+"')"}),self2.options.zoomType=="inner"&&self2.zoomWindow.css({backgroundImage:"url('"+self2.imageSrc+"')"}),self2.$elem.bind("touchmove",function(e){e.preventDefault();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];self2.setPosition(touch)}),self2.zoomContainer.bind("touchmove",function(e){self2.options.zoomType=="inner"&&self2.showHideWindow("show"),e.preventDefault();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];self2.setPosition(touch)}),self2.zoomContainer.bind("touchend",function(e){self2.showHideWindow("hide"),self2.options.showLens&&self2.showHideLens("hide"),self2.options.tint&&self2.options.zoomType!="inner"&&self2.showHideTint("hide")}),self2.$elem.bind("touchend",function(e){self2.showHideWindow("hide"),self2.options.showLens&&self2.showHideLens("hide"),self2.options.tint&&self2.options.zoomType!="inner"&&self2.showHideTint("hide")}),self2.options.showLens&&(self2.zoomLens.bind("touchmove",function(e){e.preventDefault();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];self2.setPosition(touch)}),self2.zoomLens.bind("touchend",function(e){self2.showHideWindow("hide"),self2.options.showLens&&self2.showHideLens("hide"),self2.options.tint&&self2.options.zoomType!="inner"&&self2.showHideTint("hide")})),self2.$elem.bind("mousemove",function(e){self2.overWindow==!1&&self2.setElements("show"),(self2.lastX!==e.clientX||self2.lastY!==e.clientY)&&(self2.setPosition(e),self2.currentLoc=e),self2.lastX=e.clientX,self2.lastY=e.clientY}),self2.zoomContainer.bind("mousemove",function(e){self2.overWindow==!1&&self2.setElements("show"),(self2.lastX!==e.clientX||self2.lastY!==e.clientY)&&(self2.setPosition(e),self2.currentLoc=e),self2.lastX=e.clientX,self2.lastY=e.clientY}),self2.options.zoomType!="inner"&&self2.zoomLens.bind("mousemove",function(e){(self2.lastX!==e.clientX||self2.lastY!==e.clientY)&&(self2.setPosition(e),self2.currentLoc=e),self2.lastX=e.clientX,self2.lastY=e.clientY}),self2.options.tint&&self2.options.zoomType!="inner"&&self2.zoomTint.bind("mousemove",function(e){(self2.lastX!==e.clientX||self2.lastY!==e.clientY)&&(self2.setPosition(e),self2.currentLoc=e),self2.lastX=e.clientX,self2.lastY=e.clientY}),self2.options.zoomType=="inner"&&self2.zoomWindow.bind("mousemove",function(e){(self2.lastX!==e.clientX||self2.lastY!==e.clientY)&&(self2.setPosition(e),self2.currentLoc=e),self2.lastX=e.clientX,self2.lastY=e.clientY}),self2.zoomContainer.add(self2.$elem).mouseenter(function(){self2.overWindow==!1&&self2.setElements("show")}).mouseleave(function(){self2.scrollLock||(self2.setElements("hide"),self2.options.onDestroy(self2.$elem))}),self2.options.zoomType!="inner"&&self2.zoomWindow.mouseenter(function(){self2.overWindow=!0,self2.setElements("hide")}).mouseleave(function(){self2.overWindow=!1}),self2.options.zoomLevel!=1,self2.options.minZoomLevel?self2.minZoomLevel=self2.options.minZoomLevel:self2.minZoomLevel=self2.options.scrollZoomIncrement*2,self2.options.scrollZoom&&self2.zoomContainer.add(self2.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(e){self2.scrollLock=!0,clearTimeout($.data(this,"timer")),$.data(this,"timer",setTimeout(function(){self2.scrollLock=!1},250));var theEvent=e.originalEvent.wheelDelta||e.originalEvent.detail*-1;return e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),theEvent/120>0?self2.currentZoomLevel>=self2.minZoomLevel&&self2.changeZoomLevel(self2.currentZoomLevel-self2.options.scrollZoomIncrement):self2.options.maxZoomLevel?self2.currentZoomLevel<=self2.options.maxZoomLevel&&self2.changeZoomLevel(parseFloat(self2.currentZoomLevel)+self2.options.scrollZoomIncrement):self2.changeZoomLevel(parseFloat(self2.currentZoomLevel)+self2.options.scrollZoomIncrement),!1})},setElements:function(type){var self2=this;if(!self2.options.zoomEnabled)return!1;type=="show"&&self2.isWindowSet&&(self2.options.zoomType=="inner"&&self2.showHideWindow("show"),self2.options.zoomType=="window"&&self2.showHideWindow("show"),self2.options.showLens&&self2.showHideLens("show"),self2.options.tint&&self2.options.zoomType!="inner"&&self2.showHideTint("show")),type=="hide"&&(self2.options.zoomType=="window"&&self2.showHideWindow("hide"),self2.options.tint||self2.showHideWindow("hide"),self2.options.showLens&&self2.showHideLens("hide"),self2.options.tint&&self2.showHideTint("hide"))},setPosition:function(e){var self2=this;if(!self2.options.zoomEnabled)return!1;if(self2.nzHeight=self2.$elem.height(),self2.nzWidth=self2.$elem.width(),self2.nzOffset=self2.$elem.offset(),self2.options.tint&&self2.options.zoomType!="inner"&&(self2.zoomTint.css({top:0}),self2.zoomTint.css({left:0})),self2.options.responsive&&!self2.options.scrollZoom&&self2.options.showLens&&(self2.nzHeight<self2.options.zoomWindowWidth/self2.widthRatio?lensHeight=self2.nzHeight:lensHeight=String(self2.options.zoomWindowHeight/self2.heightRatio),self2.largeWidth<self2.options.zoomWindowWidth?lensWidth=self2.nzWidth:lensWidth=self2.options.zoomWindowWidth/self2.widthRatio,self2.widthRatio=self2.largeWidth/self2.nzWidth,self2.heightRatio=self2.largeHeight/self2.nzHeight,self2.options.zoomType!="lens"&&(self2.nzHeight<self2.options.zoomWindowWidth/self2.widthRatio?lensHeight=self2.nzHeight:lensHeight=String(self2.options.zoomWindowHeight/self2.heightRatio),self2.nzWidth<self2.options.zoomWindowHeight/self2.heightRatio?lensWidth=self2.nzWidth:lensWidth=String(self2.options.zoomWindowWidth/self2.widthRatio),self2.zoomLens.css("width",lensWidth),self2.zoomLens.css("height",lensHeight),self2.options.tint&&(self2.zoomTintImage.css("width",self2.nzWidth),self2.zoomTintImage.css("height",self2.nzHeight))),self2.options.zoomType=="lens"&&self2.zoomLens.css({width:String(self2.options.lensSize)+"px",height:String(self2.options.lensSize)+"px"})),self2.zoomContainer.css({top:self2.nzOffset.top}),self2.zoomContainer.css({left:self2.nzOffset.left}),self2.mouseLeft=parseInt(e.pageX-self2.nzOffset.left),self2.mouseTop=parseInt(e.pageY-self2.nzOffset.top),self2.options.zoomType=="window"&&(self2.Etoppos=self2.mouseTop<self2.zoomLens.height()/2,self2.Eboppos=self2.mouseTop>self2.nzHeight-self2.zoomLens.height()/2-self2.options.lensBorderSize*2,self2.Eloppos=self2.mouseLeft<0+self2.zoomLens.width()/2,self2.Eroppos=self2.mouseLeft>self2.nzWidth-self2.zoomLens.width()/2-self2.options.lensBorderSize*2),self2.options.zoomType=="inner"&&(self2.Etoppos=self2.mouseTop<self2.nzHeight/2/self2.heightRatio,self2.Eboppos=self2.mouseTop>self2.nzHeight-self2.nzHeight/2/self2.heightRatio,self2.Eloppos=self2.mouseLeft<0+self2.nzWidth/2/self2.widthRatio,self2.Eroppos=self2.mouseLeft>self2.nzWidth-self2.nzWidth/2/self2.widthRatio-self2.options.lensBorderSize*2),self2.mouseLeft<0||self2.mouseTop<0||self2.mouseLeft>self2.nzWidth||self2.mouseTop>self2.nzHeight){self2.setElements("hide");return}else self2.options.showLens&&(self2.lensLeftPos=String(Math.floor(self2.mouseLeft-self2.zoomLens.width()/2)),self2.lensTopPos=String(Math.floor(self2.mouseTop-self2.zoomLens.height()/2))),self2.Etoppos&&(self2.lensTopPos=0),self2.Eloppos&&(self2.windowLeftPos=0,self2.lensLeftPos=0,self2.tintpos=0),self2.options.zoomType=="window"&&(self2.Eboppos&&(self2.lensTopPos=Math.max(self2.nzHeight-self2.zoomLens.height()-self2.options.lensBorderSize*2,0)),self2.Eroppos&&(self2.lensLeftPos=self2.nzWidth-self2.zoomLens.width()-self2.options.lensBorderSize*2)),self2.options.zoomType=="inner"&&(self2.Eboppos&&(self2.lensTopPos=Math.max(self2.nzHeight-self2.options.lensBorderSize*2,0)),self2.Eroppos&&(self2.lensLeftPos=self2.nzWidth-self2.nzWidth-self2.options.lensBorderSize*2)),self2.options.zoomType=="lens"&&(self2.windowLeftPos=String(((e.pageX-self2.nzOffset.left)*self2.widthRatio-self2.zoomLens.width()/2)*-1),self2.windowTopPos=String(((e.pageY-self2.nzOffset.top)*self2.heightRatio-self2.zoomLens.height()/2)*-1),self2.zoomLens.css({backgroundPosition:self2.windowLeftPos+"px "+self2.windowTopPos+"px"}),self2.changeBgSize&&(self2.nzHeight>self2.nzWidth?(self2.options.zoomType=="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"})):(self2.options.zoomType=="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"})),self2.changeBgSize=!1),self2.setWindowPostition(e)),self2.options.tint&&self2.options.zoomType!="inner"&&self2.setTintPosition(e),self2.options.zoomType=="window"&&self2.setWindowPostition(e),self2.options.zoomType=="inner"&&self2.setWindowPostition(e),self2.options.showLens&&(self2.fullwidth&&self2.options.zoomType!="lens"&&(self2.lensLeftPos=0),self2.zoomLens.css({left:self2.lensLeftPos+"px",top:self2.lensTopPos+"px"}))},showHideWindow:function(change){var self2=this;change=="show"&&(self2.isWindowActive||(self2.options.zoomWindowFadeIn?self2.zoomWindow.stop(!0,!0,!1).fadeIn(self2.options.zoomWindowFadeIn):self2.zoomWindow.show(),self2.isWindowActive=!0)),change=="hide"&&self2.isWindowActive&&(self2.options.zoomWindowFadeOut?self2.zoomWindow.stop(!0,!0).fadeOut(self2.options.zoomWindowFadeOut,function(){self2.loop&&(clearInterval(self2.loop),self2.loop=!1)}):self2.zoomWindow.hide(),self2.isWindowActive=!1)},showHideLens:function(change){var self2=this;change=="show"&&(self2.isLensActive||(self2.options.lensFadeIn?self2.zoomLens.stop(!0,!0,!1).fadeIn(self2.options.lensFadeIn):self2.zoomLens.show(),self2.isLensActive=!0)),change=="hide"&&self2.isLensActive&&(self2.options.lensFadeOut?self2.zoomLens.stop(!0,!0).fadeOut(self2.options.lensFadeOut):self2.zoomLens.hide(),self2.isLensActive=!1)},showHideTint:function(change){var self2=this;change=="show"&&(self2.isTintActive||(self2.options.zoomTintFadeIn?self2.zoomTint.css({opacity:self2.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(self2.zoomTint.css({opacity:self2.options.tintOpacity}).animate(),self2.zoomTint.show()),self2.isTintActive=!0)),change=="hide"&&self2.isTintActive&&(self2.options.zoomTintFadeOut?self2.zoomTint.stop(!0,!0).fadeOut(self2.options.zoomTintFadeOut):self2.zoomTint.hide(),self2.isTintActive=!1)},setLensPostition:function(e){},setWindowPostition:function(e){var self2=this;if(isNaN(self2.options.zoomWindowPosition))self2.externalContainer=$("#"+self2.options.zoomWindowPosition),self2.externalContainerWidth=self2.externalContainer.width(),self2.externalContainerHeight=self2.externalContainer.height(),self2.externalContainerOffset=self2.externalContainer.offset(),self2.windowOffsetTop=self2.externalContainerOffset.top,self2.windowOffsetLeft=self2.externalContainerOffset.left;else switch(self2.options.zoomWindowPosition){case 1:self2.windowOffsetTop=self2.options.zoomWindowOffety,self2.windowOffsetLeft=+self2.nzWidth;break;case 2:self2.options.zoomWindowHeight>self2.nzHeight&&(self2.windowOffsetTop=(self2.options.zoomWindowHeight/2-self2.nzHeight/2)*-1,self2.windowOffsetLeft=self2.nzWidth);break;case 3:self2.windowOffsetTop=self2.nzHeight-self2.zoomWindow.height()-self2.options.borderSize*2,self2.windowOffsetLeft=self2.nzWidth;break;case 4:self2.windowOffsetTop=self2.nzHeight,self2.windowOffsetLeft=self2.nzWidth;break;case 5:self2.windowOffsetTop=self2.nzHeight,self2.windowOffsetLeft=self2.nzWidth-self2.zoomWindow.width()-self2.options.borderSize*2;break;case 6:self2.options.zoomWindowHeight>self2.nzHeight&&(self2.windowOffsetTop=self2.nzHeight,self2.windowOffsetLeft=(self2.options.zoomWindowWidth/2-self2.nzWidth/2+self2.options.borderSize*2)*-1);break;case 7:self2.windowOffsetTop=self2.nzHeight,self2.windowOffsetLeft=0;break;case 8:self2.windowOffsetTop=self2.nzHeight,self2.windowOffsetLeft=(self2.zoomWindow.width()+self2.options.borderSize*2)*-1;break;case 9:self2.windowOffsetTop=self2.nzHeight-self2.zoomWindow.height()-self2.options.borderSize*2,self2.windowOffsetLeft=(self2.zoomWindow.width()+self2.options.borderSize*2)*-1;break;case 10:self2.options.zoomWindowHeight>self2.nzHeight&&(self2.windowOffsetTop=(self2.options.zoomWindowHeight/2-self2.nzHeight/2)*-1,self2.windowOffsetLeft=(self2.zoomWindow.width()+self2.options.borderSize*2)*-1);break;case 11:self2.windowOffsetTop=self2.options.zoomWindowOffety,self2.windowOffsetLeft=(self2.zoomWindow.width()+self2.options.borderSize*2)*-1;break;case 12:self2.windowOffsetTop=(self2.zoomWindow.height()+self2.options.borderSize*2)*-1,self2.windowOffsetLeft=(self2.zoomWindow.width()+self2.options.borderSize*2)*-1;break;case 13:self2.windowOffsetTop=(self2.zoomWindow.height()+self2.options.borderSize*2)*-1,self2.windowOffsetLeft=0;break;case 14:self2.options.zoomWindowHeight>self2.nzHeight&&(self2.windowOffsetTop=(self2.zoomWindow.height()+self2.options.borderSize*2)*-1,self2.windowOffsetLeft=(self2.options.zoomWindowWidth/2-self2.nzWidth/2+self2.options.borderSize*2)*-1);break;case 15:self2.windowOffsetTop=(self2.zoomWindow.height()+self2.options.borderSize*2)*-1,self2.windowOffsetLeft=self2.nzWidth-self2.zoomWindow.width()-self2.options.borderSize*2;break;case 16:self2.windowOffsetTop=(self2.zoomWindow.height()+self2.options.borderSize*2)*-1,self2.windowOffsetLeft=self2.nzWidth;break;default:self2.windowOffsetTop=self2.options.zoomWindowOffety,self2.windowOffsetLeft=self2.nzWidth}self2.isWindowSet=!0,self2.windowOffsetTop=self2.windowOffsetTop+self2.options.zoomWindowOffety,self2.windowOffsetLeft=self2.windowOffsetLeft+self2.options.zoomWindowOffetx,self2.zoomWindow.css({top:self2.windowOffsetTop}),self2.zoomWindow.css({left:self2.windowOffsetLeft}),self2.options.zoomType=="inner"&&(self2.zoomWindow.css({top:0}),self2.zoomWindow.css({left:0})),self2.windowLeftPos=String(((e.pageX-self2.nzOffset.left)*self2.widthRatio-self2.zoomWindow.width()/2)*-1),self2.windowTopPos=String(((e.pageY-self2.nzOffset.top)*self2.heightRatio-self2.zoomWindow.height()/2)*-1),self2.Etoppos&&(self2.windowTopPos=0),self2.Eloppos&&(self2.windowLeftPos=0),self2.Eboppos&&(self2.windowTopPos=(self2.largeHeight/self2.currentZoomLevel-self2.zoomWindow.height())*-1),self2.Eroppos&&(self2.windowLeftPos=(self2.largeWidth/self2.currentZoomLevel-self2.zoomWindow.width())*-1),self2.fullheight&&(self2.windowTopPos=0),self2.fullwidth&&(self2.windowLeftPos=0),(self2.options.zoomType=="window"||self2.options.zoomType=="inner")&&(self2.zoomLock==1&&(self2.widthRatio<=1&&(self2.windowLeftPos=0),self2.heightRatio<=1&&(self2.windowTopPos=0)),self2.options.zoomType=="window"&&(self2.largeHeight<self2.options.zoomWindowHeight&&(self2.windowTopPos=0),self2.largeWidth<self2.options.zoomWindowWidth&&(self2.windowLeftPos=0)),self2.options.easing?(self2.xp||(self2.xp=0),self2.yp||(self2.yp=0),self2.loop||(self2.loop=setInterval(function(){self2.xp+=(self2.windowLeftPos-self2.xp)/self2.options.easingAmount,self2.yp+=(self2.windowTopPos-self2.yp)/self2.options.easingAmount,self2.scrollingLock?(clearInterval(self2.loop),self2.xp=self2.windowLeftPos,self2.yp=self2.windowTopPos,self2.xp=((e.pageX-self2.nzOffset.left)*self2.widthRatio-self2.zoomWindow.width()/2)*-1,self2.yp=((e.pageY-self2.nzOffset.top)*self2.heightRatio-self2.zoomWindow.height()/2)*-1,self2.changeBgSize&&(self2.nzHeight>self2.nzWidth?(self2.options.zoomType=="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"})):(self2.options.zoomType!="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvalueheight+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"})),self2.changeBgSize=!1),self2.zoomWindow.css({backgroundPosition:self2.windowLeftPos+"px "+self2.windowTopPos+"px"}),self2.scrollingLock=!1,self2.loop=!1):Math.round(Math.abs(self2.xp-self2.windowLeftPos)+Math.abs(self2.yp-self2.windowTopPos))<1?(clearInterval(self2.loop),self2.zoomWindow.css({backgroundPosition:self2.windowLeftPos+"px "+self2.windowTopPos+"px"}),self2.loop=!1):(self2.changeBgSize&&(self2.nzHeight>self2.nzWidth?(self2.options.zoomType=="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"})):(self2.options.zoomType!="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"})),self2.changeBgSize=!1),self2.zoomWindow.css({backgroundPosition:self2.xp+"px "+self2.yp+"px"}))},16))):(self2.changeBgSize&&(self2.nzHeight>self2.nzWidth?(self2.options.zoomType=="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"}),self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"})):(self2.options.zoomType=="lens"&&self2.zoomLens.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"}),self2.largeHeight/self2.newvaluewidth<self2.options.zoomWindowHeight?self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvaluewidth+"px "+self2.largeHeight/self2.newvaluewidth+"px"}):self2.zoomWindow.css({"background-size":self2.largeWidth/self2.newvalueheight+"px "+self2.largeHeight/self2.newvalueheight+"px"})),self2.changeBgSize=!1),self2.zoomWindow.css({backgroundPosition:self2.windowLeftPos+"px "+self2.windowTopPos+"px"})))},setTintPosition:function(e){var self2=this;self2.nzOffset=self2.$elem.offset(),self2.tintpos=String((e.pageX-self2.nzOffset.left-self2.zoomLens.width()/2)*-1),self2.tintposy=String((e.pageY-self2.nzOffset.top-self2.zoomLens.height()/2)*-1),self2.Etoppos&&(self2.tintposy=0),self2.Eloppos&&(self2.tintpos=0),self2.Eboppos&&(self2.tintposy=(self2.nzHeight-self2.zoomLens.height()-self2.options.lensBorderSize*2)*-1),self2.Eroppos&&(self2.tintpos=(self2.nzWidth-self2.zoomLens.width()-self2.options.lensBorderSize*2)*-1),self2.options.tint&&(self2.fullheight&&(self2.tintposy=0),self2.fullwidth&&(self2.tintpos=0),self2.zoomTintImage.css({left:self2.tintpos+"px"}),self2.zoomTintImage.css({top:self2.tintposy+"px"}))},swaptheimage:function(smallimage,largeimage){var self2=this,newImg=new Image;self2.options.loadingIcon&&(self2.spinner=$("<div style=\"background: url('"+self2.options.loadingIcon+"') no-repeat center;height:"+self2.nzHeight+"px;width:"+self2.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),self2.$elem.after(self2.spinner)),self2.options.onImageSwap(self2.$elem),newImg.onload=function(){self2.largeWidth=newImg.width,self2.largeHeight=newImg.height,self2.zoomImage=largeimage,self2.zoomWindow.css({"background-size":self2.largeWidth+"px "+self2.largeHeight+"px"}),self2.swapAction(smallimage,largeimage)},newImg.src=largeimage},swapAction:function(smallimage,largeimage){var self2=this,newImg2=new Image;if(newImg2.onload=function(){self2.nzHeight=newImg2.height,self2.nzWidth=newImg2.width,self2.options.onImageSwapComplete(self2.$elem),self2.doneCallback()},newImg2.src=smallimage,self2.currentZoomLevel=self2.options.zoomLevel,self2.options.maxZoomLevel=!1,self2.options.zoomType=="lens"&&self2.zoomLens.css({backgroundImage:"url('"+largeimage+"')"}),self2.options.zoomType=="window"&&self2.zoomWindow.css({backgroundImage:"url('"+largeimage+"')"}),self2.options.zoomType=="inner"&&self2.zoomWindow.css({backgroundImage:"url('"+largeimage+"')"}),self2.currentImage=largeimage,self2.options.imageCrossfade){var oldImg=self2.$elem,newImg=oldImg.clone();if(self2.$elem.attr("src",smallimage),self2.$elem.after(newImg),newImg.stop(!0).fadeOut(self2.options.imageCrossfade,function(){$(this).remove()}),self2.$elem.width("auto").removeAttr("width"),self2.$elem.height("auto").removeAttr("height"),oldImg.fadeIn(self2.options.imageCrossfade),self2.options.tint&&self2.options.zoomType!="inner"){var oldImgTint=self2.zoomTintImage,newImgTint=oldImgTint.clone();self2.zoomTintImage.attr("src",largeimage),self2.zoomTintImage.after(newImgTint),newImgTint.stop(!0).fadeOut(self2.options.imageCrossfade,function(){$(this).remove()}),oldImgTint.fadeIn(self2.options.imageCrossfade),self2.zoomTint.css({height:self2.$elem.height()}),self2.zoomTint.css({width:self2.$elem.width()})}self2.zoomContainer.css("height",self2.$elem.height()),self2.zoomContainer.css("width",self2.$elem.width()),self2.options.zoomType=="inner"&&(self2.options.constrainType||(self2.zoomWrap.parent().css("height",self2.$elem.height()),self2.zoomWrap.parent().css("width",self2.$elem.width()),self2.zoomWindow.css("height",self2.$elem.height()),self2.zoomWindow.css("width",self2.$elem.width()))),self2.options.imageCrossfade&&(self2.zoomWrap.css("height",self2.$elem.height()),self2.zoomWrap.css("width",self2.$elem.width()))}else self2.$elem.attr("src",smallimage),self2.options.tint&&(self2.zoomTintImage.attr("src",largeimage),self2.zoomTintImage.attr("height",self2.$elem.height()),self2.zoomTintImage.css({height:self2.$elem.height()}),self2.zoomTint.css({height:self2.$elem.height()})),self2.zoomContainer.css("height",self2.$elem.height()),self2.zoomContainer.css("width",self2.$elem.width()),self2.options.imageCrossfade&&(self2.zoomWrap.css("height",self2.$elem.height()),self2.zoomWrap.css("width",self2.$elem.width()));self2.options.constrainType&&(self2.options.constrainType=="height"&&(self2.zoomContainer.css("height",self2.options.constrainSize),self2.zoomContainer.css("width","auto"),self2.options.imageCrossfade?(self2.zoomWrap.css("height",self2.options.constrainSize),self2.zoomWrap.css("width","auto"),self2.constwidth=self2.zoomWrap.width()):(self2.$elem.css("height",self2.options.constrainSize),self2.$elem.css("width","auto"),self2.constwidth=self2.$elem.width()),self2.options.zoomType=="inner"&&(self2.zoomWrap.parent().css("height",self2.options.constrainSize),self2.zoomWrap.parent().css("width",self2.constwidth),self2.zoomWindow.css("height",self2.options.constrainSize),self2.zoomWindow.css("width",self2.constwidth)),self2.options.tint&&(self2.tintContainer.css("height",self2.options.constrainSize),self2.tintContainer.css("width",self2.constwidth),self2.zoomTint.css("height",self2.options.constrainSize),self2.zoomTint.css("width",self2.constwidth),self2.zoomTintImage.css("height",self2.options.constrainSize),self2.zoomTintImage.css("width",self2.constwidth))),self2.options.constrainType=="width"&&(self2.zoomContainer.css("height","auto"),self2.zoomContainer.css("width",self2.options.constrainSize),self2.options.imageCrossfade?(self2.zoomWrap.css("height","auto"),self2.zoomWrap.css("width",self2.options.constrainSize),self2.constheight=self2.zoomWrap.height()):(self2.$elem.css("height","auto"),self2.$elem.css("width",self2.options.constrainSize),self2.constheight=self2.$elem.height()),self2.options.zoomType=="inner"&&(self2.zoomWrap.parent().css("height",self2.constheight),self2.zoomWrap.parent().css("width",self2.options.constrainSize),self2.zoomWindow.css("height",self2.constheight),self2.zoomWindow.css("width",self2.options.constrainSize)),self2.options.tint&&(self2.tintContainer.css("height",self2.constheight),self2.tintContainer.css("width",self2.options.constrainSize),self2.zoomTint.css("height",self2.constheight),self2.zoomTint.css("width",self2.options.constrainSize),self2.zoomTintImage.css("height",self2.constheight),self2.zoomTintImage.css("width",self2.options.constrainSize))))},doneCallback:function(){var self2=this;self2.options.loadingIcon&&self2.spinner.hide(),self2.nzOffset=self2.$elem.offset(),self2.nzWidth=self2.$elem.width(),self2.nzHeight=self2.$elem.height(),self2.currentZoomLevel=self2.options.zoomLevel,self2.widthRatio=self2.largeWidth/self2.nzWidth,self2.heightRatio=self2.largeHeight/self2.nzHeight,self2.options.zoomType=="window"&&(self2.nzHeight<self2.options.zoomWindowWidth/self2.widthRatio?lensHeight=self2.nzHeight:lensHeight=String(self2.options.zoomWindowHeight/self2.heightRatio),self2.options.zoomWindowWidth<self2.options.zoomWindowWidth?lensWidth=self2.nzWidth:lensWidth=self2.options.zoomWindowWidth/self2.widthRatio,self2.zoomLens&&(self2.zoomLens.css("width",lensWidth),self2.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){var self2=this;return self2.zoomImage},getGalleryList:function(){var self2=this;return self2.gallerylist=[],self2.options.gallery?$("#"+self2.options.gallery+" a").each(function(){var img_src="";$(this).data("zoom-image")?img_src=$(this).data("zoom-image"):$(this).data("image")&&(img_src=$(this).data("image")),img_src==self2.zoomImage?self2.gallerylist.unshift({href:""+img_src,title:$(this).find("img").attr("title")}):self2.gallerylist.push({href:""+img_src,title:$(this).find("img").attr("title")})}):self2.gallerylist.push({href:""+self2.zoomImage,title:$(this).find("img").attr("title")}),self2.gallerylist},changeZoomLevel:function(value){var self2=this;self2.scrollingLock=!0,self2.newvalue=parseFloat(value).toFixed(2),newvalue=parseFloat(value).toFixed(2),maxheightnewvalue=self2.largeHeight/(self2.options.zoomWindowHeight/self2.nzHeight*self2.nzHeight),maxwidthtnewvalue=self2.largeWidth/(self2.options.zoomWindowWidth/self2.nzWidth*self2.nzWidth),self2.options.zoomType!="inner"&&(maxheightnewvalue<=newvalue?(self2.heightRatio=self2.largeHeight/maxheightnewvalue/self2.nzHeight,self2.newvalueheight=maxheightnewvalue,self2.fullheight=!0):(self2.heightRatio=self2.largeHeight/newvalue/self2.nzHeight,self2.newvalueheight=newvalue,self2.fullheight=!1),maxwidthtnewvalue<=newvalue?(self2.widthRatio=self2.largeWidth/maxwidthtnewvalue/self2.nzWidth,self2.newvaluewidth=maxwidthtnewvalue,self2.fullwidth=!0):(self2.widthRatio=self2.largeWidth/newvalue/self2.nzWidth,self2.newvaluewidth=newvalue,self2.fullwidth=!1),self2.options.zoomType=="lens"&&(maxheightnewvalue<=newvalue?(self2.fullwidth=!0,self2.newvaluewidth=maxheightnewvalue):(self2.widthRatio=self2.largeWidth/newvalue/self2.nzWidth,self2.newvaluewidth=newvalue,self2.fullwidth=!1))),self2.options.zoomType=="inner"&&(maxheightnewvalue=parseFloat(self2.largeHeight/self2.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(self2.largeWidth/self2.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(self2.heightRatio=self2.largeHeight/newvalue/self2.nzHeight,newvalue>maxheightnewvalue?self2.newvalueheight=maxheightnewvalue:self2.newvalueheight=newvalue,self2.fullheight=!0):(self2.heightRatio=self2.largeHeight/newvalue/self2.nzHeight,newvalue>maxheightnewvalue?self2.newvalueheight=maxheightnewvalue:self2.newvalueheight=newvalue,self2.fullheight=!1),maxwidthtnewvalue<=newvalue?(self2.widthRatio=self2.largeWidth/newvalue/self2.nzWidth,newvalue>maxwidthtnewvalue?self2.newvaluewidth=maxwidthtnewvalue:self2.newvaluewidth=newvalue,self2.fullwidth=!0):(self2.widthRatio=self2.largeWidth/newvalue/self2.nzWidth,self2.newvaluewidth=newvalue,self2.fullwidth=!1)),scrcontinue=!1,self2.options.zoomType=="inner"&&(self2.nzWidth>=self2.nzHeight&&(self2.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,self2.fullheight=!0,self2.fullwidth=!0)),self2.nzHeight>self2.nzWidth&&(self2.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,self2.fullheight=!0,self2.fullwidth=!0))),self2.options.zoomType!="inner"&&(scrcontinue=!0),scrcontinue&&(self2.zoomLock=0,self2.changeZoom=!0,self2.options.zoomWindowHeight/self2.heightRatio<=self2.nzHeight&&(self2.currentZoomLevel=self2.newvalueheight,self2.options.zoomType!="lens"&&self2.options.zoomType!="inner"&&(self2.changeBgSize=!0,self2.zoomLens.css({height:String(self2.options.zoomWindowHeight/self2.heightRatio)+"px"})),(self2.options.zoomType=="lens"||self2.options.zoomType=="inner")&&(self2.changeBgSize=!0)),self2.options.zoomWindowWidth/self2.widthRatio<=self2.nzWidth&&(self2.options.zoomType!="inner"&&self2.newvaluewidth>self2.newvalueheight&&(self2.currentZoomLevel=self2.newvaluewidth),self2.options.zoomType!="lens"&&self2.options.zoomType!="inner"&&(self2.changeBgSize=!0,self2.zoomLens.css({width:String(self2.options.zoomWindowWidth/self2.widthRatio)+"px"})),(self2.options.zoomType=="lens"||self2.options.zoomType=="inner")&&(self2.changeBgSize=!0)),self2.options.zoomType=="inner"&&(self2.changeBgSize=!0,self2.nzWidth>self2.nzHeight&&(self2.currentZoomLevel=self2.newvaluewidth),self2.nzHeight>self2.nzWidth&&(self2.currentZoomLevel=self2.newvaluewidth))),self2.setPosition(self2.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide(),self.zoomLens&&self.zoomLens.hide(),self.zoomTint&&self.zoomTint.hide()},changeState:function(value){var self2=this;value=="enable"&&(self2.options.zoomEnabled=!0),value=="disable"&&(self2.options.zoomEnabled=!1)}};$.fn.elevateZoom=function(options){return this.each(function(){var elevate=Object.create(ElevateZoom);elevate.init(options,this),$.data(this,"elevateZoom",elevate)})},$.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:$.noop,onDestroy:function(){},onZoomedImageLoaded:function(){},onImageSwap:$.noop,onImageSwapComplete:$.noop}}(jQuery,window,document);
//# sourceMappingURL=/cdn/shop/t/2/assets/jquery.elevatezoom.js.map?v=91531011408487407581577267539