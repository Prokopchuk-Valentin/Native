import { StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { Text } from '../Themed';
import { useAuth } from '../../app/context/auth';

interface IPropsText {
  children: ReactNode;
}

export function Steps(props:IPropsText) {
  return <Text  {...props} style={styles.title} />;
}

const styles = StyleSheet.create({
  title: {
    marginRight: 10,
    fontSize: 28,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
});