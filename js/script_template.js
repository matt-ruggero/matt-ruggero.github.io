document.addEventListener('DOMContentLoaded', function() {
    
    function sumir(){
        x.classList.remove('dir')
        x.classList.add('hidden')
    }
    
    t1 = document.querySelector('.t1')
    t2 = document.querySelector('.t2')
    t3 = document.querySelector('.t3'
    )
    header = document.querySelector('header')

    t1.addEventListener('click', function(event){
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
        
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })
    
    t2.addEventListener('click', function(event){
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
        
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })
    
    t3.addEventListener('click', function(event){
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
        
        x.appendChild(img)
        header.appendChild(x)

        setTimeout(sumir, 2000)
    })

})