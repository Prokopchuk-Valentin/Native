import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import CharityCard from '../../components/__ui__/CharityCard';

export default function TabDonateScreen() {
  const mockCharities = [
    {
      id: 1,
      name: 'Фонд "Свет надежды"',
      description: 'Организация, основанная в 2005 году. Наша миссия - помогать нуждающимся людям и семьям, предоставляя им необходимую поддержку и помощь в трудных жизненных ситуациях.',
    },
    {
      id: 2,
      name: 'Детский приют "Солнечное детство"',
      description: 'Детский приют, основанный в 2010 году, предоставляющий дом и заботу для детей-сирот и детей, оставшихся без попечения родителей. Наша цель - обеспечить им безопасное и счастливое детство.',
    },
    {
      id: 3,
      name: 'Общество защиты животных "Друзья лапками"',
      description: 'Мы - организация, посвятившая себя защите и заботе о животных. Наша миссия - помогать бездомным животным, предоставляя им уход, лечение и поиск новых домов.',
    },
    {
      id: 4,
      name: 'Благотворительный фонд "Сохранение природы"',
      description: 'Фонд, работающий на благо природы и экологии. Наша миссия - сохранить природное богатство и разнообразие нашей планеты для будущих поколений.',
    },
    {
      id: 5,
      name: 'Фонд "Добрые сердца"',
      description: 'Организация, собирающая средства и помогающая людям с серьезными медицинскими проблемами. Наша цель - дарить надежду и помощь в трудные моменты.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
    {/* <Text style={styles.title}>Tab Donate</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {mockCharities.map((charity) => (
          <CharityCard
            key={charity.id}
            charity = {charity}
          />
        ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    // marginVertical: 10,
    height: 1,
    width: '80%',
    marginHorizontal: 10,
    paddingHorizontal: 10
  },
  scrollView: {
    flex: 1,
  },
});
