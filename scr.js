let songnam=document.getElementById('text1');
          let progressBar = document.getElementById('bar');
          let audioElement = new Audio();
          let playButton = document.getElementById('playbutton');

          function myfunc() {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  style="margin-left:30px; margin-top: 38px; cursor: pointer;" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">\
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>\
                  </svg>';
    } else {
        audioElement.pause();
        playButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" style="margin-left:30px; color: white; margin-top: 38px; cursor: pointer;" width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> \
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/> \
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/> \
        </svg> ';
    }
}


          playButton.addEventListener('click', myfunc);

        function progupdate(){
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        progressBar.value=progress;
      }
      
      function changedur()
      {
        audioElement.currentTime=progressBar.value*audioElement.duration/100;
        
      }


      function updatesong(i)
      {
        if(i===0)
        {
          songnam.innerHTML= "MAST MAGAN";
        }
        else if(i===1)
        {
          songnam.innerHTML= "O MAAHI MAAHI RE";
        }
        else if(i===2)
        {
          songnam.innerHTML= "CHAIN NA AVE";
        }
        else if(i===3)
        {
          songnam.innerHTML= "DHOOP MAIN THANDAK";
        }
        else if (i===4)
        {
          songnam.innerHTML= "SUN SAYYIAN";
        }
        else if(i ===5)
        {
          songnam.innerHTML= "LET ME DOWN SLOWLY";
        } 
        else if(i===6){
          songnam.innerHTML= "KASAY BATAYEN";
        }
      }

        audioElement.addEventListener('timeupdate',progupdate);
        progressBar.addEventListener('change',changedur);
          
        Array.from(document.getElementsByClassName('songsss')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = parseInt(e.target.id);
        console.log(index);
        audioElement.src = `${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  style="margin-left:30px; margin-top: 38px; cursor: pointer;" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">\
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>\
                  </svg>';
        updatesong(index);
    });
  })

  document.getElementById('previous').addEventListener('click', () => {
      if (index <= 0) {
          index = 9;
      } else {
          index -= 1;
      }
      audioElement.src = `${index + 1}.mp3`; // Set the source
      console.log(index);
      audioElement.currentTime = 0;
      audioElement.play();
      playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="margin-left:30px; margin-top: 38px; cursor: pointer;" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">\
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>\
                    </svg>';
      updatesong(index);
  });
  
  document.getElementById('next').addEventListener('click', () => {
      if (index >= 9) {
          index = 1;
      } else {
          index += 1;
      }
      console.log(index);
      audioElement.src = `${index + 1}.mp3`; // Set the source
      audioElement.currentTime = 0;
      audioElement.play();
    playButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  style="margin-left:30px; margin-top: 38px; cursor: pointer;" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">\
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>\
                  </svg>';
         updatesong(index);
  })

