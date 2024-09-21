
# UnEarthed

UnEarthed is a web application designed to showcase and manage a list of curated gifts. Users can view gift details and filter through a wide range of options. This project features a custom gift detail page for each item, with dynamic routing and a 404 page for invalid gift IDs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Gift Pages**: Each gift has its own detail page based on its ID.
- **404 Error Handling**: Users are redirected to a custom 404 page when trying to access non-existent gifts.
- **Responsive Design**: The UI is responsive, providing an optimal viewing experience across devices.
- **Custom Routing**: Gift details are dynamically rendered from a list of gifts, with error handling for invalid or non-existent gifts.
- **Modern Front-End Stack**: Built using JavaScript and a CSS framework.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/unearthed.git
   cd unearthed
   ```

2. **Install dependencies** (make sure you have Node.js installed):

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm run dev
   ```

   This will start the development server at `http://localhost:5173`.

## Usage

1. **Home Page**:
   - Displays a list of curated gifts with links to view their details.

2. **Gift Detail Page**:
   - Visit a specific gift by navigating to `http://localhost:5173/gifts/[giftID]`, where `[giftID]` is the ID of the gift (e.g., `http://localhost:5173/gifts/4`).
   - If the gift ID doesn't exist, the user will be shown a custom message.

3. **404 Error Page**:
   - Users visiting a non-existent gifts page will be redirected to the `404.html` page.

## Folder Structure

```bash
unearthed/
├── client/
│   ├── public/          # Public assets like images, fonts, etc.
│   │   ├── scripts/     # JavaScript files related to routing and rendering
│   │   ├── gift.html    # Gift detail page
│   │   ├── 404.html     # Custom 404 error page
│   ├── index.html       # Main entry point for the application
│   ├── style.css        # Global styles for the project
│   ├── package.json     # Node.js dependencies and scripts
├── server/              # Server-side logic (if any, e.g., API, database)
│   ├── data/            # Any data or JSON files
│   ├── routes/          # Server routes (if applicable)
├── .gitignore           # Files and directories to ignore in git
└── README.md            # This file
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your message'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

