import { MatButtonModule,MatCheckboxModule,MatButtonToggleModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBottomSheetModule,

    MatProgressBarModule,
    
    MatProgressSpinnerModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
