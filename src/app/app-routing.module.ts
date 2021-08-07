import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomovComponent } from './routing/domov/domov.component'
import { GaleriaComponent } from './routing/galeria/galeria.component';
import { KontaktComponent } from './routing/kontakt/kontakt.component';
import { MapaComponent } from './routing/mapa/mapa.component';
import { ObchodComponent } from './routing/obchod/obchod.component';
import { OtvHodinyComponent } from './routing/otv-hodiny/otv-hodiny.component';
import { RezervacieComponent } from './routing/rezervacie/rezervacie.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'domov'},
  {path: 'domov', component: DomovComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'kto-sme', component: ObchodComponent},
  {path: 'otvaracie-hodiny', component: OtvHodinyComponent},
  {path:'rezervacie', component: RezervacieComponent},
  {path:'galeria',component:GaleriaComponent},
  {path: '**',redirectTo:"domov"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DomovComponent,KontaktComponent,MapaComponent,ObchodComponent,OtvHodinyComponent
];
