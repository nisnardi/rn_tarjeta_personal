import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Linking,
} from "react-native";

import { TarjetaExperiencia } from "@/components/TarjetaExperiencia";
import { Iconos } from "@/components/Iconos";
import { experiencias } from "@/data/experiencias";

export default function Index() {
  const onContactoHandler = () => {
    Linking.openURL("mailto:nicolasisnardi@gmail.com");
  };

  const onGithubPressHandler = () => {
    Linking.openURL("https://github.com/nisnardi");
  };
  const onTwitterPressHandler = () => {
    Linking.openURL("https://x.com/isnardi");
  };
  const onAtPressHandler = () => {
    Linking.openURL("mailto:nicolasisnardi@gmail.com");
  };
  const onInstagramPressHandler = () => {
    Linking.openURL("https://www.instagram.com/nisnardi");
  };
  const onFacebookPressHandler = () => {
    Linking.openURL("https://www.facebook.com/nicoisnardi");
  };

  const renderExperiencias = () =>
    experiencias.map((experiencia, index) => {
      return (
        <TarjetaExperiencia
          key={`${index}-${experiencia.empresa}-${experiencia.posicion}`}
          logo={experiencia.logo}
          posicion={experiencia.posicion}
          empresa={experiencia.empresa}
          fecha={experiencia.fecha}
          locacion={experiencia.locacion}
          tecnologias={experiencia.tecnologias}
        />
      );
    });

  return (
    <SafeAreaView style={styles.contenido}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            source={{
              uri: "https://itspectrumsolutions.com/wp-content/uploads/2024/03/reactnative.jpg",
            }}
            style={styles.banner}
          />
          <Image
            source={require("@/assets/images/yo.png")}
            style={styles.imagenPersonal}
          />
          <Text style={styles.title}>Nicolas Isnardi</Text>
          <Iconos
            onGithubPress={onGithubPressHandler}
            onTwitterPress={onTwitterPressHandler}
            onAtPress={onAtPressHandler}
            onInstagramPress={onInstagramPressHandler}
            onFacebookPress={onFacebookPressHandler}
          />
          <Button title="Conctacto" onPress={onContactoHandler} />
          <Text style={styles.bio}>
            Dirvertido programador que actualmente vive en Canadá. Me gusta
            mucho programar en React Native y enseñar esta tecnología.
          </Text>
          <Text style={styles.experiencia}>Experiencia</Text>
          {renderExperiencias()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 30, fontWeight: "bold", color: "darkblue" },
  banner: { width: "100%", aspectRatio: 16 / 9 },
  imagenPersonal: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -100,
  },
  bio: { fontSize: 12, lineHeight: 18 },
  experiencia: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    color: "darkblue",
    marginBottom: 10,
  },
});
