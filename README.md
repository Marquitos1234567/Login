# Login
## Descripción
Este repositorio contiene un proyecto de formulario de login desarrollado utilizando HTML, CSS y JavaScript, apoyado únicamente con Bootstrap para estilos. No se han utilizado frameworks adicionales.
El objetivo es demostrar la construcción de una interfaz de inicio de sesión funcional y su documentación clara dentro de un repositorio público.

## 🧱 Componentes Principales

### 1. `login.html`

- Contiene un diseño de **dos columnas**:
  - **Izquierda**: Imagen de fondo.
  - **Derecha**: Formulario de login.
- Incluye:
  - Input para correo electrónico.
  - Input para contraseña con opción de mostrar/ocultar.
  - Captcha simulado.
  - Botón "Continuar".
  - Mensajes de éxito/error.
  - Íconos sociales (Google, Facebook, Apple).

### 2. `login.css`

Estilos para una presentación moderna y accesible:

- Tipografía `Montserrat`.
- Inputs estilizados con bordes redondeados.
- Spinner animado simulando captcha.
- Mensajes de retroalimentación:
  - ✅ Verde para éxito.
  - ❌ Rojo para error.
- Íconos sociales con efecto hover.
- Botón "Continuar" con estilo llamativo.

### 3. `login.js`

Controla la lógica del formulario:

- Desactiva los campos de entrada hasta que termine el "captcha" (2.2s).
- Valida si el correo es válido.
- Habilita el botón de "Continuar" cuando los campos son válidos.
- Verifica si la contraseña es `"12345"`:
  - Si es correcta, muestra mensaje de inicio de sesión exitoso.
  - Si es incorrecta, muestra mensaje de error.
- Permite mostrar/ocultar contraseña con un ícono interactivo.

---

## 🔐 Validación y Comportamiento

- **Correo electrónico**: Se valida con expresión regular.
- **Contraseña**: Debe ser `"12345"` (modo demostración).
- **Captcha**: Simulación con un spinner y mensaje `"¡Felicidades, eres humano!"`.

---

## 📌 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts (`Montserrat`)
- Flexbox (para layout responsivo)

---
## 📷 Vista Previa

Formulario validando si eres humano.
![image](https://github.com/user-attachments/assets/4f8a59ca-a22d-4396-98ee-caf78bc70dfc)  
Una vez valida que eres humano podrás ingresar campos, al hacer esto se habilitará el boton de continuar
![image](https://github.com/user-attachments/assets/0bf44f75-c67a-4c24-864c-dc5ff3032b12)


---
