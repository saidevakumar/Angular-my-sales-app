import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-suppliers-show',
  templateUrl: './suppliers-show.component.html',
  styleUrls: ['./suppliers-show.component.css']
})

export class SuppliersShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) { }

  id!: Number;
  supplier!: Supplier;
  supplierObservable!: Observable<Supplier>;

  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(this.id)
    this.supplier = await lastValueFrom(this.supplierObservable)
  }
}