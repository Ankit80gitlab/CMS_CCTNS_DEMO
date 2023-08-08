import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DownloadConfirmationDialogboxComponent } from 'src/app/dialogbox/download-confirmation-dialogbox/download-confirmation-dialogbox.component';
import { userData } from 'src/app/models/employee';
import { AuthenticationService } from 'src/app/services/authentication.service';

export interface DialogDataDownload {
}

@Component({
  selector: 'app-user-info-download',
  templateUrl: './user-info-download.component.html',
  styleUrls: ['./user-info-download.component.css']
})
export class UserInfoDownloadComponent {

  constructor(private sanitizer: DomSanitizer, private authServ: AuthenticationService, private dialog: MatDialog) { }

  fileUrl!: any;

  ngOnInit() {
    let userData: Array<userData> = [];
    let data: String;
    let downloadEmpData: string = "";

    this.authServ.fetchAllUser().subscribe(resp => {
      for (let i of resp) {
        userData.push(i);
      }
      for (let j of userData) {
        data = "Id : " + j.id + " | Name : " + j.name + " | email : " + j.email + " | Role : " + j.role + " | Location : " + j.location + " |";
        downloadEmpData += '\n' + data;
      }
      //console.log(downloadEmpData);
      const blob = new Blob([downloadEmpData], {
        type: 'application/octet-stream'
      });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    })
  }

  openDialogForDownloadConfirmation(): void {
    const dialogRef = this.dialog.open(DownloadConfirmationDialogboxComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("download req confirmed " + result);
        this.download();
      } else {
        console.log("download req denied " + result);
      }
    });
  }

  download() {
    console.log("downloading data now");
    const link2 = document.getElementById('dl');
    link2?.click();
  }

}
