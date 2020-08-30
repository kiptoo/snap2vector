import { Component, ViewChild, ChangeDetectorRef, ElementRef } from "@angular/core";
import { NavController, AlertController, MenuController, Content } from "ionic-angular";
 
import { FormBuilder } from "@angular/forms";
import { ImageSelectionPage } from "../image-selection/image-selection";
import { ToastProvider } from "../../services/ui-services/toast";
import { StorageService } from "../../services/core/storage";

@Component({
  selector: 'page-vector-package',
  templateUrl: 'vector-package.html'
})
export class VectorPackagePage {
  @ViewChild(Content) content: Content;

  prices: any = [{ value: "15", name: "Basic Logo" }, { value: "25", name: "Simple Logo" }, { value: "50", name: "Complex Logo" }];
  vectorObj = {
    type: 'Snap to Vector',
    price: '',
    scheme: '',
    artwork: '',
    isUrgent: false,
    fileFormat: '',
    instructions: '',
    amount: 0
  }
  isRushdisabled: boolean = false;
  fileListOpen: boolean = false;
  isError = false;

  constructor(
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toast: ToastProvider,
    
    public formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    private storage: StorageService,
    private elementRef: ElementRef) { }


  placeOrder() {
    if (this.vectorObj.price !== "" && this.vectorObj.scheme !== "" && this.vectorObj.fileFormat !== "" && this.vectorObj.artwork !== "") {
      this.isError = false;
      this.vectorObj.amount = parseInt(this.vectorObj.price);
      if (this.vectorObj.isUrgent) {
        this.vectorObj.amount += 10;
      }
      this.storage.set('PACKAGE', this.vectorObj);
      this.nav.push(ImageSelectionPage);
    } else {
      this.isError = true;

      let offset = null;
      if (this.vectorObj.fileFormat === "") {
        offset = this.elementRef.nativeElement.querySelector('#fileFormat').offsetTop;
      }
      if (this.vectorObj.scheme === "") {
        offset = this.elementRef.nativeElement.querySelector('#scheme').offsetTop;
      }
      if (this.vectorObj.artwork === "") {
        offset = this.elementRef.nativeElement.querySelector('#artwork').offsetTop;
      }
      if (this.vectorObj.price === "") {
        offset = this.elementRef.nativeElement.querySelector('#price').offsetTop;
      }
      this.content.scrollTo(0, offset);

      this.toast.newToast('Select All required details');
    }
  }

  updateLogoTypePrice(price) {
    if (price === 35 || price === 45) {
      console.log(price);
      this.vectorObj.isUrgent = false;
      this.isRushdisabled = true;
    } else {
      this.isRushdisabled = false;
    }
    if (price === "") {
      if (this.vectorObj.isUrgent) {
        this.vectorObj.amount = 10;
      } else {
        this.vectorObj.amount = 0;
      }
      // this.changeDetectorRef.detectChanges();
      return;
    }
    if (this.vectorObj.isUrgent) {
      this.vectorObj.amount = parseInt(price) + 10;
    } else {
      this.vectorObj.amount = price;
    }
    // this.changeDetectorRef.detectChanges();
  }
  updatePriceForUrgent() {
    if (this.vectorObj.isUrgent) {
      if (this.vectorObj.price) {
        this.vectorObj.amount = parseInt(this.vectorObj.price) + 10;
      } else {
        this.vectorObj.amount = 10;

      }
    } else {
      if (this.vectorObj.price) {
        this.vectorObj.amount = parseInt(this.vectorObj.price);
      } else {
        this.vectorObj.amount = 0;
      }
    }
    // this.changeDetectorRef.detectChanges();
  }

  toggleSection() {
    this.fileListOpen = !this.fileListOpen;
    // this.changeDetectorRef.detectChanges();
  }
  changeDetect($event) {
    // this.changeDetectorRef.detectChanges();
  }
}
