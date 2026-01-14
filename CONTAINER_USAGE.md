# 🚀 AWS EC2 통합 배포 가이드 (최종 완결판)

> **목표:** AWS EC2(Ubuntu)에 React + Spring Boot + Oracle DB를 Docker로 띄우고 SSL(HTTPS)까지 한 번에 적용하기

---

## 1. 서버 기초 세팅 (터미널에 복붙)
EC2에 처음 접속했다면 아래 명령어들을 순서대로 입력하여 환경을 만듭니다.

```bash
# 1. 패키지 업데이트 및 필수 설치
sudo apt update
sudo apt install -y nodejs npm git docker.io docker-compose

# 2. 도커 실행 및 권한 부여
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# (중요) 여기서 로그아웃 후 다시 접속해야 권한이 적용됩니다!
exit
# (다시 SSH 접속하세요)
```


2. 프로젝트 폴더 및 코드 준비
작업할 폴더를 만들고 깃허브에서 코드를 가져와 빌드합니다.
```bash
# 1. 폴더 생성
mkdir -p ~/my-portfolio/certbot/conf
mkdir -p ~/my-portfolio/certbot/www
cd ~/my-portfolio

# 2. 코드 다운로드 (Clone)
# 프론트엔드 (React)
git clone [https://github.com/wantraiseapomeranian/PortFolio-MINJUN.git](https://github.com/wantraiseapomeranian/PortFolio-MINJUN.git) html
# 백엔드 (Spring Boot)
git clone [https://github.com/wantraiseapomeranian/kingHeart.git](https://github.com/wantraiseapomeranian/kingHeart.git) kingHeart

# 3. React 빌드 (HTML 변환)
cd html
npm install
npm run build
# (빌드가 끝나면 다시 메인 폴더로 이동)
cd ~/my-portfolio
```

3. 설정 파일 생성 (터미널에 복붙하면 파일 생성됨)
3-1. Spring Boot용 Dockerfile 생성
아래 내용을 복사해서 터미널에 붙여넣으세요. (EOF까지 전부)
```bash
cat <<EOF > ~/my-portfolio/kingHeart/Dockerfile
FROM openjdk:17-jdk-slim AS builder
WORKDIR /app
COPY . .
RUN chmod +x ./mvnw || true
RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
EOF
```

3-2. Nginx 설정 파일 (nginx.conf) 생성
아래 내용을 복사해서 터미널에 붙여넣으세요.
```bash
cat <<EOF > ~/my-portfolio/nginx.conf
events {}

http {
    include /etc/nginx/mime.types;

    # SSL 인증서 경로
    ssl_certificate /etc/letsencrypt/live/minjun-portfolio.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/minjun-portfolio.site/privkey.pem;

    # 1. 쇼핑몰 (HTTPS)
    server {
        listen 443 ssl;
        server_name shop.minjun-portfolio.site;

        location / {
            proxy_pass http://project-shop:8080;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
        }
    }

    # 2. 메인 포트폴리오 (HTTPS)
    server {
        listen 443 ssl;
        server_name minjun-portfolio.site www.minjun-portfolio.site;
        
        location / {
            root /usr/share/nginx/html;
            index index.html;
            try_files \$uri \$uri/ /index.html;
        }
    }

    # 3. HTTP -> HTTPS 자동 이동
    server {
        listen 80;
        server_name *.minjun-portfolio.site minjun-portfolio.site;
        return 301 https://\$host\$request_uri;
    }
}
EOF
```

3-3. 통합 실행 파일 (docker-compose.yml) 생성
아래 내용을 복사해서 터미널에 붙여넣으세요.
```bash
cat <<EOF > ~/my-portfolio/docker-compose.yml
version: '3'

services:
  # 1. Nginx (웹 서버)
  nginx:
    image: nginx:latest
    container_name: nginx-server
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./html/dist:/usr/share/nginx/html
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    depends_on:
      - project-shop
    restart: always

  # 2. 쇼핑몰 (Spring Boot)
  project-shop:
    build: ./kingHeart
    container_name: shop-container
    expose:
      - "8080"
    environment:
      - TZ=Asia/Seoul
    depends_on:
      - oracle-db
    restart: always

  # 3. 데이터베이스 (Oracle)
  oracle-db:
    image: gvenzl/oracle-xe:18.4.0-slim
    container_name: oracle-container
    environment:
      ORACLE_PASSWORD: oracle
    ports:
      - "1521:1521"
    restart: always
EOF
```

4. SSL 인증서 발급 (최초 1회만)
주의: 이 단계는 80번 포트가 비어있어야 합니다. 실행 중인 Nginx가 있다면 끄고 진행하세요.
```bash
# 실행 중인 컨테이너 종료
sudo docker-compose down

# 인증서 발급 (이메일 입력 -> Y -> N 순서로 진행)
sudo docker run -it --rm --name certbot \
  -v "\$(pwd)/certbot/conf:/etc/letsencrypt" \
  -v "\$(pwd)/certbot/www:/var/www/certbot" \
  -p 80:80 \
  certbot/certbot certonly --standalone \
  -d minjun-portfolio.site \
  -d www.minjun-portfolio.site \
  -d shop.minjun-portfolio.site
```

5. 최종 실행 🚀
모든 준비가 끝났습니다. 서버를 실행합니다.

```bash
cd ~/my-portfolio
sudo docker-compose up -d --build --force-recreate
```

6. 문제 해결 (Troubleshooting)
- 로그 확인: sudo docker-compose logs -f

- DB 에러 시: Spring Boot application.properties URL이 jdbc:oracle:thin:@oracle-db:1521:xe 인지 확인하세요.

- 화면 갱신 안됨: 브라우저에서 Ctrl + Shift + R (강력 새로고침)

## 7. 🛠️ 자주 쓰는 명령어 (Cheatsheet)

| 기능 | 명령어 | 설명 |
| :--- | :--- | :--- |
| **전체 실행** | `sudo docker-compose up -d --build` | 코드 수정 후 재배포할 때 사용 (빌드 포함) |
| **전체 종료** | `sudo docker-compose down` | 모든 컨테이너를 중지하고 삭제합니다 |
| **로그 확인** | `sudo docker-compose logs -f` | 모든 서버의 로그를 실시간으로 봅니다 |
| **특정 로그** | `sudo docker-compose logs -f shop-container` | 쇼핑몰(Spring) 로그만 봅니다 |
| **상태 확인** | `sudo docker ps` | 현재 실행 중인 컨테이너 목록을 봅니다 |
| **Nginx 재시작** | `sudo docker-compose restart nginx` | Nginx 설정만 바꿨을 때 사용합니다 |
| **용량 정리** | `sudo docker system prune -a` | 사용하지 않는 이미지와 캐시를 싹 지웁니다 |