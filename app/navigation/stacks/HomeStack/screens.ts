import {FetchDataPage, FormPage, HomePage, LoginPage} from '@/screens';
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
import SportsCenter from '@/screens/SportsCenter';
import CoachingDetails from '@/screens/CoachingDetails';
import ChallengeDetails from '@/screens/ChallengeDetails';
import WorkoutDetail from '@/screens/WorkoutDetail';
import WorkoutSubDetails from '@/screens/WorkoutSubDetails';
import MultiplayerDetails from '@/screens/MultiplayerDetails';
import Cycle from '@/screens/Cycle';
import SettingsScreen from '@/screens/SettingsScreen';
import HelpAndFeedbackScreen from '@/screens/HelpAndFeedbackScreen';
import MyWorkouts from '@/screens/MyWorkouts';
import MorePage from '@/screens/MorePage';
import ForgotPassword from '@/screens/ForgotPassword';
import SignUp from '@/screens/SignUp';

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
    title: 'Forgot Password Page',
    name: routes.FORGOTPASSWORD_SCREEN,
    component: ForgotPassword,
    headerShown: false,
  },
  {
    title: 'Signup Page',
    name: routes.SIGNUP_SCREEN,
    component: SignUp,
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
    title: 'Cycle Page',
    name: routes.CYCLE_SCREEN,
    component: Cycle,
    headerShown: false,
  },
    {
    title: 'Workout Details Page',
    name: routes.WORKOUT_DETAILS,
    component: WorkoutDetail,
    headerShown: false,
  },
   {
    title: 'Multiplayer Details Page',
    name: routes.MULTIPLAYER_DETAILS,
    component: MultiplayerDetails,
    headerShown: false,
  },
    {
    title: 'Workout Subdetails Page',
    name: routes.WORKOUT_SUBDETAILS,
    component: WorkoutSubDetails,
    headerShown: false,
  },
  {
    title: 'Coaching Course Page',
    name: routes.COACHINGCOURSE_DETAILS,
    component: CoachingDetails,
    headerShown: false,
  },
   {
    title: 'My Workouts Page',
    name: routes.MYWORKOUTS_SCREEN,
    component: MyWorkouts,
    headerShown: false,
  },
  {
    title: 'More Page',
    name: routes.MORE_SCREEN,
    component: MorePage,
    headerShown: false,
  },
    {
    title: 'Login Page',
    name: routes.LOGIN_SCREEN,
    component: LoginPage,
    headerShown: false,
  },
   {
    title: 'Settings Page',
    name: routes.SETTINGS_SCREEN,
    component: SettingsScreen,
    headerShown: false,
  },
   {
    title: 'Help and Feedback Page',
    name: routes.HELPANDFEEDBACK_SCREEN,
    component: HelpAndFeedbackScreen,
    headerShown: false,
  },
  {
    title: 'Challenge Page',
    name: routes.CHALLENGE_DETAILS,
    component: ChallengeDetails,
    headerShown: false,
  },
  {
    title: 'Sports Center Page',
    name: routes.SPORTS_CENTER_SCREEN,
    component: SportsCenter,
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
