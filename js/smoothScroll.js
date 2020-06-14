'use strict';

{
    // * 平滑滚动
    class SmoothScroll {
        constructor() {
            // 元素初始化
            this.initElem();
            // 常量初始化
            this.initConst();
            // 初始化并绑定事件
            this.initEvents();
        }
        initElem() {
            // 可滚动元素
            this.page = document.querySelector('div[data-scroll]');
            this.footer = document.querySelector('.homepage-footer');
            this.copyright = this.footer.querySelector('.copyright');
        }
        initConst() {
            // 缓动速度（秒）
            this.EASE_SPEED = 1.5;
            // 页面加载完成后的动画时间（来自 loader.js 的ANIMATION_TIME）
            this.PAGE_LOADED_ANIMATION_TIME = .5;
            // 页面滚动的缓动类型
            this.EASE = Power3.easeOut;
            // footer高度
            this.FOOTER_HEIGHT = parseInt(getComputedStyle(this.footer, null).getPropertyValue('height'));
        }
        // * 事件监听初始化
        initEvents() {
            this.listenPageLoadedEvent();
        }

        listenPageLoadedEvent() {
            const pageLoadedEvent = () => {
                // 页面加载完成后开始循环渲染滚动页面
                setTimeout(() => {
                    this.render();
                    window.removeEventListener('load', pageLoadedEvent);
                }, this.PAGE_LOADED_ANIMATION_TIME * 1000);
            };
            window.addEventListener('load', pageLoadedEvent);
        }

        // * 渲染滚动页面
        render() {
            const frame = () => {
                this.pageScroll();
                // this.copyrightFixed();
                // 循环下去
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        }

        pageScroll() {
            // 使内容滚动
            TweenLite.to(this.page, this.EASE_SPEED, {
                y: -this.getPageScrollTop(),
                ease: this.EASE
            });
        }
        copyrightFixed() {
            const top = this.footer.getBoundingClientRect().top;

            const footerShowingTop = (document.documentElement.clientHeight || window.innerHeight) - top;
            // 提前100px进行文字的相对窗口固定
            if (footerShowingTop > -100) {
                TweenLite.set(this.copyright, {
                    y: footerShowingTop - this.FOOTER_HEIGHT
                })
            }
        }

        // * 获得当前的页面滚动高度
        getPageScrollTop() {
            return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        }
    }

    // 开启SmoothScroll

    new SmoothScroll();


}