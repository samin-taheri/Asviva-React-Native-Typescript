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
  [Routes.HOME_ROOT]: undefined;
  [Routes.GOALS_SCREEN]: undefined;
  [Routes.QUESTIONNAIRE_SCREEN]: undefined;
  [Routes.WORKOUTDETAILS_SCREEN]: undefined;  
  [Routes.BRANDS_SCREEN]: undefined;  
  [Routes.LOADING_SCREEN]: undefined;  
  [Routes.CONNECTDEVICES_SCREEN]: undefined;  
  [Routes.PROFILE_SCREEN]: undefined;  
  [Routes.FORM_SCREEN]: {
    detailId: string;
  };
};

export type HomeStackNavigationPropsType = StackNavigationProp<HomeStackNavigationProps>;

export type HomeStackNavigationRouteType<TPageName extends Keyof<HomeStackNavigationProps>> = RouteProp<HomeStackNavigationProps, TPageName>;
