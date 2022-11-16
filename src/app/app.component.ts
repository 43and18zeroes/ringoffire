import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ringoffire';

  ngOnInit(): void {
    // window.addEventListener("load", () => {
    //   this.showInitialRotate();
    // });
    
  }

  // showInitialRotate() {
  //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  //     && screen.availHeight < screen.availWidth) {
  //     console.log("landscape mode");
  //     document.getElementById("rotateDeviceContainer").style.display="flex";
  //   }
  // }
}