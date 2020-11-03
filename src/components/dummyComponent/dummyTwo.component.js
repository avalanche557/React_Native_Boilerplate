import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Actions} from 'react-native-router-flux'


const DummyScreenTwo = () => {

    const goToScreenOne = () => {
        Actions.SCREENONE()
    }

    return (
        <SafeAreaView>
            <View>
                <Text>
                    Screen Two
                </Text>
            </View>
            <TouchableOpacity onPress={() => {goToScreenOne()}}>
                <Text>
                    Go to Screen One
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DummyScreenTwo;