// Initialize the Three.js Scene
const canvas = document.getElementById('three-d-view');
const scene = new THREE.Scene();

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

// Camera setup
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Add lights
const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(light);
const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Load athlete data and render 3D representation
function renderAthlete3D(data) {
  const { height, weight } = data;

  // Clear previous objects
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  // Create a 3D box to represent the athlete
  const geometry = new THREE.BoxGeometry(1, height / 100, weight / 50);
  const material = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
  const cube = new THREE.Mesh(geometry, material);

  // Add cube to the scene
  scene.add(cube);

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

// Export the render function
export { renderAthlete3D };
