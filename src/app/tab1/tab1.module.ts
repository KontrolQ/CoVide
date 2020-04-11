import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { StateDataComponent } from '../state-data/state-data.component';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }]),
  ],
  declarations: [StateDataComponent, Tab1Page],
})
export class Tab1PageModule {}
