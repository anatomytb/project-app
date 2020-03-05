import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab2-detail',
  templateUrl: './tab2-detail.page.html',
  styleUrls: ['./tab2-detail.page.scss'],
})
export class Tab2DetailPage implements OnInit {
public fn_name ;
public fn_date ;
public fn_content ;
public fn_ded ;
public fn_top3 ;
public fn_top2 ;
public fn_bot2 ;
  constructor(private activatedRoute: ActivatedRoute , private router : Router , private navCtrl: NavController) { }

  goto_tab2(){
    this.navCtrl.back();
  }

  ngOnInit() {
    this.fn_name= this.activatedRoute.snapshot.paramMap.get('fn_name') ;
    this.fn_date= this.activatedRoute.snapshot.paramMap.get('fn_date') ;
    this.fn_content= this.activatedRoute.snapshot.paramMap.get('fn_content') ;
    this.fn_ded= this.activatedRoute.snapshot.paramMap.get('fn_ded') ;
    this.fn_top3= this.activatedRoute.snapshot.paramMap.get('fn_top3') ;
    this.fn_top2= this.activatedRoute.snapshot.paramMap.get('fn_top2') ;
    this.fn_bot2= this.activatedRoute.snapshot.paramMap.get('fn_bot2') ;
  }

}
