import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-configure-equipment',
  templateUrl: './configure-equipment.component.html',
  styleUrls: ['./configure-equipment.component.css']
})
export class ConfigureEquipmentComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef:ElementRef;

  private camera: THREE.PerspectiveCamera
  private loader = new THREE.TextureLoader()
  private geometry:THREE.BoxGeometry = new THREE.BoxGeometry(3,3,3)
  private scene: THREE.Scene
  private material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({map: this.loader.load("/assets/img/artificial_img.jpeg")});
  private renderer: THREE.WebGLRenderer
  private controls:OrbitControls ;
  //private gui = new dat.GUI();
  
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material)



  private get canvas(): HTMLCanvasElement{
    return this.canvasRef.nativeElement
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
    this.createScene();
    this.renderCube()
  }

  private createScene() {
    //Scene
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#000000')
    this.scene.add(this.cube)

    //Camera
    let aspectRatio = this.getAspectRatio()
    this.camera = new THREE.PerspectiveCamera(
      400,
      aspectRatio,
      1,
      100
    )

    this.camera.position.z = 20
  }

  private getAspectRatio() {
    return window.innerWidth/window.innerHeight
  }

  private animateCube() {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
  }

  private renderCube() {
    //Render 
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas})
    this.renderer.setPixelRatio(window.innerWidth/window.innerHeight)
    this.renderer.setSize(window.innerWidth, window.innerHeight)

   
    let component: ConfigureEquipmentComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.controls = new OrbitControls(component.camera, component.renderer.domElement)
      component.controls.update()
      component.animateCube();
      component.renderer.render(component.scene, component.camera)
    }())
  }

}
