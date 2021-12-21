import { Component, Inject, OnInit, EventEmitter } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal'


@Component({
  selector: 'app-configurator-config',
  templateUrl: './configurator-config.component.html',
  styleUrls: ['./configurator-config.component.css']
})
export class ConfiguratorConfigComponent implements OnInit {
  public event = new EventEmitter()
  title?: string;
  closeBtnName?: string;
  list: any[] = [];
  selectedGeometry:any;
  selectedColor:any;
  geometryOptions = [
    {name:"Cube", value:"cube"},
    {name:"Sphere", value:"sphere"}

  ]
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  updateConfig() {
    if (!this.selectedColor || !this.selectedGeometry) {
      return
    }
    this.event.emit({color:this.selectedColor, geometry:this.selectedGeometry})
    this.bsModalRef.hide()
  }

}

