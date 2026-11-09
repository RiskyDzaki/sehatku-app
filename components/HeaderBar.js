import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeaderBar({ title, onRightPress, rightLabel }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {rightLabel && (
        <TouchableOpacity onPress={onRightPress}>
          <Text style={styles.rightLabel}>{rightLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  title: { fontSize: 20, fontWeight: '700', color: '#1C1C1E' },
  rightLabel: { fontSize: 14, color: '#007AFF', fontWeight: '600' },
});