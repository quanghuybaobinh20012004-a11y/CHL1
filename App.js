import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
  const [favorite, setFavorite] = useState("");

  const languages = [
    { id: 1, src: "https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png" },
    { id: 2, src: "https://raw.githubusercontent.com/github/explore/main/topics/elixir/elixir.png" },
    { id: 3, src: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" },
    { id: 4, src: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png" },
    { id: 5, src: "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png" },
    { id: 6, src: "https://raw.githubusercontent.com/github/explore/main/topics/php/php.png" },
  ];

  return (
    <View style={styles.container}>
    
        <Text style={styles.title}>Programming Languages</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {languages.map((lang) => (
          <Image key={lang.id} source={{ uri: lang.src }} style={styles.image} />
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="What is your favorite programming language from the list above?"
        value={favorite}
        onChangeText={setFavorite}
        placeholderTextColor="#555"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: "#222",
  },
  scroll: {
    paddingHorizontal: 10,
    marginBottom: 20, 
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: "orange", 
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  input: {
    width: "90%", 
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
  },
});
