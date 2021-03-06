import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile194576Navigator from '../features/UserProfile194576/navigator';
import Maps194557Navigator from '../features/Maps194557/navigator';
import Settings194535Navigator from '../features/Settings194535/navigator';
import Settings194520Navigator from '../features/Settings194520/navigator';
import NotificationList194519Navigator from '../features/NotificationList194519/navigator';
import Maps194518Navigator from '../features/Maps194518/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile194576: { screen: UserProfile194576Navigator },
Maps194557: { screen: Maps194557Navigator },
Settings194535: { screen: Settings194535Navigator },
Settings194520: { screen: Settings194520Navigator },
NotificationList194519: { screen: NotificationList194519Navigator },
Maps194518: { screen: Maps194518Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
