//instantiate globale variables
var canvas = document.getElementById("shapes")
var bg = document.getElementById("bg")
var pos = document.getElementById('pos')
var score = document.getElementById('score')
var timeLeft = document.getElementById('time-left')
var ctx = canvas.getContext('2d');
var bgCtx = bg.getContext('2d')
var iso = new Isomer(canvas);
var isoBG = new Isomer(bg);

var Path = Isomer.Path;
var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var red = new Color(160, 60, 50);
var base = Point.ORIGIN
var score_count = 0
var time_count = 6
var green = new Color(50, 100, 12)
var dark_green = new Color(20, 60, 20)
var blue = new Color(30, 50, 120)
var word_color = new Color(200, 40, 40)


var angle = 0;

var x = 1
var y = 1
var z = 1

var px1 = 4
var py1 = 6
var pz = 0

var moveX = 0

var px2 = px1
var py2 = py1
var pz = 0

var dx = 1
var dy = 1

// var point1 = new point_shape(Octahedron(new Point(4, 6, 0)),[4,6])
// var point2 = new point_shape(Octahedron(new Point(10, 7, 0)),[10,7])


//create empty arrays for holding points and the walls, which currently have no functionality
var arr_points = []
var arr_obstacles = []
    //intiatilzer functions for point and obstacle arrays

//console.log('!@#$',arr_obstacles)

//spawns player character


init()
var tone_shift = arr_points.length + 1.01
create_obstacles()

draw_grid_floor(12, green, dark_green, blue)

function draw_grid_floor(size, color1, color2, color3) {
    for (var i = size; i > 0; i--) {
        for (var j = size; j > 0; j--) {
            if ((j + i) % 2 == 0) {
                //if(i< 4 && i >1){
                // 	isoBG.add(Shape.Prism(new Point(i,j,.5),1,1,.5).translate(0,0,0),color3);
                // }else{
                // 	var r = Math.random() + .5
                isoBG.add(Shape.Prism(new Point(i, j, .5), 1, 1, .5).translate(0, 0, 0), color1);
                // 	}
            } else {
                // if(i< 4 && i >1){
                // 	isoBG.add(Shape.Prism(new Point(i,j,.5),1,1,.5),color3);
                // }else{
                // 	var r = Math.random() + .5
                isoBG.add(Shape.Prism(new Point(i, j, .5), 1, 1, .5).translate(0, 0, 0), color2);
                // }
            }
        }
    }
}
//draw_game_over(12, green, dark_green, blue, word_color)
function draw_game_over(size, color1, color2, color3, other) {
    for (var i = size; i > 0; i--) {
        for (var j = size; j > 0; j--) {
            if (i === 2 && j === 11) {
                console.log('TEN TEN TEN')
                isoBG.add(Shape.Prism(new Point(i, j, .5), 3, .5, .25).translate(0.5, 0, 0), other);
            }
            if (i === 2 && j === 11) {
                console.log('TEN TEN TEN')
                isoBG.add(Shape.Prism(new Point(i, j, .5), .5, 3, .25).translate(0, -3, 0), other);
            }
            if (i === 2 && j === 11) {
                console.log('TEN TEN TEN')
                isoBG.add(Shape.Prism(new Point(i, j, .5), .5, 3, .25).translate(0, -3, 0), other);
            }
        }
    }
}

//spawn_obstacles();
//iso.add(Shape.Prism(new Point(i+.25,13+.25,0),.5,.5,.5))
//scene function is what html 5 will use to do requestAnimationFrame on
//everything in this function will be ran by the animator at however many fps

function scene() {
    canvas.width = canvas.width
    var player = new Player_character(Octahedron(new Point(x, y, 1)), [x, y])
    iso.add(player.shape)
    render_point();
    angle += Math.PI / 60;
    requestAnimationFrame(scene);
    if (arr_points.length === 0) {
        init()
    }
    timeLeft.innerHTML = "TIME LEFT: " + time_count;
    if (time_count == 0) {
        timeLeft.innerHTML = "GAME OVER"
    }
}
pos.innerHTML = "X: " + x + ',' + "Y: " + y
score.innerHTML = "SCORE: " + score_count;

requestAnimationFrame(scene);
//render_player_character()
function doKeyDown(evt) {
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            //console.log("a")
            //console.log(y-dy)
            if (y - dy < 11) {
                console.log(y)
                y += dy;
                if (time_count) {
                    capture_point()
                }
                //bg.width=bg.width
                //var player = new Player_character(Octahedron(new Point(x, y,1)),[x,y])
                //isoBG.add(player.shape)	
            }
            break;
        case 40:
            /* Down arrow was pressed */
            //console.log("b")
            if (y + dy > 2) {
                y -= dy;
                if (time_count) {
                    capture_point()
                }
                //bg.width=bg.width
                //var player = new Player_character(Octahedron(new Point(x, y,1)),[x,y])
                //isoBG.add(player.shape)
            }
            break;
        case 37:
            /* Left arrow was pressed */
            //console.log("c")
            if (x - dx > 0) {
                x -= dx;
                if (time_count) {
                    capture_point()
                }
                //bg.width=bg.width
                //var player = new Player_character(Octahedron(new Point(x, y,1)),[x,y])
                //isoBG.add(player.shape)
            }
            break;
        case 39:
            /* Right arrow was pressed */
            //console.log("d")
            //console.log(x+dx)
            if (x + dx < 13) {
                x += dx;
                if (time_count) {
                    capture_point()
                }
                //bg.width=bg.width
                //var player = new Player_character(Octahedron(new Point(x, y,1)),[x,y])
                //isoBG.add(player.shape)
            }
            break;
    }
    pos.innerHTML = "X: " + x + ',' + "Y: " + y
    score.innerHTML = "SCORE: " + score_count;
    //render_player_character()
    render_point()
}
//function to register keydown events, a lot of work needs to be done here to make a more fleshed out game engine
//stole this code from Isomer js gallery, makes a nice little octohedron.
//deserves more attention to unpack its funcionality
function Octahedron(origin) {
    /* Declare the center of the shape to make rotations easy */
    var center = origin.translate(0.5, 0.5, 0.5);
    var faces = [];

    /* Draw the upper triangle /\ and rotate it */
    var upperTriangle = new Path([
        origin.translate(0, 0, 0.5),
        origin.translate(0.5, 0.5, 1),
        origin.translate(0, 1, 0.5)
    ]);

    var lowerTriangle = new Path([
        origin.translate(0, 0, 0.5),
        origin.translate(0, 1, 0.5),
        origin.translate(0.5, 0.5, 0)
    ]);

    for (var i = 0; i < 4; i++) {
        faces.push(upperTriangle.rotateZ(center, i * Math.PI / 2));
        faces.push(lowerTriangle.rotateZ(center, i * Math.PI / 2));
    }

    /* We need to scale the shape along the x & y directions to make the
     * sides equilateral triangles */
    return new Shape(faces).scale(center, Math.sqrt(2) / 2, Math.sqrt(2) / 2, 1);
}
//for the points in the points array, renderes each one
// function render_point(){
// 	for(var point in arr_points){
// 		iso.add(arr_points[point].shape
// 		, new Color(0, 180, 180));
// 	}
// }
// //this handles point collision, player character colliding with point splices the point from the array and
// //increments your score
// function capture_point(){
// 	for(var point in arr_points){
// 		if(x == arr_points[point].loc[0] && y == arr_points[point].loc[1]){
// 			arr_points.splice(point,1)
// 			score_count++
// 		}
// 	}
// }
// //poorly named function that just initiats the points
// function init(){
// 	for(var i = 1; i < 6; i++){
// 		randx = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
// 		randy = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
// 		arr_points.push(new point_shape(Octahedron(new Point(randx, randy,1)),[randx,randy]))
// 	}
// }
// //fills the obstacle array with obstacle shapes with random x and x positions within the field of play
// function create_obstacles(){
// 	for(var i = 1; i < 14; i++){
// 		randx = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
// 		randy = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
// 		arr_obstacles.push(Shape.Prism(new Point(i+.25,13+.25,0),.5,.5,.5))
// 	}
// }
// //iterates throught eh obstacles in the array iso.adding them to the field
// function spawn_obstacles(){
// 	for(var i = arr_obstacles.length; i > 0;i--){
// 		// var r = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
// 		// var g = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
// 		// var b = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
// 		iso.add(arr_obstacles[i])
// 	}
// }
// //constructor function to create new point shapes
// function point_shape (shape, loc) {
//   this.shape = shape;
//   this.loc = loc;
// }
// function render_player_character(){
// 	canvas.width=canvas.width
// 	iso.add(Octahedron(new Point(x, y, z)))
// }



window.addEventListener('keydown', doKeyDown, true);