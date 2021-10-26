import React, { useEffect, useState } from 'react'
import { BackHandler, } from 'react-native'
import { WebView } from 'react-native-webview'

const WebViewComponent = ({ handleClose }) => {
    const BASE_URL = 'https://ajouchong.com'
    const [webview, setWebview] = useState()
    const [allowGoBack, setAllowGoBack] = useState(false)

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (allowGoBack) webview.goBack();
            else handleClose();
            return true
        },)
        return () => backHandler.remove();
    }, [allowGoBack])

    useEffect(() => {
        if (webview && webview.clearCache) webview.clearCache()
    }, [webview])

    return (
        <WebView
            ref={(ref) => setWebview(ref)}
            pullToRefreshEnabled
            startInLoadingState
            allowsBackForwardNavigationGestures
            overScrollMode={'never'}
            source={{ uri: BASE_URL }}
            mixedContentMode={'compatibility'}
            originWhitelist={['https://*', 'http://*']}
            injectedJavaScript={` (function() { function wrap(fn) { return function wrapper() { var res = fn.apply(this, arguments); window.ReactNativeWebView.postMessage(window.location.href); return res; } } history.pushState = wrap(history.pushState); history.replaceState = wrap(history.replaceState); window.addEventListener('popstate', function() { window.ReactNativeWebView.postMessage(window.location.href); }); })(); true; `}
            onMessage={(event) => {
                const url = event.nativeEvent.data
                setAllowGoBack(url !== BASE_URL)
            }}
        />
    )
}
export default WebViewComponent
