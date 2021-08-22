import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormInputService} from "../service/form-input.service";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  //@ts-ignore
  @ViewChild("myPrice") myPrice: ElementRef

  turlar_kelishi:any
  vosita_kelishi:any
  btnDisable=false;

  orderId:any

  hamasi_kelishi:any;

  id:any;
  contractId: any
  days:any
  descreption:any
  price=0
   temp = [];

  totalPrice:any

  turini_Tanlang:any
  vositani_tanlang:any
  saytni_tablang:any
  gazetani_tanlang:any
  tashqi_manbani_tanlang:any
  tashkilotni_tanlang:any
  constructor(private service:FormInputService) {
  }


  ngOnInit(): void {
 this.service.getData().subscribe(
   data=>{
   this.turlar_kelishi=data
     console.log(data)
   },
 );

  }
  turiniTanlang() {
    console.log(this.turini_Tanlang)
      this.service.turini_Tanlang(this.turini_Tanlang).subscribe(
        data=>{
          this.vosita_kelishi=data;
          console.log(data)
        }
      );
      // @ts-ignore
    document.getElementById('vositani_tanlang').disabled = event.target.value == '';
  }
  vositaniTanlang(){
    this.service.vositani_tanlang(this.vositani_tanlang).subscribe(
      data=>{
        this.hamasi_kelishi=data;
        console.log(data)
      }
    );
  }

  deletePrice(data: any) {
    if (this.price>0){

    this.price-=data.price
      this.temp = this.temp.filter(item => item !== data.id);
    console.log("minus:  "+this.temp)
    }
  }
  addPrice(data:any){
    this.price+=data.price
    // @ts-ignore
    this.temp.push(data.id);
    console.log("plus:  "+this.temp)

  }
}
