import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    Availableproductdata: any;
    Comingproductdata:any;
    Soldproductdata:any;
    loguser:any;
    startpagevalue:0;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
        
        this.getAvailableproductdata();
        this.getComingproductdata();
        this.getsoldproductdata();
        this.loguser =1;
    }

    getAvailableproductdata() {
        this.appservice.availableproductdata(this.loguser,this.startpagevalue,10)
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.Availableproductdata = data.data;
                    }
                }
            );
    }
    getComingproductdata() {
        this.appservice.comingproductdata()
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1'){
                        this.Comingproductdata = data.data;
                    }
                }
            );
    }
    getsoldproductdata() {
        /*this.appservice.soldproductdata()
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1'){
                        this.Soldproductdata = data.data;
                    }
                }
            );*/
    }
}
