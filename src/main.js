import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusKnotGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xFF6347
});
const torus = new THREE.Mesh(geometry, material);

const pointLight1 = new THREE.PointLight(0xFFFFFF, 100);
const pointLight2 = new THREE.PointLight(0xFFFFFF, 200);
pointLight1.position.set(25, 0, 0)
pointLight2.position.set(-25, 0, -15)

scene.add(torus)
scene.add(pointLight1)
scene.add(pointLight2)

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.002;
  torus.rotation.y += 0.003;
  torus.rotation.z += 0.002;

  controls.update();

  renderer.render(scene, camera);
}

animate()