import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private matDialog: MatDialog,public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = "some data";
    this.matDialog.open(DialogComponent, dialogConfig);
    
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }
  
 
}
