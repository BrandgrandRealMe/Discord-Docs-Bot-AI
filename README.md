# 🤖 Discord Docs Bot AI

A versatile Discord bot that combines documentation search with moderation capabilities. Answers `/ask` commands using content from a Docusaurus-powered documentation site and provides essential moderation tools.

---

## 🚀 Features

### 📚 Documentation Features
- 🧭 Automatically scrapes `/docs/*` pages using your site's `sitemap.xml`
- 🕐 Keeps docs up-to-date with hourly cron sync
- 💬 Slash command `/ask` to query your documentation
- ✨ Uses AI to generate helpful answers (supports HercAI)
- 🔒 Enforces Discord's 2000 character message limit
- 🛡️ Graceful error handling and prompt truncation

### ⚖️ Moderation Features
- 🔨 `/ban` - Ban members with message deletion options
- 👢 `/kick` - Remove members from the server
- 🔇 `/mute` - Temporarily timeout members
- 🔐 Permission-based command access

### Technical Features
- 📁 Modular command structure
- ⚙️ Configurable through `.env` and `settings.js`
- 📝 Comprehensive error logging
- 🕒 Scheduled tasks with node-cron

---

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/BrandgrandRealMe/Discord-Docs-Bot-AI.git
cd discord-docs-bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configuration
1. Copy `.env.template` to `.env` and fill in your credentials
2. Copy `config/settings.js.template` to `config/settings.js` and configure

### 4. Deploy Commands
```bash
npm run deploy
```

### 5. Run the Bot
```bash
npm start
```

---

## 🛠️ Project Structure
```
discord-docs-bot/
├── commands/            # All slash commands
│   ├── ask.js          # Documentation query command
│   └── mod/            # Moderation commands
│       ├── ban.js
│       ├── kick.js
│       └── mute.js
├── config/             # Configuration files
├── handlers/           # Event handlers
├── .env.template       # Environment template
├── LICENSE
├── README.md
├── cron-fetch.js       # Scheduled docs updater
├── deploy-commands.js  # Command registration
├── fetchDocs.js        # Documentation scraper
├── index.js            # Main bot file
└── package.json
```

---

## 🤖 Command Reference

### Documentation
- `/ask [question]` - Ask a question about the documentation

### Moderation
- `/ban [user] (reason) (days)` - Ban a user with optional reason and message deletion
- `/kick [user] (reason)` - Kick a user with optional reason
- `/mute [user] [minutes] (reason)` - Timeout a user for specified minutes

---

## 🔧 Technical Details

- **AI Integration**: Uses HercAI API with configurable model
- **Documentation Processing**: 
  - Scrapes content from `<article>` tags
  - Preserves source URLs and titles
  - Handles large documents with smart truncation
- **Error Handling**:
  - API error logging
  - Discord error channel integration
  - Graceful fallbacks

---

## 📄 License

MIT Licensed - See [LICENSE](LICENSE) for details. 