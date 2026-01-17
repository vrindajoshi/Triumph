# Triumph 🎺

An intelligent sheet music recommendation assistant powered by Voiceflow, helping musicians discover and organize trumpet repertoire through a CX focused agent.

[Loom Demo](https://www.loom.com/share/0cb7e79888064897a24313b509e8ed63) | 
[Link](https://triumph-one.vercel.app)

## Overview

Triumph combines an AI agent with a full-stack web application, providing a hub for personalized sheet music recommendations and practicing. Users can chat with the assistant to discover pieces that match their skill level and musical preferences, with all recommendations automatically saved to a personal library.

## Features

- **Conversational Recommendations**: Chat naturally with an AI agent that understands your musical needs and preferences
- **Curated Trumpet Library**: Access to trumpet pieces from IMSLP's open-source repository
- **Direct Sheet Music Links**: Get immediate access to free, legal sheet music
- **Personal Library**: Automatically save recommended pieces for future reference
- **Smart Context**: The agent remembers what you've already played or saved to avoid duplicate recommendations
- **Metadata**: Each piece includes information about difficulty, emotion, and historical relevance

## Tech Stack

### Chatbot
- **Voiceflow Agent**: Powers the conversational interface
- **Claude Sonnet 4 & GPT-5**: Tested multiple LLM models for optimal performance
- **Custom Knowledge Base**: Curated database of trumpet repertoire with detailed metadata

### Backend
- **Airtable**: Serves as both database and REST API
- **Custom API Endpoints**: 
  - `getSongData`: Retrieve saved recommendations
  - `updatePlayedStatus`: Mark pieces as played

### Frontend
- **Voiceflow Widget**: Embedded chat interface
- **Design**: Clean, minimal UI inspired by Voiceflow's color scheme (Black, White, Grey), designed in Figma

### Data Collection
- **Python Web Scraper**: Custom scraper built to collect piece names and composers from IMSLP

## Usage

1. Open the Triumph application
2. Chat with the AI assistant about your musical preferences
3. Receive personalized sheet music recommendations
4. Click on recommendations to access sheet music directly
5. All liked pieces are automatically saved to your library

## Development Journey

### Key Challenges & Solutions

**Challenge 1: Link Generation**
- Initially struggled with models generating broken or incorrect sheet music links
- **Solution**: Built a custom knowledge base from IMSLP's repository rather than relying on web search

**Challenge 2: Model Selection**
- Tested Claude Sonnet 4 vs GPT-5
- **Result**: Claude had better personality; GPT-5 had stronger technical analysis
- **Solution**: Optimized prompting to get technical depth while maintaining conversational tone

**Challenge 3: API Variable Posting**
- POST requests initially sent incorrect data to Airtable
- **Solution**: Switched from using pre-defined variables to LLM-collected values within the Agent step

**Challenge 4: Over-Questioning**
- Agent asked too many clarifying questions before making recommendations
- **Solution**: Optimized the balance between information gathering and response speed to reduce token usage and improve UX

## Future Roadmap

- [ ] User authentication and personal accounts
- [ ] Improve context-aware recommendations based on listening history
- [ ] Multi-instrument support (currently trumpet-only)
- [ ] Improved metadata accuracy through professional music research
- [ ] Practice tracking and progress monitoring
- [ ] Embedded PDFs and video links

## Data Sources

- **Sheet Music**: [IMSLP (International Music Score Library Project)](https://imslp.org)
- **Metadata Enhancement**: ChatGPT-assisted research (to be replaced with professional music research)

## Known Limitations

- Currently focused on trumpet repertoire only
- All songs are accessible by all users (no authentication yet)
- Metadata accuracy depends on automated research
- Limited to pieces available in IMSLP's public domain library

## Acknowledgments

Built as a Voiceflow onboarding project, demonstrating the power of conversational AI in creative applications.

## License

This project uses sheet music from IMSLP, which provides public domain and Creative Commons licensed scores. Please respect individual piece licenses when accessing sheet music.

---

**Note**: This is an educational project created during Voiceflow onboarding. The sheet music recommendations link to freely available, legal sources.
