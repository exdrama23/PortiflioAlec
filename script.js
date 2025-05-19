

function mostrarProjeto(id) {
  const projetos = document.querySelectorAll('.projeto-card');
  projetos.forEach(p => p.classList.remove('ativo'));
  document.getElementById('projeto-' + id).classList.add('ativo');
}





  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".projeto-card").forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });



gsap.from("header .logo", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "header",
    start: "top 80%",
  }
});

gsap.utils.toArray("[data-animar]").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
});
