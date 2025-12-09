Descripció - Sprint 1. Maquetació I

Aquest projecte consisteix en el desenvolupament d’una landing page responsiva basada en un disseny preestablert. L’objectiu de l’exercici és practicar estructuració HTML, estilització amb CSS/SCSS i posteriorment amb Tailwind. Afegir interactivitat amb JavaScript. La pàgina inclou un menú responsive, seccions informatives, funcionalitats interactives i un formulari amb validació bàsica.

💻 Tecnologies Utilitzades
 
Git

HTML5

CSS3

SCSS (branca SASS)

JavaScript 

Tailwind CSS (branca Tailwind)


📋 Requisits

Navegador web modern (Chrome, Firefox, Safari…)

Node.js i Sass per compilar SCSS

Git (per clonar el repositori)


🌿 Branques del projecte

#Branca - feature/vanilla-implementation (Base sense frameworks).

#Branca - feature/SASS-implementation (Variables, mixins, components, modularizació i CSS optimitzat).

#Branca - feature/tailwind-implementation (Diseny responsiu, clases i components predefinits).


🛠️ Instal·lació

Clona aquest repositori:

git clone https://github.com/LluisArjuna/bookmark-landing-page


Accedeix al directori del projecte:

cd bookmark-landing-page


Compila els arxius SCSS:

sass scss/style.scss style.css


Instal·la Tailwind CSS i les eines necessàries:

npm install
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch


▶️ Execució

Obre el fitxer principal:

index.html


Opcionalment, utilitza un servidor local:

npx live-server


📂 Estructura de carpetes

feature/vanilla-implementation:

bookmark-landing-page/
│
├── index.html
|
├── style.css
│
├── script.js
│
├── images/
│
├── designs/
│   └── (mockups y recursos del diseño)
└── README.md

feature/SASS-implementation

bookmark-landing-page/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── scss/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── style.scss
│
├── images/
│
├── designs/
│   └── (mockups y recursos del diseño)
│
├── index.html
└── README.md

feature/tailwind-implementatio

bookmark-landing-page/
│
├── src/
│   └── input.css      # Archivo donde se importan @tailwind base/components/utilities
│
├── dist/
│   └── output.css     # CSS generado por Tailwind
│
├── js/
│   └── script.js
│
├── images/
│
├── designs/
│
├── index.html
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
