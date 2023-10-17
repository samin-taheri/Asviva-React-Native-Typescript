import {FetchDataPage, HomePage, LoginPage} from '@/screens';
import {IScreen} from '@/utils';

import {BottomTabStackNavigationProps} from './types';
import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import HomeStack from '../stacks/HomeStack';

export const Screens = [
  {
    title: 'home',
    name: Routes.HOME_ROOT,
    component: HomeStack,
    icon: ICONS.home,
    headerShown: false,
  },
  {
    title: 'sports_center',
    name: Routes.LOGIN_SCREEN,
    component: LoginPage,
    icon: ICONS.list,
    headerShown: true,
  },
  {
    title: 'fetch_data',
    name: Routes.FETCH_DATA_SCREEN,
    component: FetchDataPage,
    icon: ICONS.info,
    headerShown: true,
  },
] as IScreen<BottomTabStackNavigationProps>[];
