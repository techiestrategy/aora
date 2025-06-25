import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const PrimaryButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: '100%',
    height: 60,
    marginTop: 10,
  },
  buttonText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#161622',
  },
});

export default PrimaryButton;
