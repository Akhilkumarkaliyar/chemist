import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-hblog',
    templateUrl: './hblog.component.html',
    styleUrls: ['./hblog.component.scss']
})

export class HblogComponent implements OnInit {
    Blogtitle: any;
    Blogdesc: any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
       this.getBlogdata();
    }

    getBlogdata() {
        this.appservice.blogdata()
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.Blogtitle = data.data[0].title;
                        this.Blogdesc = data.data[0].description;
                    }
                }
            );
    }
}
