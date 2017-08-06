if (typeof localStorage.mousetrap === "undefined") fetch("https://cdn.rawgit.com/BlazingFire007/cookie-clicker-mod/master/depend/mousetrap.js").then(res=>{if (res.ok) return res.text();}).then(result=>{localStorage.setItem("mousetrap", result);location.reload();});
if (typeof localStorage.mousetrap === "string") { let s = document.createElement("script"); s.innerHTML = "eval(localStorage.mousetrap);"; document.body.append(s); }
var c=setInterval(()=>{
    if (document.readyState === "complete") {
        clearInterval(c);
        setTimeout(()=>{cons();}, 1000);
    }
}, 10);

function cons() {
    Mousetrap.bind("c", promptcom);
    Game.Popup("console is ready", Game.windowW/2, Game.windowH/2);
    setTimeout(()=>{Game.Popup("press c to open", Game.windowW/2, Game.windowH/2+40);}, 100);
}

function promptcom() {
    Game.Prompt('<h3>Enter command:</h3><div class="block"><input type="text" style="text-align:center;width:100%;" id="console"/></div>',[['Confirm','handle(l("console").value);Game.ClosePrompt();'],'Cancel']);
    setTimeout(()=>{l("console").focus();}, 10);
}

function handle(code) {
    code = code.split(' ');
    switch (code[0].toLowerCase()) {
    	case "getclicks":
    		Game.Earn(parseInt(code[1]));
    		break;
    	case "setcost":
    		if (Object.keys(Game.Objects).includes(code[1].replace('_', ' '))) {
    			Game.Objects[code[1].replace('_', ' ')].getPrice = function(){return parseInt(code[2]);};
    			Game.Objects[code[1].replace('_', ' ')]._rebuild = Game.Objects[code[1].replace('_', ' ')].rebuild;
    			Game.Objects[code[1].replace('_', ' ')].rebuild = function() { this.bulkPrice = parseInt(code[2]); Game.Objects[code[1].replace('_', ' ')]._rebuild.call(this);};
                Game.Objects[code[1].replace('_', ' ')].rebuild();
    		}
    		break;
    	case "killdata":
    		if (confirm("Are you sure?")) delete localStorage.CookieClickerGame;
            location.reload();
    		break;
    	case "forcesave":
    		Game.WriteSave();
    		break;
    	case "noanticheat":
    		setInterval(()=>{Game.autoclickerDetected = 0;}, 1);
    		break;
    	case "getaward":
    		Game.Win(code.slice(1));
    		break;
    	case "spawngold":
    		for (var i = 0; i < parseInt(code[1]); i++) {
				((i)=>{setTimeout(()=>{new Game.shimmer("golden");}, 10*i);})(i);
    		}
            break;
        case "autogold":
        	if (!code.includes("--nopopup")) {
                if (typeof Game.shimmerTypes.golden._popFunc === "function")Game.shimmerTypes.golden.popFunc = Game.shimmerTypes.golden._popFunc;
        		if (typeof autogold !== "number") { window.autogold = setInterval(()=>{Game.shimmers.length>0&&Game.shimmers[0].pop();}); } else { clearInterval(window.autogold); window.autogold = ""; }
        	} else {
                Game.shimmerTypes.golden._popFunc = Game.shimmerTypes.golden.popFunc;
                Game.shimmerTypes.golden.popFunc = function(me){me.x = Game.windowW*2; me.y = Game.windowH*2; Game.shimmerTypes.golden._popFunc(me);};
        		if (typeof autogold !== "number") { window.autogold = setInterval(()=>{Game.shimmers.length>0&&Game.shimmers[0].pop();}); } else { clearInterval(window.autogold); window.autogold = ""; }
            }
        	break;
        case "autoclick":
        	if (typeof autoclick !== "number") { window.autoclick = setInterval(Game.ClickCookie, 1); } else { clearInterval(window.autoclick); window.autoclick = ""; }
        	break;
    }
}
let s = document.createElement("script"); s.innerHTML = "var handle = "+handle.toString()+";"; document.body.append(s);
