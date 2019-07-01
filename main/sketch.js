// In-Game time clock variables
var timeChanged = false;    // Check for time difference
var currentTime = 0;        // Time count in ticks
var timeClock = null;       // Variable for time clock
var timeTickMS = 1000;      // Tick delay in milliseconds

// Texture manager variable

var tm;


// World variable

var w;

// Canvas variables

var cWidth;
var cHeight;


function preload() {
    console.log("Log: Preloading...");
    
    tm = new TextureManager(); // Create new texture manager


    // Load textures

    tm.loadTexture("./textures/grass.png", "grass");
    tm.loadTexture("./textures/water.png", "water");
    tm.loadTexture("./textures/sand.png", "sand");
    tm.loadTexture("./textures/deepwater.png", "deepwater");
    tm.loadTexture("./textures/stone.png", "stone");
    tm.loadTexture("./textures/snow.png", "snow");
    tm.loadTexture("./textures/sunnygrass.png", "sunnygrass");
    tm.loadTexture("./textures/ice.png", "ice");


}

function setup() {
    console.info("Log: Setup...");

    // Setup In-Game time clock
    timeClock = setInterval(function () { currentTime++; timeChanged = true; }, timeTickMS);

    w = new World();
    w.init( 1, 1024,  1024, [ "deepwater", "water", "sand", "sunnygrass" , "sunnygrass","grass","stone","snow","ice"]);
    cWidth = w.x * w.tileSize;
    cHeight = w.y * w.tileSize;
    w.generateWorld();

    


    //Create game screen

    createCanvas(cWidth, cHeight);
    noSmooth();

    // World in JSON
    console.log(JSON.parse(w.getWorldJSON()));

    console.info("Log: Setup Complete...");

    console.info("Please wait... Map is being drawed in few seconds");

    
}

function draw() {
    // Do all things based on time
    if (timeChanged) {


        timeChanged = false;
    }

    // Draw texture on coordinates
    for (var i = 0; i < w.y; i++) {
        for (var j = 0; j < w.x; j++)
            tm.drawTexture(w.world[i][j].type, i * w.tileSize, j * w.tileSize, w.tileSize);

    }


}