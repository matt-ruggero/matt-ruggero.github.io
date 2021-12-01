document.addEventListener('DOMContentLoaded', function() {
    
    function sumir(){
        x.classList.remove('dir')
        x.classList.add('hidden')
    }
    
    roupa = document.querySelector('.roupa')
    controle = document.querySelector('.controle')
    rosquinha = document.querySelector('.rosquinha')
    acessorio = document.querySelector('.acessorio')
    etc = document.querySelector('.outros')

    header = document.querySelector('header')

    roupa.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/x_vermelho.png'
        img.classList.add('x')

        x.style.position = 'fixed'
        x.style.width = '30rem'
        x.style.height = '30rem'
        x.style.background = 'white'
        x.style.textAlign = 'center'
        x.style.top = '25rem'
        x.style.left = '25%'
        x.style.fontSize = '4rem'
        x.style.color = '#535863'
        x.innerHTML = 'Essa funcionalidade ainda não foi implementada'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })

    controle.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/x_vermelho.png'
        img.classList.add('x')

        x.style.position = 'fixed'
        x.style.width = '30rem'
        x.style.height = '30rem'
        x.style.background = 'white'
        x.style.textAlign = 'center'
        x.style.top = '25rem'
        x.style.left = '25%'
        x.style.fontSize = '4rem'
        x.style.color = '#535863'
        x.innerHTML = 'Essa funcionalidade ainda não foi implementada'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })

    acessorio.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/x_vermelho.png'
        img.classList.add('x')

        x.style.position = 'fixed'
        x.style.width = '30rem'
        x.style.height = '30rem'
        x.style.background = 'white'
        x.style.textAlign = 'center'
        x.style.top = '25rem'
        x.style.left = '25%'
        x.style.fontSize = '4rem'
        x.style.color = '#535863'
        x.innerHTML = 'Essa funcionalidade ainda não foi implementada'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })

    rosquinha.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/x_vermelho.png'
        img.classList.add('x')

        x.style.position = 'fixed'
        x.style.width = '30rem'
        x.style.height = '30rem'
        x.style.background = 'white'
        x.style.textAlign = 'center'
        x.style.top = '25rem'
        x.style.left = '25%'
        x.style.fontSize = '4rem'
        x.style.color = '#535863'
        x.innerHTML = 'Essa funcionalidade ainda não foi implementada'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })

    etc.addEventListener('click', function(event){
        x = document.createElement('div')
        img = document.createElement('img')
        
        img.src = 'Imagens/x_vermelho.png'
        img.classList.add('x')

        x.style.position = 'fixed'
        x.style.width = '30rem'
        x.style.height = '30rem'
        x.style.background = 'white'
        x.style.textAlign = 'center'
        x.style.top = '25rem'
        x.style.left = '25%'
        x.style.fontSize = '4rem'
        x.style.color = '#535863'
        x.innerHTML = 'Essa funcionalidade ainda não foi implementada'
        
        x.classList.add('dir')
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })
})