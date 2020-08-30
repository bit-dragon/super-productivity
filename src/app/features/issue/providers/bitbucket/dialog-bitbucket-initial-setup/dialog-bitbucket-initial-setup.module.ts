import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../../../../ui/ui.module';
import {DialogBitbucketInitialSetupComponent} from './dialog-bitbucket-initial-setup.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
  ],
  declarations: [DialogBitbucketInitialSetupComponent],
  exports: [],
})
export class DialogBitbucketInitialSetupModule{
}
