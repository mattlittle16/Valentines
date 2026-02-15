# Valentine's Day 2015 Memorial


A modernized React + Vite version of the original ASP.NET MVC Valentine's Day scavenger hunt from 2015. This memorial allows you to experience the original clues and navigate through different phases leading up to Valentine's Day.

## Features

- 🎨 **Phase Navigator**: Flip through all 9 phases (Feb 6-14, 2015) with unique backgrounds
- 🧩 **Interactive Clues**: 5 original clues with answer validation
- 💾 **Progress Tracking**: localStorage-based progression system
- 📱 **Responsive Design**: Works on desktop and mobile
- 🐳 **Dockerized**: Easy deployment with Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Port 8080 available (or modify docker-compose.yml)

### Quick Start

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

2. **Access the app:**
   Open your browser to [http://localhost:8080](http://localhost:8080)

3. **Stop the app:**
   ```bash
   docker-compose down
   ```

### Alternative: Build and run with Docker directly

```bash
# Build the image
docker build -t vday-memorial:latest .

# Run the container
docker run -d -p 8080:80 --name vday-memorial vday-memorial:latest

# Stop the container
docker stop vday-memorial
docker rm vday-memorial
```

## Development

### Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Usage

### Navigating Phases

- Use the **← Previous** and **Next →** buttons at the top to flip through different date phases
- Each phase has unique backgrounds and theming from the original 2015 app
- Toggle between **Auto Mode** (based on today's date) and **Manual Mode** (full control)

### Playing the Clues

1. Click **Begin!** from the home screen
2. Read each clue and enter your answer
3. Navigate between clues using the back/next buttons
4. Progress is automatically saved to localStorage

### Controls

- **Back to Home**: Return to the countdown/home screen
- **Reset Progress**: Clear all saved progress and start over

## Technical Stack

- **Frontend**: React 18 + Vite
- **Styling**: Bootstrap 3 + Custom CSS (preserved from original)
- **State Management**: React hooks + localStorage
- **Server**: nginx (Alpine)
- **Container**: Docker multi-stage build

## Project Structure

```
vday-memorial/
├── public/
│   ├── images/          # All original images
│   ├── css/             # Bootstrap & original CSS
│   ├── js/              # Original JavaScript files
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── PhaseNavigator.jsx
│   │   └── ClueView.jsx
│   ├── data/
│   │   ├── phases.js    # 9 phase configurations
│   │   └── clues.js     # 5 clue data
│   ├── utils/
│   │   └── storage.js   # localStorage helpers
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── README.md
```

## Original App (2015)

This memorial is a faithful recreation of the ASP.NET MVC application originally built for Valentine's Day 2015. The original featured:

- Time-gated access (unlocked at 12:30 PM on Feb 14, 2015)
- Session-based clue progression
- Daily countdown with changing backgrounds
- A scavenger hunt leading to various locations

## License

Personal memorial project - not for commercial use.

## Acknowledgments

Made with ❤️ in memory of Valentine's Day 2015
