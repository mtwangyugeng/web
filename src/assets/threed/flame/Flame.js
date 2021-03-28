import React from 'react';
import * as THREE from 'three';
import './Flame.css';
import {GUI} from "dat.gui"
import { FlyControls } from '../../../../node_modules/three/examples/jsm/controls/FlyControls.js';
import { Lensflare, LensflareElement } from '../../../../node_modules/three/examples/jsm/objects/Lensflare.js';

export default class Flame extends React.Component{
    /**
     * @ props.title
     * @ props.picture
     * @ props.description
     * 
     * return a react component of game card IN 3D
     */

    //rr = React.createRef();
    render() {
        return(
            // <div ref={this.rr} />
            <canvas id = "Flame-c" ref={ref => (this.mount = ref)} />
        )
    }
    componentDidMount() {
        // hook the renderer to the canvas
        const canvas = this.mount
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
          canvas: canvas});
          renderer.outputEncoding = THREE.sRGBEncoding;
            

        const clock = new THREE.Clock();
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01 );
        scene.fog = new THREE.Fog( scene.background, 3500, 15000 );

        var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 15000 );
        camera.position.set(0, 0, 250);
        camera.up.set(0, 0, 1);
        camera.lookAt(0, 0, 0);

        // world

        const s = 250;

        // an array of objects who's rotation to update
        const objects = [];

        const solarSystem = new THREE.Object3D();
        scene.add(solarSystem);
        objects.push(solarSystem);
      
        // lensflares
				const textureLoader = new THREE.TextureLoader();

				const textureFlare0 = textureLoader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare0.png' );
				const textureFlare3 = textureLoader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare3.png' );

				addLight( 0.55, 0.9, 0.5, 5000, 0, - 1000 );
				// addLight( 0.08, 0.8, 0.5, 0, 0, - 1000 );
				// addLight( 0.995, 0.5, 0.9, 5000, 5000, - 1000 );

				function addLight( h, s, l, x, y, z ) {

					const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
					light.color.setHSL( h, s, l );
					// light.position.set( x, y, z );
					solarSystem.add( light );

					const lensflare = new Lensflare();
          console.log("ccc", lensflare)
					lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
					light.add( lensflare );

				}

        const butterflyPivot = new THREE.Object3D();
        scene.add(butterflyPivot);
        const sphereGeometry = new THREE.SphereGeometry(
          10, 3, 3);
        const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        butterflyPivot.add(sunMesh);

 
        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }
      
      
        const targetPosition = new THREE.Vector3();
        function render() {
      
          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }

          solarSystem.getWorldPosition(targetPosition);
          butterflyPivot.lookAt(targetPosition);

          // go to the target position
          butterflyPivot.position.x += (solarSystem.position.x - butterflyPivot.position.x) / 60
          butterflyPivot.position.y += (solarSystem.position.y - butterflyPivot.position.y) / 60
          // butterflyPivot.position.z += (solarSystem.position.z - butterflyPivot.position.z) / 60

          renderer.render(scene, camera);
      
          requestAnimationFrame(render);
        }
        
        var mouse = {x: 0, y: 0};
        canvas.addEventListener('mousemove', function (event) {
          event.preventDefault();
          // console.log(event.clientX, event.clientY)
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
          
          // Make the sphere follow the mouse
            var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
            vector.unproject( camera );
            var dir = vector.sub( camera.position ).normalize();
            var distance = - camera.position.z / dir.z;
            var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
            solarSystem.position.copy(pos);
        });

        
        requestAnimationFrame(render);
    }

}

