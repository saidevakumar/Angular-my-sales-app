import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styleUrls: ['./suppliers-edit.component.css']
})
export class SuppliersEditComponent implements OnInit {
  
    id!: Number;
    supplierObservable!: Observable<Supplier>;
    supplier!: Supplier;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private supplierService: SupplierService,
    ) { }
  
    async ngOnInit() {
      this.id = +(this.route.snapshot.paramMap.get('id') || 0);
      this.supplierObservable = this.supplierService.getById(this.id)
      this.supplier = await lastValueFrom(this.supplierObservable)
    }
  
    async onSave(supplier: Supplier) {
      this.supplierObservable = this.supplierService.save(supplier);
      this.supplier = await lastValueFrom(this.supplierObservable);
      this.router.navigate(['/suppliers/show/',supplier?.id]);
    }

}
