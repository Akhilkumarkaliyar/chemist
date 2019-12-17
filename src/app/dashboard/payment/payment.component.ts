import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
import {ExcelService} from '../../shared/services/excel.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {
    vendorpayment: any;
    VendorpayementSearch :any;
    loguser:any;
    excelbaseurl:any;
    totalRecords: any;
    initialPageValue = 1;
    startpagevalue = 0;
    pno:any;
    totalrecord:any
    itemsPerPage:any;
    currentPage:any;
    constructor(private appservice: AppService, private route: Router, private cookieservice: CookieService, private toasterservice: ToasterService, private loaderservice: LoaderService, private excelService:ExcelService) { }

    ngOnInit() {
        if (!this.cookieservice.get("loginuserMerck") ) {
            this.route.navigate(['/auth']);
        }
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.getvendorpayment();
        this.VendorpayementSearch = new FormGroup({
            search: new FormControl("", [Validators.required]),
        });
    }
    getvendorpayment() {
        this.appservice.vendorpayment(this.loguser,this.startpagevalue)
            .subscribe(
                data => {
                    if (data.status == '1') {
                        this.vendorpayment = data.data;
                        //this.excelbaseurl=sessionStorage.getItem("excelurl");
                        this.totalRecords = data.record;
                        this.itemsPerPage =10;
                        this.currentPage =this.initialPageValue;
                    }else{
                        this.vendorpayment ='';
                        this.totalRecords = '';
                     }
                }
            );
    }
    getvendorpaymentname(){
        this.loaderservice.display(true);
        this.appservice.vendorpaymentsearch(this.VendorpayementSearch.value,this.loguser)
        .subscribe(
            data => {
                //console.log(data);return;
                if (data.status == '1') {
                    this.vendorpayment = data.data; 
                }else if(data.status == '2'){ 
                    this.vendorpayment =data.data;
                }
            }
        );
    } 
    goToCreatevendorpayment(id) {
        // alert();
        this.route.navigate(['/create-vendorpayment', id]);
    }
    goToaddvendorpayment(id) {
        // alert();
        this.route.navigate(['/create-vendorpayment', id]);
    }
    handleChange(en){
        this.pno=en-1;
        this.appservice.vendorpayment(this.loguser,this.pno)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.vendorpayment = data.data;
                   // this.excelbaseurl=sessionStorage.getItem("excelurl");
                    this.totalRecords = data.record;
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                }
            }
        );
    }

    exportAsXLSX():void {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.vendorpayment, 'sample');
     }
}
