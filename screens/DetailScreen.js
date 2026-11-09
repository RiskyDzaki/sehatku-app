import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function DetailScreen({ route, navigation }) {
  const { doctor } = route.params;

  const handleBooking = () => {
    Alert.alert('Sukses', `Janji temu dengan ${doctor.name} berhasil dijadwalkan!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={{ uri: doctor.image }} style={styles.image} />
        <View style={styles.body}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <Text style={styles.hospital}>{doctor.hospital}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>Pengalaman</Text>
              <Text style={styles.statValue}>{doctor.experience}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>Rating</Text>
              <Text style={styles.statValue}>★ {doctor.rating}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>Biaya</Text>
              <Text style={styles.statValue}>{doctor.price}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Tentang Dokter</Text>
          <Text style={styles.aboutText}>{doctor.about}</Text>

          <Text style={styles.sectionTitle}>Jadwal Praktik</Text>
          {doctor.schedule.map((item, index) => (
            <Text key={index} style={styles.scheduleText}>• {item}</Text>
          ))}

          <View style={styles.actionContainer}>
            <CustomButton title="Buat Janji Temu" onPress={handleBooking} />
            <CustomButton title="Kembali" variant="secondary" onPress={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scroll: { paddingBottom: 24 },
  image: { width: '100%', height: 240 },
  body: { padding: 20 },
  name: { fontSize: 22, fontWeight: '700', color: '#1A202C' },
  specialty: { fontSize: 15, color: '#007AFF', marginTop: 4, fontWeight: '600' },
  hospital: { fontSize: 14, color: '#718096', marginTop: 2 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 18, backgroundColor: '#F7FAFC', padding: 12, borderRadius: 10 },
  statBox: { alignItems: 'center' },
  statTitle: { fontSize: 12, color: '#A0AEC0' },
  statValue: { fontSize: 14, fontWeight: '700', color: '#2D3748', marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#2D3748', marginTop: 14, marginBottom: 6 },
  aboutText: { fontSize: 14, color: '#4A5568', lineHeight: 20 },
  scheduleText: { fontSize: 14, color: '#4A5568', marginBottom: 4 },
  actionContainer: { marginTop: 24 },
});