# Installing Node.js and npm

Since you're on macOS, here are the easiest ways to install Node.js (which includes npm):

## Option 1: Direct Download (Easiest)

1. Go to **https://nodejs.org/**
2. Download the **LTS (Long Term Support)** version for macOS
3. Run the installer (.pkg file)
4. Follow the installation wizard
5. Restart your terminal
6. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Option 2: Using Homebrew (If you have it or want to install it)

### First, install Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Then install Node.js:
```bash
brew install node
```

## Option 3: Using nvm (Node Version Manager) - Recommended for developers

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install Node.js LTS
nvm install --lts
nvm use --lts
```

## After Installation

Once Node.js is installed, navigate to your project directory and run:

```bash
cd "/Users/venubabu/Documents/Projects/Adira Website/AdiraWebsite"
npm install
npm run dev
```

---

**Note:** If you prefer not to install Node.js, I can create a simpler HTML/CSS/JavaScript version that runs directly in a browser without any build process. Let me know if you'd like that alternative!
