import React from "react";

const Sobre = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1>Sapatilla</h1>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Shop</a>
          <a href="#" style={styles.linkActive}>About</a>
          <a href="#" style={styles.link}>Contact</a>
          <a href="#" style={styles.link}>Journal</a>
          <a href="#" style={styles.icon}>🛒</a>
          <a href="#" style={styles.icon}>👤</a>
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
  linkActive: {
    margin: "0 10px",
    textDecoration: "none",
    color: "#007bff",
  },
  icon: {
    margin: "0 10px",
    fontSize: "1.5em",
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