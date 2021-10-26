# webview-based-app

웹뷰 기반의 react-native 어플리케이션입니다.

- [샘플 실행하기](#-샘플-실행하기)
- [앱 아이콘 설정하기](#-앱-아이콘-설정하기)
- [앱 이름 설정하기](#-앱-이름-설정하기)
- [웹뷰 URL 설정하기](#-웹뷰-url-설정하기)
- [참고](#-참고)

## 샘플 실행하기

```sh
# /app 디렉토리에서,
react-native run-ios          # 아이폰 앱 실행
react-native run-android      # 안드로이드 앱 실행
```

## 앱 아이콘 설정하기

1. [App Icon Generator](https://appicon.co/)로 디바이스별 아이콘을 생성
2. 안드로이드: `/app/android/app/src/main/res`에 android 폴더의 내용물 모두 넣기
3. iOS: `/app/ios/app/Images.xassets/AppIcon.appiconset`에 Assets.xassets 폴더의 내용물 모두 넣기

## 앱 이름 설정하기

1. 안드로이드: `/app/android/app/src/main/res/values/strings.xml` 수정
  ```xml
    <resources>
      <string name="app_name">앱 이름</string>
    </resources>
  ```
2. iOS: `/app/ios/app/info.plist` 수정
  ```xml
    <key>CFBundleDisplayName</key>
    <string>앱 이름</string>
  ```

## 웹뷰 URL 설정하기

- `/app/components/WebView.component.js`의 `BASE_URL` 값을 원하는 URL로 변경

## 참고 

- https://satisfactoryplace.tistory.com/254
