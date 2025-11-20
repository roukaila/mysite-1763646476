class CustomNavigation extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .navigation {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #1e40af;
          text-decoration: none;
        }
        
        .nav-menu {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 32px;
        }
        
        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #1e40af;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
          }
          
          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      </style>
      
      <nav class="navigation">
        <div class="nav-container">
          <div class="nav-content">
            <a href="index.html" class="logo">Logiciel Pro</a>
            
            <ul class="nav-menu">
              <li><a href="#comparaison" class="nav-link">Fonctionnalités</a></li>
              <li><a href="#integrations" class="nav-link">Intégrations</a></li>
              <li><a href="#tarifs" class="nav-link">Tarifs</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
              <li><a href="#essai-gratuit" class="nav-link" style="background-color: #1e40af; color: white; padding: 8px 16px; border-radius: 6px;">Essai Gratuit</a></li>
            </ul>
            
            <button class="mobile-menu-btn">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
      </nav>
    `;
    
    // Mobile menu functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navMenu = this.shadowRoot.querySelector('.nav-menu');
    
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      feather.replace();
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = this.shadowRoot.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

customElements.define('custom-navigation', CustomNavigation);