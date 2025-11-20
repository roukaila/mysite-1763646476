class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .footer {
          background-color: #111827;
          color: #d1d5db;
          padding: 60px 0 30px 0;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-section h3 {
          color: white;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 12px;
        }
        
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: white;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 30px;
          text-align: center;
        }
        
        .social-links {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .social-links a {
          color: #d1d5db;
          transition: color 0.3s ease;
        }
        
        .social-links a:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Logiciel Pro</h3>
              <p>La plateforme tout-en-un pour automatiser vos processus métier et booster votre productivité.</p>
          </div>
          
          <div class="footer-section">
            <h3>Produit</h3>
            <ul class="footer-links">
              <li><a href="#fonctionnalites">Fonctionnalités</a></li>
              <li><a href="#integrations">Intégrations</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#documentation">Documentation</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Entreprise</h3>
            <ul class="footer-links">
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#carrieres">Carrières</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Support</h3>
            <ul class="footer-links">
              <li><a href="#aide">Centre d'aide</a></li>
              <li><a href="#securite">Sécurité</a></li>
              <li><a href="#confidentialite">Confidentialité</a></li>
              <li><a href="#conditions">Conditions</a></li>
            </ul>
          </div>
          </div>
          
          <div class="footer-bottom">
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
            </div>
            <p>&copy; 2024 Logiciel Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);