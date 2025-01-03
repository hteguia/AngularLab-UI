import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { ContactListComponent } from './features/contact/views/contact-list/contact-list.component';


export const routes: Routes = [
    {
        path: 'contacts', 
        component: ContactListComponent
    },
    {
        path: '', 
        component: LayoutComponent
    }
];
