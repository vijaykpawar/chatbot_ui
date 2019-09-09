import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpeechRecognizerService } from './shared/services/speech-recognizer.service';

import { SpeechNotification } from './shared/model/speech-notification';
import { SpeechError } from './shared/model/speech-error';
import { ActionContext } from './shared/model/strategy/action-context';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'wsa-web-speech',
  templateUrl: './web-speech.component.html',
  styleUrls: ['./web-speech.component.scss']
})
export class WebSpeechComponent implements OnInit {

  finalTranscript = '';
  recognizing = false;
  notification: string;
  languages: string[] =  ['en-US', 'es-ES'];
  currentLanguage: string;
  actionContext: ActionContext = new ActionContext();

  constructor(private changeDetector: ChangeDetectorRef,
              private speechRecognizer: SpeechRecognizerService,
              private httpSer: HttpClient
              ) { }

  ngOnInit() {
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;
  }

  startButton(event) {
    if (this.recognizing) {
      this.speechRecognizer.stop();
      return;
    }

    this.speechRecognizer.start(event.timeStamp);
  }

  onSelectLanguage(language: string) {
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  private initRecognition() {
    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        this.notification = 'I\'m listening...';
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.detectChanges();
        this.notification = null;
      });

    this.speechRecognizer.onResult()
      .subscribe((data: SpeechNotification) => {
        const message = data.content.trim();
        if (data.info === 'final_transcript' && message.length > 0) {
          this.finalTranscript = `${this.finalTranscript}\n${message}`;
          this.actionContext.processMessage(message, this.currentLanguage);
          this.detectChanges();
          this.actionContext.runAction(message, this.currentLanguage);
        }
      });

    this.speechRecognizer.onError()
      .subscribe(data => {
        switch (data.error) {
          case SpeechError.BLOCKED:
          case SpeechError.NOT_ALLOWED:
            this.notification = `Cannot run the demo.
            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.
            `;
            break;
          case SpeechError.NO_SPEECH:
            this.notification = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.NO_MICROPHONE:
            this.notification = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            this.notification = null;
            break;
        }
        this.recognizing = false;
        this.detectChanges();
      });
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }


  // other 

  
  allMessages: string[] = [];

  userMessages: any[] = [];

  

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
