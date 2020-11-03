import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import DummyScreenTwo from './dummyTwo.component';
import { Actions} from 'react-native-router-flux'


const DummyScreenOne = () => {

    const goToScreenTwo = () => {
        Actions.SCREENTWO()
    }

    return (
        <SafeAreaView>
            <View>
                <Text>
                    Screen One
                </Text>
            </View>
            <TouchableOpacity onPress={() => {goToScreenTwo()}}>
                <Text>
                    Go to Screen Two
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default DummyScreenOne;