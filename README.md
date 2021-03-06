# Business-Card-Maker / 명함 만들기
Create React App 사용, `yarn start`로 실행
> **기술**
1. HTML
2. CSS
3. JavaScript
4. React
5. React-Hook
- [x] React-Router : 특정 url 경로로 결정하는것을 도와주는 라이브러리
- [x] Firebase : 간단한 로그인 기능, 사용자의 데이터 저장을 도와줌, realTimeBase와 Authentication을 사용함
- [x] SDK : 단순히 SDK에서 제공하는  API 함수들만 이용하게 되면  SDK가 자동으로 알아서 파이어베이스와 통신하게 해줌
- [x] Cloudinary : 파이어베이스에서 클라우드 저장소를 통해 사용자의 업로드 이미지 저장(사이즈 조정 등 가능)

> **기능**
1. 파이어베이스로 로그인, 로그아웃 기능을 만듦
2. 리액트 라우터로 페이지 경로 지정해줘서 화면 전환 가능
3. 카드 추가, 삭제, 수정 가능
4. 카드 색상 변경 가능
5. theme선택 안하면 명함 색상 디폴트 값 화이트
6. 카드 수정 시 연필 모양 버튼 클릭
7. 카드 수정 누르고 카메라 버튼 클릭하면 이미지 변경 가능
8. 카드 수정 완료 시 체크 버튼 클릭하면 완성 됨
9. 이미지 업로드는 Cloudinary통해 만듦
10. 실시간 데이터를 파이어베이스를 통홰 관리하고 저장할 수 있음
11. 파이어베이스를 통해서 새로고침이나 로그아웃을 하고 로그인을 다시해도 동일한 데이터 출력 가능

> **고쳐야 할 점**
- [ ] 카드 수정 시 움직이는 레이아웃 균형 잡기
- [ ] 카드 수정 시 모든 명함들이 수정되는 사항 고치기

![image](https://user-images.githubusercontent.com/68316994/174050914-0da842b5-5d4b-4949-bf56-af054ac21560.png)
![image](https://user-images.githubusercontent.com/68316994/174050981-74cf92b2-2122-4443-9eb4-a40ad45c64b5.png)
