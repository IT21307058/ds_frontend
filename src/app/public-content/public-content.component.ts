import { Component, OnInit } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { Message } from '../message';

@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrls: ['./public-content.component.css']
})
export class PublicContentComponent implements OnInit{

  content: string = "";

  constructor(private http: MyHttpClientService) {}

  ngOnInit(): void {
    this.http.get("/public/messages").subscribe((data: Message) => this.content = data.message);
  }

}
