var world = {
    width: 10,
    height: 10,
    initWrapper: document.getElementById("init"),
    stone: [ {x:3, y:4}, {x:6, y:7}],
    items: [{x:2, y:6, name: "miecz"}],
    
    createWorld: function(hero, monster) {
        var tbl = document.createElement("table");
        for(var i = 0; i < this.height; i++) {
            var tr = document.createElement("tr");
            
            for (var j = 0; j < this.width; j++) {
                var td = document.createElement("td");
                
                if(hero != undefined && hero.posY == i && hero.posX == j) {
                    td.className += " hero";
                }
                if(monster != undefined && monster.posX == j && monster.posY == i) {
                    td.className += " monster";
                }
                if(this.checkStone(j, i)) {
                    td.className += " stone";
                }
                var mapItems = this.getItems(j, i);
                if(mapItems.length > 0) {
                    for(var k = 0; k < mapItems.length; k++) {
                        var itemEl = mapItems[k],
                        span = document.createElement("span");
                        span.className += itemEl.name;
                        var _this = this;
                        span.addEventListener("click", function() {
                            if(hero.posX == itemEl.x && hero.posY == itemEl.y){
                             hero.equip.push(itemEl.name);
                                alert("Masz miecz!");
                            delete _this.deleteItem(itemEl);
                            _this.recreateWorld(hero, monster);   
                            } else alert("Jestes za daleko!");
                        });
                        td.appendChild(span);
                    }                
                }
                tr.appendChild(td);
            }
            tbl.appendChild(tr);
        }
        this.initWrapper.appendChild(tbl);
    },
    deleteItem: function(item) {
        var indexItem = this.items.indexOf(item);
        delete this.items[indexItem];
    },    
    getItems: function(x, y) {
        return this.items.filter( function(obj) {
            return obj.x == x && obj.y == y;
        });
    },
    checkStone: function(x, y) {
        var stones = this.stone.filter( function(obj) {
            return obj.x == x && obj.y == y;
        });
        return stones.length > 0;
    },
    clearWorld: function() {
        this.initWrapper.innerHTML = "";
    },
    recreateWorld: function(hero, monster) {
        this.clearWorld();
        this.createWorld(hero, monster);
    }
}