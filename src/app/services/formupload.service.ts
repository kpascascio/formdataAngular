import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FormuploadService {
  forms: any;
  constructor(private http: HttpClient) {
  }

  uploadForm(form) {
    return this.http.post('http://localhost:3000/api/user/upload-image', form, { headers: this.setHeader()});
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization',`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNTIyMDkwNzcwLCJleHAiOjE1MjIxNzcxNzB9.g3Ta4GSbBu6qXXUvrq0wAH1kA47GEPgq6U83hB5bL-w`);
  }

}
