import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfigService } from 'src/app/services/config.service';
import { ConfiguratorConfigComponent } from '../configurator-config/configurator-config.component';
import { take } from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bsModalRef?: BsModalRef;
  items: any[];
  constructor(
    public modalService: BsModalService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.loadAllItems()
  }

  //edit an item and update config in the database (If any)
  editItem(id:any) {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(ConfiguratorConfigComponent, initialState);
    this.bsModalRef.content.event.subscribe((res:any) => {
      this.updateAndSet(res, id)
    });
    
  }

  deleteItem(id:any) {
    this.configService.deleteItem(id).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  //loadAllItems
  loadAllItems() {
    this.configService.getAllItems()
    .pipe(take(1))
    .subscribe(
      data=> {
        console.log(data)
        this.items = data
      }
    )

  }

  updateAndSet(data:any, id:any) {
    let req = {...data, id}
    this.configService.updateConfig(req).subscribe(
      data=> {
        console.log("Success")
      }
    )
  }

}
