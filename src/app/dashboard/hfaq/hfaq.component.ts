import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-hfaq',
    templateUrl: './hfaq.component.html',
    styleUrls: ['./hfaq.component.scss']
})

export class HfaqComponent implements OnInit {
    Faqdata: any;
    FaqSearch :FormGroup;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
        this.getFaqdata();
        this.FaqSearch = new FormGroup({
            search: new FormControl("", [Validators.required]),
        });
    }

    getFaqdata() {
        this.appservice.faqdata()
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.Faqdata = data.data;
                    }
                }
            );
    }
    getfaqsearch(){
        this.loaderservice.display(true);
        this.appservice.faqsearch(this.FaqSearch.value)
        .subscribe(
            data => {
                //console.log(data);return;
                if (data.status == '1') {
                    this.Faqdata = data.data; 
                }else if(data.status == '2'){ 
                    this.Faqdata =data.data;
                }
            }
        );
    }
}
