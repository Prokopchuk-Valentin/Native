import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useAuth } from '../context/auth';

// import { useAppDispath, useAppSelector } from '../redux/hooks';

export default function TabHomeScreen() {
  // const count = useAppSelector((store) => store.postSlice.count);
  // const dispatch = useAppDispath();

  const { currentStepCount, isPedometerAvailable, pastStepCount } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главная страница</Text>
      {/* <Text style={styles.title}>count:{count}</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{isPedometerAvailable !== 'false'? 'Шагометр работает': 'Шагомер не работает'}</Text>
      <Text style={styles.title}>Шаги за последние 24 часа: {pastStepCount}</Text>
      <Text style={styles.title}>Шаги сейчас: {currentStepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
