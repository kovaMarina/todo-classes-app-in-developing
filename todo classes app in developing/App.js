'use strict';
class App{
    constructor({Control,Layout}) {
        this.control = Control
        this.layout = Layout

        this.getElemControl(this.control.msg)
    }

    getElemControl({msgTitle,msgText}) {
        this.layout.totext.textContent = msgText
    }

}


