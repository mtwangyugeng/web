import React from 'react';
import * as THREE from 'three';
import './LandingScene.css';


export default class LandingScene extends React.Component{
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
            <canvas id = "LandingScene-c" ref={ref => (this.mount = ref)} />
        )
    }
    componentDidMount() {
        // === THREE.JS CODE START ===
        var canvas = this.mount
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({canvas});
        
        // renderer.setSize( window.innerWidth, window.innerHeight );
        // this.rr.current.appendChild( renderer.domElement );
        // this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 0.7, 1, 0.01 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );

        // add lighting
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);

        // add three more cubes
        function makeInstance(geometry, color, x) {
          const material = new THREE.MeshPhongMaterial({color});
         
          const cube = new THREE.Mesh(geometry, material);
          scene.add(cube);
         
          cube.position.x = x;
         
          return cube;
        }
        const cubes = [
          makeInstance(geometry, 0x44aa88,  0),
          makeInstance(geometry, 0x8844aa, -2),
          makeInstance(geometry, 0xaa8844,  2),
        ];


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

        camera.position.z = 3;
        var animate = function (time) {
          time *= 0.001;  // convert time to seconds
          // keeps the models from being distorted when changing size
          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }

          cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
          });

          requestAnimationFrame( animate );
          // cube.rotation.x += 0.01;
          // cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        requestAnimationFrame( animate );
        // === THREE.JS EXAMPLE CODE END ===
      }

}

