import React from "react";
import Logo from '../images/logo sapatilla.png'

const Sobre = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.brand}>
        <img src={Logo} style={styles.logo} alt="" />
          <h2 style={styles.brandName}>Sapatilla</h2>
        </div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Loja</a>
          <a href="/about" style={styles.link}>Sobre</a>
          <a href="#" style={styles.link}>Contato</a>
          <a href="#" style={styles.link}>Journal</a>
          <div style={styles.iconGroup}>
            <button style={styles.iconButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                />
              </svg>
            </button>
            <button style={styles.iconButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,50.15-16H216a8,8,0,0,0,8-7.34l8-112A8,8,0,0,0,222.14,58.87ZM79.62,160,69.73,112H186.27l-9.89,48Zm116,48a12,12,0,1,1,12-12A12,12,0,0,1,195.62,208Zm-112,0a12,12,0,1,1,12-12A12,12,0,0,1,83.62,208Zm98.46-56H74.92L64.1,72H207.9Z"
                />
              </svg>
            </button>
            <button style={styles.iconButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M240,216a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8,40,40,0,0,1,80,0Zm-24-80a40,40,0,1,0-40,40A40,40,0,0,0,216,136ZM96,160a40,40,0,1,0-40,40A40,40,0,0,0,96,160Zm48-40a8,8,0,0,0-8-8H8A8,8,0,0,0,8,136a40,40,0,0,0,80,0,8,8,0,0,0-8-8H64a56.06,56.06,0,0,1-48,0ZM128,96a8,8,0,0,0,8-8,40,40,0,0,0-80,0,8,8,0,0,0,8,8H80a56.06,56.06,0,0,1,48,0Zm16,8h48a8,8,0,0,0,8-8,40,40,0,0,0-80,0,8,8,0,0,0,8,8A56.06,56.06,0,0,1,144,104Zm48-16a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8,40,40,0,0,0-80,0,8,8,0,0,0,8,8A56.06,56.06,0,0,1,192,88Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <img 
          src="https://via.placeholder.com/1200x400" 
          alt="Sapatilla Storefront" 
          style={styles.heroImage} 
        />
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>Bem Vindo a Sapatilla</h2>
          <p style={styles.heroSubtitle}>
            Localizada no interior de São Paulo, nossa loja principal é uma celebração da nossa cidade, da nossa comunidade e do nosso amor por sapatos. A partir do momento em que você entrar, você se sentirá em casa. Estamos aqui para ajudá-lo. Mal podemos esperar para conhecê-lo.
          </p>
          <button style={styles.button}>Visit Us</button>
        </div>
      </section>

      <section style={styles.storeSection}>
        <h2 style={styles.sectionTitle}>Nossa Loja</h2>
        <img 
          src="https://via.placeholder.com/1200x600" 
          alt="Inside Sapatilla Store" 
          style={styles.storeImage} 
        />
      </section>

      <section style={styles.hoursSection}>
        <h2 style={styles.sectionTitle}>Horário de Funcionamento</h2>
        <div style={styles.hours}>
          <div style={styles.day}>
            <span style={styles.dayName}>Segunda-feira</span>
            <span style={styles.dayHours}>10:00am - 7:00pm</span>
          </div>
          <div style={styles.day}>
            <span style={styles.dayName}>Terça-feira</span>
            <span style={styles.dayHours}>10:00am - 7:00pm</span>
          </div>
          <div style={styles.day}>
            <span style={styles.dayName}>Quarta-feira</span>
            <span style={styles.dayHours}>10:00am - 7:00pm</span>
          </div>
          <div style={styles.day}>
            <span style={styles.dayName}>Quinta-feira</span>
            <span style={styles.dayHours}>10:00am - 7:00pm</span>
          </div>
          <div style={styles.day}>
            <span style={styles.dayName}>Sexta-feira</span>
            <span style={styles.dayHours}>10:00am - 7:00pm</span>
          </div>
          <div style={styles.day}>
            <span style={styles.dayName}>Sábado</span>
            <span style={styles.dayHours}>10:00am - 7:00pm</span>
          </div>
          <div style={styles.day}>
            <span style={styles.dayName}>Domingo</span>
            <span style={styles.dayHours}>11:00am - 6:00pm</span>
          </div>
        </div>
      </section>


      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>Loja</a>
          <a href="#" style={styles.footerLink}>Sobre</a>
          <a href="#" style={styles.footerLink}>Contato</a>
          <a href="#" style={styles.footerLink}>Journal</a>
        </div>
        <div style={styles.socialLinks}>
          <a href="#" style={styles.footerLink}>Instagram</a>
          <a href="#" style={styles.footerLink}>Twitter</a>
          <a href="#" style={styles.footerLink}>Facebook</a>
        </div>
        <p style={styles.footerText}>©2024 Sapatilla</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "20px",
    marginRight: "10px",
  },
  brandName: {
    fontSize: "1.5em",
    color: "#333",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#333",
  },
  iconGroup: {
    display: "flex",
  },
  iconButton: {
    margin: "0 10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  hero: {
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  heroImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  heroText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  logo: {
    width: "50px",
    height: "20px",
    marginRight: "10px",
  },
  heroTitle: {
    fontSize: "2.5em",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "1em",
    borderRadius: "5px",
  },
  storeSection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  storeImage: {
    width: "100%",
    height: "600px",
    objectFit: "cover",
  },
  hoursSection: {
    padding: "40px 20px",
    textAlign: "center",
  },
  hours: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  day: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "5px 0",
  },
  dayName: {
    fontSize: "1.2em",
    color: "#333",
  },
  dayHours: {
    fontSize: "1.2em",
    color: "#555",
  },
  footer: {
    padding: "20px 0",
    backgroundColor: "#f8f8f8",
    textAlign: "center",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "10px",
  },
  footerLink: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#333",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "10px",
  },
  footerText: {
    fontSize: "1em",
    color: "#777",
  },
};

export default Sobre;