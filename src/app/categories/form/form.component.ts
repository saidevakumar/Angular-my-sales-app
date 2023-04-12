import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter();
  @Input() loading: Boolean = false;
  
  /*
  categoryForm = new FormGroup({
    id: new FormControl<number|null>(null),
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    description: new FormControl('')
  })
  */

  categoryForm = this.fb.group(
    {
      id: [0],
      name: ['',[Validators.required, Validators.minLength(3)]],
      description: ['']
    }
  )

  @Input()
  set category(category:Category){

    this.categoryForm.setValue(category);
  
  }
  
  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log('Submit', this.categoryForm.value as unknown  as Category)
    this.save.emit(this.categoryForm.value as unknown as Category);
  }

  onBack(){
    this.back.emit();
  }

  
}

