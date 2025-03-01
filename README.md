# Prueba tecnica

# Tecnologias: [![My Skills](https://skillicons.dev/icons?i=typescript,next,styledcomponents,css)](https://skillicons.dev)
## + Zustand
```bash
/src
├── /app                    
│    ├── layout.tsx
│    ├── page.tsx
│    └── globals.css
│
├── /core                    
│    ├── /entities            
│    │    ├── User.ts
│    │    ├── Product.ts
│    │    └── Order.ts
│    ├── /use-cases           
│    │    ├── peticiones con axios
│    ├── /interfaces           
│    │    ├── interfaces de TS
│    └── /errors              # Manejo de errores personalizados
│         ├── manejo de errores
├── /infrascructure                    # Implementación de la infraestructura (adaptadores)
│    ├── /apis-mutations           
│    │    ├── manejo de peticiones con axios y react query
├── /ui                       # Componentes de UI (framework-agnostic)
│    ├── /components          # Componentes reutilizables (Ej: Button, Modal)
│    │    ├── Button.tsx
│    │    ├── Modal.tsx
│    │    └── Card.tsx
│    ├── /layouts             # Layouts de la app    
│    ├── /hooks               # Custom hooks
│    │    ├── useAuth.ts
│    │    ├── useTheme.ts
│    │    └── useFetch.ts
│    ├── /rousable             # Layouts de la app
│    │    ├── componentes reutilizables
│    ├── /loader             # Layouts de la app
│    │    ├── componente para activar cuando se espera la respuesta de la api
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


