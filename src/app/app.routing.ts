/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

export const ROUTES: Routes = [
    {path: 'dash', component: DashboardComponent},
    {path: 'about', component: AboutComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
