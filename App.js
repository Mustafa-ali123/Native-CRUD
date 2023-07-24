// // import React, {useState} from 'react';
// // import {
// //   StyleSheet,
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// // } from 'react-native';

// // const App = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [newTask, setNewTask] = useState('');
// //   const [editingTaskId, setEditingTaskId] = useState(null);

// //   const handleAddTask = () => {
// //     if (newTask.trim() === '') {
// //       return;
// //     }

// //     if (editingTaskId) {
// //       setTasks(
// //         tasks.map(task => {
// //           if (task.id === editingTaskId) {
// //             return {...task, text: newTask};
// //           }
// //           return task;
// //         }),
// //       );
// //       setNewTask('');
// //       setEditingTaskId(null);
// //     } else {
// //       const task = {
// //         id: Date.now().toString(),
// //         text: newTask,
// //       };
// //       setTasks([...tasks, task]);
// //       setNewTask('');
// //     }
// //   };

// //   const handleEditTask = task => {
// //     setNewTask(task.text);
// //     setEditingTaskId(task.id);
// //   };

// //   const handleDeleteTask = taskId => {
// //     setTasks(tasks.filter(task => task.id !== taskId));
// //   };

// //   const renderItem = ({item}) => (
// //     <View style={styles.task}>
// //       <Text style={styles.taskText}>{item.text}</Text>
// //       <View style={styles.taskActions}>
// //         <TouchableOpacity
// //           style={styles.taskActionButton}
// //           onPress={() => handleEditTask(item)}>
// //           <Text style={styles.taskActionButtonText}>Edit</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={styles.taskActionButton}
// //           onPress={() => handleDeleteTask(item.id)}>
// //           <Text style={styles.taskActionButtonText}>Delete</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>To-Do App</Text>
// //       <View style={styles.inputContainer}>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Add a task"
// //           value={newTask}
// //           onChangeText={text => setNewTask(text)}
// //         />
// //         <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
// //           <Text style={styles.addButtonText}>
// //             {editingTaskId ? 'Save' : 'Add'}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //       <FlatList
// //         style={styles.taskList}
// //         data={tasks}
// //         renderItem={renderItem}
// //         keyExtractor={item => item.id}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     marginBottom: 16,
// //   },
// //   input: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 4,
// //     marginRight: 8,
// //     paddingVertical: 8,
// //     paddingHorizontal: 12,
// //     fontSize: 16,
// //   },
// //   addButton: {
// //     backgroundColor: 'blue',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 4,
// //   },
// //   addButtonText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //   },
// //   taskList: {
// //     flex: 1,
// //   },
// //   task: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //     padding: 12,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 4,
// //   },
// //   taskText: {
// //     flex: 1,
// //     fontSize: 16,
// //   },
// //   taskActions: {
// //     flexDirection: 'row',
// //     marginLeft: 8,
// //   },
// //   taskActionButton: {
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     backgroundColor: 'blue',
// //     borderRadius: 4,
// //     marginLeft: 4,
// //   },
// //   taskActionButtonText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: 12,
// //   },
// // });

// // export default App;

import { Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native'

const App = () => {
  let [task, settask] = useState('')
  let [btnText, setbtnText] = useState('+Add')
  let [data, setdata] = useState([])
  let [index, setindex] = useState()

  let addtask = () => {
    if(index){
      data[index] = task
      setdata([...data])
      console.log(data[index] == task)
       
    }else{
      setbtnText("+Add")
      setdata([...data, task])
    }
    settask("")
  }
  let del = (i) => {
  let update = data.filter((x,ind)=>ind != i)
  setdata(update)
  }
    let edit = (x,i) => {
     setindex(i)
     setbtnText("+Edit")
     settask(data[i])
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.head}>My-Todos</Text>
      <View style={styles.inpContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the Todo"
          value={task}
          onChangeText={e => settask(e)}
        />

        <TouchableOpacity style={[styles.btn,{backgroundColor: "green"}]} onPress={addtask}>    
          <Text style={{ color: 'white', }}>{btnText}</Text>
        </TouchableOpacity>


      </View>
      {
        data.map((x, i) => <View style={[styles.inpContainer,{marginTop:15}]} key={i}>
          <Text>{x}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => edit(x,i)} style={[styles.btn, { marginHorizontal: 10, }]}>
              <Text style={{ color: 'white', }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => del(i)} style={[styles.btn, { marginHorizontal: 10, }]}>
              <Text style={{ color: 'white', }}>delete</Text>
            </TouchableOpacity>
          </View>
          </View>
        )
      }
    </View>
    </ScrollView>
  )
}


let styles = StyleSheet.create({
  container: {
    marginLeft:20
  },
  head: {     
    marginLeft:80 ,
    marginVertical:10,
    fontSize:20,
    flex:1,
    flexDirection:'row',
    fontStyle:'italic',
    fontWeight:'bold',
    justifyContent: 'center'
  },
  input: {
    width: '70%',
    borderWidth: 2,
    borderColor: '#003566',
    padding: 10,
    fontSize: 20,
    borderRadius: 8
  },
  inpContainer: {
    flexDirection: "row"
  },
  btn: {
    backgroundColor: "#415a77",
    padding: 15,
    borderRadius: 10,
  },
})

export default App
