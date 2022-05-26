import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
    title: String = 'Dashboard'
    constructor() { }

    ngOnInit(): void {
        // console.log(1111)
    }
    ngOnChanges() {
        // if (this.auth.isLoggedIn()) {
        //   this.router.navigate(['admin']);
        //   console.log("two")
        // }
        console.log("two")
    }
    ngAfterContentInit() {
        // console.log(3333)
    }
}
