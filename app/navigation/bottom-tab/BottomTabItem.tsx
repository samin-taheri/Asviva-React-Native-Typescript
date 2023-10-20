import React from 'react';

import { AppIcon, Block } from '@/components';
import { useStyledTag, useTheme } from '@/hooks';
import { ICONS } from '@/utils';

import { bottomTabConfig } from './BottomTabContainer';
import { Screens } from './BottomTabItems';
import Entypo from 'react-native-vector-icons/Entypo';

type Props = {
  onPress: () => void;
  name: string;
  isFocused: boolean;
  routesLength?: number;
  currentIndex?: number;
};

export const BottomTabItem = (props: Props) => {
  const { onPress, name, isFocused } = props;
  const { colors } = useTheme();

  const BottomTab = useStyledTag(Block, 'flex center middle');

  return (
    <BottomTab onPress={onPress} pressable>
      <React.Fragment>
        {Screens.map(
          item =>
            item.name === name && (
              <Block key={item.name} flex middle center>
                {/* <AppIcon name={item?.icon as keyof typeof ICONS} color={isFocused ? colors.tabItemFocused : colors.tabItem} size={bottomTabConfig?.iconSize} /> */}
                <Entypo
                  name={item?.icon as keyof typeof Entypo}
                  size={bottomTabConfig?.iconSize}
                  color={isFocused ? colors.tabItemFocused : colors.gray}
                />
              </Block>
            ),
        )}
      </React.Fragment>
    </BottomTab>
  );
};
