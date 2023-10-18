import {FetchDataPage, FormPage, HomePage, LoginPage} from '@/screens';
import {IScreen} from '@/utils';

import {BottomTabStackNavigationProps} from './types';
import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';

export const Screens = [
  {
    title: 'home',
    name: Routes.HOME_SCREEN,
    component: HomePage,
    icon: ICONS.home,
    headerShown: false,
  },
  {
    title: 'sports_center',
    name: Routes.LOGIN_SCREEN,
    component: LoginPage,
    icon: ICONS.list,
    headerShown: false,
  },
  {
    title: 'new',
    name: Routes.SPORTS_CENTER,
    component: LoginPage,
    icon: ICONS.camera,
    headerShown: false,
  },
  {
    title: 'fetch_data',
    name: Routes.FETCH_DATA_SCREEN,
    component: FetchDataPage,
    icon: ICONS.info,
    headerShown: false,
  },
] as IScreen<BottomTabStackNavigationProps>[];
