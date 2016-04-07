var container, camera, scene, renderer, controls;
window.onload = function() {
  init();
  animate();
}

function init() {

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.z = 400;

  scene.add(camera);

  var loader = new THREE.STLLoader();
  loader.load('assets/3d/untitled.stl', function(geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: 0x999999,
      specular: 0x111111,
      shininess: 200
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-30, 1, 1);
    mesh.rotation.set(1.5, 0, 1);
    mesh.scale.set(0.35, 0.35, 0.35);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
  });

  var ambient = new THREE.AmbientLight(0x111111);
  scene.add(ambient);

  var directionalLight = new THREE.DirectionalLight(0x555555);
  directionalLight.position.set(0, 0, 1);
  scene.add(directionalLight);

  controls = new THREE.OrbitControls(camera);
  controls.addEventListener('change', render);

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update(); 


  render();
}

function render() {

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
