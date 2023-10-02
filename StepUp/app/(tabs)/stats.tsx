import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from "react-native-paper";
import { useTheme } from 'react-native-paper';

export interface IPost {
  body: string;
  title: string;
  id: number;
}

export default function TabStatsScreen() {
  const theme = useTheme();
  // моковые данные по 5 лучши донатерам
  const data = [
    { name: "Иван", amount: 1000 },
    { name: "Мария", amount: 750 },
    { name: "Алексей", amount: 500 },
    { name: "Екатерина", amount: 300 },
    { name: "Дмитрий", amount: 200 },
  ];

  return (
    <ScrollView >
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
     
     <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Статистика
      </Text>
      <DataTable style={{marginHorizontal: 40}}>
        <DataTable.Header style={{marginHorizontal: 40}}>
          <DataTable.Title>Имя</DataTable.Title>
          <DataTable.Title numeric>Объем благотворительности</DataTable.Title>
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={index} style={{marginHorizontal: 40}}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.amount}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
