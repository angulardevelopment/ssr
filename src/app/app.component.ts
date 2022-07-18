import { Component } from '@angular/core';
import { OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { GlobalObjectService } from './global-object.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rendering';
  window;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private windowRef: GlobalObjectService,) { 
    // console.log(window.innerHeight, 'gg'); // not working
    console.log(this.platformId,'jkhuihu');
    this.window = windowRef.getWindow();
  }
  ngOnInit() {
      if (isPlatformServer(this.platformId)) {
          // do server side stuff
    console.log('isPlatformServer');

      }

      if (isPlatformBrowser(this.platformId)) {
                // this.windowRef.scrollTo(0, 0);
                console.log('isPlatformBrowser');
                
              }
  }

}
