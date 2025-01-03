import { Routes } from '@angular/router';
import { SchoolComponent } from './features/school/school.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ContactListComponent } from './features/contact/views/contact-list/contact-list.component';


export const routes: Routes = [
    {
        path: 'school', 
        component: SchoolComponent
    },
    {
        path: 'contacts', 
        component: ContactListComponent
    },
    {
        path: '', 
        component: LayoutComponent
    }
];
