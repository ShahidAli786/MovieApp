/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Info from './Info';
import Casts from './Casts';

import {IMovieDetails} from '@definitions/movies';

const Tab = createMaterialTopTabNavigator();

type Props = {
  info: IMovieDetails | undefined;
};

export default function Tabs({info}: Props) {
  const RenderInfo = () => <Info info={info} />;
  const RenderCasts = () => <Casts info={info} />;
  //   const RenderTailers = () => <Tailers trailers={info} />;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={RenderInfo} />
      <Tab.Screen name="Casts" component={RenderCasts} />
      {/* <Tab.Screen name="Tailers" component={RenderTailers} /> */}
    </Tab.Navigator>
  );
}
