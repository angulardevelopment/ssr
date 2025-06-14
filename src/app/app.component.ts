import { Component, TransferState } from '@angular/core';
import { OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser, CommonModule } from '@angular/common';
import { GlobalObjectService } from './services/global-object.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { STATE_KEY_ITEMS } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [    RouterModule, CommonModule ]
})
export class AppComponent {
  title = 'rendering';
  window;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private windowRef: GlobalObjectService,
    private router: Router,
 private transferState:TransferState) {
    this.window = windowRef.getWindow();
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      console.log('do server side stuff');
    }

    if (isPlatformBrowser(this.platformId)) {
      // this.windowRef.scrollTo(0, 0);
      // console.log(this.window, 'window'); // not working

      console.log('do client side stuff');
      console.log("this block runs only on client");
      console.log("client site retrived data before ",this)
      const bindingData=this.transferState.get(STATE_KEY_ITEMS, <any> []);
      console.log("client site retrived data after ",this, bindingData)
    }
    console.log(this, 'platformId');
        // console.log(window.innerHeight, 'innerHeight'); // not working
  }

  routes: Routes = [];

  ngAfterViewInit(): void {
    // Fetch the routes from the router
    this.routes = this.router.config;
    console.log(this.routes);
  }
}
