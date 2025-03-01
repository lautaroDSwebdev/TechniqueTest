# Prueba tecnica

# Tecnologias: [![My Skills](https://skillicons.dev/icons?i=typescript,next,styledcomponents,css)](https://skillicons.dev)
## + Zustand

## Web de la prueba tecnica https://technique-test-cgv4-git-main-lautarodisalvocodes-projects.vercel.app/

# -Pasos para bajar proyecto y ejecutarlo debido a que no pude usar json place holder para las solicitudes REST

## 1: npm install
## 2: abre doble terminal para la app y la fake api
## 3: ejecuta la app y en la segunda terminal (fake api) escribe npm run api y se activa la api falsa

## Gestion de estado: Como gestor de estado de la aplicacion preferí usar useState por que es con algo que estoy superacostumbrado de usar, zustand lo use pero contadas veces y lo quiero practicar mas a fondo para este puesto.

##

# Arquitectura de proyecto: screaming architecture
```bash
/src
├── /app                    
│    ├── layout.tsx
│    ├── page.tsx
│    └── globals.css
│
├── /core                    
│    ├── /use-cases           
│    │    ├── peticiones con axios
│    ├── /interfaces           
│    │    ├── interfaces de TS
├── /infrascructure                    # Implementación de la infraestructura (adaptadores)
│    ├── /apis           
│    │    ├── manejo de peticiones con  react query
├── /ui                       # Componentes de UI (framework-agnostic)
│    ├── /components          # Componentes reutilizables (Ej: Button, Modal)
│    │    ├── Button.tsx
│    │    ├── Modal.tsx
│    │    └── Card.tsx
│    ├── /layouts             # Layouts de la app    
│    ├── /rousable             # Layouts de la app
│    │    ├── componentes reutilizables
│    └── /styles             
│          ├── estilos de styled components
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.js
├── [README.md](http://readme.md/)
```


