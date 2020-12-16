var socket = io()
var user
var typing=false
var timeout=undefined

$(document).ready(function(){
    $('#unit').keypress((e)=>{
    //console.log('...')
    if($("#unit").attr("placeholder")!="Username"){
    if(e.which!=13){
        typing=true
        socket.emit('typing', {user:user, typing:true})
        clearTimeout(timeout)
        timeout=setTimeout(typingTimeout, 2500)
    }else{
        clearTimeout(timeout)
        typingTimeout()
        sendMessage()
    }
    }
    })

    /*$('#abc').keypress(()=>{
    i=i+1
    console.log(i)
    })*/
    socket.on('display', (data)=>{
    if(data.typing==true)
        $('.typing').text(`${data.user} is typing...`)
    else
        $('.typing').text("")
    })
})
function typingTimeout(){
    typing=false
    socket.emit('typing', {user:user, typing:false})
}
