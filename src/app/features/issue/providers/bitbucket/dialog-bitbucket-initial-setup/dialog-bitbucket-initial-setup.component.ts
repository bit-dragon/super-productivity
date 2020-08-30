import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BitbucketCfg} from '../bitbucket';
import {DEFAULT_BITBUCKET_CFG} from '../bitbucket.const';

@Component({
  selector: 'dialog-bitbucket-initial-setup',
  templateUrl: './dialog-bitbucket-initial-setup.component.html',
  styleUrls: ['./dialog-bitbucket-initial-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogBitbucketInitialSetupComponent implements OnInit {

  bitbucketCfg: BitbucketCfg;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _matDialogRef: MatDialogRef<DialogBitbucketInitialSetupComponent>,
  ) {
    this.bitbucketCfg = this.data.bitbucketCfg || DEFAULT_BITBUCKET_CFG;
  }

  ngOnInit(): void {
  }

  saveGitlabCfg(bitbucketCfg: BitbucketCfg) {
    this._matDialogRef.close(bitbucketCfg);
  }

  close() {
    this._matDialogRef.close();
  }

}
