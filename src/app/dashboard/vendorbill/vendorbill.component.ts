import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
import {ExcelService} from '../../shared/services/excel.service';

@Component({
    selector: 'app-vendorbill',
    templateUrl: './vendorbill.component.html',
    styleUrls: ['./vendorbill.component.scss']
})

export class VendorbillComponent implements OnInit {
    vendorbill: any;
    Vendorbillsearch :any;
    loguser:any;
    excelbaseurl:any;
    startValue: any;
    endValue:any;
    startDateValue:any;
    endDateValue:any;
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
        this.getvendorbill();
        this.Vendorbillsearch = new FormGroup({
            search: new FormControl("", [Validators.required]),
        });
    }

    getvendorbill() {
        this.appservice.vendorbill(this.loguser,this.startpagevalue,10)
            .subscribe(
                data => {
                    if (data.status == '1') {
                       this.vendorbill = data.data;
                       //this.excelbaseurl=sessionStorage.getItem("excelurl");
                       this.totalRecords = data.record;
                       this.itemsPerPage =10;
                       this.currentPage =this.initialPageValue;
                    }else{
                       this.vendorbill ='';
                       this.totalRecords = '';
                    }
                }
            );
    }
    getbill(){
        this.loaderservice.display(true);
        this.appservice.Vendorbillsearch(this.Vendorbillsearch.value,this.loguser)
        .subscribe(
            data => {
                //console.log(data);return;
                if (data.status == '1') {
                    this.vendorbill = data.data; 
                }else if(data.status == '2'){ 
                    this.vendorbill =data.data;
                }
            }
        );
    } 
    goToCreatevendorbill(id) {
        // alert();
        this.route.navigate(['/create-vendorbill', id]);
    }
    goToaddvendorbill(id) {
        // alert();
        this.route.navigate(['/create-vendorbill', id]);
    }
    handleChange(en){
        this.pno=en-1;
         this.appservice.vendorbill(this.loguser,this.startpagevalue,10)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.vendorbill = data.data;
                   // this.excelbaseurl=sessionStorage.getItem("excelurl");
                    this.totalRecords = data.record;
                }
            }
        );
    }

    exportAsXLSX():void {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.vendorbill, 'sample');
     }
     getrecord(){
        this.totalrecord=document.getElementById("getpage");
        this.appservice.vendorbill(this.loguser,this.startpagevalue,this.totalrecord.value)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.vendorbill = data.data;
                    if(this.totalrecord.value == 10){
                        this.totalRecords = data.record;
                        this.itemsPerPage =10;
                        this.currentPage =this.initialPageValue;
                    }else{
                        this.totalRecords = '';
                    }
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                }
            }
        );
    }
}
