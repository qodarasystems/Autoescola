import "./App.css"
import Carousel from "./components/Carousel"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"



function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <div className="logo-icon">🚗</div>
              <span className="logo-text">AUTOESCOLA BRASIL</span>
            </div>
          </div>

          {/* Botão sanduíche */}
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <RxHamburgerMenu />
          </button>

          {/* Botão fullscreen */}
          {menuOpen && (
            <div className="mobile-overlay">
              <button className="close-btn" onClick={() => setMenuOpen(false)}>
                 <FaTimes />
              </button>
                <nav className="mobile-menu">
                  <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
                  <a href="#plans" onClick={() => setMenuOpen(false)}>Cursos</a>
                  <a href="#footer" onClick={() => setMenuOpen(false)}>Sobre</a>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>

                  {/* CTA dentro do menu */}
                  <button className="cta-button" onClick={() => setMenuOpen(false)}>MATRICULE-SE</button>
                </nav>
            </div>
          )}

          {/* CTA botão fixo no desktop */}
          <button className="cta-button">MATRICULE-SE</button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Sua Carteira
                <br />
                Começa
                <br />
                <span className="highlight">AQUI!</span>
              </h1>
              <button className="hero-cta">FAÇA SUA MATRÍCULA</button>
            </div>
            <div className="hero-image">
               <Carousel />
            </div>
          </div>

          <div className="hero-cards">
            <div className="hero-card primary">
              <h3>
                Inscreva-se
                <br />
                Agora
              </h3>
              <p>Primeira habilitação com aulas teóricas e práticas completas</p>
              <button className="card-button">MATRICULAR</button>
            </div>
            <div className="hero-card secondary">
              <h3>
                Aulas
                <br />
                Online
              </h3>
              <p>Curso teórico 100% online com certificado reconhecido pelo DETRAN</p>
              <button className="card-button">COMEÇAR</button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans" id="plans">
        <div className="container">
          <div className="plans-grid">
            <div className="plan-card">
              <h3>Categoria A</h3>
              <div className="price">R$ 890,00</div>
              <p>Habilitação para motocicletas</p>
              <div className="plan-features">
                <p>✓ 45h aulas teóricas</p>
                <p>✓ 20h aulas práticas</p>
                <p>✓ Simulador incluído</p>
              </div>
              <button className="plan-button">ESCOLHER</button>
            </div>
            <div className="plan-card featured">
              <h3>Categoria B</h3>
              <div className="price">R$ 1.290,00</div>
              <p>Habilitação para carros</p>
              <div className="plan-features">
                <p>✓ 45h aulas teóricas</p>
                <p>✓ 25h aulas práticas</p>
                <p>✓ Carro escola incluso</p>
              </div>
              <button className="plan-button">ESCOLHER</button>
            </div>
            <div className="plan-card">
              <h3>Categoria AB</h3>
              <div className="price">R$ 1.890,00</div>
              <p>Habilitação completa</p>
              <div className="plan-features">
                <p>✓ 45h aulas teóricas</p>
                <p>✓ 45h aulas práticas</p>
                <p>✓ Carro e moto inclusos</p>
              </div>
              <button className="plan-button">ESCOLHER</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Instrutores qualificados</h3>
              <p>Profissionais credenciados pelo DETRAN com anos de experiência</p>
              <button className="feature-button">CONHECER</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Frota moderna</h3>
              <p>Veículos novos e bem conservados para suas aulas práticas</p>
              <button className="feature-button">VER FROTA</button>
            </div>
            <div className="feature-card yellow">
              <div className="feature-icon">📱</div>
              <h3>App exclusivo</h3>
              <p>Agende suas aulas e acompanhe seu progresso pelo aplicativo</p>
              <button className="feature-button">BAIXAR</button>
            </div>
            <div className="feature-card yellow">
              <div className="feature-icon">📋</div>
              <h3>Exame psicotécnico</h3>
              <p>Realizamos todos os exames necessários em nossa sede</p>
              <button className="feature-button">AGENDAR</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Aulas Teóricas</h3>
              <p>Curso completo de legislação de trânsito, direção defensiva e primeiros socorros</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚙</div>
              <h3>Aulas Práticas</h3>
              <p>Treinamento prático com instrutores experientes em veículos seguros</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Renovação CNH</h3>
              <p>Processo completo de renovação da carteira de motorista</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⬆️</div>
              <h3>Mudança de Categoria</h3>
              <p>Adição de nova categoria à sua habilitação existente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
             <h2 className="section-title">Entre em contato</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>Tire suas dúvidas</p>
              <p>
                <strong>(11) 99999-9999</strong>
              </p>
              <a href="https://wa.me/5511919223489"><button className="contact-button">CHAMAR</button></a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>Entre em contato</p>
              <p>
                <strong>contato@autoescolabrasil.com</strong>
              </p>
              <button className="contact-button">ENVIAR</button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Endereço</h3>
              <p>Venha nos visitar</p>
              <p>
                <strong>
                  Av. Principal, 456
                  <br />
                  Centro - São Paulo/SP
                </strong>
              </p>
              <button className="contact-button">VER MAPA</button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <div className="map-info">
              <h3>Nossa Localização</h3>
              <p>
                Estamos localizados no centro da cidade, com fácil acesso por transporte público e estacionamento
                próprio.
              </p>
              <div className="location-details">
                <p>
                  <strong>Horário de Funcionamento:</strong>
                </p>
                <p>Segunda a Sexta: 7h às 19h</p>
                <p>Sábado: 8h às 16h</p>
              </div>
            </div>
            <div className="map-placeholder">
              <a href="https://www.google.com.br/maps/@-23.5654102,-46.4910571,15z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                  <img src="/mapa.png?height=300&width=500" alt="Mapa da localização da autoescola" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>AUTOESCOLA BRASIL</h4>
              <p>Sua carteira de motorista com segurança e qualidade</p>
              <p>Credenciada pelo DETRAN-SP</p>
            </div>
            <div className="footer-section">
              <h4>Horários</h4>
              <p>Segunda a Sexta: 7h às 19h</p>
              <p>Sábado: 8h às 16h</p>
              <p>Domingo: Fechado</p>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>(11) 99999-9999</p>
              <p>contato@autoescolabrasil.com</p>
              <p>Av. Principal, 456 - Centro</p>
            </div>
            <div className="footer-section">
              <h4>Serviços</h4>
              <p>Primeira Habilitação</p>
              <p>Renovação CNH</p>
              <p>Mudança de Categoria</p>
              <p>Aulas de Reciclagem</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Autoescola Brasil. Todos os direitos reservados. | Credenciada DETRAN-SP</p>
          </div>
        </div>
      </footer>


       <a
  href="https://wa.me/5511919223489"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
      >
     🟢 WhatsApp
    </a>
    </div>
  )
}

export default App
