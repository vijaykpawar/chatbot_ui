import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor(private httpSer: HttpClient) { }

  // botMessage = {
  //   type: 'bot',
  //   message: ''
  // }
  // userMEssage = {
  //   type: 'user',
  //   message: ''
  // }


  allMessages: string[] = [];

  userMessages: any[] = [];

  ngOnInit() {
  }

  handleUserMesage(message) {
    let obj = {};
    obj['text'] = message;
    obj['type'] = 'user';
    console.log('Got user message ', message);

    this.userMessages.push(obj);



    try {
      let res = this.postChat(obj);
      res.subscribe((data) => {
        if (data != null && data != "") {
          data = JSON.parse(data);
          console.log(JSON.stringify(data));


          if (data && data.length > 0) {
            for (let d of data) {
              obj = {};
              obj['text'] = d["text"];
              obj['type'] = 'bot';
              this.userMessages.push(obj);
            }
          }
        } else {
          alert("Please enter valid username password");
        }

      }, (err) => {
        alert(JSON.stringify(err));
        alert("Error While calling REST service");
      })
    } catch (error) {
      alert(error);
    }







  }

  postChat(chat: any) {
    let postMsg = {};
    postMsg['sender'] = "Me";
    postMsg['message'] = chat.text;

    return this.httpSer.post("http://localhost:5005/webhooks/rest/webhook", postMsg, { responseType: "text" });
  }

}
