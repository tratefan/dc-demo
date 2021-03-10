import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/shared/classes/product';

@Component({
  selector: 'app-enquiry-modal',
  templateUrl: './enquiry-modal.component.html',
  styleUrls: ['./enquiry-modal.component.scss']
})
export class EnquiryModalComponent implements OnInit, OnDestroy  {
  
  @ViewChild("enquiryModal") EnquiryModal: TemplateRef<any>;

  public closeResult: string;
  public modalOpen: boolean = false;
  public product: Product;
  public enquiryForm:  FormGroup;
  public currdate: any;
  public setDate: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal,
  	private fb: FormBuilder) { 
  	this.enquiryForm = this.fb.group({
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }


  openModal(Product) {
    this.product = Product;
    console.log(this.product);
    if (isPlatformBrowser(this.platformId)) { // For SSR 
      this.modalService.open(this.EnquiryModal, { 
        size: 'lg',
        ariaLabelledBy: 'Enquiry-Modal',
        backdrop: 'static',
        centered: true,
        windowClass: 'bd-example-modal-md theme-modal'
      }).result.then((result) => {
        console.log(result);
        this.modalOpen = true;
        `Result ${result}`
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }


  ageForm() {
    var day = this.enquiryForm.value.day;
    var month = this.enquiryForm.value.month;
    var year = this.enquiryForm.value.year;
    var age = 18;
    var mydate = new Date();
    mydate.setFullYear(year, month-1, day);

    var currdate = new Date();
    this.currdate = currdate;
    var setDate = new Date();         
    this.setDate = setDate.setFullYear(mydate.getFullYear() + age, month-1, day);

    if ((this.currdate - this.setDate) > 0){
      localStorage.setItem('enquiryModal','true')
      this.modalService.dismissAll();
    } else {
      window.location.href = "https://www.google.com/";
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    if(this.modalOpen){
      this.modalService.dismissAll();
    }
    
  }

}
