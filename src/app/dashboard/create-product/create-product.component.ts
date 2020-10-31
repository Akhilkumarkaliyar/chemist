import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AppService} from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute ,Router} from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
//import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
    selector: 'app-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})

export class CreateProductComponent implements OnInit{
    showbutton: boolean;
    id: any;
    ProductForm: FormGroup;
    showErrorMsg: string;
    categorydata : any;
    subcategorydata :any;
    public editorValue: string = '';
    file: any;
    fileName: any;
    name: any;
    descen: any;
    loguser :any;
    d:any;
    exdate:any;
    expiredate:any;
    hsndata:any;
    gst:any;
    gstvalue:any;
    //baseurl : any;
    //@ViewChild(BarecodeScannerLivestreamComponent)
    //barecodeScanner: BarecodeScannerLivestreamComponent;
    barcodeValue :any;
   constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService  ){}
    
    ngOnInit(){
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id){
            this.getproduct();
            this.getcategory();
            this.gethsn();
            //this.getsubcategory();
            this.showbutton = true;
            this.exdate=new Date();
            console.log(this.id);
            this.ProductForm = new FormGroup({
                cat_id: new FormControl("", [Validators.required]),
                //subcat_id: new FormControl("", [Validators.required]),
                name: new FormControl("", [Validators.required]),
                chemical_name: new FormControl(""),
                mrp: new FormControl("", [Validators.required]),
                //selling_price: new FormControl("", [Validators.required]),
                //available_price: new FormControl("", [Validators.required]),
                hsn_code: new FormControl(""),
                gst: new FormControl("", [Validators.required]),
                company_name: new FormControl(""),
                quantity: new FormControl("", [Validators.required]),
                loose: new FormControl(""),
                perquantity: new FormControl(""),
                rack_no: new FormControl(""),
                batch_no: new FormControl(""),
                is_prescription: new FormControl("", [Validators.required]),
                expire_date: new FormControl(""),
                barcode: new FormControl(""),
                //available_date: new FormControl("", [Validators.required]),
                //image: new FormControl("", []),
            });
        }
       
    }
    
    getcategory(){
        //console.log(this.loguser);
        this.appservice.category(0,100)
        .subscribe(
            data=>{
                if(data.status=='1'){
                    this.categorydata = data.data;
                }
            }
        );
    }
    gethsn(){
        this.appservice.hsn()
        .subscribe(
            data=>{
                if(data.status=='1'){
                    console.log(data);
                    this.hsndata = data.data;
                }
            }
        );
    }
    
    getgst(hsn){
        this.appservice.getgst(hsn)
        .subscribe(
            data=>{
                if(data.status=='1'){
                    this.gst = data.data;
                }
            }
        );
    }
    getsubcategory(cat_id){
        this.appservice.SubCategorycatDetail(cat_id)
        .subscribe(
            data=>{
                if(data.status=='1'){
                    this.subcategorydata = data.data;
                }
            }
        );
    }
    getproduct(){
        this.appservice.ProductDetail(this.id)
            .subscribe(
              data=>{
                  //console.log(data);
                  if(data.status=='1')
                  {
                      this.showErrorMsg = "";
                      this.descen=data.data[0].image;
                      this.exdate=data.data[0].expire_date;
                      //this.baseurl = "http://localhost:8085/images";
                      this.getsubcategory(data.data[0].cat_id);
                      this.gst=data.data[0].gst;
                      //this.d=data.data[0].expire_date;
                      //this.exdate = this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-1);
                      this.ProductForm = new FormGroup({
                        cat_id: new FormControl(data.data[0].cat_id, [Validators.required]),
                        //subcat_id: new FormControl(data.data[0].subcat_id, [Validators.required]),
                        name: new FormControl(data.data[0].name, [Validators.required]),
                        chemical_name: new FormControl(data.data[0].chemical_name, []),
                        mrp: new FormControl(data.data[0].mrp, [Validators.required]),
                        //selling_price: new FormControl(data.data[0].selling_price, [Validators.required]),
                        //available_price: new FormControl(data.data[0].available_price, [Validators.required]),
                        hsn_code: new FormControl(data.data[0].hsn_code, []),
                        gst: new FormControl(data.data[0].gst, [Validators.required]),
                        company_name: new FormControl(data.data[0].company_name),
                        quantity: new FormControl(data.data[0].quantity, [Validators.required]),
                        loose: new FormControl(data.data[0].loose),
                        perquantity: new FormControl(data.data[0].perquantity),
                        rack_no: new FormControl(data.data[0].rack_no, []),
                        batch_no: new FormControl(data.data[0].batch_no),
                        is_prescription: new FormControl(data.data[0].is_prescription, [Validators.required]),
                        expire_date: new FormControl(data.data[0].expire_date),
                        barcode :new FormControl(data.data[0].barcode),
                        //available_date: new FormControl(data.data[0].available_date, [Validators.required]),
                        //image: new FormControl(data.data[0].image, []),
                      });
                      console.log(this.ProductForm);
                      
                  }else{
                      this.showbutton = false;
                  }
              }
          );
    }
    xyz(){
        console.log('ccc');
        this.barcodeValue ='aaaa';
        setTimeout(function() {
            $('#upfile').trigger('click');
          }, 10000);
        
        //$( '#upfile' ).off( 'click' );
        //$('#barcode').trigger('stop');
    }
    filechange(e){
        //console.log('dd');
        this.file = e.target.files[0];
        //console.log(this.file);
        this.fileName = e.target.files[0];
        this.name = e.target.files[0].name;
    }
    createproduct(image){
        console.log(image);
        console.log(this.ProductForm);
        if(this.ProductForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.ProductForm.valid){
            //console.log(this.ProductForm);
            this.loaderservice.display(true);
            this.expiredate=document.getElementById("expiredate");
            //this.gstvalue=document.getElementById("gst");
            this.appservice.addproduct( this.ProductForm.value,this.fileName,this.loguser,this.expiredate.value)
            .subscribe(
            data=>{
                console.log(data);
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);   
                    this.router.navigate(['/product']);                
                }else if(data.status=='2'){
                    this.toasterservice.Error(data.message);
                    this.router.navigate(['/product']);  
                }else{
                    this.toasterservice.Error(data.message);
                }
            }
        );
            //console.log(this.UserForm.value);
        }
    }
    editproduct(){
        if(this.ProductForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.ProductForm.valid){
            this.loaderservice.display(true);
            this.expiredate=document.getElementById("expiredate");
            //this.gstvalue=document.getElementById("gst");
            this.appservice.editproduct(this.ProductForm.value,this.id,this.fileName,this.loguser,this.expiredate.value)
            .subscribe(
                data=>{
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/product']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/product']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
        }
    }
    Gotolist(){
        this.router.navigate(['/product']);
    }
    /*ngAfterViewInit() {
        this.barecodeScanner.start();
    }
    onValueChanges(result){
        console.log(this.barcodeValue);
        this.barcodeValue = result.codeResult.code;
        
    }*/
}


