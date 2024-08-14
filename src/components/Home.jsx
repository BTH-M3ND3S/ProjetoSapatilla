import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1>Sapatilla</h1>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Loja</a>
          <a href="#" style={styles.link}>Sobre</a>
          <a href="#" style={styles.link}>Contato</a>
          <a href="#" style={styles.link}>Journal</a>
          <a href="#" style={styles.icon}>🛒</a>
          <a href="#" style={styles.icon}>👤</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <img 
          src="https://via.placeholder.com/1200x400" 
          alt="Shoe Store" 
          style={styles.heroImage} 
        />
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>Introduzindo a Sapatilla</h2>
          <p style={styles.heroSubtitle}>
            Descubra nossos estilos mais recentes e ofertas exclusivas. Além disso, ganhe frete grátis.
          </p>
          <button style={styles.button}>Compre Agora!</button>
        </div>
      </section>


      <section style={styles.collections}>
        <h2 style={styles.sectionTitle}>Coleções novas</h2>
        <p style={styles.sectionSubtitle}>
          Explore nossa seleção selecionada de produtos mais bem avaliados e mais vendidos
        </p>
        <button style={styles.button}>Compre já!</button>
        <div style={styles.collectionItems}>
          <div style={styles.collectionItem}>
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Men's Sneakers" 
              style={styles.collectionImage} 
            />
            <h3 style={styles.collectionTitle}>Men's Sneakers</h3>
            <p style={styles.collectionDescription}>Find your perfect pair</p>
          </div>
          <div style={styles.collectionItem}>
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Women's Sneakers" 
              style={styles.collectionImage} 
            />
            <h3 style={styles.collectionTitle}>Women's Sneakers</h3>
            <p style={styles.collectionDescription}>Discover the latest styles</p>
          </div>
          <div style={styles.collectionItem}>
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Kid's Sneakers" 
              style={styles.collectionImage} 
            />
            <h3 style={styles.collectionTitle}>Kid's Sneakers</h3>
            <p style={styles.collectionDescription}>For active kids</p>
          </div>
        </div>
      </section>
      <section style={styles.whySapatilla}>
        <h2 style={styles.sectionTitle}>Por que você vai adorar a Sapatilla</h2>
        <p style={styles.sectionSubtitle}>
          Temos o compromisso de fornecer a você uma experiência de compra excepcional sempre que você visitar nosso site
        </p>
        <button style={styles.button}>Mais</button>
        <div style={styles.features}>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Avaliações e comentários</h3>
            <p style={styles.featureDescription}>
              Confira o que outros clientes estão dizendo sobre nossos produtos mais bem avaliados
            </p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Devoluções fáceis</h3>
            <p style={styles.featureDescription}>
              Devolva qualquer item dentro de 90 dias para reembolso total ou troca
            </p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Frete grátis</h3>
            <p style={styles.featureDescription}>
              Obtenha frete padrão gratuito em todos os pedidos acima de US$ 100
            </p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>PayPal</h3>
            <p style={styles.featureDescription}>
              Escolha PayPal na finalização da compra para uma opção de pagamento fácil e segura
            </p>
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
  collections: {
    padding: "40px 20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  sectionSubtitle: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  collectionItems: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  collectionItem: {
    width: "30%",
  },
  collectionImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  collectionTitle: {
    fontSize: "1.5em",
    margin: "10px 0",
  },
  collectionDescription: {
    fontSize: "1em",
    color: "#777",
  },
  whySapatilla: {
    padding: "40px 20px",
    textAlign: "center",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  feature: {
    width: "20%",
  },
  featureTitle: {
    fontSize: "1.5em",
    margin: "10px 0",
  },
  featureDescription: {
    fontSize: "1em",
    color: "#777",
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

export default App;