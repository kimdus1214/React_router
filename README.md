# React Router(라우터/ 데이터 받아오기/ 테마모드)
[App] : 출력할 컴포넌트 불러옴   
[routes]: 컴포넌트를 불러와서 한 파일로 내보낼 수 있도록 만들어줌   
[Home]: 테마모드 적용(라이트/다크)   
```
[themes 폴더]
- Theme : 라이트, 다크 모드에 해당하는 스타일 지정해서 내보내줌   
- Globalstyle : Styled Components에서 제공하는 createGlobalStyle 함수로 전역 스타일 지정   
- ThemeToggle : 테마 모드가 변경 될 수 있도록 props를 받아옴   
```
[News]: 탭 메뉴 클릭시 해당 기사의 데이터를 불러옴   
[Users] : 렌더링 될 때 데이터 값을 불러옴   
[UserList] : 데이터 값들 중 name에 해당하는 데이터를 출력해줌   
[User]: 서브 라우터 정보   
<br />


## 🤩useParams
- URL 인자들의 key/value(키/값) 짝들의 객체를 반환한다.   
- 현재 라우트의 match.params에 접근하기 위해 사용한다.   
- 라우트 컴포넌트에 path속성에서 URL을 파라미터로써 값을 받는 객체를 useParams()를 통해 접근할 수 있다.
- 파라미터 개수는 여러개여도 상관없다. ex) Route path="/:id/:abc/:country"   
 
- 사용 예시   
```javaScript
    import {useParams} from 'react-router-dom';   
    const {id} = useParams(); //id는 임의로 지정가능    
```
```javaScript
    <Route path="/users/:id" /> //라우트 연결 
```
<br />


### ✔ 데이터를 불러와서 map함수로 변환할 때 신경써야 할 부분

데이터를 받아와 map함수로 렌더링 해줄 때,   
map함수를 쓰기 전 뽑아낼 데이터를 조회하여, 그 값이 없을 때 null이 아닌지 검사해야 한다.   

```javaScript
    if(!articles) return null;
```
이 작업을 하지 않으면 아직 데이터가 넘어오지 않았을 때, null에는 함수가 없기 때문에   
렌더링 과정에 오류가 발생하기 때문!!   
<br />

### ✔path에 /:category? 와 같은 형태   
- category 값이 선택적(있을 수도 있고 없을 수도 있다)이라는 의미  
- category URL 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주.   
<br />   


## 🤩테마 모드 적용하기
Styled-components의 ThemeProvider를 사용해 테마모드를 적용해보았다.   
- ThemeProvider의 작동 방식은 Context API를 기반으로 이루어져 있다.   
- ThemeProvider로 감싸진 자식 Component들은 ThemeProvider로 전달받은 theme를 props로 전달받아서 사용이 가능하다.   
 
```javaScript
//[Home.jsx]
function Home({children}){
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <HomeMode themeMode={themeMode}></HomeMode>
            <ThemeToggle toggleTheme={toggleTheme} themeMode={themeMode}>{children}</ThemeToggle>
        </ThemeProvider>
    );
}
```
<br />   


### ✔ createGlobalStyle 함수를 사용해서 전역 스타일로 한번에 관리가능!   
### ✔ styled-reset은 css를 초기화!   

```javaScript
//[GlobalStyle.jsx]
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background: ${({ theme }) => theme.bgColor};
        color: ${( { theme } ) => theme.textColor};
        border: 1px soild ${( { theme } ) => theme.borderColor};
    }
`;
```
