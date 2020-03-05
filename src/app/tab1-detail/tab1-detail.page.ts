import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1-detail',
  templateUrl: './tab1-detail.page.html',
  styleUrls: ['./tab1-detail.page.scss'],
})
export class Tab1DetailPage implements OnInit {
public bh_name ;
public bh_url ;
public bh_date ;
public bh_content ;
  constructor(private activatedRoute: ActivatedRoute , private router : Router) { }

  goto_tab1(){
    this.router.navigate(['/tabs/tab1']);
  }

  ngOnInit() {
    this.bh_name= this.activatedRoute.snapshot.paramMap.get('bh_name') ;
    this.bh_url= this.activatedRoute.snapshot.paramMap.get('bh_url') ;
    this.bh_date= this.activatedRoute.snapshot.paramMap.get('bh_date') ;
    this.bh_content= this.activatedRoute.snapshot.paramMap.get('bh_content') ;
   
    
  }

}
