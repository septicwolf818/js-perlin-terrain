function World() {

	this.tileSize;
	this.x;
	this.y;
	this.tileTypes = [];
	this.world = [];
	this.tempWorldRow = [];
	this.getRandom = function(min, max) {
		return Math.random() * (max - min) + min;
	}

	this.init = function (tileSize, x, y, tileTypes) {

		this.tileSize = tileSize;
		this.x = x;
		this.y = y;
		this.tileTypes = tileTypes;

	}

	this.generateWorld = function () {
		for (var i = 0; i < this.y; i++) {
			for (var j = 0; j < this.x; j++) {
                var tmp = new Tile();
                var scale = 200;
				tmp.setType(this.tileTypes[Math.floor(noise(i/scale, j/scale) * this.tileTypes.length)]);
				this.tempWorldRow.push(tmp);
			}
				
			this.world.push(this.tempWorldRow);
			this.tempWorldRow = [];
        }

        this.getWorldJSON = function () {
            console.warn("World: Generating world JSON object");
            var json = "{ ";

            json += "\"world_width\" : " + this.x + ", \n";
            json += "\"world_height\" : " + this.y + ", \n";
            json += "\"world_tile_size\" : " + this.tileSize + ", \n";

            json += "\"world\" : {";

            for (var i = 0; i < this.world.length; i++) {

                json += "\n\"row" + i + "\" : [";
                for (var j = 0; j < this.world[i].length; j++) {
                    json += "\"" + this.world[i][j].type + "\"";
                    if (j < this.world[i].length-1) json += ", ";
                }
                
                json += "]";
                if (i < this.world.length-1) json += ", ";
            }
            json += "}";


            json += " }";

            return json;

        }


	}






}