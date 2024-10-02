var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(5, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 10;

var animate = function () {
  requestAnimationFrame(animate);
  globe.rotation.x += 0.01;
  globe.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();
