import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { EntityDefinitionService } from '@ngrx/data';
import { carEntityMetaData } from './dashboard/store/car-entity-metadata';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class CarModule { 
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(carEntityMetaData);
  }
}
