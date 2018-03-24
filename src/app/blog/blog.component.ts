import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';

class NewForm {
  name: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public newForm: NewForm;
  public comments: any = [];


  constructor(private http: HttpClient) {
    this.newForm = new NewForm();
  }

  addComment() {
    console.log(this.newForm);
    this.http.post('http://localhost:3000' + '/comments', this.newForm)
      .subscribe(
      result => {
        this.comments.push(this.newForm);
        console.log(result);
        this.newForm = new NewForm;
        alert('Comment Added!');
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.http.get('http://localhost:3000' + '/pullComments')
    .subscribe((response) => {
      this.comments = response;
    });

  }


}
