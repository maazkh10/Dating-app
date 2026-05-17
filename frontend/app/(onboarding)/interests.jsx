import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InterstCard from "../../components/cards/InterestCard";
import CustomButton from "../../components/ui/AppButton";
import ProgressBar from "../../components/ui/progressBar";
import ScreenWrapper from "../../components/ui/Screen";

const DATA = [
  "Music",
  "Travel",
  "Gym",
  "Movies",
  "Coding",
  "Football",
  "Photography",
  "Art",
  "Coffee",
  "Gaming",
];

export default function IntrestScreen(params) {
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  const toggled = (itme) => {
    if (selected.includes(itme)) {
      setSelected(selected.filter((i) => i !== itme));
    } else {
      setSelected([...selected, itme]);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ProgressBar progress={60} />
        <Text style={styles.title}>Your Intrestes</Text>

        <View style={styles.grid}>
          {DATA.map((itm) => (
            <InterstCard
              key={itm}
              title={itm}
              setSelected={selected.includes(itm)}
              onPress={() => {
                toggled(itm);
              }}
            />
          ))}
        </View>

        <CustomButton title="next" onPress={() => router.push("/bio")} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
