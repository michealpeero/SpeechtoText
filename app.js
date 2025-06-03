const dropDownnLis=document.querySelector('#dropdown')
const textArea=document.querySelector('#textArea')
const startBut=document.querySelector('.start')
const endBut=document.querySelector('.end')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
   recognition.lang='en-US'

dropDownnLis.addEventListener('change',(e)=>{
   const userValue= dropDownnLis.value 
   recognition.lang=userValue
   
  })
   startBut.addEventListener('click',(start)=>{
    recognition.start()
    recognition.addEventListener('result',(data)=>{
        const text=data.results[0][0].transcript
        textArea.value+=text
    })
    // recognition.onresult=function(event){
    //     const text=event.results[0][0].transcript
    // textArea.value += text

    // }
    

   })

   endBut.addEventListener('click',(end)=>{
    recognition.stop()
   })