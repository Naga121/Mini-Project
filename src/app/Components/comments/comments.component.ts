import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/classes/user';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  users : User[];

  constructor(private comment:CommentService) { }

  ngOnInit(): void {
    this.comment.getComment().subscribe(
      (data:User[])=>{ this.users=data }
    );
  }

}
