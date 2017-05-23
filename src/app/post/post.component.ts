import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import {AF} from "../../providers/af";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewChecked {
	 @ViewChild('scrollMe') private myScrollContainer: ElementRef;
	  public post: any;
	  public post_title:string;
	  public author:string;
	  public post_date:number;
	  public post_body:string;
	  public master_key:string;

 constructor(public afService: AF,   private route: ActivatedRoute,
    private router: Router
 ) {
   	
    
   
  }

  ngOnInit() {

      	this.route.params.forEach(x => this.master_key = x['id']);

    this.afService.af.database.object('messages/' + this.master_key)
      .subscribe(data_post => {
        this.post_title = data_post.title;
        this.author = data_post.displayName;
        this.post_date = data_post.timestamp;
        this.post_body = data_post.message;
      });
   

  }

  ngAfterViewChecked() {
  }

}
