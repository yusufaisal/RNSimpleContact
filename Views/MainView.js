import React, { Component } from "react";
import { Button, Text, View, ScrollView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import ContactCell from "../Components/ContactCell.js"
export default class MainView extends Component {
    state = {
        contacts: [
           {
              id: 0,
              name: 'Ben',
           },
           {
              id: 1,
              name: 'Susan',
           },
           {
              id: 2,
              name: 'Robert',
           },
           {
              id: 3,
              name: 'Mary',
           }
        ]
     }

    render() {
        const Stack = createStackNavigator();
        const HomeScreen = ({navigation}) => {
            return (
                <View style={{flex:1}}>
                    <ScrollView>
                         {this.state.contacts.map( (item,i) => (
                            <ContactCell item={item} key={item.id} navigation={navigation}/>
                         ))}
                    </ScrollView>
                </View>
            );
        };

        const DetailsScreen = ({ navigation }) =>{
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                  title="Go to Details... again"
                  onPress={() => navigation.push('Details')}
                />
              </View>
            );
          }

        return (
            <Stack.Navigator>
                <Stack.Screen name="Contacts" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        );
    }
}

