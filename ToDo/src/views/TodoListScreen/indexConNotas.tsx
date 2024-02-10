//Va a exportar la primera pantalla
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text
} from 'react-native';

const TodoListScreen: React.FC = () => {
  //se declarar una constante de estado q va a tener los Todos
  const [todoListData, setTodoListData] = useState<Array<{ text: string }>>([]); //valor inicial un arreglo,
  //se concatena al estado inicial del componente - constate para las listas
  const [todoText, setTodoText] = useState<string>(''); //un string dentro de un input

  //texto q se recibe cuando el usuario esta escribiendo en el input
  const handlechangeText = (text: string) => {
    //cuando cambie el texto se cambia la variable de estado
    setTodoText(text);
  };

  //nomemclatura handle-componente-acction
  const handleButtonPress = () => {
    //usuario ha precionado ese boton - validar que haya un valor en el input - trim: elimina los espacios vacios al principio y al final
    if (todoText.trim().length > 0) {
      //agregarlo al valor del estado setTodoList, devuelva el valor actual
      //concateno a ese valor el value.concat - se quiere un arreglo de objetos
      setTodoListData((prevData) => [...prevData, { text: todoText }]);
      setTodoText('');
    }
  };

    //una funcion que el argumento es un objeto que traiga item
  const handleRenderListItem = ({ item }: { item: { text: string }}) => { //regresa un texto
    if (!item || !item.text) {
        console.error('Elemento inválido:', item);
        return null; // o algún renderizado predeterminado
      }
    return <Text>{item.text}</Text>;
  };

  //se exporta
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View>
          <TextInput
            placeholder="Escribe tu palabra"
            style={styles.textInput}
            placeholderTextColor="#C4C4C4"
            value={todoText}
            onChangeText={handlechangeText} //en caso de q cambie lo notifique a la varible de estado
            />
          <Button
            title="Enter"
            
            onPress={handleButtonPress}
            />
        </View>
        <View>
            <FlatList 
                data={todoListData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={handleRenderListItem}
                />
        </View>
       </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFBFB',
    },
  viewContainer:{
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
  button: {},
});

export default TodoListScreen;
