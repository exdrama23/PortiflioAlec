//-----------------Animação-------------------

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.observe(el);
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animate-on-scroll").forEach((el) => {
    gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
});




//-----------------paginação-------------------

let projetoAtual = 1;
const totalProjetos = 4;

function mostrarProjeto(n) {
  if (n === projetoAtual) return;

  const atual = document.getElementById(`projeto-${projetoAtual}`);
  const novo = document.getElementById(`projeto-${n}`);


  atual.classList.remove('ativo');
  atual.classList.add('animando-sair');

  setTimeout(() => {
    atual.classList.remove('animando-sair');
    atual.style.display = 'none';


    novo.style.display = 'grid';
    novo.classList.add('animando-entrar', 'ativo');

    setTimeout(() => {
      novo.classList.remove('animando-entrar');
    }, 400);
  }, 400);

  projetoAtual = n;
  atualizarBotoes();
}

function proximoProjeto() {
  let proximo = projetoAtual + 1;
  if (proximo > totalProjetos) proximo = 1;
  mostrarProjeto(proximo);
}

function anteriorProjeto() {
  let anterior = projetoAtual - 1;
  if (anterior < 1) anterior = totalProjetos;
  mostrarProjeto(anterior);
}

function atualizarBotoes() {
  for (let i = 1; i <= totalProjetos; i++) {
    const botao = document.getElementById(`btn-${i}`);
    if (botao) {
      botao.classList.remove('ativo');
    }
  }

  const botaoAtual = document.getElementById(`btn-${projetoAtual}`);
  if (botaoAtual) {
    botaoAtual.classList.add('ativo');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const primeiroProjeto = document.getElementById('projeto-1');
  if (primeiroProjeto) {
    primeiroProjeto.style.display = 'grid';
    primeiroProjeto.classList.add('ativo');
  }
  atualizarBotoes();
});

