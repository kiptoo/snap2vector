import { Component } from '@angular/core';
import { FrontPage } from '../front/front';
import { OrdersPage } from '../orders-page/orders-page';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  frontPage = FrontPage;
  ordersPage = OrdersPage;

}
