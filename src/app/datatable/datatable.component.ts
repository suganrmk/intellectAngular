import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Car } from '../datatable/car';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CarService {
    constructor(private http: Http) {}
    getCarsSmall() {
        return this.http.get('https://raw.githubusercontent.com/suganrmk/testfile/master/sample.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().entity )
                    .then(data => { return data; });
     }
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {

    displayDialog: boolean;
    car: Car = new PrimeCar();
    selectedCar: Car;
    selectCar: any;
    newCar: boolean;
    carIndex: any;
    cols: any[];
    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {

        this.carService.getCarsSmall().then(cars => this.cars = cars);
      
           this.cols = [
            {field: 'employeeId', header: 'employeeId2'},
            {field: 'firstName', header: 'firstName'},
            {field: 'lastName', header: 'lastName'},
            {field: 'email', header: 'email'}
        ];

          
    }
    
    
    showDialogToAdd() {
        this.newCar = true;

        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    
    
    save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.carIndex] = this.car;
        
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.carIndex;
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(car3 , carIndex) {
        this.newCar = false;
        this.car = this.cloneCar(car3);
        this.displayDialog = true;
        this.carIndex = carIndex;
       
    }
    
    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    // findSelectedCarIndex(): number {
    //     return this.cars.indexOf(this.selectedCar);   
    // }
}

class PrimeCar implements Car {
    
    constructor(public employeeId?, public firstName?, public lastName?, public email?) {}
}