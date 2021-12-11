import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './views/carousel/carousel.component';
import { ContatoComponent } from './views/contato/contato.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { PortifolioComponent } from './views/portifolio/portifolio.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'portifolio',
    component: PortifolioComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
