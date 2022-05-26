import { ServicesService } from './../../services.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    title: string = 'Home'
    user_info: any = {}
    countries: any = []
    data: any;
    rows: any;

    constructor(private _auth: AuthService,
        private adminService: ServicesService,
        public modalService: NgbModal,
        public activeModal: NgbActiveModal,
    ) { }


    ngOnInit(): void {
        let res: any = this._auth._getLoginData()
        const obj = JSON.parse(res);
        this.user_info = obj
        this.listItems()
        // console.log(JSON.parse(res))
    }

    listItems() {
        this.countries = this.adminService._getArray()
        console.log(this.countries)


    }

    ngOnDestroy(): void {
        console.log("On Destroy")
    }
    closeModal(message: string) {
        this.activeModal.close();
    }


    // deleteRow(country: any) {
    //     const index = this.countries.indexOf(country);
    //     this.countries.splice(index, 1);
    //     // alert('Are you sure you want to delete this row?')
    // }
    editModeUpdate(one_item: any) {

        console.log(this.countries)
    }
    saveEntity() {
        console.log(this.countries)

    }

    delete(position:any){
        this.countries.splice(index, 1);
        console.log('delete from here')
    }
    openModal(one_item : any,position:any) {
        const modalRef = this.modalService.open(CustomModalComponent,
            {
                scrollable: true,
                windowClass: 'myCustomModalClass',
            });
        let data = {
            one_item: one_item
        }

        modalRef.componentInstance.fromParent = data;
        modalRef.result.then((result: any) => {
            this.delete(position)
            console.log(result);
        }, (reason: any) => {
            //if confirmed ==true
            // this.delete(position)
        });
    }

    // }
    // onUpdate(formObj:any) {
    //     let values = formObj.one_item;
    //     console.log(values);
    //     let obj: any = {
    //         title: values.title,
    //         description: values.name,
    //         grade: values.salary,
    //         subject: values.department,
    //         total_marks:values.marks,
    //         created_by:values.created_by,
    //         created_at:values.created_at
    //     };

    //     this.rows.push(obj);
    //     formObj.reset();

    //   }

}



function index(index: any, arg1: number) {
    throw new Error('Function not implemented.');
}

function country(country: any) {
    throw new Error('Function not implemented.');
}

