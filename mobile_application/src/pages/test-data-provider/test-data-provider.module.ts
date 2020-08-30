import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestDataProviderPage } from './test-data-provider';

@NgModule({
  declarations: [
    TestDataProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(TestDataProviderPage),
  ],
})
export class TestDataProviderPageModule {}
