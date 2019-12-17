import { Component, OnInit } from '@angular/core';
import {AppService} from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute ,Router} from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'app-vendor-bill',
    templateUrl: './create-vendor-bill.component.html',
    styleUrls: ['./create-vendor-bill.component.scss']
})

export class CreateVendorBillComponent implements OnInit{
    showbutton: boolean;
    id: any;
    VendorbillForm: FormGroup;
    showErrorMsg: string;
    vendordata : any;
    descen: any;
    loguser :any;
    bill_date:any;
    billdate:any;
    //baseurl : any;
    //startpagevalue:0;
   constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService  ){}
    
    ngOnInit(){
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id){
            this.getvendorbill();
            this.getvendor();
            this.showbutton = true;
            this.billdate=new Date();
            //console.log(this.id);
            this.VendorbillForm = new FormGroup({
                vendor_id: new FormControl("", [Validators.required]),
                bill_no: new FormControl("", [Validators.required]),
                bill_date: new FormControl(""),
                amount: new FormControl("", [Validators.required]),
            });
        }
    }
    getvendor(){
        this.appservice.wholesaler(this.loguser,0)
        .subscribe(
            data=>{
                if(data.status=='1'){
                    this.vendordata = data.data;
                }
            }
        );
    }
    getvendorbill(){
        this.appservice.vendorbillDetail(this.id,this.loguser)
            .subscribe(
              data=>{
                    if(data.status=='1')
                    {
                      this.showErrorMsg = "";
                      this.billdate =data.data[0].bill_date;
                      this.VendorbillForm = new FormGroup({
                        vendor_id: new FormControl(data.data[0].vendor_id, [Validators.required]),
                        bill_no: new FormControl(data.data[0].bill_no, [Validators.required]),
                        bill_date: new FormControl(data.data[0].bill_date),
                        amount: new FormControl(data.data[0].amount, [Validators.required]),
                    });
                      
                  }else{
                      this.showbutton = false;
                  }
              }
          );
    }
    createvendorbill(){
        if(this.VendorbillForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.VendorbillForm.valid){
            this.loaderservice.display(true);
            this.bill_date=document.getElementById("bill_date");
            this.appservice.addvendorbill(this.VendorbillForm.value,this.loguser,this.bill_date.value)
            .subscribe(
                data=>{
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/vendorbill']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/vendorbill']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
            //console.log(this.UserForm.value);
        }
    }
    editvendorbill(){
        if(this.VendorbillForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.VendorbillForm.valid){
            this.loaderservice.display(true);
            this.bill_date=document.getElementById("bill_date");
            this.appservice.editvendorbill(this.VendorbillForm.value,this.id,this.loguser,this.bill_date.value)
            .subscribe(
                data=>{
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/vendorbill']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/vendorbill']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
        }
    }
    Gotolist(){
        this.router.navigate(['/vendorbill']);
    }
}


