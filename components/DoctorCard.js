import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DoctorCard({ doctor, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: doctor.image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
        <Text style={styles.hospital}>{doctor.hospital}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>★ {doctor.rating}</Text>
          <Text style={styles.price}>{doctor.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  avatar: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  info: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: '700', color: '#2C3E50' },
  specialty: { fontSize: 13, color: '#007AFF', marginTop: 2 },
  hospital: { fontSize: 12, color: '#7F8C8D', marginTop: 2 },
  ratingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 },
  rating: { fontSize: 13, fontWeight: '600', color: '#F39C12' },
  price: { fontSize: 13, fontWeight: '700', color: '#27AE60' },
});