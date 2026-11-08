import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress, variant = 'primary' }) {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.btnPrimary : styles.btnSecondary]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 6,
  },
  btnPrimary: { backgroundColor: '#007AFF' },
  btnSecondary: { backgroundColor: '#E5E5EA' },
  text: { fontSize: 16, fontWeight: '600' },
  textPrimary: { color: '#FFFFFF' },
  textSecondary: { color: '#333333' },
});