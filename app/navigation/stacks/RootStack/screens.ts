import {HomePage, LoginPage, SplashScreen} from '@/screens';
import {IScreen} from '@/utils';

import {RootStackNavigationProps} from './types';
import {BottomTabNavigation} from '../../bottom-tab/BottomTabNavigation';
import {DrawerMenuNavigaiton} from '../../drawer/DrawerMenuNavigation';
import Routes from '../../Routes';
import Goals from '@/screens/Goals';
import Questionnaire from '@/screens/Questionnaire';
import WorkoutDetails from '@/screens/WorkoutDetails';
import Loading from '@/screens/Loading';
import Brands from '@/screens/Brands';
import ConnectDevices from '@/screens/ConnectDevices';
import HomeStack from '../HomeStack';
import Profile from '@/screens/Profile';
import SportsCenter from '@/screens/SportsCenter';
import CoachingDetails from '@/screens/CoachingDetails';
import ChallengeDetails from '@/screens/ChallengeDetails';
import WorkoutDetail from '@/screens/WorkoutDetail';
import WorkoutSubDetails from '@/screens/WorkoutSubDetails';
import MultiplayerDetails from '@/screens/MultiplayerDetails';
import Cycle from '@/screens/Cycle';

const Screens = [
  {
    title: 'Splash Screen',
    name: Routes.SPLASH_SCREEN,
    component: SplashScreen,
    headerShown: false,
  },
  {
    title: 'Login Page',
    name: Routes.LOGIN_SCREEN,
    component: LoginPage,
    headerShown: false,
  },
   {
    title: 'Home Page',
    name: Routes.HOME_ROOT,
    component: HomeStack,
    headerShown: false,
  },
  {
    title: 'Goals Page',
    name: Routes.GOALS_SCREEN,
    component: Goals,
    headerShown: false,
  },
   {
    title: 'Coaching Course Details Page',
    name: Routes.COACHINGCOURSE_DETAILS,
    component: CoachingDetails,
    headerShown: false,
  },
   {
    title: 'Challenge Details Page',
    name: Routes.CHALLENGE_DETAILS,
    component: ChallengeDetails,
    headerShown: false,
  },
    {
    title: 'Cycle Page',
    name: Routes.CYCLE_SCREEN,
    component: Cycle,
    headerShown: false,
  },
  {
    title: 'Workout Details Page',
    name: Routes.WORKOUT_DETAILS,
    component: WorkoutDetail,
    headerShown: false,
  },
   {
    title: 'Multiplayer Details Page',
    name: Routes.MULTIPLAYER_DETAILS,
    component: MultiplayerDetails,
    headerShown: false,
  },
  {
    title: 'Workout Subdetails Page',
    name: Routes.WORKOUT_SUBDETAILS,
    component: WorkoutSubDetails,
    headerShown: false,
  },
   {
    title: 'Sports Center Page',
    name: Routes.SPORTS_CENTER_SCREEN,
    component: SportsCenter,
    headerShown: false,
  },
  {
    title: 'Profile Page',
    name: Routes.PROFILE_SCREEN,
    component: Profile,
    headerShown: false,
  },
  {
    title: 'Questionnare Page',
    name: Routes.QUESTIONNAIRE_SCREEN,
    component: Questionnaire,
    headerShown: false,
  },
  {
    title: 'Loading Page',
    name: Routes.LOADING_SCREEN,
    component: Loading,
    headerShown: false,
  },
  {
    title: 'Brands Page',
    name: Routes.BRANDS_SCREEN,
    component: Brands,
    headerShown: false,
  },
  {
    title: 'Connect Devices Page',
    name: Routes.CONNECTDEVICES_SCREEN,
    component: ConnectDevices,
    headerShown: false,
  },
   {
    title: 'Workout Details Page',
    name: Routes.WORKOUTDETAILS_SCREEN,
    component: WorkoutDetails,
    headerShown: false,
  },
  {
    title: 'Side Menu',
    name: Routes.MAIN_DRAWER_ROOT,
    component: DrawerMenuNavigaiton,
    headerShown: false,
  },
  {
    title: 'Tab Menu',
    name: Routes.MAIN_TABS_ROOT,
    component: BottomTabNavigation,
    headerShown: false,
  },
] as Array<IScreen<RootStackNavigationProps>>;

export default Screens;
