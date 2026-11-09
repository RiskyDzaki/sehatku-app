import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import DoctorCard from '../components/DoctorCard';
import { DOCTORS_DATA } from '../data/doctorsData';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredDoctors = DOCTORS_DATA.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Navbar Header MEDArt */}
        <View style={styles.navbar}>
          <View style={styles.brandRow}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoCross}>+</Text>
            </View>
            <Text style={styles.brandName}>MED<Text style={styles.brandNameBold}>Art</Text></Text>
          </View>
          <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.profileBtnText}>Profil Saya</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Banner Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroBadge}>Kesehatan & Medis</Text>
            <Text style={styles.heroTitle}>The Best Medical Services</Text>
            <Text style={styles.heroSubtitle}>
              Layanan medis terpercaya dengan dokter spesialis profesional dan jadwal yang fleksibel.
            </Text>
            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => navigation.navigate('Detail', { doctor: DOCTORS_DATA[0] })}
            >
              <Text style={styles.heroButtonText}>Read More</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800' }}
            style={styles.heroImage}
          />
        </View>

        {/* Quick Info Cards (Opening Hours & Emergency) */}
        <View style={styles.quickCardsContainer}>
          {/* Card 1: Opening Hours */}
          <View style={styles.infoCard}>
            <Text style={styles.cardHeaderTitle}>Opening Hours</Text>
            <View style={styles.divider} />
            <View style={styles.scheduleRow}>
              <Text style={styles.dayText}>Monday - Thursday</Text>
              <Text style={styles.timeText}>8.00 - 19.00</Text>
            </View>
            <View style={styles.scheduleRow}>
              <Text style={styles.dayText}>Friday</Text>
              <Text style={styles.timeText}>8.00 - 18.30</Text>
            </View>
            <View style={styles.scheduleRow}>
              <Text style={styles.dayText}>Saturday</Text>
              <Text style={styles.timeText}>9.30 - 17.00</Text>
            </View>
          </View>

          {/* Card 2: Emergency Call */}
          <View style={[styles.infoCard, styles.emergencyCard]}>
            <Text style={styles.cardHeaderTitle}>Emergency</Text>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.callBadge}>
              <Text style={styles.callBadgeText}>📞 +34 586 778 8892</Text>
            </TouchableOpacity>
            <Text style={styles.emergencyDesc}>
              Layanan gawat darurat 24 jam siap melayani kebutuhan medis mendesak Anda.
            </Text>
          </View>
        </View>

        {/* Section List Dokter */}
        <View style={styles.doctorSection}>
          <Text style={styles.sectionTitle}>Dokter Spesialis Kami</Text>

          <TextInput
            style={styles.searchBar}
            placeholder="Cari dokter atau spesialisasi..."
            value={search}
            onChangeText={setSearch}
          />

          {filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onPress={() => navigation.navigate('Detail', { doctor })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  brandRow: { flexDirection: 'row', alignItems: 'center' },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoCross: { color: '#FFF', fontSize: 20, fontWeight: '700' },
  brandName: { fontSize: 20, color: '#007AFF', fontWeight: '400' },
  brandNameBold: { fontWeight: '800', color: '#1E293B' },
  profileBtn: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  profileBtnText: { color: '#FFFFFF', fontWeight: '600', fontSize: 13 },

  heroSection: {
    backgroundColor: '#EFF6FF',
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroTextContainer: { marginBottom: 14 },
  heroBadge: { fontSize: 12, fontWeight: '700', color: '#007AFF', textTransform: 'uppercase' },
  heroTitle: { fontSize: 24, fontWeight: '800', color: '#1E293B', marginTop: 4, lineHeight: 30 },
  heroSubtitle: { fontSize: 13, color: '#64748B', marginTop: 8, lineHeight: 18 },
  heroButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginTop: 14,
  },
  heroButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 13 },
  heroImage: { width: '100%', height: 180, borderRadius: 14, marginTop: 10 },

  quickCardsContainer: { paddingHorizontal: 16, marginTop: 16 },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
  },
  emergencyCard: { backgroundColor: '#F0F9FF', borderColor: '#BAE6FD' },
  cardHeaderTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  divider: { height: 2, backgroundColor: '#007AFF', width: 40, marginVertical: 8 },
  scheduleRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  dayText: { fontSize: 13, color: '#64748B' },
  timeText: { fontSize: 13, fontWeight: '600', color: '#334155' },
  callBadge: { backgroundColor: '#007AFF', paddingVertical: 10, borderRadius: 25, alignItems: 'center', marginVertical: 8 },
  callBadgeText: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
  emergencyDesc: { fontSize: 12, color: '#64748B', lineHeight: 16 },

  doctorSection: { paddingHorizontal: 16, marginTop: 8, paddingBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1E293B', marginBottom: 12 },
  searchBar: {
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
});