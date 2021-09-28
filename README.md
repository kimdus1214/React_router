# React Router
[App] : 출력할 컴포넌트 불러옴   
[routes]: 컴포넌트를 불러와서 한 파일로 내보낼 수 있도록 만들어줌   
[Users] : 렌더링 될 때 데이터 값을 불러옴
[UserList] : 데이터 값들 중 name에 해당하는 데이터를 출력해줌
[User]: 서브 라우터 정보   
<br />


## useParams
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

### ✔path에 /:category? 와 같은 형태는 category 값이 선택적(있을 수도 있고 없을 수도 있다)이라는 의미  
category URL 파라미터가 없다면 전체 카테고리를 선택한 것으로 간주.
