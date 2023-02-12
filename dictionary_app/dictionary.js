let search = document.getElementById('search');
let meaning_container = document.getElementById('meaning');
let input_cont = document.getElementById('input_cont');
let audio_button = document.getElementById('micro');
search.addEventListener('click', function()
{
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input_cont.value}`)
  .then((response) => response.json())
  .then(function(data){
     console.log(data);
     meaning_container.innerHTML = `<p>Word : ${input_cont.value}</p>
     <p>Meaning : ${data[0].meanings[0].definitions[0].definition}</p>
     <p>Antonym : ${data[0].meanings[0].antonyms[0]}</p>
     <p>Synonyms : ${data[0].meanings[0].synonyms[0]}</p>`
}); 
})
audio_button.addEventListener('click', function()
{
    let utterance = new SpeechSynthesisUtterance(`${meaning_container.innerText}`);
    speechSynthesis.speak(utterance);
})
