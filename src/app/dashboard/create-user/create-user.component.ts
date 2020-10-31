import { Component, OnInit } from '@angular/core';
import {AppService} from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute,Router } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'app-auth',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit{
    id: any;
    UserForm: FormGroup;
    showErrorMsg: string;
    loginData: any; 
    hospitaldata : any;
    showbutton: boolean = false;
    countrydata: any;
    restid:any;
    file:any;
    name:any;
    fileName:any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    
    ngOnInit(){
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.restid =JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id){
            this.getUsers();
            this.showbutton = true;
            console.log(this.id);
        }
        console.log(this.showbutton);
        //this.getcountry();
        this.UserForm = new FormGroup({
            name: new FormControl("", [Validators.required]),
            contactperson: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            mobile: new FormControl("", [Validators.required]),
            address: new FormControl("", [Validators.required]),
            country: new FormControl("", [Validators.required]),
            city: new FormControl("", [Validators.required]),
            licenceno: new FormControl("", [Validators.required]),
          });
    }
    getUsers(){
        this.appservice.userDetail(this.id)
        .subscribe(
            data=>{
                if(data.status=='1')
                {
                    this.showErrorMsg = "";
                    this.UserForm = new FormGroup({
                        name: new FormControl(data.data[0].fname, [Validators.required]),
                        email: new FormControl(data.data[0].email, [Validators.required]),
                        mobile: new FormControl(data.data[0].mobile, [Validators.required]),
                        contactperson: new FormControl(data.data[0].contactperson, [Validators.required]),
                        address: new FormControl(data.data[0].address, [Validators.required]),
                        country: new FormControl(data.data[0].country, [Validators.required]),
                        city: new FormControl(data.data[0].city, [Validators.required]),
                        licenceno: new FormControl(data.data[0].licenceno, [Validators.required]),
                      });
                    
                }else{
                    this.showbutton = false;
                }

                //console.log(data);
            }
        );



}
filechange(e){
    this.file = e.target.files[0];
    console.log(this.file);
    this.fileName = e.target.files[0];
    this.name = e.target.files[0].name;
}
createuser(image){
    if(this.UserForm.invalid){
        this.toasterservice.Error("Please enter the required filed");
        return;
    }    
    if(this.UserForm.valid){
        this.appservice.adduser(this.UserForm.value,this.fileName)
        .subscribe(
            data=>{
                console.log(data);
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);   
                    this.router.navigate(['/appuser']);                
                }else if(data.status=='2'){
                    this.toasterservice.Error(data.message);
                    this.router.navigate(['/appuser']);  
                }else{
                    this.toasterservice.Error(data.message);
                }
            }
        )
    }
}
edituser(image){
    if(this.UserForm.invalid){
        this.toasterservice.Error("Please enter the required filed");
        return;
    }    
    if(this.UserForm.valid){
        this.appservice.edituser(this.UserForm.value,this.id,this.fileName)
        .subscribe(
            data=>{
                console.log(data);
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);   
                    this.router.navigate(['/create-user',this.id]);                
                }else if(data.status=='2'){
                    this.toasterservice.Error(data.message);
                    this.router.navigate(['/create-user',this.id]);  
                }else{
                    this.toasterservice.Error(data.message);
                }
            }
        )
    }
}
Gotolist(){
    this.router.navigate(['/dashboard']);
}


}


