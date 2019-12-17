import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-hcms',
    templateUrl: './hcms.component.html',
    styleUrls: ['./hcms.component.scss']
})

export class HcmsComponent implements OnInit {
    Cmsname: any;
    Cmsdesc : any;
    id: any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getcmspage();
    }
    getcmspage(){
        this.appservice.Cmsid(this.id)
        .subscribe(
            data=>{
                //console.log(data);
                if(data.status=='1')
                {
                    this.Cmsname = data.data[0].name;
                    this.Cmsdesc = data.data[0].description;
                    //console.log( this.Cmsdata);
                }
            }
        );
    }
}
