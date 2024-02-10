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
  
  const [todoListData, setTodoListData] = useState<Array<{ text: string }>>([]); 
  
  const [todoText, setTodoText] = useState<string>(''); 
  
  const handlechangeText = (text: string) => {
    //console.log('Texto del input cambiado:', text);
        setTodoText(text);
  };

  const handleButtonPress = () => {
    // usuario ha presionado ese botón - validar que haya un valor en el input
      //console.log('Botón presionado - Valor actual de todoText:', todoText);
    if (todoText.trim().length > 0) {
      // agregarlo al valor del estado setTodoList
      setTodoListData(value => {
        //console.log('Nuevo estado de todoListData:', value.concat({text: todoText}));
        return value.concat({text: todoText});
      });
      setTodoText('');
    }
  };

  const handleRenderListItem = ({ item }: { item: { text: string } }) => {
    // regresa un texto
    console.log('Renderizando item de la lista:', item.text);
    return <Text style={styles.textContainer}>{item.text}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View>
          <TextInput
            placeholder="Escribe tu palabra"
            style={styles.textInput}
            placeholderTextColor="#C4C4C4"
            value={todoText}
            onChangeText={handlechangeText}
            />
          <Button
            title="Enter"
            onPress={handleButtonPress}
            />
        </View>
        <View >
        <FlatList 
            data={todoListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={handleRenderListItem}
            extraData={todoListData} // Agrega esto
            
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
  viewContainer: {
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
  // Agrega un nuevo estilo para el color del texto en el contenedor
  textContainer: {
    color: '#212121',
  },
});

export default TodoListScreen;
