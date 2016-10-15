var game = {
    worldEl: world,
    heroEl: hero,
    monsterEl: monster,
    init: function() {
        this.worldEl.createWorld(this.heroEl, this.monsterEl);
        this.bindEvent();
    },
    bindEvent: function() {
        var _this = this;
        document.addEventListener("keydown" , function(event) {
            
            setInterval( function() {
                keyCode = Math.floor(Math.random() * (40-35)) + 36;
                console.log(keyCode);
                if(keyCode == 40 && _this.monsterEl.posY-1 >= 0 && !_this.worldEl.checkStone(_this.monsterEl.posX, _this.monsterEl.posY-1)) { _this.monsterEl.posY--; }
                else if(keyCode == 37 && _this.monsterEl.posX-1 >= 0 && !_this.worldEl.checkStone(_this.monsterEl.posX-1, _this.monsterEl.posY)) { _this.monsterEl.posX--; }
                else if(keyCode == 38 && _this.monsterEl.posY+1 < _this.worldEl.width && !_this.worldEl.checkStone(_this.monsterEl.posX, _this.monsterEl.posY+1)) { _this.monsterEl.posY++; } 
                else if(keyCode == 39 && _this.monsterEl.posX+1 < _this.worldEl.height && !_this.worldEl.checkStone(_this.monsterEl.posX+1, _this.monsterEl.posY)) { _this.monsterEl.posX++; }
                _this.worldEl.recreateWorld(_this.heroEl, _this.monsterEl);
            }, 2000)
            
            if(event.keyCode == 87 && _this.heroEl.posY-1 >= 0 && !_this.worldEl.checkStone(_this.heroEl.posX, _this.heroEl.posY-1)) { _this.heroEl.posY--; }
            else if(event.keyCode == 65 && _this.heroEl.posX-1 >= 0 && !_this.worldEl.checkStone(_this.heroEl.posX-1, _this.heroEl.posY)) { _this.heroEl.posX--; }
            else if(event.keyCode == 83 && _this.heroEl.posY+1 < _this.worldEl.width && !_this.worldEl.checkStone(_this.heroEl.posX, _this.heroEl.posY+1)) { _this.heroEl.posY++; } 
            else if(event.keyCode == 68 && _this.heroEl.posX+1 < _this.worldEl.height && !_this.worldEl.checkStone(_this.heroEl.posX+1, _this.heroEl.posY)) { _this.heroEl.posX++; }
            
            if(_this.heroEl.posX == _this.monsterEl.posX && _this.heroEl.posY == _this.monsterEl.posY) {
                    if(_this.heroEl.equip.indexOf("miecz") != -1) {
                       alert("Walczysz mieczem");
                        _this.monsterEl = null;
                        alert("Wygrales"); }
                    else {
                        alert("Walczysz bez miecza");
                        _this.heroEl = null;
                        alert("Przegrales");
                    }
            }
            _this.worldEl.recreateWorld(_this.heroEl, _this.monsterEl);
        })
    }
}