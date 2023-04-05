"use strict";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('c')});
    const container = document.getElementById('canvas-container');
    container.appendChild(renderer.domElement);

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function resizeRendererToDisplaySize() {
        const canvas = renderer.domElement;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        resizeRendererToDisplaySize();
    }

    animate();

    // add event listener for window resize
    window.addEventListener('resize', function() {
        resizeRendererToDisplaySize();
    });

};
