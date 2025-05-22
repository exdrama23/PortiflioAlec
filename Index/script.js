//-----------------Animação_Scroll-------------------


  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active'); 
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); 
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

//-----------------paginação-------------------

let projetoAtual = 1;
const totalProjetos = 4;

function mostrarProjeto(novoProjeto, direcao = 'direita') {
  if (novoProjeto < 1 || novoProjeto > totalProjetos || novoProjeto === projetoAtual) 
  return;

  const atual = document.getElementById(`projeto-${projetoAtual}`);
  const proximo = document.getElementById(`projeto-${novoProjeto}`);

  atual.classList.add(direcao === 'direita' ? 'animando-sair' : 'animando-sair-direita');

  setTimeout(() => {
    atual.classList.remove('ativo');
    atual.style.display = 'none';
    atual.classList.remove('animando-sair', 'animando-sair-direita');


    proximo.style.display = 'grid';
    proximo.classList.add('ativo');
    proximo.classList.add(direcao === 'direita' ? 'animando-entrar' : 'animando-entrar-esquerda');

    setTimeout(() => {
      proximo.classList.remove('animando-entrar', 'animando-entrar-esquerda');
    }, 400);

    projetoAtual = novoProjeto;
    atualizarBotoes();
  }, 400);
}

function proximoProjeto() {
  const novo = projetoAtual === totalProjetos ? 1 : projetoAtual + 1;
  mostrarProjeto(novo, 'direita');
}

function anteriorProjeto() {
  const novo = projetoAtual === 1 ? totalProjetos : projetoAtual - 1;
  mostrarProjeto(novo, 'esquerda');
}

function atualizarBotoes() {
  for (let i = 1; i <= totalProjetos; i++) {
    const botao = document.getElementById(`btn-${i}`);
    if (botao) botao.classList.remove('ativo');
  }

  const botaoAtual = document.getElementById(`btn-${projetoAtual}`);
  if (botaoAtual) botaoAtual.classList.add('ativo');
}

document.addEventListener('DOMContentLoaded', () => {
  const primeiroProjeto = document.getElementById('projeto-1');
  if (primeiroProjeto) {
    primeiroProjeto.style.display = 'grid';
    primeiroProjeto.classList.add('ativo');
  }
  atualizarBotoes();
});
