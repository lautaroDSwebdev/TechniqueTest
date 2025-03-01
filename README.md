# Prueba tecnica

# Tecnologias: [![My Skills](https://skillicons.dev/icons?i=typescript,next,styledcomponents,css)](https://skillicons.dev)

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
│    └── /errors              # Manejo de errores personalizados
│         ├── manejo de errores
├── /infra                    # Implementación de la infraestructura (adaptadores)
│    ├── /api                 # API REST/GraphQL handlers
│    │    ├── manejo de peticiones con axios y react query
│    ├── /utils               # Utilidades y helpers
│    │    ├── helpers
│    └── /config              # Configuración global del proyecto
│ 
├── /ui                       # Componentes de UI (framework-agnostic)
│    ├── /components          # Componentes reutilizables (Ej: Button, Modal)
│    │    ├── Button.tsx
│    │    ├── Modal.tsx
│    │    └── Card.tsx
│    ├── /layouts             # Layouts de la app
│    
│    ├── /hooks               # Custom hooks
│    │    ├── useAuth.ts
│    │    ├── useTheme.ts
│    │    └── useFetch.ts
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


