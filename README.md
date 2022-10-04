로컬프로젝트와 git repository 연결하기

<br>

명령어 순서

** ======================================== ** <br>
git init <br>
git remote add origin https://github.com/깃허브아이디/저장소이름.git <br>
git pull origin main <br>
** ======================================== ** <br>

여기까지 진행되면 로컬 프로젝트와 git repository가 연결됨. <br>
git init 명령어를 입력하면 바로 로컬 프로젝트에 .git 이라는 폴더가 자동으로 생성됨.

repository 연결 후 명령어

** ======================================== ** <br>
git add. <br>
git commit -m “커밋 메시지” <br>
git push origin main <br>
git push origin main <br>
** ======================================== ** <br>

명령어 입력 시 아래와 같은 오류코드 송출 시

! [rejected] main -> main (non-fast-forward) error: failed to push some refs to 'https://github.com/jaehyun-github/repoName.git' <br>
hint: Updates were rejected because the tip of your current branch is behind <br>
hint: its remote counterpart. Integrate the remote changes (e.g. <br>
hint: 'git pull ...') before pushing again. <br>
hint: See the 'Note about fast-forwards' in 'git push --help' for details. <br>

** ==== git push oirign +main 과 같이 main 앞에 + 를 붙여서 명령어를 입력하면 커밋이 됨. ==== **

<br><br>

github page 배포하기

<br><br>

React 프로젝트를 github page에 배포하기 위해서 로컬 프로젝트에 gh-pages 를 설치해야 함. <br>
배포할 React 프로젝트에서 아래의 명령어를 실행. <br>

pakage.json 파일의 맨 위

“homepage”: “https://jaehyun-github.github.io/repoName/”을 추가하고 “script” 부분에 <br>
“predeploy”: “npm run build” 와 “deploy”: “gh-pages -d build” 코드를 추가해준 후 저장해주면 됨. <br>

** ======================================== ** <br>
 "predeploy": "npm run build", <br>
 "deploy": "gh-pages -d build" <br>
** ======================================== ** <br>
    
위의 해당 코드들을 추가한 후 파일을 저장하고 터미널에서 npm run deploy 커맨드를 실행. <br>
github repository에서 해당 repository page 설정을 해준 후 나타나는 주소로 접속하면 React Project가 배포된 것을 확인 할 수 있음. <br>

프로젝트 배포 후 React Project가 아니라 README.md 파일이 나타나는 경우 <br>
Branch를 ‘main’이나 설정해둔 Branch명이 아니라 ‘gh-pages’로 지정해주면 정상적으로 React Project가 출력됨.
