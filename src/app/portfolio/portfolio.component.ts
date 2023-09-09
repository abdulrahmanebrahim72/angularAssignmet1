import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  showLayer(src:string){
    document.querySelector('.layer')?.classList.remove('d-none');
    document.querySelector('.layer img')?.setAttribute("src" , src);
  }

  hideLayer(e:Event){
    if(e.target != document.querySelector('.layer img')){
      document.querySelector('.layer')?.classList.add('d-none');
    }
  }
}
