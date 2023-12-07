import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{
    productform!:FormGroup;
    ngOnInit(): void {
  
    this.productform=new FormGroup({
  
        id:new FormControl(''),
        title:new FormControl(),
        price:new FormControl(),
  
      })
    }
  
      add(){
        console.log("notre form", this.productform.value);

      }
  

}
