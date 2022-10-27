# Moving Estate
* [[Figma](https://www.figma.com/file/etjqKd2owOjZVh6O5ZGmha/Moving-Estate)]

## Requirements
* NodeJS v18
* Yarn

## Usage
* Run `yarn install` to fetch all dependencies
* Run `yarn start:server` to start Back-End in dev mode
* In separate terminal run `yarn start:client` to start Front-nd in dev mode

## Docker usage
* Run `docker build .`
* Run `docker images` to see the list of Docker images and copy id of last created image
* Run `docker run -it -p 80:80 copied_id`. -it is an optional param for joining into interactive console after running the container