# Goals
    * Understanding React Router.
    * Keep clean git master history.

## about npm
    * when uninstall something : 
    ''' 
    npm unistall react-router-dom
    * when install some specific version : 
    ''' 
    npm install react-router-dom@5.2

### npm v. npx
npm은 node package manager이고, npx는 node package runner라고 한다.
즉 npm을 좀 더 편하게 사용할 수 있도록 도와주는 하나의 도구.
* npx는 먼저 패키지의 경로와 버전을 확인, 있으면 그대로 실행하고 없으면 최신버전의 패키지를 설치해서 실행...node계의 흑집사군...

### npm start v. npm run start
npm start == npm run start.
npm run은 script에서 해당 property를 찾아서 실행하라는 뜻이라고 함.
npm start의 경우 script에 정의되어 있지 않다면, 디폴트오 node server.js를 실행시키도록 설정되어 있다고 함. 
*  https://docs.npmjs.com/cli/v7/commands/npm-start
