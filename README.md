# InboxGist - Email Summary Generator

## Overview
InboxGist is a Chrome extension designed to summarize email threads quickly and efficiently. It provides concise, context-aware summaries, helping you stay on top of your inbox with ease.

## Features
- **Context-Aware Summaries:** Automatically generates summaries for email threads.
- **Customizable Tone:** Choose between formal, casual, or neutral tones for summaries.
- **Quick Edits:** Edit and refine generated summaries directly within the extension.
- **Multi-Language Support:** Generate summaries in multiple languages.
- **Seamless Integration:** Works directly in your email client.

## Installation
1. Clone this repository or download the ZIP file.
   ```bash
   git clone https://github.com/your-repo/inboxgist.git
   ```
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will now be added to Chrome.

## Usage
1. Open your email client in Chrome.
2. Click on the InboxGist icon in the toolbar.
3. The extension will analyze the email thread and provide a generated summary.
4. Customize the summary if needed, then copy or insert it directly into your email reply box.

## Development
### Prerequisites
- Node.js (for any build scripts or testing)
- A text editor (e.g., VS Code)

### File Structure
```
inboxgist/
├── manifest.json          # Chrome extension manifest
├── background.js          # Background script
├── content.js             # Content script for interacting with web pages
├── popup.html             # HTML for the extension popup
├── popup.js               # JavaScript for the popup functionality
├── styles.css             # Styles for the popup
└── README.md              # Documentation (this file)
```

### Scripts
- `manifest.json`: Defines the permissions and metadata for the extension.
- `background.js`: Handles extension background tasks and messaging.
- `content.js`: Injects functionality into web pages to extract email content.
- `popup.js`: Manages the logic for the popup interface.

## Permissions
The extension requires the following permissions:
- `activeTab`: To access the current tab's content.
- `storage`: To save user preferences (e.g., tone settings).

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request detailing your changes.

## License
This project is licensed under the [MIT License](LICENSE).

## Support
For issues or feature requests, please create an issue on the [GitHub repository](https://github.com/your-repo/inboxgist/issues).

---
Thank you for using InboxGist! 🚀
