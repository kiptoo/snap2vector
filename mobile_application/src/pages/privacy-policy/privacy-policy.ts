import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoadingProvider } from "../../services/ui-services/loading";

@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html'
})
export class PrivacyPolicyPage {

  constructor(public nav: NavController, public loading: LoadingProvider) {

  }

}
