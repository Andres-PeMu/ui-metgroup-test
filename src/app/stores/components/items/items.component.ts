import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { items } from 'src/app/core/models/items.model';
import { ItemsService } from 'src/app/core/services/stores/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input() items: items[] = [];
  @Input() Storeid!: number;
  @Output() loadStoreData = new EventEmitter();
  editItemForm: boolean = false

  displayedColumns: string[] = ['name', 'price', 'actions'];
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private itemServise: ItemsService
    ) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  editItem() {
    const newItem = {
      name: this.createForm.value.name,
      price: this.createForm.value.price,
      store_id: this.Storeid
    };
    this.itemServise.editItems(newItem, newItem.name).subscribe(() =>{
      this.loadStoreData.emit(this.Storeid);
    });
    this.createForm.reset();
  }

  seeEditItem(item: items){
    this.createForm.patchValue({
      name: item.name,
      price: item.price
    });
    this.editItemForm = true;
  }
  closeEditItem() {
    this.editItemForm = false;
    this.createForm.reset();
  }

  deleteItem(name: string) {
    this.itemServise.deleteItems(name).subscribe(() =>{
      this.loadStoreData.emit(this.Storeid);
    });
  }

  createItem() {
    if (this.createForm.valid) {
      const newItem = {
        name: this.createForm.value.name,
        price: this.createForm.value.price,
        store_id: this.Storeid
      };
      this.itemServise.createItems(newItem).subscribe(() =>{
        this.loadStoreData.emit(this.Storeid);
      });
      this.createForm.reset();
    }
  }
}
