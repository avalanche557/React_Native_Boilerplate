import React from 'react'
import { Router, Drawer, Scene } from 'react-native-router-flux'
import DummyScreenOne from './src/components/dummyComponent/dummyOne.component'
import DummyScreenTwo from './src/components/dummyComponent/dummyTwo.component'


const Navigation = () => {

    return (
        <Router>
            <Drawer>
                <Scene key="SCREENONE" component={DummyScreenOne} initial={true} hideNavBar/>
                <Scene key="SCREENTWO" component={DummyScreenTwo} hideNavBar/>
            </Drawer>
        </Router>
    )

}

export default Navigation