import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useAuth } from '../context/auth';
import { useEffect, useState } from 'react';
import Colors from '../../constants/Colors';
import { Logouter } from '../../components/Logouter/Logouter';
import { Steps } from '../../components/Steps/Steps';
import { FontAwesome5 } from '@expo/vector-icons'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {

  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { pastStepCount } = useAuth();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 65,
          backgroundColor: 'light-grey',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная страница',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight:()=> <Steps><FontAwesome5 name="walking" size={24} color="black" /> {pastStepCount}</Steps>
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: 'Помочь',
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
          headerRight:()=> <Steps><FontAwesome5 name="walking" size={24} color="black" /> {pastStepCount}</Steps>
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: 'Статистика',
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
          headerRight:()=> <Steps><FontAwesome5 name="walking" size={24} color="black" /> {pastStepCount}</Steps>
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color }) => <TabBarIcon name="cogs" color={color} />,
          headerRight: () => (<Logouter>Выйти</Logouter>),
        }}
      />
    </Tabs>
  );
}

// headerRight: () => (
//   <Link href="/modal" asChild>
//     <Pressable>
//       {({ pressed }) => (
//         <FontAwesome
//           name="info-circle"
//           size={25}
//           color={Colors[colorScheme ?? 'light'].text}
//           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//         />
//       )}
//     </Pressable>
//   </Link>
// ),
