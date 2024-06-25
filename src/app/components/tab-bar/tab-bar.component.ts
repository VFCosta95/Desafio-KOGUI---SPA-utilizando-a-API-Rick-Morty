import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})

export class TabBarComponent {
  // selectedTab com valor inicial 'home'
  selectedTab: string = 'home';

  // Função para selecionar a aba desejada
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
