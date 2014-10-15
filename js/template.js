	
////////////////////////////////////////////////////////////	
// SET_UP_VARIABLES
////////////////////////////////////////////////////////////

// standard global variables
var container;
var scene, camera, renderer;
var controls;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// custom global variables
var cube, cubeGeo, cubeMat;

// e.g. setup()
init();

// e.g. draw()/loop()
animate();





///////////////////////////////////////////////////////////
// FUNCTIONS 
///////////////////////////////////////////////////////////
			
function init() 
{
	// SCENE
	// construct environment first
	scene = new THREE.Scene();


	// LIGHT
	// create a light
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(5,10,0);
	scene.add(light);

	light = new THREE.DirectionalLight(0xffff00, 1);
	light.position.set(-5,10,10);
	scene.add(light);


	// CAMERA
	// PerspectiveCamera( field of view, aspect, near, far )
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.z = 500;						//set the position of the camera
	// camera.position.set(0,150,400);				//can also do position.set(x, y, z)
	scene.add(camera);								//add camera into the scene


	// CUBE
	cubeGeo = new THREE.BoxGeometry(200, 200, 200);
	cubeMat = new THREE.MeshLambertMaterial({color: 0xb9e644});
	cube = new THREE.Mesh(cubeGeo, cubeMat);
	scene.add(cube);
	

	// RENDERER
	// won't have big change most of the time
	container = document.createElement('div');
	document.body.appendChild(container);
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	renderer.setClearColor(0xeff5d5, 1);			//set background color
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	
	// EVENTS
	// automatically resize renderer
	window.addEventListener( 'resize', onWindowResize, false );

	
	// CONTROLS
	// left click to rotate, middle click/scroll to zoom, right click to pan
	controls = new THREE.OrbitControls( camera, renderer.domElement );
		
}

function animate() 
{
    requestAnimationFrame( animate );
	render();		
	update();
}

function update()
{		
	controls.update();
}

function render() 
{	
	renderer.render( scene, camera );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
