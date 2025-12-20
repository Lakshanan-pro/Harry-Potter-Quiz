# 🏰 Hogwarts Quiz - Magical Harry Potter Quiz Website

A stunning, mobile-friendly Harry Potter-themed quiz website with a magical UI inspired by Hogwarts. Test your wizarding knowledge with 30 questions across three difficulty levels and receive a personalized certificate!

## ✨ Features

### 🎯 Core Quiz Features
- **30 Multiple Choice Questions** across 3 difficulty levels (Easy, Medium, Hard)
- **Sequential Progression** - Complete Easy → Medium → Hard levels
- **Real-time Score Tracking** with visual progress indicators
- **Wizard Titles** based on final score:
  - 0-10 points: Curious Muggle
  - 11-18 points: Rising Half-Blood Wizard
  - 19-25 points: Elite Wizard of Hogwarts
  - 26-30 points: The Chosen Wizard

### 🎨 Magical UI/UX
- **Dark Hogwarts Theme** with gold accents and parchment textures
- **Responsive Design** optimized for mobile and desktop
- **Smooth Animations** including floating particles and magical glows
- **Elegant Typography** using Cinzel and Crimson Text fonts
- **Progressive Enhancement** with CSS animations and transitions

### 📜 Certificate Generation
- **Dynamic Certificate Creation** with user's name, score, and wizard title
- **Authentic Dumbledore Signature** - Added realistic signature image
- **Download Options** as PDF or PNG image
- **Professional Design** with Hogwarts-themed styling
- **Print-Ready Format** suitable for framing

### 🛠 Technical Features
- **Vanilla JavaScript** - No framework dependencies
- **HTML2Canvas & jsPDF** for certificate generation
- **Font Awesome Icons** for magical UI elements
- **Google Fonts** for wizard-style typography
- **GitHub Pages Ready** - Easy deployment

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Open `index.html`** in your web browser
3. **Enter your wizard name** and begin the quiz!

## 📁 Project Structure

```
harry-potter-quiz/
├── index.html          # Main HTML file
├── styles.css          # Magical CSS styling
├── script.js           # Quiz logic and functionality
└── README.md           # This file
```

## 🎮 How to Play

1. **Enter your wizard name** on the start screen
2. **Complete all three levels** in sequence:
   - **Easy Level** (Questions 1-10): Basic Harry Potter knowledge
   - **Medium Level** (Questions 11-20): Deeper wizarding world facts
   - **Hard Level** (Questions 21-30): Advanced magical knowledge
3. **Answer questions** by clicking on options
4. **Track your progress** with the progress bar and score counter
5. **Receive your wizard title** based on total score
6. **Download your certificate** as PDF or image

## 🏆 Question Categories

### Easy Level (1-10)
- Basic character names and relationships
- House affiliations
- Simple magical objects
- Hogwarts locations

### Medium Level (11-20)
- Plot details and storylines
- Magical creatures
- Spells and potions
- Character relationships

### Hard Level (21-30)
- Advanced magical theory
- Obscure magical objects
- Complex plot points
- Detailed character knowledge

## 🎨 Design Features

### Color Scheme
- **Primary Dark**: #0A0A0A (Deep black)
- **Secondary Dark**: #1A1A1A (Dark gray)
- **Primary Gold**: #D4AF37 (Hogwarts gold)
- **Text Primary**: #F4E4BC (Parchment color)
- **Accent Colors**: Deep reds and blues

### Typography
- **Headers**: Cinzel (Elegant serif with magical feel)
- **Body Text**: Crimson Text (Readable serif)
- **Icons**: Font Awesome 6.4.0

### Visual Effects
- **Magical Glows** on interactive elements
- **Floating Particles** for atmosphere
- **Smooth Transitions** between screens
- **Progressive Animations** for engagement

## 📱 Responsive Design

### Mobile (320px - 768px)
- Single column layout
- Touch-friendly buttons
- Optimized text sizes
- Stacked navigation

### Tablet (768px - 1024px)
- Two-column options
- Enhanced spacing
- Improved readability

### Desktop (1024px+)
- Full multi-column layouts
- Enhanced visual effects
- Maximum screen utilization

## 🛠 Technical Implementation

### JavaScript Features
- **ES6+ Classes** for clean code organization
- **Async/Await** for certificate generation
- **Event Delegation** for efficient event handling
- **Local Storage** for potential score persistence
- **Error Handling** for robust functionality

### Performance Optimizations
- **Lazy Loading** for certificate libraries
- **CSS Animations** for smooth performance
- **Optimized Images** via CDN
- **Minified Dependencies** where possible

### Browser Compatibility
- **Modern Browsers** (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- **CSS Grid & Flexbox** for layouts
- **ES6+ Features** with polyfills
- **Mobile Safari** optimizations

## 🚀 Deployment Instructions

### GitHub Pages (Recommended)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Hogwarts Quiz"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hogwarts-quiz.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait for deployment

3. **Access your quiz**
   - Your quiz will be available at: `https://YOUR_USERNAME.github.io/hogwarts-quiz/`

### Alternative Deployment Options

#### Netlify
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant deployment with a custom URL

#### Vercel
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Automatic deployments on every push

#### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize project: `firebase init hosting`
3. Deploy: `firebase deploy`

### Local Development

For local testing and development:

```bash
# Clone or download the project
cd harry-potter-quiz

# Start a local server (Python)
python -m http.server 8000

# Or with Node.js
npx serve .

# Or use Live Server extension in VS Code
```

Then open `http://localhost:8000` in your browser.

## 🔧 Customization

### Adding Questions
Edit the `initializeQuestions()` method in `script.js`:

```javascript
{
    question: "Your new question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0 // Index of correct answer (0-3)
}
```

### Modifying Wizard Titles
Update the `calculateWizardTitle()` method in `script.js`:

```javascript
if (this.score >= your_min_score && this.score <= your_max_score) {
    return {
        title: "Your Custom Title",
        description: "Your custom description!"
    };
}
```

### Changing Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-gold: #YourColor;
    --primary-dark: #YourColor;
    --text-primary: #YourColor;
}
```

## 🎯 Future Enhancements

### Potential Features
- **Sound Effects** for magical atmosphere
- **Timer** for each question
- **Leaderboard** with local storage
- **Share Results** on social media
- **More Questions** database
- **Difficulty Selection** instead of sequential
- **House Sorting Quiz** integration

### Technical Improvements
- **Progressive Web App** (PWA) features
- **Offline Functionality**
- **Score Analytics** and history
- **Multi-language Support**
- **Dark/Light Theme Toggle**

## 🐛 Troubleshooting

### Common Issues

**Certificate Not Downloading:**
- Check browser permissions for downloads
- Ensure html2canvas and jsPDF are loaded
- Try refreshing the page

**Mobile Display Issues:**
- Clear browser cache
- Check viewport meta tag
- Test on different devices

**JavaScript Errors:**
- Check browser console for errors
- Ensure all files are in the same directory
- Verify CDN links are accessible

### Performance Tips
- Optimize images before use
- Minimize CSS and JavaScript for production
- Use browser caching
- Consider lazy loading for heavy components

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **Harry Potter** universe created by J.K. Rowling
- **Font Awesome** for beautiful icons
- **Google Fonts** for elegant typography
- **html2canvas** and **jsPDF** for certificate generation
- **Cinzel** and **Crimson Text** font designers

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review browser console for errors
3. Ensure all files are properly linked
4. Test on different browsers/devices

---

**🎉 Enjoy your magical quiz experience! May your knowledge of the wizarding world shine bright! ✨**