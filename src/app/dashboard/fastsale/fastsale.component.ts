import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-fastsale',
    templateUrl: './fastsale.component.html',
    styleUrls: ['./fastsale.component.scss']
})

export class FastsaleComponent implements OnInit {
    Comingproductdata: any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.getFastsale();
    }

    getFastsale() {
        this.appservice.Fastsale()
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.Comingproductdata = data.data;
                    }
                }
            );
    }
}
