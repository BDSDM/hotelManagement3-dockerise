# 🏨 Mon Hôtel Management 3 – Application de Gestion d’Hôtel

**Mon Hôtel Management 3** est une application complète de gestion d’hôtel permettant aux utilisateurs de réserver des chambres en ligne, de recevoir un email de confirmation, et offrant une interface administrateur pour gérer les clients, les réservations et les chambres.

---

## 🚀 Fonctionnalités principales

- 🔐 Authentification sécurisée avec JWT  
- 🛎️ Réservation de chambres en ligne avec facture par email  
- 🏨 Gestion des chambres (CRUD complet)  
- 👥 Gestion des utilisateurs avec rôles (ADMIN / USER)  
- 📊 Tableau de bord administrateur  
- 🐳 Application **fullstack** conteneurisée avec **Docker** (MySQL + Spring Boot + Angular)

---

## 📦 Structure du projet

hotelManagement3-dockerise/
│── backend/ # Code backend (Spring Boot)
│── frontend/ # Code frontend (Angular)
│── app.env # Variables d'environnement (backend)
│── docker-compose.yml
└── README.md


---

## ▶️ Lancement automatique de l'application

Voici une **commande unique** à copier-coller dans votre terminal.  
Elle :
- Libère les ports `3306`, `8080` et `4200` si occupés  
- Clone le dépôt GitHub  
- Lance l’application avec **Docker Compose**  

---

### 🪟 Pour Windows (CMD / PowerShell)

```cmd
(for %P in (3306 8080 4200) do @for /f "tokens=1" %I in ('docker ps --format "{{.ID}} {{.Ports}}" ^| findstr ":%P"') do docker rm -f %I) & git clone https://github.com/BDSDM/hotelManagement3-dockerise.git && cd hotelManagement3-dockerise && docker compose up -d
```
🐧 Pour Linux / macOS (bash / zsh)

```cmd
for P in 3306 8080 4200; do
  docker ps --format '{{.ID}} {{.Ports}}' | grep ":$P" | awk '{print $1}' | xargs -r docker rm -f
done && git clone https://github.com/BDSDM/hotelManagement3-dockerise.git && cd hotelManagement3-dockerise && docker compose up -d

