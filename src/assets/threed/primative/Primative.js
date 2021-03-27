import React from 'react';
import * as THREE from 'three';
import './Primative.css';


export default class Primative extends React.Component{
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
            <canvas id = "Primative-c" ref={ref => (this.mount = ref)} />
        )
    }
    componentDidMount() {
        // hook the renderer to the canvas
        const canvas = this.mount
        const renderer = new THREE.WebGLRenderer({canvas});
        // start a scene
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xAAAAAA);
        // open the camera
        const fov = 40;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 120;
        // add lighting
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
        // add object
        const objects = [];
        const spread = 15;
        function addObject(x, y, obj) {
          obj.position.x = x * spread;
          obj.position.y = y * spread;
          scene.add(obj);
          objects.push(obj);
        }
        // create material
        function createMaterial() {
          const material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
          });
         
          const hue = Math.random();
          const saturation = 1;
          const luminance = .5;
          material.color.setHSL(hue, saturation, luminance);
         
          return material;
        }
        // add actrual geometry
        function addSolidGeometry(x, y, geometry) {
          const mesh = new THREE.Mesh(geometry, createMaterial());
          addObject(x, y, mesh);
        }
        function addLineGeometry(x, y, geometry) {
          const material = new THREE.LineBasicMaterial({color: 0x000000});
          const mesh = new THREE.LineSegments(geometry, material);
          addObject(x, y, mesh);
        }
      
        // text
        {
          const loader = new THREE.FontLoader();
          // promisify font loading
          function loadFont(url) {
            return new Promise((resolve, reject) => {
              loader.load(url, resolve, undefined, reject);
            });
          }
          async function doit() {
            const font = await loadFont('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json');  
            const geometry = new THREE.TextGeometry('yoloswag4jesus', {
              font: font,
              size: 3.0,
              height: .2,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.15,
              bevelSize: .3,
              bevelSegments: 5,
            });
            const mesh = new THREE.Mesh(geometry, createMaterial());
            geometry.computeBoundingBox();
            geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
      
            const parent = new THREE.Object3D();
            parent.add(mesh);
      
            addObject(0, 0, parent);
          }
          doit();
        }

        // something solid
        {
          const radius = 5;
          const tubeRadius = 2;
          const radialSegments = 8;
          const tubularSegments = 24;
          addSolidGeometry(0, -1, new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments));
        }
        // somethin line
        {
          const width = 8;
          const height = 8;
          const depth = 8;
          addLineGeometry(1, -2, new THREE.WireframeGeometry(new THREE.BoxGeometry(width, height, depth)));
        }
        //something point
        {
          const radius = 7;
          const widthSegments = 12;
          const heightSegments = 8;
          const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
          const material = new THREE.PointsMaterial({
              color: 'red',
              size: 0.2,     // in world units
          });
          const points = new THREE.Points(geometry, material);
          
          addObject(-1,-1,points)
        }

        // actrually start rendering
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

        function render(time) {
          time *= 0.005;
      
          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }
      
          objects.forEach((obj, ndx) => {
            const speed = .1 + ndx * .05;
            const rot = time * speed;
            obj.rotation.x = rot;
            obj.rotation.y = rot;
          });
      
          renderer.render(scene, camera);
      
          requestAnimationFrame(render);
        }
      
        requestAnimationFrame(render);

      }

}

