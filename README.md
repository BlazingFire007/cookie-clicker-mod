# cookie-clicker-mod
A public mod for http://orteil.dashnet.org/cookieclicker/


Usage:
======
To use this mod, you will need to have [Tampermonkey(Chrome)](https://tampermonkey.net/) or [Greasemonkey(Firefox)](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/) installed.



Click [here](https://github.com/BlazingFire007/cookie-clicker-mod/raw/master/ccmod.user.js) or click on the 'ccmod.user.js' file. Then click the 'raw' button.


Go to http://orteil.dashnet.org/cookieclicker/
**Once the page loads** press the "C" key on your keyboard. This will open up a prompt for you to enter commands.

Commands:
======
*(More Coming Soon)*

getclicks
------
Probably the most fun command, getclicks will add the number of clicks you want.


Syntax: `getclicks <integer>`

setcost
------
This command will set the cost of any building. **This command does not work on upgrades currently**
*Note: If the building has a space in the name, please use an underscore ( _ )*


Syntax (*Case Sensitive*): `setcost <Name> <integer>`

forcesave
------
Force saves your current game.


Syntax: `forcesave`

killdata
------
Deletes your save data.


Syntax (*Will ask for confirmation*): `killdata`

noanticheat
------
Disables the game's anticheat for external spam clickers.


Syntax: `noanticheat`

getaward
------
Will award you with any award you want.


Syntax (*Case Sensitive*): `getaward <Name>`


spawngold
------
Spawns gold cookies.


Syntax: `spawngold <integer>`

autogold
------
Automatically collects gold cookies.


Syntax: `autogold` (*Run again to turn it off*)
Options `--nopopup` *This will remove the annoyig popups when the autogold collects the cookies*

autoclick
------
Automatically clicks the cookie.


Syntax: `autoclick` (*Run again to turn it off*)
