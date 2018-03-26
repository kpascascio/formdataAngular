import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormuploadService } from './services/formupload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  sampleForm: FormGroup;
  fd = new FormData;
  constructor(private fb: FormBuilder, private fu: FormuploadService) {
    this.createForm();
  }

  createForm() {
    return this.sampleForm = this.fb.group({
      name: new FormControl(''),
      image: new FormControl(null)
    });
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(e) {
    if (e.target !== undefined) {
      this.fd.append('image', e.target.files[0]);
      return this.sampleForm.value.image = this.fd;
    }
    this.fd.append('name', this.sampleForm.value.name);

    return this.fu.uploadForm(this.fd).subscribe(data => {
      this.fd = new FormData;
    });
  }
}
