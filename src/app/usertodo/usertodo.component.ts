import { Component, OnInit } from '@angular/core';
import { commonAPIservice } from '../providers/common.services'
import { ActivatedRoute } from '@angular/router';

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';

@Component({
    selector: 'usertodo',
    templateUrl: './usertodo.html'
})

export class usertodoComponent implements OnInit {
    private tododata: any;
    id: number;

    constructor(private services: commonAPIservice, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.services.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.id).subscribe((res) => {
                this.tododata = res;
            })
        });
    }
}
