import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PrimaryButton from '../components/Button';


const { width, height } = Dimensions.get('window');

const AoraApp = () => {
  const router = useRouter();
  return (
    <LinearGradient
      colors={['#090909', '#1A1A1A', '#2E2E2E']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/aora-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/landing-image.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.title}>
            Discover Endless Possibilities with{' '}
            <Text style={styles.highlight}>Aora</Text>
          </Text>

          <Image
            source={require('../assets/images/line-path.png')}
            style={styles.line}
            resizeMode="contain"
          />

          <Text style={styles.description}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>

          <PrimaryButton title="Continue with Email" onPress={() => router.push('login')} />

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: 30,
  },
  scrollContainer: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: width * 0.5,
    height: height * 0.1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.33,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: Math.min(width * 0.075, 28),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: "#FF8C00",
  },
  line: {
    width: 90,
    height: 13,
    marginTop: -20,
    left: 110,
  },
  description: {
    fontSize: Math.min(width * 0.04, 16),
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    alignItems: 'center',
  justifyContent: 'center',
    borderRadius: 12,
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    marginTop: 10,
    height: 60,
  },
  buttonText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#161622',
  },
});

export default AoraApp;
