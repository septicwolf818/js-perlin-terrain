function TextureManager() {
    this.textures = []; //Array to store textures
    this.textureNames = []; // Array to store simple names of textures
    this.getTexture =function (name) { // Return texture with specified simple name

        for (var i = 0; i < this.textureNames.length; i++) {

            if (name == this.textureNames[i]) {
                return this.textures[i];

            }
             
           
        }
        console.log("TextureManager: Unable to find texture: \"" + name + "\"");
    }


    this.saveTexture = function (texture, name) { // Save loaded texture to TextureManager texture arrays
        this.textures.push(texture);
        this.textureNames.push(name);
        return true;
    }

    this.loadTexture =  async function (filePath, name) { // Load textures from files and call save method


        var tmp = loadImage(filePath, function () { console.info("TextureManager: Loading texture file \"" + filePath + "\" with name \"" + name + "\""); }, function () { console.error("TextureManager: Failed to load texture file \"" + filePath + "\" with name \"" + name + "\""); });

        

        this.saveTexture(tmp, name);
    }

    this.drawTexture =  function (name, y, x, ts) { // Draw loaded and saved texture on screen using simple name and coordinates

        image(this.getTexture(name), x, y,ts,ts);

    }

}
