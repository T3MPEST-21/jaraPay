import { Image, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { wp, hp } from "../helpers/common";
import { theme } from "@/constants/theme";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        router.replace("/(auth)/Login");
      }, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/jara-logo-t.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.footer}>
  {loading ? (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.footerText}>Setting up requirements</Text>
      <ActivityIndicator size={14} color={theme.primary} />
    </View>
  ) : (
    <Text style={styles.footerText}>Ready</Text>
  )}
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp(70),
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,          
    left: 0,            
    right: 0,           
    alignItems: 'center', 
    paddingBottom: 30,   
    width: '100%',     
  },
  footerText: {
    fontSize: wp(5),
    fontWeight: '500',   
    color: theme.textDark,
    textAlign: 'center',
  },
});
