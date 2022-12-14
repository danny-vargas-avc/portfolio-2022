<script setup>
/* eslint-disable */ 
// import AppBanner from '@/components/shared/AppBanner';
// import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
// import Button from '../components/reusable/Button.vue';
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'dat.gui';
import crossImg from '@/assets/images/circle.png';

const windowWidth = ref(null);
const windowHeight = ref(null);
const xPos = ref(0);
const yPos = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
  
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;

    // Update camera
    camera.aspect = windowWidth.value / windowHeight.value;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(windowWidth.value, windowHeight.value);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Texture loader
  const loader = new THREE.TextureLoader();
  const cross = loader.load(crossImg);

  // Debug
  // const gui = new dat.GUI()

  // Canvas
  const canvas = document.querySelector('canvas#main-bg')

  // Scene
  const scene = new THREE.Scene()

  // Objects
  const geometry = new THREE.TorusKnotGeometry(.8, .2, 600, 20);

  const particlesGeometry = new THREE.BufferGeometry;
  const particlesCnt = 5000;

  const posArray = new Float32Array(particlesCnt * 3);

  for (let i = 0; i < particlesCnt * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 4);
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // Materials
  const material = new THREE.PointsMaterial({
    size: 0.04,
    map: cross,
    transparent: true,
    color: '#ffffff'
  });

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    map: cross,
    transparent: true,
    color: '#ffffff'
  });


  // Mesh
  const sphere = new THREE.Points(geometry, material);
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(sphere, particlesMesh);

  // Lights
  const pointLight = new THREE.PointLight(0xffffff, 0.1)
  pointLight.position.x = 2
  pointLight.position.y = 3
  pointLight.position.z = 4
  scene.add(pointLight)

  // Base camera
  const camera = new THREE.PerspectiveCamera(75, windowWidth.value / windowHeight.value, 0.1, 100)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 2
  scene.add(camera)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(windowWidth.value, windowHeight.value)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color('#21282a'), 1)

  // Mouse
  document.addEventListener('mousemove', animateParticles);

  function animateParticles(e) {
    xPos.value = e.clientX;
    yPos.value = e.clientY;
  }

  // Animate
  const clock = new THREE.Clock();
  const tick = () => {
    let elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime;
    sphere.rotation.x = .5 * elapsedTime;

    if (xPos.value > 0) {
      particlesMesh.rotation.x = -yPos.value * (elapsedTime * 0.00008);
      particlesMesh.rotation.y = xPos.value * (elapsedTime * 0.000008);    
    }

    // Update Orbital Controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  };

  tick();
});
</script>

<template>
	<div class="content-container"></div>
  <canvas id="main-bg"></canvas>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

html, body {
    height: 100vh;
    color: white;
    overflow: hidden;
}

#main-bg {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}

@media only screen and (max-width: 768px) {
  #main-bg {
			z-index: -1;
		}
	}
</style>
