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
    		Game.Earn(code[1]|0);
    		break;
    	case "setcost":
    		if (Object.keys(Game.Objects).includes(code[1])) {
    			Game.Objects[code[1]].getPrice = function(){return code[2]|0;};
    			Game.Objects[code[1]]._rebuild = Game.Objects[code[1]].rebuild;
    			Game.Objects[code[1]].rebuild = function() { this.bulkPrice = code[2]|0; Game.Objects[code[1]]._rebuild.call(this);};
                Game.Objects[code[1]].rebuild();
    		}
    		break;
    	case "killdata":
    		if (confirm("Are you sure?")) delete localStorage.CookieClickerGame;
            location.reload();
    		break;
    	case "forcesave":
    		Game.WriteSave();
    		break;
    }
}
