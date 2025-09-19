import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { use, useState } from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import CustomButton from '@/components/customButton'

const Signup = () => {

  const [username, setUsername] = React.useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const router = useRouter();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');
    if (!fullname || !username || !email || !password || !repeatPassword) {
      setError('Please fill all required fields.');
      return;
    }
    if (password !== repeatPassword) {
      setError('Passwords do not match.');
      return;
    }
  }

    // Trimming input values
    let name = fullname.trim();
    let user = username.trim();
    let mail = email.trim();
    let phone = phoneNumber.trim();
    let pass = password.trim();

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
          <Text style={[styles.title, { color: theme.textDark }]}>Welcome, Please Sign up</Text>
          <View style={styles.form}>
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: 'transparent' }]}>
              <Ionicons name="person-outline" size={22} color={theme.textLight} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.textDark }]}
                placeholder="Full Name"
                placeholderTextColor={theme.placeholder}
                value={fullname}
                onChangeText={setFullname}
              />
            </View>
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: 'transparent' }]}>
              <Ionicons name="at-outline" size={22} color={theme.textLight} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.textDark }]}
                placeholder="Username"
                placeholderTextColor={theme.placeholder}
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: 'transparent' }]}>
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
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: 'transparent' }]}>
              <Ionicons name="call-outline" size={22} color={theme.textLight} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.textDark }]}
                placeholder="Enter your Phone number"
                placeholderTextColor={theme.placeholder}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: 'transparent' }]}>
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
            <View style={[styles.inputWrapper, { backgroundColor: theme.grayLight, borderColor: 'transparent' }]}>
              <Ionicons name="lock-closed-outline" size={22} color={theme.textLight} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.textDark }]}
                placeholder="Repeat Password"
                placeholderTextColor={theme.placeholder}
                secureTextEntry={!showRepeatPassword}
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowRepeatPassword(v => !v)} accessibilityLabel="Toggle repeat password visibility">
                <Ionicons name={showRepeatPassword ? "eye-off-outline" : "eye-outline"} size={22} color={theme.textLight} />
              </TouchableOpacity>
            </View>
            {error ? <Text style={[styles.error, { color: theme.error }]}>{error}</Text> : null}
            <CustomButton
              title={loading ? '' : 'Sign Up'}
              onPress={handleSignup}
              loading={loading}
              buttonStyle={[styles.signupButton, { backgroundColor: theme.primaryLight }]}
              textStyle={[styles.signupButtonText, { color: theme.textDark }]}
            />
            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { color: theme.textDark }]}>Already have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/Login')}>
                <Text style={[styles.loginLink, { color: theme.primary }]}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({
    loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  loginText: {
    fontSize: hp(1.9),
    color: '#888',
    marginRight: 6,
  },
  loginLink: {
    fontSize: hp(1.9),
    color: theme.primaryDark,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: hp(3.2),
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
    borderColor: '#eee',
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
  },
  error: {
    color: '#d00',
    fontSize: hp(1.8),
    marginBottom: hp(1),
    textAlign: 'center',
  },
  signupButton: {
    width: '100%',
    marginTop: hp(1),
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
  signupButtonText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: theme.neutralWhite,
  },
})