function render_point(){
	for(var point in arr_points){
		iso.add(arr_points[point].shape.rotateZ(new Point(arr_points[point].loc[0]+0.5, arr_points[point].loc[1]+0.5, 0),angle)
		, new Color(0, 180, 180));
	}
}
//this handles point collision, player character colliding with point splices the point from the array and
//increments your score
var context = new webkitAudioContext() 




var startTime = 0;
	
function capture_point(){
	for(var point in arr_points){
		if(x == arr_points[point].loc[0] && y == arr_points[point].loc[1]){
			arr_points.splice(point,1)
			score_count++
			console.log('SCORE')
			startTime = context.currentTime;
			console.log(startTime)
			point_chime(tone_shift - arr_points.length)
			if(arr_points.length === 0 && time_count){
				time_count+=3;
			}
			

		}
	}
}
//poorly named function that just initiats the points
function init(){
	for(var i = 1; i < 6; i++){
		randx = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
		randy = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
		arr_points.push(new Point_shape(Octahedron(new Point(randx, randy,1)),[randx,randy]))
	}
}
//fills the obstacle array with obstacle shapes with random x and x positions within the field of play
function create_obstacles(){
	for(var i = 1; i < 6; i++){
		randx = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
		randy = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
		arr_obstacles.push(Shape.Prism(new Point(i+.25,13+.25,0),.5,.5,.5))
	}
}
//iterates throught eh obstacles in the array iso.adding them to the field
function spawn_obstacles(){
	for(var i = arr_obstacles.length; i > 0;i--){
		// var r = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
		// var g = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
		// var b = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
		iso.add(arr_obstacles[i])
	}
}
//constructor function to create new point shapes
function Point_shape (shape, loc) {
  this.shape = shape;
  this.loc = loc;
}
function Player_character(shape,loc){
	this.shape=shape;
	this.loc=loc;
}

function Terrain_block(shape, loc, height){
	this.shape = shape;
	this.loc = loc;
	this.height = height;
}

function loop(){
	var loop = context.createOscillator();
}

function point_chime(shift){
	var oscillator = context.createOscillator();
	var oscillator2 = context.createOscillator();
	var oscillator3 = context.createOscillator();
	oscillator.connect(context.destination); // Connect to speakers 
	oscillator2.connect(context.destination);
	oscillator3.connect(context.destination);

	oscillator.type = 'triangle'
	oscillator2.type = 'triangle'
	oscillator3.type = 'triangle'

	oscillator.frequency.value = 349.23 * shift
	oscillator2.frequency.value = 415.30 * shift
	oscillator3.frequency.value = 523.25 * shift

	oscillator.start(startTime); // Start generating sound immediately
	oscillator.stop(startTime+0.02)

	oscillator2.start(startTime+0.04); // Start generating sound immediately
	oscillator2.stop(startTime+0.06)

	oscillator3.start(startTime+0.08); // Start generating sound immediately
	oscillator3.stop(startTime+0.10)
}


function Kick(context) {
	this.context = context;
};

Kick.prototype.setup = function() {
	this.osc = this.context.createOscillator();
	this.osc.type = "square"
	this.gain = this.context.createGain();
	this.osc.connect(this.gain);
	this.gain.connect(this.context.destination)
};

Kick.prototype.trigger = function(time) {
	this.setup();

	this.osc.frequency.setValueAtTime(150, time);
	this.gain.gain.setValueAtTime(1, time);

	this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

	this.osc.start(time);

	this.osc.stop(time + 0.5);
};

// kick.trigger(now + 0.5);
// kick.trigger(now + 1);



function Snare(context) {
	this.context = context;
};

Snare.prototype.noiseBuffer = function() {
	var bufferSize = this.context.sampleRate;
	var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
	var output = buffer.getChannelData(0);

	for (var i = 0; i < bufferSize; i++) {
		output[i] = Math.random() * 2 - 1;
	}

	return buffer;
};


Snare.prototype.setup = function() {
	this.noise = this.context.createBufferSource();
	this.noise.buffer = this.noiseBuffer();
	var noiseFilter = this.context.createBiquadFilter();
	noiseFilter.type = 'highpass';
	noiseFilter.frequency.value = 1000;
	this.noise.connect(noiseFilter);
	// …
	this.noiseEnvelope = this.context.createGain();
	noiseFilter.connect(this.noiseEnvelope);

	this.noiseEnvelope.connect(this.context.destination);
	// …	
	this.osc = this.context.createOscillator();
	this.osc.type = 'square';

	this.oscEnvelope = this.context.createGain();
	this.osc.connect(this.oscEnvelope);
	this.oscEnvelope.connect(this.context.destination);
};	

Snare.prototype.trigger = function(time) {
	this.setup();

	this.noiseEnvelope.gain.setValueAtTime(1, time);
	this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
	this.noise.start(time)

	this.osc.frequency.setValueAtTime(100, time);
	this.oscEnvelope.gain.setValueAtTime(0.7, time);
	this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
	this.osc.start(time)

	this.osc.stop(time + 0.2);
	this.noise.stop(time + 0.2);
};
function Timing(context){
	this.context = context;
}

Timing.prototype.setup = function(){
	this.oscTimer = this.context.createOscillator();
	this.oscTimer.type = 'saw'
	this.oscTimer.connect(this.context.destination)
}
Timing.prototype.trigger = function(time){
	this.setup()
	this.oscTimer.start(time)
	this.oscTimer.stop(time+0.2)
}

var musicLoopId = setInterval(function(){
	var snare = new Snare(context);
	var now = context.currentTime;
	var kick = new Kick(context);
	var now = context.currentTime;
	var timing =  new Timing(context)
	var now = context.currentTime;
	kick.trigger(now);
	kick.trigger(now+0.25);
	kick.trigger(now+0.875);
	snare.trigger(now+0.5);
	//snare.trigger(now+0.750);
	//timing.trigger(now+0.375)
	//timing.trigger(now+0.5)
	if(time_count < 2){
		clearInterval(musicLoopId)
	}
	if(time_count > 0){
		time_count--	
	}
},1000)


