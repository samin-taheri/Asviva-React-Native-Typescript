import React, {memo} from 'react';

import type {IconMoonProps} from 'react-native-icomoon';
import Icomoon from 'react-native-icomoon';

import selectionJson from '../../../assets/selection.json';

import {Block} from '@/components';
import {useTheme} from '@/hooks';
import {heightPixel} from '@/utils';

type IconProps = Omit<IconMoonProps, 'iconSet'>;

function AppIcon({name, color, ...restProps}: IconProps) {
  const theme = useTheme();
  const colors: any = {
    primary: theme.colors.primary,
    danger: theme.colors.secondary,
  };

  const themeColor = colors?.[color ?? 'primary'];

  return <Icomoon iconSet={selectionJson} name={name || ''} {...restProps} size={heightPixel(restProps.size || 20)} color={themeColor ?? color} />;
}

export default memo(AppIcon);
