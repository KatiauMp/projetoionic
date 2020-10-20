import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesAtualizarPageRoutingModule } from './clientes-atualizar-routing.module';

import { ClientesAtualizarPage } from './clientes-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesAtualizarPageRoutingModule
  ],
  declarations: [ClientesAtualizarPage]
})
export class ClientesAtualizarPageModule {}
