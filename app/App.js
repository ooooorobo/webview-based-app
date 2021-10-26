/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type { Node } from 'react'
import {
    Alert, BackHandler,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native'

import WebViewComponent from "./components/WebView.component"

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <SafeAreaView style={styles.root}>
                <WebViewComponent
                    handleClose={() => {
                        Alert.alert('종료', '앱을 종료할까요?'), [
                            {
                                text: "취소",
                                onPress: () => null,
                            },
                            {
                                test: "종료",
                                onPress: () => BackHandler.exitApp()
                            }]
                    }}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default App
