import { Component, makeStateKey, OnInit, TransferState } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { ItemsService, STATE_KEY_ITEMS } from '../services/items.service';
// import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  standalone: false
})
export class ItemsComponent implements OnInit {

  items: any;
  loaded: boolean;
  constructor(
    private state: TransferState,
    private itemsService: ItemsService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
      this.loaded = false;
  }


  ngOnInit(): void {
    this.getUserscsr();
    // this.getUsers();
  }

  getUserscsr(): void {
    this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          const platform = isPlatformBrowser(this.platformId) ?
            'in the browser' : 'on the server';
          console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
          console.log(this.platformId,items );

          this.loaded = true;
          this.items = items;
        });
  }

  getUsers(): void {
    this.loaded = false;
    this.items = this.state.get(STATE_KEY_ITEMS, <any> []);
    if (this.items.length === 0) {
      this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          items => {
            const platform = isPlatformBrowser(this.platformId) ?
              'in the browser' : 'on the server';
            this.items = items;
            this.loaded = true;
            this.state.set(STATE_KEY_ITEMS, <any> items);
                        console.log(`getUsers : Running ${platform} with appId=${this.appId}`, this);
          });
    } else {
      this.loaded = true;
    }
  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }


}
