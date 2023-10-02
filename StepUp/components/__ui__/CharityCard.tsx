import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';
import { CharityOrganizationType } from '../../app/types';
export default function CharityCard({ charity }: {charity: CharityOrganizationType}) {
  const [showDonation, setShowDonation] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const donateHandler = (id: CharityOrganizationType['id']) => {
    console.log('нажали кнопку для организации ', id);
    setShowDonation((prev)=> !prev);
  }

  const confirmDonationHandler = () => {
    console.log('подтверждено');
    setShowDonation((prev) => !prev);
  }

  const cancelHandler = () => {
    setShowDonation((prev) => !prev);
  }
  
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{charity.name}</Title>
        <Paragraph>{charity.description}</Paragraph>
      </Card.Content>
      {showDonation ? (
          <View style={styles.donationInput}>
            <TextInput
              label="Сумма пожертвования"
              value={donationAmount}
              onChangeText={text => setDonationAmount(text)}
              keyboardType="numeric"
            />
            <Button onPress={confirmDonationHandler}>Подтвердить</Button>
            <Button onPress={cancelHandler}>Отменить</Button>
          </View>
        ) : (
          <Card.Actions>
            <Button onPress={() => donateHandler(charity.id)}>Пожертвовать</Button>
          </Card.Actions>
        )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    elevation: 3,
    marginHorizontal: 30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
  },
  donationInput: {
    marginTop: 16,
  },
});
