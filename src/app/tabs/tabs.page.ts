import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
public data_baihuay ;
  constructor(private http: HttpClient , private router : Router ,  private statusBar: StatusBar) {

  this.initializeApp();
  }

  initializeApp(){
    this.statusBar.show();
    
    this.statusBar.backgroundColorByHexString('#ffffff');
   
  }

  goto_tab5(){

    let data = {
      set : 'set'
    }
    this.router.navigate(['/tabs/tab5' ,data]);
  }

}
