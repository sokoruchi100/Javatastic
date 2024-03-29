"use strict";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {    
    //Scene
    const scene = new THREE.Scene();

    //Camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(10,10,10);
    camera.lookAt(0,0,0);

    //Lighting
    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 3);
    scene.add(hemiLight);
    const spotLight = new THREE.SpotLight(0xffa95c, 4);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024*4;
    spotLight.shadow.mapSize.height = 1024*4;
    scene.add(spotLight);

    //Renderer Canvas
    const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize( window.innerWidth, window.innerHeight );
    const container = document.getElementById("renderer");
    container.appendChild(renderer.domElement);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;

    // Load GLTF
    const loader = new GLTFLoader();
    loader.load(
        // resource URL
        './Sources/Models/Room/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            
            const model = gltf.scene.children[0];

            model.traverse(n => {
                if (n.isMesh) {
                    n.castShadow = true;
                    n.receiveShadow = true;
                    if (n.material.map) {
                        n.material.map.anisotropy = 16;
                    }
                }
            });

            scene.add( model );

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );

    //Resize Event
    $(window).resize(function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    });
    
    tl.to(camera.position, {
        x:2,
        y:3,
        z:-0.5,
    });
    tl.to(camera.position, {
        x:1,
        y:2,
        z:1,
    });
    tl.to(camera.position, {
        x:-1.5,
        y:2,
        z:-1.5
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    });
    
    tl2.to(camera.rotation, {
        x:0,
        y:0.3,
        z:0,
    });
    tl2.to(camera.rotation, {
        x:0,
        y:2,
        z:0,
    });
    tl2.to(camera.rotation, {
        x:0,
        y:0.2,
        z:0
    });

    gsap.from(".title-section", 1, {
        x:"100%",
        opacity: 0,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".title-section",
            start: "top center",
        }
    });
    
    gsap.from(".lessons-section", {
        x:"-100%",
        opacity: 0,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".lessons-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1
        }
    });

    gsap.from(".exercises-section", {
        x:"100%",
        opacity: 0,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".exercises-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1
        }
    });

    gsap.from(".quiz-section", {
        x:"-100%",
        opacity: 0,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: ".quiz-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1
        }
    });
    

    //Animation Loop
    function animate() {
        spotLight.position.set(
            camera.position.x + 10,
            camera.position.y + 10,
            camera.position.z + 10
        );
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
});