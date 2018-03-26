import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideodetailComponent } from './videodetail/videodetail.component';

import { VideopageComponent } from './videopage/videopage.component';

const appRoutes: Routes = [
    { path: '', component: VideopageComponent },
    { path: 'video/:id', component: VideodetailComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);