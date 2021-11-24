document.addEventListener('DOMContentLoaded', function() {
    salvar = document.querySelector('.salvar')
    compartilhar = document.querySelector('.compartilhar')
    header = document.querySelector('header')

    function sumir(){
        x.classList.remove('dir')
        x.classList.add('hidden')
    }

    salvar.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/Check.png'
        img.classList.add('check')

        x.style.position = 'fixed'
        x.style.width = '20rem'
        x.style.height = '20rem'
        x.style.background = '#789AE3'
        x.style.textAlign = 'center'
        x.style.left = '35%'
        x.style.top = '40%'
        x.style.fontSize = '3rem'
        x.style.color = '#535863'
        x.innerHTML = 'Foi salvo'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })

    compartilhar.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/Check.png'
        img.classList.add('check')

        x.style.position = 'fixed'
        x.style.width = '20rem'
        x.style.height = '20rem'
        x.style.background = '#789AE3'
        x.style.textAlign = 'center'
        x.style.left = '35%'
        x.style.top = '40%'
        x.style.fontSize = '3rem'
        x.style.color = '#535863'
        x.innerHTML = 'Foi compartilhado'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })
})