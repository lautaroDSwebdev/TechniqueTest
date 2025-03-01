# Prueba tecnica

# Tecnologias: [![My Skills](https://skillicons.dev/icons?i=typescript,next,styledcomponents,css)](https://skillicons.dev)

```bash
/src
├── /app                     # Rutas y páginas en Next.js (app router)
│    ├── layout.tsx
│    ├── page.tsx
│    └── globals.css
│
├── /core                     # Lógica central del negocio (dominio)
│    ├── /entities            # Entidades del dominio (Ej: User, Product, Order)
│    │    ├── User.ts
│    │    ├── Product.ts
│    │    └── Order.ts
│    ├── /use-cases           # Casos de uso (Ej: RegisterUser, GetProducts)
│    │    ├── peticiones con axios
│    └── /errors              # Manejo de errores personalizados
│         ├── manejo de errores
├── /infra                    # Implementación de la infraestructura (adaptadores)
│    ├── /api                 # API REST/GraphQL handlers
│    │    ├── manejo de peticiones con axios y react query
│    ├── /utils               # Utilidades y helpers
│    │    ├── helpers
│    └── /config              # Configuración global del proyecto
│         ├── appConfig.ts
│         ├── env.ts
│         └── logger.ts
│
├── /ui                       # Componentes de UI (framework-agnostic)
│    ├── /components          # Componentes reutilizables (Ej: Button, Modal)
│    │    ├── Button.tsx
│    │    ├── Modal.tsx
│    │    └── Card.tsx
│    ├── /layouts             # Layouts de la app
│    │    ├── DashboardLayout.tsx
│    │    └── AuthLayout.tsx
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


