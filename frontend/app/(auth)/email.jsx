import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import CustomButton from '../../components/ui/AppButton';
import CustomInput from '../../components/ui/AppInput';
import ScreenWrapper from '../../components/ui/Screen';

export default function EmailScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <ScreenWrapper>
      <View style={[styles.container, { paddingHorizontal: width * 0.07 }]}>
        <Text style={styles.title}>What's your email?</Text>

        <Text style={styles.subtitle}>
          We'll send you a verification code.
        </Text>

        <CustomInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />

        <CustomButton
          title="Continue"
          onPress={() => router.push('/otp')}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
  },
});