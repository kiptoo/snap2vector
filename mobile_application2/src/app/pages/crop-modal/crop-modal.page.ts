import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController, Platform, ActionSheetController , NavParams,IonContent } from '@ionic/angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
//import { CropperComponent } from 'angular-cropperjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';


@Component({
  selector: 'app-crop-modal',
  templateUrl: './crop-modal.page.html',
  styleUrls: ['./crop-modal.page.scss'],
})
export class CropModalPage implements OnInit {
	   // @ViewChild('angularCropper') public angularCropper: CropperComponent;
       @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
    @ViewChild(IonContent) content: IonContent;
cropperOptions:any;
   myFile:any;
     croppedImage = null;
    scaleValX = 1;
  scaleValY = 1;
   previousFiles: any[] = [];
  constructor(
  private modalController: ModalController,
    private navParams: NavParams
    ) {
  	 this.cropperOptions = {
      viewMode : 1,
      dragMode: 'crop',
      //aspectRatio: 1,
      aspectRatio: NaN,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    //  cropController.keepingCropAspectRatio = YES;
      responsive: true,
       modal: true,
       guides: true,
       center: true,
        highlight: true,
        background: true,
    //     minContainerHeight: 100%,
    // minContainerWidth: 100%,
    // minCanvasHeight: 100%,
    // minCanvasWidth: 100%,
        cropBoxMovable: true,
          cropBoxResizable: true,
         toggleDragModeOnDblclick: true,
    };
  //	console.table(this.navParams);
    this.myFile = this.navParams.data.url;
    //console.log(this.myFile);
    //this.modalTitle = this.navParams.data.paramTitle;
   }

  ngOnInit() {
  }
    reset() {
    this.angularCropper.cropper.reset();
  }
 
  clear() {
    this.angularCropper.cropper.clear();
    this.closeModal(); 
  }
 
  rotate() {
    this.angularCropper.cropper.rotate(90);
  }
 
  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }
 
  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }
 
  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }
 
  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }
    cropperTouchStart(event){
    event.stopPropagation();
    event.preventDefault(); //Most important
  }
 
    save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    console.log(croppedImgB64String);
    this.previousFiles.push(this.myFile);
    this.myFile = croppedImgB64String;
    this.closeModal(); 
  }

 async closeModal() {
    const data:any={
    	   "croppedimage":this.myFile,
    	   "previous":this.previousFiles,
    	};
    await this.modalController.dismiss(data);
  }

}
