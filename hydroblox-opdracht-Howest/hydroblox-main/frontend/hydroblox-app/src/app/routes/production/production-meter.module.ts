import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductionMeterComponent } from './production-meter.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
    declarations: [
        ProductionMeterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class ProductionMeterModule { }
