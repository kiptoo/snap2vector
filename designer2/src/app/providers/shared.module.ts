import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { LoadingService } from './loading.service';
import { ToastService } from './toast.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { IonicStorageModule } from '@ionic/storage';
import { AlertService } from './alert.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        FileTransfer,
        FileChooser,
        File,
        StorageService,
        LoadingService,
        ToastService,
        AlertService,
        DataService
      ]
    };
  }
}
