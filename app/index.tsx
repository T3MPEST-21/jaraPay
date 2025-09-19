import { Image, StyleSheet, Text, View, Animated, ActivityIndicator } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { hp, wp } from '@/helpers/common';
import { theme } from '@/constants/theme';

const Index = () => {
  // Animation value
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  // State management
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Animation effect
  useEffect(() => {
    const animation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    });

    animation.start();

    return () => {
      animation.stop();
    };
  }, [fadeAnim]);

  // Simulate app initialization
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simulate API calls or any async operations
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // If everything is successful, navigate to home
        router.replace('/(auth)/Signup');
      } catch (err) {
        setError('Failed to initialize app. Please try again.');
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        accessible
        accessibilityLabel="App Logo"
        accessibilityRole="image"
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
          accessibilityIgnoresInvertColors
        />
      </Animated.View>

      <View style={styles.footer}>
        {error ? (
          <Text style={[styles.footerText, styles.errorText]}>{error}</Text>
        ) : (
          <Text style={styles.footerText}>
            {loading ? 'Setting up requirements ' : 'Ready!'}
            {loading && <ActivityIndicator size={19} color={theme.primary} style={styles.loader} />}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: wp(60),
    height: hp(30),
    maxWidth: 300,
    maxHeight: 200,
  },
  footer: {
    position: 'absolute',
    bottom: hp(5),
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: wp(4),
    color: theme.textDark,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loader: {
    marginLeft: 8,
  },
  errorText: {
    color: theme.error || '#ff3b30',
  },
});

export default Index;