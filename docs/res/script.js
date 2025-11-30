
    // Particles animation
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(particle);
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Modal functionality
    const pixModal = document.getElementById('pixModal');
    const minecraftModal = document.getElementById('minecraftModal');
    const modsModal = document.getElementById('modsModal');
    const tierButtons = document.querySelectorAll('.tier-btn');

    tierButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const values = ['R$10', 'R$25', 'R$50', 'R$100'];
        document.getElementById('modalValue').textContent = values[index];
        pixModal.style.display = 'flex';
      });
    });

    function openMinecraftModal() {
      minecraftModal.style.display = 'flex';
    }

    function openModsModal() {
      modsModal.style.display = 'flex';
    }

    function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
    }

    window.addEventListener('click', (e) => {
      if (e.target === pixModal) {
        pixModal.style.display = 'none';
      }
      if (e.target === minecraftModal) {
        minecraftModal.style.display = 'none';
      }
      if (e.target === modsModal) {
        modsModal.style.display = 'none';
      }
    });

    function copyPix() {
      const pixKey = document.getElementById('pixKey').textContent;
      navigator.clipboard.writeText(pixKey).then(() => {
        const copyText = document.getElementById('copyText');
        copyText.textContent = '✅ Copiado!';
        setTimeout(() => {
          copyText.textContent = '📋 Copiar Chave';
        }, 2000);
      });
    }