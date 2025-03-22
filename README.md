# PitchConnect - Startup Pitch Platform

A dynamic platform where entrepreneurs can showcase their startup ideas, receive community feedback through voting, connect with fellow innovators, and participate in virtual pitch competitions.

![PitchConnect Platform](/public/screenshot.png)

## 📄 Documentation & Presentations

View our detailed documentation and presentations:

- [Project Presentation (PPT)](https://1drv.ms/p/c/400fa7adda8ca1b2/EeSHpVSlfvdPrwoGpFtGplUBFwXifErTLZps-y5jYOn8uw?e=ImRoAZ) - Overview of PitchConnect features and architecture
- [Technical Documentation (Word)](https://1drv.ms/w/c/400fa7adda8ca1b2/EVWrz8gBkftIvhVMiTP4yi4BYuUTXT1KV2OrGJ1JKL57Ag?e=9pIFDg) - Complete developer documentation and guide

*Note: Click on the links above to view or download the files directly from OneDrive*

## 🚀 Key Features

- **Startup Pitch Showcase**: Submit and showcase detailed startup pitches with images
- **Interactive Voting System**: Upvote/downvote startup ideas with real-time counts
- **User Authentication**: Secure login via GitHub integration
- **User Profiles**: Dedicated profiles for entrepreneurs and contributors
- **Search & Discovery**: Find startups by category, keyword, or author
- **Responsive Design**: Optimized experience across desktop, tablet, and mobile devices

## 🔧 Technology Stack

- **Frontend**: 
  - [Next.js 15](https://nextjs.org/) - React framework with server components
  - [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer experience
  - [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
  - [Radix UI](https://www.radix-ui.com/) - For accessible component primitives

- **Backend & Data Management**:
  - [Sanity.io](https://www.sanity.io/) - Headless CMS for content management
  - [Next-Auth](https://next-auth.js.org/) - Authentication with GitHub provider

- **Deployment**:
  - [Vercel](https://vercel.com/) - For hosting and serverless functions

## 📋 Requirements

- Node.js 18.x or higher
- npm or yarn
- Sanity.io account
- GitHub OAuth credentials

## 🏁 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhavalkurkutiya/startup-spark.git
   cd startup-spark
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   GITHUB_ID=your_github_oauth_id
   GITHUB_SECRET=your_github_oauth_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔄 Core Features Implementation

### Voting System

The platform features a real-time voting system that:
- Allows authenticated users to upvote or downvote startup pitches
- Prevents duplicate votes from the same user
- Provides immediate UI feedback for vote actions
- Stores vote counts directly on startup documents for efficient querying
- Tracks individual votes for user analytics

### Authentication Flow

User authentication is handled through:
- GitHub OAuth integration via NextAuth.js
- Automatic profile creation in Sanity upon first login
- Session management for secure access to protected features


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- [Sanity.io](https://www.sanity.io/) for the flexible content management system
- [Next.js](https://nextjs.org/) for the incredible React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting and deployment
