let button = document.getElementById('load');
let quote = document.getElementById('quote');
let author = document.getElementById('author_name');
let copy = document.getElementById('copy_to_clipboard');
let text = document.getElementById('text');
let audio_button = document.getElementById('speak');
let twitter_button = document.getElementById('twitter');
let x = 0;
button.addEventListener('click', function()
{
    button.classList.add('loading');
    button.innerText = 'Loading...';
    fetch('https://type.fit/api/quotes').then(response => response.json()).then(data => {
        console.log(data);
        text.innerText = data[x].text;
        author.innerText = data[x].author;
        x++;
        button.innerText = 'Load';
        button.classList.remove('loading');
    })
})
// copy.addEventListener('click', function()
// {
//     text.ariaSelected();
// })
audio_button.addEventListener('click', function()
{
    let utterance = new SpeechSynthesisUtterance(`${text.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
})

copy.addEventListener('click', function()
{
    navigator.clipboard.writeText(text.innerText);
})
twitter_button.addEventListener('click', function()
{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${text.innerText}`;
    window.open(tweetUrl, "_blank");
})