import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import BackButton from '@/components/BackButton'
import { useRouter } from 'expo-router';
import { hp } from '@/helpers/common';
import { second, theme } from '@/constants/theme';
import CustomButton from '@/components/customButton';
import { useState } from 'react';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement actual login logic here
      // const response = await authService.login(email.trim(), password.trim());
      // router.replace('/(tabs)'); // Navigate to main app on success
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.neutralWhite }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { backgroundColor: theme.neutralWhite }]}>
          <Text style={[styles.welcomeText, { color: theme.textDark }]}>Hello, welcome back</Text>
          <View style={styles.form}>
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: theme.gray }]}>
              <Ionicons name="mail-outline" size={22} color={theme.textLight} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.textDark }]}
                placeholder="Email"
                placeholderTextColor={theme.placeholder}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: theme.gray }]}>
              <Ionicons name="lock-closed-outline" size={22} color={theme.textLight} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.textDark }]}
                placeholder="Password"
                placeholderTextColor={theme.placeholder}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowPassword(v => !v)} accessibilityLabel="Toggle password visibility">
                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={22} color={theme.textLight} />
              </TouchableOpacity>
            </View>
            {error ? <Text style={[styles.error, { color: theme.error }]}>{error}</Text> : null}

            <TouchableOpacity style={styles.forgotButton} onPress={() => alert("Forgot Password pressed")}>
              <Text style={[styles.forgotText, { color: theme.primary }]}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
              title={loading ? '' : 'Login'}
              onPress={handleLogin}
              loading={loading}
              buttonStyle={[styles.loginButton, { backgroundColor: theme.primary }]}
              textStyle={[styles.loginButtonText, { color: theme.neutralWhite }]}
            />

            <View style={styles.signupContainer}>
              <Text style={[styles.signupText, { color: theme.textLight }]}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/Signup')}>
                <Text style={[styles.signupLink, { color: theme.primary }]}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: hp(1),
  },
  forgotText: {
    color: theme.primary,
    fontSize: hp(1.9),
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  signupText: {
    fontSize: hp(1.9),
    color: theme.textLight,
    marginRight: 6,
  },
  signupLink: {
    fontSize: hp(1.9),
    color: theme.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: hp(6),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  welcomeText: {
    fontSize: hp(3.5),
    fontWeight: '600',
    color: theme.textDark,
    textAlign: 'center',
    marginBottom: hp(2),
  },
  form: {
    width: '100%',
    marginTop: hp(2),
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.grayLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.gray,
    marginBottom: hp(1.5),
    paddingHorizontal: 8,
    height: hp(6),
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: hp(2.2),
    color: theme.textDark,
    backgroundColor: 'transparent',
    paddingVertical: 0,
    height: '100%',
  },
  error: {
    color: '#d00',
    fontSize: hp(1.8),
    marginBottom: hp(1),
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    marginTop: hp(1),
    backgroundColor: theme.primary,
    borderRadius: 16,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  loginButtonText: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    color: theme.neutralWhite,
  },
});