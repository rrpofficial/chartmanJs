import { Routes } from '@angular/router';

import { auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, trackerRoute, userMgmtRoute } from './';

import { UserRouteAccessService } from '../core';

const ADMIN_ROUTES = [auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, trackerRoute, ...userMgmtRoute, metricsRoute];

export const adminState: Routes = [
    {
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [UserRouteAccessService],
        children: ADMIN_ROUTES
    }
];
