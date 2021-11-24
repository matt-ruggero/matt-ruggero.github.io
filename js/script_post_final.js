document.addEventListener('DOMContentLoaded', function() {
    postar = document.querySelector('.postar')
    salvar = document.querySelector('.dwnl')
    main = document.querySelector('main')

    function sumir(){
        x.classList.remove('dir')
        x.classList.add('hidden')
    }

    postar.addEventListener('click', function(event){
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
        x.innerHTML = 'Foi postado'

        x.classList.add('dir')
        x.appendChild(img)
        main.appendChild(x)

        setTimeout(sumir, 2000)
    })

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
        main.appendChild(x)

        setTimeout(sumir, 2000)
    })
})