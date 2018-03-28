import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

class CommentForm {
  name: String;
  content: String;
  discussionId: String;
}

interface CommentInterface {
  name: String;
  content: String;
  discussionId: String;
}

class Blog {
  author: string;
  content: string;
}

interface BlogInterface {
  author: string;
  content: string;
  createdDate: Date;
}

interface ServerResponse {
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public commentForm: CommentForm;
  public comments: any = [];
  public cycleComments;
  // Pulling Blogs
  public blog: Blog;
  public headerID;
  public httpHead;
  //
  // blogs: Blog;
  // currentBlog: any;


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.commentForm = new CommentForm();
    this.route.params.subscribe((params) => {
      this.headerID = params.id;
      console.log(params);
    });
  }

  //   };
  // console.log(this.commentForm);
  // this.http.post('http://localhost:3000' + '/comments', this.commentForm)
  //   .subscribe(
  //   result => {
  //     this.comments.push(this.commentForm);
  //     console.log(result);
  //     this.commentForm = new CommentForm;
  //     alert('Comment Added!');
  //   },
  //   err => {
  //     console.log(err);
  //   });


  ngOnInit() {
    // getting blogs

    const headers = new HttpHeaders().set('ID', this.headerID);

    this.blog = new Blog();
    this.http.get('http://localhost:3000' + '/pullBlog', {
      headers: new HttpHeaders().set('headerID', this.headerID)
    })
      .subscribe((data: BlogInterface) => {
        this.blog = data;
        console.log(this.blog);
      });

    // getting comment
    this.http.get('http://localhost:3000' + '/pullComments', { headers })
      .subscribe((data: CommentInterface) => {
        this.commentForm = data;
         this.commentForm.discussionId = this.headerID;
        this.cycleComments = this.commentForm;
        console.log(this.commentForm);
      });
    this.commentForm = new CommentForm;
  }

  // posting a comment
  addComment() {
    //  this.commentForm = new CommentForm;
    // // this.commentForm.discussionId = this.headerID;
    // console.log(this.commentForm);
    // this.http.post('http://localhost:3000' + '/comments', this.commentForm)
    //   .subscribe((res: ServerResponse) => {
    //     console.log(res);
    //   });
    this.http.post('http://localhost:3000' + '/comments', this.commentForm)
      .subscribe(
      result => {
        this.comments.push(this.commentForm);
        console.log(result);
        this.commentForm = new CommentForm;
        alert('Comment Added!');
      },
      err => {
        console.log(err);
      });

  }

}
