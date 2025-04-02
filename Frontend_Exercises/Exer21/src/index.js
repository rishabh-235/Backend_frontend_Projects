let titleElement = document.getElementById('title');
let textAreaTextElement = document.getElementById('writing_area')
let flagElement = document.getElementById('flag');
let title = "Untitle";
let textAreaText = '';
let autoSave = false;

if(localStorage['title']!==undefined)
{
    title = localStorage['title'];
}

if(localStorage['autosave-data']!==undefined)
{
    textAreaText = localStorage['autosave-data'];
}

if(localStorage['auto-save']!==undefined)
{
    autoSave = (localStorage['auto-save'] === 'true');
}

titleElement.value = title;
textAreaTextElement.value = textAreaText;
if(autoSave===true)
{
    flagElement.className = 'text-[1.2rem] font-[600] text-green-600';
    flagElement.innerHTML = 'ON';
}
else
{
    flagElement.className = 'text-[1.2rem] font-[600] text-red-600';
    flagElement.innerHTML = 'OFF';
}

titleElement.addEventListener("input", (e)=>{
    title = e.target.value;
    if(title==='')title = 'Untitle';
    localStorage['title']=title;
})

textAreaTextElement.addEventListener("input", (e)=>{
    textAreaText = e.target.value;
})

function handleToggle(){
    if(autoSave===true)
    {
        autoSave = false;
        flagElement.className = 'text-[1.2rem] font-[600] text-red-600';
        flagElement.innerHTML = 'OFF';
    }
    else
    {
        autoSave = true;
        flagElement.className = 'text-[1.2rem] font-[600] text-green-600';
        flagElement.innerHTML = 'ON';
    }

    localStorage['auto-save'] = autoSave;
}

setInterval(()=>{
    if(autoSave===true)localStorage['autosave-data'] = textAreaText;
}, 1000)
