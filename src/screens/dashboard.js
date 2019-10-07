import React from 'react';
import { StyleSheet, View, Text, ScrollView, AsyncStorage , TouchableOpacity, StatusBar} from 'react-native';
import { storeEmail, storeToken} from './../actions/authActions'
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';


class Dashboard extends React.Component {
    static navigationOptions = {
        title: 'Employee list',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
      };
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['ID', 'NAME', 'AGE', 'GENDER','EMAIL','PHONE'],
          widthArray: [40, 80,60,80,160,160],
          data:{
            user:[{
            "id":1,
            "name":"test1",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
            },
            {
            "id" : 2,
            "name":"test2",
            "age" : "12",
            "gender":"male",
            "email" : "test2@gmail.com",
            "phoneNo" : "9415346314"
            },
            {
            "id":3,
            "name":"test3",
            "age" : "13",
            "gender":"male",
            "email" : "test3@gmail.com",
            "phoneNo" : "9415346315"
            },
            {
            "id":4,
            "name":"test4",
            "age" : "14",
            "gender":"male",
            "email" : "test4@gmail.com",
            "phoneNo" : "9415346316"
            },
            {
            "id":5,
            "name":"test5",
            "age" : "15",
            "gender":"male",
            "email" : "test5@gmail.com",
            "phoneNo" : "9415346317"
            },
            {
            "id":6,
            "name":"test6",
            "age" : "16",
            "gender":"male",
            "email" : "test6@gmail.com",
            "phoneNo" : "9415346318"
            }
           ]
           },
          reqData: [] 
        },
        this.getData=this.getData.bind(this);
      }

      componentDidMount(){
          this.getData()
      }

      async handleLogout(){  
        storeEmail('');
        storeToken('');
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    getData() {
        var output = this.state.data.user.map(obj => {
            var temp = []
            temp.push(obj.id)
            temp.push(obj.name)
            temp.push(obj.age)
            temp.push(obj.gender)
            temp.push(obj.email)
            temp.push(obj.phoneNo)
            return temp
        });
        this.setState({
            reqData: output
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <TouchableOpacity style={styles.button} onPress={this.handleLogout.bind(this)}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                <ScrollView horizontal={true}>
                    <View>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#82B2B8' }}>
                            <Row
                                data={this.state.tableHead}
                                style={styles.head}
                                widthArr={this.state.widthArray}
                                textStyle={styles.text} />
                        </Table>

                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#82B2B8' }}>
                                {
                                    this.state.reqData.map((item, index) => (
                                        <Row
                                            key={index}
                                            widthArr={this.state.widthArray}
                                            data={item}
                                            style={styles.row}
                                            textStyle={styles.text} />
                                    ))
                                }
                            </Table>
                        </ScrollView>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
    head: { height: 40, backgroundColor: '#82B2B8' },
    text: { margin: 6 },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    button: {
        width: 100,
        backgroundColor: '#82B2B8',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
        },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});
export default Dashboard;