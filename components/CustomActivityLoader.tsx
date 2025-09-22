import React from 'react';
import { StyleSheet, View, ViewStyle, ActivityIndicator} from 'react-native';

interface CustomActivityLoaderProps {
  style?: ViewStyle;
  size?: number;
}

const CustomActivityLoader: React.FC<CustomActivityLoaderProps> = ({ style, size = 40 }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        style={{ width: size, height: size }}
      />
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
