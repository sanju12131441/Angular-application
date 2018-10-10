import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ForgotRoutingModule  } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';


@NgModule({
    imports: [CommonModule, ForgotRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [ForgotPasswordComponent]
})
export class ForgotModule {}
