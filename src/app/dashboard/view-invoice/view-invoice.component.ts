import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-view-invoice',
    templateUrl: './view-invoice.component.html',
    styleUrls: ['./view-invoice.component.scss']
})

export class ViewinvoiceComponent implements OnInit {
    Billingdata: any;
    Tprice:any;
    Gst:any;
    Amount:any;
    loguser:any;
    id:any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    myDate = new Date();
    ngOnInit() {
        if(!this.cookieservice.get("loginuserMerck") && !this.cookieservice.get("loginsuperuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.id = this.route.snapshot.paramMap.get('id');
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.getbillingdata();
    }

    getbillingdata() {
        this.appservice.viewbillingdata(this.loguser,this.id)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1'){
                        this.Billingdata = data.data;
                        this.Tprice=data.total;
                        this.Gst=data.gst;
                        this.Amount=data.amount;
                        this.myDate=new Date();
                    }
                }
            );
    }
    printPage() {
        window.print();
    }

}
