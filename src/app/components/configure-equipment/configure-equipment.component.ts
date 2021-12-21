import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
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
  private geometry:any = new  THREE.SphereGeometry( 4, 14, 16 );
  private scene: THREE.Scene
  private material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({map: this.loader.load("/assets/img/artificial_img.jpeg")});
  private renderer: THREE.WebGLRenderer
  private controls:OrbitControls ;
  
  //private gui = new dat.GUI();
  
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material)



  private get canvas(): HTMLCanvasElement{
    return this.canvasRef.nativeElement
  }
  
  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() : void {
    this.createScene();
    this.renderCube();
    this.loadAndSetData(this.route.snapshot.params['id'])
  }

  private loadAndSetData(id:any) {
    this.configService.getItem(String(id))
    .subscribe(
      data => {
        console.log(data)
        this.setGeometry(data["attributes"]["geometry"])
      }
    )
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

  setGeometry(data:string) {
    switch(data) {
      case 'sphere':
        this.geometry = new THREE.SphereGeometry(40)
        this.createScene()
        this.renderCube()
        break;
      case 'cube':
        this.geometry = new THREE.BoxGeometry(3,3,3)
        this.renderCube()
        this.renderCube()
        break;

      default:
        break;

    }
  }

}
