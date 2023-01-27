import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { CarDetails } from '../dashboard/store/car-detail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  carDetail:any=[]
  // carList=[
  //   { car_no:1234,
  //     owner_name:'Anil',
  //     isEdit:false
  //   },
  //   { car_no:4567,
  //     owner_name:'Suresh',
  //     isEdit:false
  //   }
  // ]
  addForm:FormGroup;
  editForm:FormGroup;
  allCakes$: Observable<CarDetails[]>;
   carService: EntityCollectionService<CarDetails>;
  constructor(  private fb: FormBuilder,private router: Router, serviceFactory: EntityCollectionServiceFactory) {
    this.addForm = this.fb.group({
      car_no:['',[Validators.pattern('^[a-zA-Z]{3}\d{3}$')]],
      owner_name:''
    })
    this.editForm = this.fb.group({
      car_no:['',[Validators.pattern('^[a-zA-Z]{3}\d{3}$')]],
      owner_name:''
    })
    this.carService = serviceFactory.create<CarDetails>('CarDetail');
    this.allCakes$ = this.carService.entities$;
    
 
   }
   carPattern="^[a-zA-Z]{3}\d{3}$"
  ngOnInit(): void {
    this.carService.getAll().subscribe((car)=>{
      this.carDetail = [...car];
      this.carDetail = this.carDetail.map((obj:any)=>({
        ...obj,isEdit:false
      }));
      console.log(this.carDetail,"car");
    });
  }
  onAdd(){
   this.carDetail.push(this.addForm.value);
   
   this.carService.add(this.addForm.value).subscribe(() => {
    this.router.navigate(['/']);
    this.addForm.reset();
  });

  }
  onEdit(items:any,ind:any){
    // this.carDetail.forEach((element:any)=>{
    //   element.isEdit = false;
    // });
    this.carDetail[ind].isEdit = true;
    this.editForm.patchValue({car_no : items.car_no,owner_name:items.owner_name});
   
  }
  updateCarDetails(index:any){
  this.carDetail[index].car_no = this.editForm.value.car_no;
  this.carDetail[index].owner_name = this.editForm.value.owner_name;
  let updateData = {...this.carDetail[index]};
  delete updateData.isEdit;
  this.carService.update(updateData).subscribe(() => {
    this.router.navigate(["/"]);
    this.editForm.reset();
  })
  this.carDetail[index].isEdit = false;
  
  }
  remove(element:any){
    this.carDetail.forEach((value:any,index:any)=>{
      if(value == element)
      this.carDetail.splice(index,1)
    })
    this.carService.delete(element.id)
    .subscribe((data) => {
      alert("Deleted successfully!!")
    })
  }
  lettersOnly(event:any) 
{
  let k;  
           k = event.keyCode;  
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));          
}
}
