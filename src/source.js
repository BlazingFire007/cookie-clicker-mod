if (typeof localStorage.mousetrap === "undefined") fetch("https://cdn.rawgit.com/BlazingFire007/cookie-clicker-mod/master/depend/mousetrap.js").then(res=>{if (res.ok) return res.text();}).then(result=>{localStorage.setItem("mousetrap", result);location.reload();});
if (typeof localStorage.mousetrap === "string") { let s = document.createElement("script"); s.innerHTML = "eval(localStorage.mousetrap);"; document.body.append(s); }
var c=setInterval(()=>{
    if (document.readyState === "complete") {
        clearInterval(c);
        cons();
    }
}, 10);

function cons() {
    Mousetrap.bind("c", ()=>{handle(prompt());});
    console.log("Console is ready...");
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
    }
}
