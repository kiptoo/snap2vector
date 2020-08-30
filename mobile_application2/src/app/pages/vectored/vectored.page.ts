import { Component, OnInit, Input } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { VectorProvider } from 'src/app/providers/vector';
import { LoadingService } from 'src/app/providers/loading.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastService } from 'src/app/providers/toast.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImagePreviewPage } from '../image-preview/image-preview.page';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-vectored',
  templateUrl: './vectored.page.html',
  styleUrls: ['./vectored.page.scss'],
})
export class VectoredPage implements OnInit {

  vectorizedImages: Array<any> = [];

  writePermission = false;

  constructor(
    private platform: Platform,
    private vectorService: VectorProvider,
    private modalCtrl: ModalController,
    private loading: LoadingService,
    private file: File,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private toast: ToastService,
    private socialSharing: SocialSharing,
    private androidPermissions: AndroidPermissions
  ) { }

  @Input() orderId: any;

  ngOnInit() {
    this.getVectorizedImagesFromServer(this.orderId);
  }

  get isCordova() {
    return this.platform.is('cordova');
  }


  getVectorizedImagesFromServer(orderId) {
    this.vectorService.getVectorizedImagesFromServer(orderId)
      .subscribe((data: any) => {
        console.log(data);
        data.forEach(item => {
          this.vectorizedImages.push(item);
        });

      });
  }


  async open(fileName, url, order) {
    if (!this.platform.is('cordova')) {
      const modal = await this.modalCtrl.create({
        component: ImagePreviewPage,
        cssClass: 'image-preview',
        showBackdrop: true
      });
      modal.present();
      return;
    };
    if (this.writePermission) {
      this.loading.presentLoading()

      let path_ext;
      if (this.platform.is('android')) {
        path_ext = this.file.externalRootDirectory + 'SnapToVector/Images/';
      } else {
        path_ext = this.file.documentsDirectory;
      }

      const ext = fileName.substr(fileName.lastIndexOf('.'));
      const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));


      this.file.checkFile(path_ext, filenameNoExt + '-' + order.id + ext).then(d => {
        console.log(d);

        this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then((response: any) => {
          response.file(meta => {
            console.log(meta);
            this.loading.dismissLoading();
            this.fileOpener.open(meta.localURL, meta.type)
              .then((d) => {
                console.log(d);
              })
              .catch(e => {
                console.log(e);
              });
          });
        })

      }).catch(err => {
        console.log(err);
        let img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        if (this.platform.is('android')) {
          img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
        } else {
          img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
        }
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download(url, img_path).then((entry) => {
          console.log(entry);

          this.file.resolveLocalFilesystemUrl(entry.nativeURL).then((response: any) => {
            response.file(meta => {
              console.log(meta);
              this.loading.dismissLoading();
              this.fileOpener.open(meta.localURL, meta.type)
                .then((d) => {
                  console.log(d);
                })
                .catch(e => {
                  console.log(e);
                });
            });
          }, (err) => {
            this.loading.dismissLoading();
            console.log(err);
          })
        }, (error) => {

          this.loading.dismissLoading();
          this.toast.presentToast('Error downloading image, Please try again.', 'danger');
        });

      });
    } else {


      this.loading.presentLoading()
      let img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + fileName;
      if (this.platform.is('android')) {
        img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + fileName;
      } else {
        img_path = this.file.tempDirectory + fileName;
      }
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, img_path).then((entry) => {
        console.log(entry);

        this.file.resolveLocalFilesystemUrl(entry.nativeURL).then((response: any) => {
          response.file(meta => {
            console.log(meta);
            this.loading.dismissLoading();
            this.fileOpener.open(meta.localURL, meta.type)
              .then((d) => {
                console.log(d);
              })
              .catch(e => {
                console.log(e);
              });
          });
        }, (err) => {
          this.loading.dismissLoading();
          console.log(err);
        })
      }, (error) => {

        this.loading.dismissLoading();
        this.toast.presentToast('Error downloading image, Please try again.', 'danger')

      });
    }
  }

  share(filename, url) {
    this.loading.presentLoading();
    this.socialSharing.share(null, null, url, null).then(res => {
      this.loading.dismissLoading();
    }).catch(err => {
      this.loading.dismissLoading();
    });
  }

  download(fileName, url, order) {
    if (!this.platform.is('cordova')) {
      window.open(url);
      return
    };
    if (!this.writePermission) {
      this.getPermission();
    } else {
      this.loading.presentLoading()
      const ext = fileName.substr(fileName.lastIndexOf('.'));
      const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
      let img_path;
      img_path = this.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      if (this.platform.is('android')) {
        img_path = this.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
      } else {
        img_path = this.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
      }
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(url, img_path).then((entry) => {
        this.loading.dismissLoading();
      }, (error) => {

        this.loading.dismissLoading();
      });
    }
  }

  getPermission() {
    if (!this.platform.is('android')) return;

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => {
        console.log('Has permission?', result.hasPermission);
        this.writePermission = true;
      },
      err => {
        this.writePermission = false;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      });
  }

}
