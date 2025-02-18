
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.title}>Cargos de programação</Text>
    <View style={styles.cargos}>
      <Text style={styles.cargo}>Progamador Junior</Text>
     <Text style={styles.text}>O programador júnior possui menos de 2 anos de experiência e se dedica a tarefas simples, como codificação e testes unitários, sempre sob supervisão. Ele está aprendendo a trabalhar com tecnologias e ferramentas, sendo guiado por profissionais mais experientes e com foco em aprimorar suas habilidades.</Text> 
      <Image style={styles.image} source={require("./assets/junior.png")}/>
    </View>
    <View style={styles.cargos}>
      <Text style={styles.cargo}>Progamador Pleno</Text>
     <Text style={styles.text}>Com 2 a 5 anos de experiência, o programador pleno assume responsabilidades maiores, lidando com tarefas mais complexas e atuando no design e arquitetura do sistema. Ele tem mais autonomia, sugere melhorias e implementa boas práticas, mas ainda depende de orientações em decisões estratégicas.</Text> 
      <Image style={styles.image} source={require("./assets/pleno.jpg")}/>
    </View>
    <View style={styles.cargos}>
      <Text style={styles.cargo}>Progamador Sênior</Text>
     <Text style={styles.text}>O programador sênior possui mais de 5 anos de experiência e é responsável por decisões críticas na arquitetura e design do sistema. Ele lidera tecnicamente a equipe, oferece mentorias e toma decisões estratégicas sobre tecnologias e escalabilidade, com alta autonomia e profundo conhecimento técnico.</Text> 
      <Image style={styles.image} source={require("./assets/senior.png")}/>
    </View>
  
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:"29",
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  

  },
  title: {
    textAlign: "center",
    fontSize: 19,
    fontWeight:"bold",
  },
  text: {
    color: "#0000000",
    textAlign:"justify",
  },
  cargo: {
    textAlign: "center",
    marginVertical:"10",
    fontWeight:"bold",
  },
  image: {
    width: '300',
    height: '200',
    alignSelf:"center",
    marginVertical: "15"
  }
});
