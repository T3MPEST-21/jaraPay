import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import BackButton from './BackButton';
import { second } from '@/constants/theme';
import { hp } from '@/helpers/common';


interface HeaderProps {
  title: string;
  ShowBackButton: boolean;
  marginBottom: number;
}
export default function Header({ title, ShowBackButton, marginBottom }: HeaderProps) {
  const router = useRouter();

  return (
    <View style={[styles.container, { marginBottom }]}>
      {ShowBackButton && <BackButton onPress={() => router.back()} style={styles.backButton}/>}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7, // Add padding to the container
    marginTop: 5,
  },
  title: {
    fontSize: hp(2.7),
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 5,
    top: 3,
  },
})