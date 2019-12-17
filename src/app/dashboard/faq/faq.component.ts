import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})

export class FaqComponent implements OnInit {
    Faqdata: any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.getFaqdata();
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
    goToCreatedata(id) {
        // alert();
        this.router.navigate(['/create-faq',id]);
    }
    deleteFaqdata(id){
        this.appservice.deletefaq(id)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/faq']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/faq']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
    }

}
