import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnInit {
    ContactForm: FormGroup;
    ProductSearch: FormGroup;
    productdata:any;
    Billingdata: any;
    Tprice:any;
    Gst:any;
    Amount:any;
    Totalprice :any;
    loguser :any;
    totalRecords: any;
    initialPageValue = 1;
    startpagevalue = 0;
    pno:any;
    searchproduct:any;
    searchvalue:any;
    searchproducts:any;
    aa: any;
    salestype:any;
    quantity:any;
    id:any;
    billnos:any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}
    myDate = new Date();
    ngOnInit() {
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.id = this.route.snapshot.paramMap.get('id');
        //console.log(this.loguser);
        this.getbillingdata();
        //this.getProduct();
        this.ContactForm = new FormGroup({
            name: new FormControl("", [Validators.required]),
            mobile: new FormControl(""),
            email: new FormControl(""),
            address: new FormControl(""),

        });
    }

    getbillingdata() {
        this.appservice.billingdata(this.loguser,this.id)
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.Billingdata = data.data;
                        this.Tprice=data.total;
                        this.Gst=data.gst;
                        this.Amount=data.amount;
                        this.myDate=new Date();
                        this.searchvalue="";
                        this.billnos =this.id;
                        console.log(this.billnos);
                    }
                    else{
                        this.billnos =this.id;
                    }
                }
            );
    }
    genratebill(id){
        this.appservice.genratebill(id)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);  
                        this.router.navigate(['/billing']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/billing']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
    }
    getProduct() {
        this.searchproduct=document.getElementById("searchproduct");
        this.appservice.productlist(this.loguser,this.searchproduct.value)
            .subscribe(
                data => {
                    if (data.status == '1') {
                       this.productdata = data.data;
                    }
                }
            );
    }
    getproductname(){
        this.searchproduct=document.getElementById("searchproduct");
        this.loaderservice.display(true);
        this.salestype=document.getElementById("salestype");
        this.appservice.productsearchss(this.searchproduct.value.trim(),this.loguser,this.salestype.value,this.id)
        .subscribe(
            data => {
                console.log(data);
                if (data.status == '1') {
                    this.toasterservice.Success(data.message);  
                    this.Billingdata = data.data;
                    this.Tprice=data.total;
                    this.Gst=data.gst;
                    this.Amount=data.amount;
                    this.myDate=new Date();
                    this.billnos =this.id; 
                    this.searchproduct.value = "";
                }else if(data.status == '2'){ 
                    this.searchproduct.value = "";
                    this.toasterservice.Error(data.message);
                    this.Tprice=data.total;
                    this.Gst=data.gst;
                    this.Amount=data.amount;
                    this.myDate=new Date();
                    this.billnos =this.id;
                    
                }
            }
        );
    }
    addbilling(id){
        this.appservice.addbilling(id,this.id)
        .subscribe(
            data => {
                 if (data.status == '1') {
                    this.toasterservice.Success(data.message);
                    this.Billingdata = data.data;
                    this.Tprice=data.total;
                    this.Gst=data.gst;
                    this.Amount=data.amount;
                    this.billnos =this.id;
                    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');   
                    //this.route.navigate(['/product']);   
                }else if(data.status == '2'){ 
                    this.toasterservice.Error(data.message);
                    this.Billingdata = data.data;
                    this.Tprice=data.total;
                    this.Gst=data.gst;
                    this.Amount=data.amount;
                    this.billnos =this.id;
                    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');   
                   // this.route.navigate(['/product']);   
                }
            }
        );
    }
    deletebillingdata(id){
        this.appservice.deletebilling(id)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.Billingdata = data.data;
                        this.Tprice=data.total;
                        this.Gst=data.gst;
                        this.Amount=data.amount;
                        this.billnos =this.id;
                        //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
                        this.Totalprice =data.total
                        this.toasterservice.Success(data.message);  
                        //this.router.navigate(['/billing']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.billnos =this.id;
                        //this.router.navigate(['/billing']);  
                    }else{
                        this.toasterservice.Error(data.message);
                        this.billnos =this.id;
                    }
                }
            );
    }
    redirecttoview(lastinsertid){
        if(this.ContactForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.ContactForm.valid){
            console.log(this.ContactForm);
            this.loaderservice.display(true);
            this.salestype=document.getElementById("salestype");
            this.appservice.billingproductlist( this.ContactForm.value,this.loguser,this.salestype.value)
            .subscribe(
                data=>{
                    console.log(data.lastinsertid);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/viewinvoice',data.lastinsertid]);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/invoice']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
        }
    }
    increquantity(id,product_id){
        this.quantity=document.getElementById("quantity_"+id);
        this.salestype=document.getElementById("salestype");
        this.appservice.increquantity(id,product_id,this.quantity.value,this.salestype.value)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.Billingdata = data.data;
                        this.Tprice=data.total;
                        this.Gst=data.gst;
                        this.Amount=data.amount;
                        //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
                        this.Totalprice =data.total
                        this.toasterservice.Success(data.message);
                        this.billnos =this.id; 
                        //this.router.navigate(['/billing']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.billnos =this.id;
                        //this.router.navigate(['/billing']);  
                    }else{
                        this.toasterservice.Error(data.message);
                        this.billnos =this.id;
                    }
                }
            );
    }
}
