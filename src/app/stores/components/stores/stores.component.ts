import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { items } from 'src/app/core/models/items.model';
import { stores } from 'src/app/core/models/stores.model';
import { StoresService } from 'src/app/core/services/stores/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  stores: stores[] = [];
  storeForm: FormGroup;
  editStoreClic: boolean = false;
  items: items[] = [];
  storeId: number = 0
  viewOrHideItems: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private storesService: StoresService
  ) {
    this.storeForm = this.formBuilder.group({
      name: ['']
    });
  }

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.storesService.getStores().subscribe(response => {
      this.stores = response;
    });
  }

  createStore() {
    const name = this.storeForm.value.name;
    this.storesService.createStore(name).subscribe(response => {
      this.getStores();
      this.storeForm.reset();
    });
  }

  editStoreForms() {
    this.editStoreClic = !this.editStoreClic
  }

  editStore(store: any) {
    const name = this.storeForm.value.name;
    this.storesService.editStore(store.id, name).subscribe(response => {
      this.getStores();
      this.storeForm.reset();
    });
  }

  deleteStore(name: string) {
    this.storesService.deleteStore(name).subscribe(response => {
      this.getStores();
    });
  }

  seeItems(items: items[], storeId: number) {
    this.storeId = storeId;
    this.viewOrHideItems = true;
    this.items = items;
  }

  seeItemsChildren(storeId: number) {
    this.storesService.getStores().subscribe(response => {
      this.stores = response;
      this.storeId = storeId;
      this.viewOrHideItems = true;
      const filteredItems = this.stores
        .filter(store => store.id === storeId)
        .flatMap(store => store.items);
      this.items = filteredItems;
    });
  }

  hideItems() {
    this.viewOrHideItems = false;
  }

}
