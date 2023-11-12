#### Vanilla JS로 Three.js를 학습 중 React를 활용하여 모델을 렌더링하는 것을 넘어, GUI를 도입해 실제 모델을 세밀하게 제어하고 싶었습니다. 웹에서 제공되는 모델에 대한 GUI 컨트롤러를 도입함으로써 모델을 더 자세히 관찰하고 다양한 조작이 가능하도록 만들고자 했습니다.

## [Demo Web Site](https://3d-modeling-rg5668.vercel.app/)

#### 프로젝트 실행 방법

```sh
git clone https://github.com/rg5668/3d-modeling.git
```

```sh
npm install || yarn install
```

```sh
npm run start || yarn run start
```

#### 사용 라이브러리

- @react-three/drei: React와 함께 Three.js를 사용할 때 편리한 기능을 제공 및 미리 구현된 Compontnets가 있어 편리하게 재사용이 가능한 라이브러리
- @react-three/fiber: component 기반 방식으로 사용할 수 있게 한다. jsx를 가져와 캔버스 용 three.js 코드로 변환
- react-dat-gui: GUI를 통해 Three.js 설정을 동적으로(메쉬, 카메라의 속성, 조명 등) 변경 가능

#### 스크린샷

![스크린샷1](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2237ee6e-6bbd-4a81-a5dc-e4ac1105efc3%2F3615b545-dc56-46a6-bea9-e51af7a95cc5%2F1.png?table=block&id=08260ffc-243e-44e4-bf23-377675ef0164&spaceId=2237ee6e-6bbd-4a81-a5dc-e4ac1105efc3&width=2000&userId=59d6ba76-b67a-4b49-9a30-76aaeca4c97c&cache=v2)
![스크린샷2](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2237ee6e-6bbd-4a81-a5dc-e4ac1105efc3%2F1da349e0-2054-4b81-8f03-6698135e917c%2F2.png?table=block&id=e7d55846-e67e-48d0-981b-d57d79c4cc23&spaceId=2237ee6e-6bbd-4a81-a5dc-e4ac1105efc3&width=2000&userId=59d6ba76-b67a-4b49-9a30-76aaeca4c97c&cache=v2)

#### 시연영상

- [시연영상](https://youtu.be/RiX9FWE9Apc)
