
import CustomButton from "../../components/ui/AppButton";
import CustomInput from "../../components/ui/AppInput";
import ScreenWrapper from "../../components/ui/Screen";
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ProgressBar from "../../components/ui/progressBar";

export default function BirthdayScreen(params) {
    const router = useRouter()

    return(
        <ScreenWrapper>
            <View style={styles.conttainer}>
                <ProgressBar progress={30} />
                <Text style={styles.title}>
                    MY birthday is 
                </Text>
               <CustomInput

               placeholder="d/m/yy" />
               
                <CustomButton
                title="next"
                onPress={()=> router.push("/gender")}
             />
                </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
  conttainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
  },
});
