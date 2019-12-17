import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-htestimonial',
    templateUrl: './htestimonial.component.html',
    styleUrls: ['./htestimonial.component.scss']
})

export class HtestimonialComponent implements OnInit {
    Testname: any;
    Testdesc : any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    ngOnInit() {
        this.getTestimonialdata();
    }

    getTestimonialdata() {
        this.appservice.testimonialdata()
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.Testname = data.data[0].name;
                        this.Testdesc = data.data[0].description;
                    }
                }
            );
    }
    goToCreatedata(id) {
        // alert();
        this.router.navigate(['/create-testimonial',id]);
    }
    deleteTestimonialdata(id){
        this.appservice.deletetestimonial(id)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/testimonial']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/testimonial']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
    }

}
