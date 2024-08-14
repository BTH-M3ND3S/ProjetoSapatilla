import React, { useState } from "react";

export default function RegistrationForm(){
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cpf: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.container}>
      <form style={styles.formContainer} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Sapatilla</h1>
        <h2 style={styles.subtitle}>Registro</h2>

        <label style={styles.label} htmlFor="nome">Nome</label>
        <input
          style={styles.input}
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          required
        />

        <label style={styles.label} htmlFor="email">Email</label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <label style={styles.label} htmlFor="senha">Senha</label>
        <input
          style={styles.input}
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
          required
        />

        <label style={styles.label} htmlFor="confirmarSenha">Confirmar Senha</label>
        <input
          style={styles.input}
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          value={formData.confirmarSenha}
          onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
          required
        />

        <label style={styles.label} htmlFor="telefone">Telefone</label>
        <input
          style={styles.input}
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          required
        />

        <label style={styles.label} htmlFor="cpf">CPF</label>
        <input
          style={styles.input}
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          required
        />

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    boxSizing: "border-box"
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: "600",
  },
  subtitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.25rem",
    color: "#666",
    textAlign: "center",
    marginBottom: "2rem",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "0.5rem",
    display: "block",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "1.5rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "1rem",
    fontFamily: "'Poppins', sans-serif",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "1.25rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
    marginTop: "10px"
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
