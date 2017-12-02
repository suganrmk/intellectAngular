import { Component } from '@angular/core';
import {commonAPIservice} from '../providers/common.services'

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';
  
@Component({
  selector: 'usercard',
  templateUrl: './usercard.html'
})

export class userCardComponent {

private userData: any;
 
constructor(private services : commonAPIservice){
    this.services.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
        this.userData = res;
    })
}
  
}
