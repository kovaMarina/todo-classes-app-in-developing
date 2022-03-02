'use strict';

class Control {
    constructor() {
        this.control = document.querySelector( '.control' )
        this.valTitle = ''
        this.valText = ''
        this.msg = {
            msgTitle : '',
            msgText : ''
        }
        this.getElem()


    }

    getElem() {
        let { title, text, submit } = this.control.querySelector( '.form' )
        this.init( { title, text, submit } )
    }
    // _getElem({obj}) {
    //     console.log( { obj } )
    // }

    init( { title, text, submit } ) {
        submit.addEventListener( 'click', this.submitHandler.bind(this))
        title.addEventListener('input', this.inputTitleHandler.bind(this))
        text.addEventListener('input', this.inputTextHandler.bind(this))

    }
    submitHandler(e) {
        e.preventDefault()
        this.msg.msgTitle = this.valTitle
        this.msg.msgText = this.valText
        console.log(this.msg)




    }
    inputTitleHandler(e){
        e.preventDefault()
        const{value} = (e.target)
        this.valTitle+=value
    }
    inputTextHandler(e){
        const{value} = (e.target)
        this.valText+=value
    }
}
