import {FetchDataPage, FormPage, HomePage} from '@/screens';
import {IScreen} from '@/utils';

import {HomeStackNavigationProps} from './types';
import routes from '../../Routes';
import Goals from '@/screens/Goals';
import Questionnaire from '@/screens/Questionnaire';
import WorkoutDetails from '@/screens/WorkoutDetails';
import Brands from '@/screens/Brands';
import Loading from '@/screens/Loading';
import ConnectDevices from '@/screens/ConnectDevices';
import Profile from '@/screens/Profile';

const Screens = [
  {
    title: 'home',
    name: routes.HOME_SCREEN,
    component: HomePage,
    headerShown: false,
  },
  {
    title: 'fetch_data',
    name: routes.FETCH_DATA_SCREEN,
    component: FetchDataPage,
    headerShown: false,
  },
    {
    title: 'Goals Page',
    name: routes.GOALS_SCREEN,
    component: Goals,
    headerShown: false,
  },
  {
    title: 'Brands Page',
    name: routes.BRANDS_SCREEN,
    component: Brands,
    headerShown: false,
  },
   {
    title: 'Loading Page',
    name: routes.LOADING_SCREEN,
    component: Loading,
    headerShown: false,
  },
   {
    title: 'Connect Devices Page',
    name: routes.CONNECTDEVICES_SCREEN,
    component: ConnectDevices,
    headerShown: false,
  },
   {
    title: 'Workout Details Page',
    name: routes.WORKOUTDETAILS_SCREEN,
    component: WorkoutDetails,
    headerShown: false,
  },
   {
    title: 'Profile Page',
    name: routes.PROFILE_SCREEN,
    component: Profile,
    headerShown: false,
  },
  {
    title: 'form',
    name: routes.FORM_SCREEN,
    component: FormPage,
    headerShown: false,
  },
] as Array<IScreen<HomeStackNavigationProps>>;

export default Screens;
