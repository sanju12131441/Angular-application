import { BooksService } from './../../shared/services/books.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import * as $ from 'jquery';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public Books = [];
    book:FormGroup;
    public editBook: any = {};
    detailbook :any ={};
    searchText:string = '';
    details:Boolean = false;
    errorMessage:string = '';
    createBook:Boolean = false;
    constructor(private _books:BooksService,private FrmBuilder:FormBuilder) {
        this.book = FrmBuilder.group({          
            fname:['',[Validators.required]],  
            fauthor:['',[Validators.required]],  
        });
    }
    DeleteAllBooks(){
        for (let i = this.Books.length; i > 0; i--) {
            this.Books.pop();           
           }
           jQuery("#deleteModal").modal("hide");
    };
    deleteBook(i){
        this.Books.splice(i,1);
    }
    CreateBook(book:NgForm){
        this.createBook = true;
        const target=this.Books.find(temp=>temp.name === book.controls.fname.value);
        if(target){
         this.errorMessage="Book already exists";
         alert('Book already exists')
        }
        else{
          console.log("doesn't exists");
          this.Books.push({"id":this.Books.length +1,"name":book.controls.fname.value,"author":book.controls.fauthor.value);
          jQuery("#exampleModal").modal("hide");
        };      
    }
    edit(book){
        this.editBook = book;
    }

    EditBook(){
        this.editBook = {};
        jQuery("#editModal").modal("hide");
    };
    ngOnInit() { 
        this._books.fetch_books().subscribe(data => {
            console.log(data);
            this.Books = data;
            console.log(this.Books);
        });
    }

}
