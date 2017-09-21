import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { GuardComponent } from './guard/guard.component';
import { AppGuard, AppDeactiveGuard } from './app.guard';

const Routes: Routes = [
    { path: 'child1', component: Child1Component },
    { path: 'child1/:id', component: Child1Component, data: { name: 'hello world' } },
    { path: 'child2', component: Child2Component },
    {
        path: 'guard',
        component: GuardComponent,
        canActivate: [AppGuard],
        canDeactivate: [AppDeactiveGuard]
    },
];

export const AppRouting = RouterModule.forRoot(Routes);