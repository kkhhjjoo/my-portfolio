'use strict';

new TypeIt('.home__description', {
    loop: true,
    speed: 100
})
.pause(1000)
.delete()
.type('꿈꾸는 풀스택 개발자입니다.')
.pause(1000)
// .move(-18)
.go();