import { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function AuthScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleAuth = () => {
    if (!email || !password || (!isLogin && !fullName)) {
      Alert.alert('Perhatian', 'Mohon isi semua kolom input.');
      return;
    }
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{isLogin ? 'Masuk ke SehatKu' : 'Daftar Akun Baru'}</Text>
        <Text style={styles.subtitle}>
          {isLogin ? 'Silakan masuk untuk berkonsultasi' : 'Buat akun untuk memulai layanan'}
        </Text>

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Nama Lengkap"
            value={fullName}
            onChangeText={setFullName}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Kata Sandi"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton title={isLogin ? 'Masuk' : 'Daftar'} onPress={handleAuth} />
        <CustomButton
          title={isLogin ? 'Belum punya akun? Daftar' : 'Sudah punya akun? Masuk'}
          variant="secondary"
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', justifyContent: 'center', paddingHorizontal: 20 },
  card: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 16, elevation: 4 },
  title: { fontSize: 22, fontWeight: '700', color: '#1C1C1E', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#8E8E93', textAlign: 'center', marginBottom: 20, marginTop: 4 },
  input: { height: 48, borderColor: '#E5E5EA', borderWidth: 1, borderRadius: 10, paddingHorizontal: 14, marginBottom: 12, fontSize: 15 },
});