import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import HeaderBar from '../components/HeaderBar';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar title="Profil Saya" />
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Mahasiswa BINUS</Text>
          <Text style={styles.userEmail}>user@binus.ac.id</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Riwayat Janji Temu</Text>
          <View style={styles.historyItem}>
            <Text style={styles.historyDoctor}>dr. Andi Pratama, Sp.PD</Text>
            <Text style={styles.historyDate}>12 November 2026 - 10.00 WIB</Text>
            <Text style={styles.statusBadge}>Terkonfirmasi</Text>
          </View>
        </View>

        <CustomButton
          title="Keluar (Logout)"
          variant="secondary"
          onPress={() => navigation.replace('Auth')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  content: { padding: 16 },
  profileCard: { alignItems: 'center', backgroundColor: '#FFFFFF', padding: 20, borderRadius: 12, marginBottom: 16 },
  avatar: { width: 70, height: 70, borderRadius: 35, marginBottom: 10 },
  userName: { fontSize: 18, fontWeight: '700', color: '#1C1C1E' },
  userEmail: { fontSize: 14, color: '#8E8E93' },
  section: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 20 },
  sectionHeader: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  historyItem: { paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  historyDoctor: { fontSize: 15, fontWeight: '600' },
  historyDate: { fontSize: 13, color: '#718096', marginTop: 2 },
  statusBadge: { fontSize: 12, color: '#27AE60', fontWeight: '700', marginTop: 4 },
});