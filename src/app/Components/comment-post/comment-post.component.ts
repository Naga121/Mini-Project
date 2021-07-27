import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Services/comment.service';
import { User } from '../../Models/classes/user'

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {

  commentPost:FormGroup;
  
  constructor(private fb:FormBuilder,private comment:CommentService) { 
    this.commentPost = this.fb.group({
      name:['',[Validators.required]],
      msg:['',[Validators.required,Validators.minLength(10)]],
    });
   }

  ngOnInit(): void {
  }

  saveReview(){
    let temp ={
      name:this.commentPost.value.name,
      msg:this.commentPost.value.msg,
    }
    this.comment.postComment(temp).subscribe(
      ()=>
      {
        alert(`your comment is posted`),
        window.location.reload;
      }
    );
  }
  

}

// function isSymbols(input: FormControl){
//   let temp:RegExp=new RegExp('[\._$@0-9]'); 
//   let temp1:boolean=false;
//   if(!temp.test(input.value))
//       temp1=true;
//     return temp1?null:{needFormat:true};
// }
