'use strict';

// ! 因为性能问题，已禁用该js脚本

if (1) {
    class Float {
        constructor() {
            this.initProp();
            this.initEvent();
        }
        initProp() {
            this.clientWidth = document.documentElement.clientWidth;
            this.clientHeight = document.documentElement.clientHeight;
            this.SPEED = 1;
        }
        initEvent() {
            window.addEventListener('resize', () => {
                this.clientWidth = document.documentElement.clientWidth;
                this.clientHeight = document.documentElement.clientHeight;
            })

            // 监听鼠标移动
            document.addEventListener('mousemove', e => {
                this.clientX = e.clientX;
                this.clientY = e.clientY;
            }, {
                passive: true
            });
        }
        addFloat(elems, level) {
            if (!Array.isArray(elems)) {
                this.float(elems, level);
            } else {
                elems.forEach(elem => {
                    this.float(elem, level);
                });
            }
            // 连缀语法
            return this;
        }
        float(elem, level) {
            const frame = () => {
                TweenLite.to(elem, this.SPEED, {
                    x: (this.clientWidth / 2 - this.clientX) * level * 0.1,
                    y: (this.clientHeight / 2 - this.clientY) * level * 0.1,
                    ease: Power3.easeOut
                });
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        }
    }

    const hero = document.querySelector('.hero');

    const float = new Float();
    float.addFloat(hero, 2)
    // .addFloat(background, 1)
    // .addFloat(engTitle, .5)
}