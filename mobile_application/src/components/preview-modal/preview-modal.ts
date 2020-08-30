import { TabsPage } from './../../pages/tabs/tabs';
import { Component } from "@angular/core";
import { NavController, ViewController, NavParams } from "ionic-angular";
import { ToastProvider } from '../../services/ui-services/toast';
import { LoadingProvider } from '../../services/ui-services/loading';
import { ImageProvider } from '../../services/component-services/image';

@Component({
  selector: 'preview-modal',
  templateUrl: 'preview-modal.html'
})

export class PreviewModalPage {

  image: any;
  buttonClicked = false;
  newName: string;
  ext: string;

  constructor(
    public nav: NavController,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    public loading: LoadingProvider,
    public toast: ToastProvider,
    private imageService: ImageProvider
  ) {

    this.image = this.navParams.get('image');
    this.ext = this.image.originalname.substr(this.image.originalname.lastIndexOf('.') + 1);
  }

  close() {
    this.viewCtrl.dismiss();
  }
  editFileName() {
    this.buttonClicked = true;
  }

  updateFileName() {
    this.loading.showLoading();
    if (this.newName === "") {
      this.toast.newToast('Filename is required');
      return;
    }
    this.image.originalname = this.newName + '.' + this.ext;
    this.imageService.updateImage(this.image).subscribe((data: any) => {
      this.buttonClicked = false;
      this.loading.hideLoading();
      this.close();
    }, (err) => {
      this.buttonClicked = false;
    });
  }

  deleteFile() {
    this.loading.showLoading();
    this.imageService.deleteImages(this.image).then((data: any) => {
      this.loading.hideLoading();
      this.close();
      this.nav.setRoot(TabsPage, { selectedTab: 1 });
    })
  }
}