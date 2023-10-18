import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Routes} from '@/navigation';
import {Keyof} from '@/utils';

export type HomeScreen = {
  name: string;
};

export type HomeStackNavigationProps = {
  [Routes.HOME_SCREEN]: {
    name: string;
  };
  [Routes.COACHINGCOURSE_DETAILS]: {
    id: string;
  };
   [Routes.CHALLENGE_DETAILS]: {
    id: string;
  };
  [Routes.WORKOUT_DETAILS]: {
    id: string;
  };
  [Routes.WORKOUT_SUBDETAILS]: {
    id: string;
  };
  [Routes.MULTIPLAYER_DETAILS]: {
    id: string;
  };
  [Routes.HOME_ROOT]: undefined;
  [Routes.MYWORKOUTS_SCREEN]: undefined;
  [Routes.FORGOTPASSWORD_SCREEN]: undefined;
  [Routes.SIGNUP_SCREEN]: undefined;
  [Routes.MORE_SCREEN]: undefined;
  [Routes.CYCLE_SCREEN]: undefined;
  [Routes.LOGIN_SCREEN]: undefined;
  [Routes.SETTINGS_SCREEN]: undefined;
  [Routes.HELPANDFEEDBACK_SCREEN]: undefined;
  [Routes.GOALS_SCREEN]: undefined;
  [Routes.QUESTIONNAIRE_SCREEN]: undefined;
  [Routes.WORKOUTDETAILS_SCREEN]: undefined;  
  [Routes.BRANDS_SCREEN]: undefined;  
  [Routes.LOADING_SCREEN]: undefined;  
  [Routes.SPORTS_CENTER_SCREEN]: undefined;  
  [Routes.CONNECTDEVICES_SCREEN]: undefined;  
  [Routes.PROFILE_SCREEN]: undefined;  
  [Routes.MAIN_TABS_ROOT]: undefined;  
  [Routes.FORM_SCREEN]: {
    detailId: string;
  };
};

export type HomeStackNavigationPropsType = StackNavigationProp<HomeStackNavigationProps>;

export type HomeStackNavigationRouteType<TPageName extends Keyof<HomeStackNavigationProps>> = RouteProp<HomeStackNavigationProps, TPageName>;
