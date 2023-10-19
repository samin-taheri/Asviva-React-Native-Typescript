import { HomePage} from '@/screens';
import {IScreen} from '@/utils';
import {BottomTabStackNavigationProps} from './types';
import {ICONS} from '../../utils/icon-enums';
import Routes from '../Routes';
import SportsCenter from '@/screens/SportsCenter';
import Cycle from '@/screens/Cycle';
import MorePage from '@/screens/MorePage';

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
    name: Routes.SPORTS_CENTER_SCREEN,
    component: SportsCenter,
    icon: ICONS.list,
    headerShown: false,
  },
  {
    title: 'Cycle',
    name: Routes.CYCLE_SCREEN,
    component: Cycle,
    icon: ICONS.camera,
    headerShown: false,
  },
  {
    title: 'More',
    name: Routes.MORE_SCREEN,
    component: MorePage,
    icon: ICONS.info,
    headerShown: false,
  },
] as IScreen<BottomTabStackNavigationProps>[];
