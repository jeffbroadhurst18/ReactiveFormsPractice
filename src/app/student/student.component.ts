import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Student, Address } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      addresses: this.fb.array([this.buildAddressForm()])
      // 
    });
  }

  buildAddressForm() {
    return this.fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      county: ['', Validators.required],
      postCode: ['', Validators.required]
    });
  }
 
  addAddress() {
    let cardControl = <FormArray>this.studentForm.controls['addresses'];
    cardControl.push(this.buildAddressForm());
  }

  removeAddress(i: number) {
      let cardControl = <FormArray>this.studentForm.controls['addresses'];
      cardControl.removeAt(i);
  }

  getAddresses(): FormArray {
    return this.studentForm.get('addresses') as FormArray;
  };

  onSubmit() {
    console.log('Submitted');
  }
  // studentForm = new FormGroup({
  //   firstName: new FormControl()
  // });
}
