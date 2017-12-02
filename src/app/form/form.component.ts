import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators  , FormControl } from '@angular/forms';
import { Validation } from './app.validation';

import {SelectItem} from 'primeng/primeng';
  
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  rForm: FormGroup;
  MinMaxNumber: number;
  post:any;
  date1: Date;
  FromDateInput: Date;
  enabled: Boolean;
  cars: SelectItem[];
  property: string;
  selectedCar: string = 'value1';
  console: string = 'ps4';
  score: number = 3;
  test: any
constructor(private fb : FormBuilder){
  
   this.cars = [
                {label: 'value1', value: 'value1'},
                {label: 'value2', value: 'value2'},
                {label: 'value3', value: 'value3'}
              ];

  this.rForm = fb.group({
    'MinMaxNumber':['', [Validators.required]],
    'date1': ['', [Validators.required, Validation.Daterange("04-01-2017" , "06-01-2017")]],
    'selectedCar':['', [Validators.required]],
    'enabled':['', [Validators.required]],
    'property':['', [Validators.required]],
    'console':['', [Validators.required]],
    'score':['', [Validators.required]],     
  });
 }



 addPost(post){
   console.log(post)
   this.test = post
 }

 ngonInit(){
 }

}
