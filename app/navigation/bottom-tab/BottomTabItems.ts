import { FetchDataPage, FormPage, HomePage, LoginPage, SignUp} from '@/screens';
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
    title: 'Fetch data',
    name: Routes.FETCH_DATA_SCREEN,
    component: FetchDataPage,
    icon: ICONS.network,
    headerShown: false,
  },
  {
    title: 'Form',
    name: Routes.SIGNUP_SCREEN,
    component: SignUp,
    icon: ICONS.cycle,
    headerShown: false,
  },
  {
    title: 'Login',
    name: Routes.LOGIN_SCREEN,
    component: LoginPage,
    icon: ICONS.grid,
    headerShown: false,
  },
] as unknown as IScreen<BottomTabStackNavigationProps>[];
