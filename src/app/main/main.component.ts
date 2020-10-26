import { Component, OnInit, Injector, ViewChild } from '@angular/core';

import{ApiService} from 'src/app/lib/api.service';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
//import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {

  //constructor(private service:SharedService) { }

  public ProductList: any=[];
  public product:any;
  public formdata: any;
  //@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector, private service:ApiService) {
    super(injector);
  }

  ngOnInit(): void {
    this.refserProList();
  }
  refserProList(){
    this.service.get("/api/product/get-all").subscribe(data=>{
      this.ProductList = data;
      console.log(this.ProductList);
    })
  }
}