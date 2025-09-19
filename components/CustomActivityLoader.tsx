import { theme } from '@/constants/theme';
import React from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';

interface CustomActivityLoaderProps {
  style?: ViewStyle;
  size?: number;
}

const CustomActivityLoader: React.FC<CustomActivityLoaderProps> = ({ style, size = 40 }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={20} color={theme.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomActivityLoader;
