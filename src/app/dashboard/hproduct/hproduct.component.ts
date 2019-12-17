import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'app-hproduct',
    templateUrl: './hproduct.component.html',
    styleUrls: ['./hproduct.component.scss']
})

export class HproductComponent implements OnInit {
    productdata: any;
    ProductSearch :FormGroup;
    loguser:any;
    totalRecords: any;
    initialPageValue = 1;
    startpagevalue = 0;
    pno:any;
    constructor(private appservice: AppService, private route: Router, private cookieservice: CookieService, private toasterservice: ToasterService, private loaderservice: LoaderService) { }

    ngOnInit() {
        this.getProduct();
        this.ProductSearch = new FormGroup({
            search: new FormControl("", [Validators.required]),
        });
        this.loguser =1;
    }

    getProduct() {
        this.appservice.product(this.loguser,this.startpagevalue,10)
            .subscribe(
                data => {
                    if (data.status == '1') {
                       this.productdata = data.data;
                    }
                }
            );
    }
    getproductname(){
        //console.log(this.ProductSearch);
        this.loaderservice.display(true);
        this.appservice.productsearch(this.ProductSearch.value,this.loguser,this.startpagevalue,10)
        .subscribe(
            data => {
                //console.log(data);return;
                if (data.status == '1') {
                    this.productdata = data.data; 
                }else if(data.status == '2'){ 
                    this.productdata =data.data;
                }
            }
        );
    }
}
