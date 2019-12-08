import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import { Text } from "../components";

import ActScreen from "../screens/Act";
import BudgetScreen from "../screens/Budget";
import EmissionsScreen from "../screens/Emissions";
import SettingsScreen from "../screens/Settings";

import colors from "../style/colors";

import { t } from "../utils/i18n";

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen
});

BudgetStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{ color: focused ? colors.linkGreen : colors.swordGray }}
    >
      {t("BUDGET")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  )
};

const EmissionsStack = createStackNavigator({
  Emissions: EmissionsScreen
});

EmissionsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{ color: focused ? colors.linkGreen : colors.swordGray }}
    >
      {t("EMISSIONS")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-stats"} />
  )
};

const ActStack = createStackNavigator({
  Act: ActScreen
});

ActStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{ color: focused ? colors.linkGreen : colors.swordGray }}
    >
      {t("ACT")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-hand"} />
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text.Secondary
      style={{ color: focused ? colors.linkGreen : colors.swordGray }}
    >
      {t("SETTINGS")}
    </Text.Secondary>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-switch"} />
  )
};

const tabNavigator = createBottomTabNavigator(
  {
    BudgetStack,
    EmissionsStack,
    ActStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#EDF7F1",
        borderTopWidth: 0
      }
    }
  }
);

export default tabNavigator;
