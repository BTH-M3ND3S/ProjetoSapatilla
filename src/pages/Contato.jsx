import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from '../images/logo sapatilla.png'

function Contato(){
  return (
    <>
    <nav style={styles.navbar}>
        <div style={styles.brand}>
        <img src={Logo} style={styles.logo} alt="" />
          <h2 style={styles.brandName}>Sapatilla</h2>
        </div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Loja</a>
          <a href="/about" style={styles.link}>Sobre</a>
          <a href="/Contato" style={styles.link}>Contato</a>
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
    <div style={styles.container}>
      <h2 style={styles.header}>Contate-nos</h2>
      <div style={styles.cardContainer}>
        <div style={styles.leftCard}>
          <img 
            src="https://via.placeholder.com/100" 
            alt="Fabiano Sapatilla" 
            style={styles.profileImage} 
          />
          <h3 style={styles.name}>Fabiano Sapatilla</h3>
          <p><FaMapMarkerAlt /> Av. Ana Claudina, 303</p>
          <p><FaEnvelope /> sapatilla@gmail.com</p>
          <p><FaPhone /> (14) 3252–2343</p>
          <p><FaInstagram /> sapatilla_jahu</p>
          <p><FaWhatsapp /> (14) 99865–2312</p>
        </div>
        <div style={styles.rightCard}>
          <img 
            src="https://via.placeholder.com/200x150" 
            alt="Loja de sapatos" 
            style={styles.storeImage}
          />
          <img 
            src="https://via.placeholder.com/200x150" 
            alt="Sapatos" 
            style={styles.storeImage}
          />
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFF5DA',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftCard: {
    backgroundColor: '#F8F8F8',
    padding: '20px',
    borderRadius: '8px',
    width: '45%',
    textAlign: 'center',
  },
  profileImage: {
    borderRadius: '50%',
    marginBottom: '10px',
  },
  name: {
    margin: '10px 0',
  },
  rightCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
  },
  storeImage: {
    borderRadius: '8px',
    width: '100%',
    marginBottom: '10px',
  },
};

export default Contato;
