import { StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { Text } from '../Themed';
import { useAuth } from '../../app/context/auth';

interface IPropsText {
  children: ReactNode;
}

export function Logouter(props:IPropsText) {
  const { signOut } = useAuth();
  return <Text onPress={signOut} {...props} style={styles.title} />;
}

const styles = StyleSheet.create({
  title: {
    marginRight: 10,
    fontSize: 18,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
});