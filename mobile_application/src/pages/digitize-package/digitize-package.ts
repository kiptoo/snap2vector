import { Component, ViewChild, ChangeDetectorRef, ElementRef } from "@angular/core";
import { NavController, Content, MenuController } from "ionic-angular";

import { FormBuilder } from "@angular/forms";
import { ImageSelectionPage } from "../image-selection/image-selection";
import { ToastProvider } from "../../services/ui-services/toast";
import { StorageService } from "../../services/core/storage";

@Component({
  selector: 'page-digitize-package',
  templateUrl: 'digitize-package.html'
})
export class DigitizePackagePage {
  @ViewChild(Content) content: Content;

  garmentTypes: Array<any> = [{ name: "Flat - All flat items - Shirts, bags etc", checked: false }, { name: "Caps - all hats", checked: false }, { name: "Beanies", checked: false }];
  trims: Array<any> = [{ name: "Cut thread longer than 2mm", checked: false }, { name: "Cut all connections threads", checked: false }, { name: "Do not cut - never trim", checked: false }];


  digitizeObj = {
    type: 'Snap to Digitize',
    poNumber: '',
    size: '',
    sizeValue: '',
    price: '',
    isUrgent: false,
    fileFormat: '',
    instructions: '',
    garmentTypes: [],
    trims: [],
    amount: 0
  }
  isRushdisabled: boolean = false;
  fileListOpen = false;
  isError = false;

  constructor(
    public nav: NavController,
    public menu: MenuController,
    public toast: ToastProvider,

    public formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    private storage: StorageService,
    private elementRef: ElementRef) {
  }

  placeOrder() {
    this.digitizeObj.garmentTypes = this.garmentTypes.filter(type => {
      return type.checked === true;
    });

    this.digitizeObj.trims = this.trims.filter(trim => {
      return trim.checked === true;
    });

    if (this.digitizeObj.price !== "" && this.digitizeObj.sizeValue !== "" && this.digitizeObj.size !== "" && this.digitizeObj.fileFormat !== "" && this.digitizeObj.poNumber !== "" && this.digitizeObj.garmentTypes.length && this.digitizeObj.trims.length) {
      this.isError = false;
      this.digitizeObj.amount = parseInt(this.digitizeObj.price);
      if (this.digitizeObj.isUrgent) {
        this.digitizeObj.amount += 10;
      }
      this.storage.set('PACKAGE', this.digitizeObj);
      this.nav.push(ImageSelectionPage);
    } else {
      this.isError = true;

      let offset = null;
      if (this.digitizeObj.trims.length === 0) {
        offset = this.elementRef.nativeElement.querySelector('#trims').offsetTop;
      }
      if (this.digitizeObj.garmentTypes.length === 0) {
        offset = this.elementRef.nativeElement.querySelector('#garmentTypes').offsetTop;
      }
      if (this.digitizeObj.fileFormat === "") {
        offset = this.elementRef.nativeElement.querySelector('#fileFormat').offsetTop;
      }
      if (this.digitizeObj.price === "") {
        offset = this.elementRef.nativeElement.querySelector('#price').offsetTop;
      }
      if (this.digitizeObj.size === "") {
        offset = this.elementRef.nativeElement.querySelector('#size').offsetTop;
      }
      if (this.digitizeObj.poNumber === "") {
        offset = this.elementRef.nativeElement.querySelector('#poNumber').offsetTop;
      }
      this.content.scrollTo(0, offset);
      this.toast.newToast('Select All required details');
    }
  }
  updateLogoTypePrice(price) {
    if (price != 15) {
      console.log(price);
      this.digitizeObj.isUrgent = false;
      this.isRushdisabled = true;
    } else {
      this.isRushdisabled = false;
    }

    if (price === "") {
      if (this.digitizeObj.isUrgent) {
        this.digitizeObj.amount = 10;
      } else {
        this.digitizeObj.amount = 0;
      }
      // this.changeDetectorRef.detectChanges();
      return;
    }
    if (this.digitizeObj.isUrgent) {
      this.digitizeObj.amount = parseInt(price) + 10;
    } else {
      this.digitizeObj.amount = price;
    }
    // this.changeDetectorRef.detectChanges();
  }
  updatePriceForUrgent() {
    if (this.digitizeObj.isUrgent) {
      if (this.digitizeObj.price) {
        this.digitizeObj.amount = parseInt(this.digitizeObj.price) + 10;
      } else {
        this.digitizeObj.amount = 10;
      }
    } else {
      if (this.digitizeObj.price) {
        this.digitizeObj.amount = parseInt(this.digitizeObj.price);
      } else {
        this.digitizeObj.amount = 0;
      }
    }
    // this.changeDetectorRef.detectChanges();
  }


  toggleSection() {
    this.fileListOpen = !this.fileListOpen;
    // this.changeDetectorRef.detectChanges();
  }

  garmentChangeEvent() {
    this.digitizeObj.garmentTypes = this.garmentTypes.filter(type => {
      // this.changeDetectorRef.detectChanges();
      return type.checked === true;
    });
  }

  trimsChangeEvent() {
    this.digitizeObj.trims = this.trims.filter(trim => {
      // this.changeDetectorRef.detectChanges();
      return trim.checked === true;
    });
  }
  changeDetect($event) {
    // this.changeDetectorRef.detectChanges();
  }
}
