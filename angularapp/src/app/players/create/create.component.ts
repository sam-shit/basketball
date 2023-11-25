import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private ms : PlayersService, private router : Router, private fb : FormBuilder) { }
  formData
  createForm = this.fb.group({
    shirtno : ['Test Shirt No', Validators.required],
    name : ['Test Name', Validators.required],
    positionid : ['1', Validators.required],
    appearances : ['10', Validators.required],
    goals : ['5', Validators.required]
  })

    onSubmit(formData : FormGroup) {
      this.
    }


  ngOnInit(): void {
  }

}
