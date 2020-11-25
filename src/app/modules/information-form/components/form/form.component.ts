import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ERoutsInformationForm} from '../../enums/routs-information-form.enum';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public isInfoPage: boolean;

  public form: FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.showRoute();
  }

  public submit(): void {
    console.log(this.form.value);
  }

  private showRoute(): void {
    this.activatedRouter.url.subscribe(res => {
      this.isInfoPage = !!(res[0].path === ERoutsInformationForm.info);
      this.isInfoPage ? this.initInfoForm() : this.initContactForm();
    });
  }

  private initContactForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      notes: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  private initInfoForm(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl('')
    });
  }

}
