import { Project2, TrelloClone, Sketchboard, AiTaskManagement } from "./lang";

export const projectData1 = [
  {
    title: "Trello Clone",
    // desc: `💡 Utilized React and the library <a href='https://www.npmjs.com/package/react-beautiful-dnd' target='__blanck'><u>react-beautiful-dnd</u></a> to replicate the core functionality of the original Trello, including creating cards, and lists, as well as implementing a user-friendly drag-and-drop interface.<br/><br/>
    // 💡 Incorporated local storage functionality to allow for offline access and data persistence`,
    desc: "description go here",
    repoLink: {
      name: "Show me Repo",
      url: "https://github.com/Rekhakumari12/trello-clone",
    },
    liveLink: {
      name: "Show me live",
      url: "https://trello-clone-12.netlify.app/",
    },
    langObj: TrelloClone,
    shadowColor: "var(--main-green)",
  },
  {
    title: "Trello Clone",
    desc: "description go here",
    repoLink: {
      name: "Show me Repo",
      url: "https://github.com/Rekhakumari12/trello-clone",
    },
    liveLink: {
      name: "Show me live",
      url: "https://trello-clone-12.netlify.app/",
    },
    langObj: TrelloClone,
    shadowColor: "var(--main-purple)",
  },
  {
    title: "Google Doc Clone",
    desc: "description go here",
    repoLink: { name: "Show me Repo", url: "#" },
    liveLink: { name: "Show me live", url: "#" },
    langObj: Project2,
    shadowColor: "var(--main-blue)",
  },
];

type Type = {
  title: string;
  desc: string;
  repoLink: { name: string; url: string };
  liveLink?: { name: string; url: string };
  langObj: string[];
  shadowColor: string;
}[];

export const projectData: Type = [
  {
    title: "Collaborative Sketchboard",
    desc: `💡 Real-time collaborative whiteboard enabling simultaneous multi-user drawing, powered by <a href='https://socket.io/' target='_blank'><u>Socket.io</u></a> and the HTML5 Canvas API.<br/><br/>
    💡 Optimized canvas rendering with custom toolsets and JPEG export functionality.`,
    repoLink: {
      name: "GitHub",
      url: "https://github.com/Rekhakumari12/sketchbook-fe",
    },
    liveLink: {
      name: "Demo",
      url: "https://sketchbook-fe-pi.vercel.app/",
    },
    langObj: Sketchboard,
    shadowColor: "var(--main-green)",
  },
  {
    title: "AI Task Management",
    desc: `💡 AI-powered task manager that leverages the <a href='https://ai.google.dev/' target='_blank'><u>Google Gemini API</u></a> to automate user story generation, reducing planning time.<br/><br/>
    💡 Features a rich-text editor with live preview capabilities, deployed on Netlify Functions.`,
    repoLink: {
      name: "GitHub",
      url: "https://github.com/Rekhakumari12/trello-clone",
    },
    liveLink: {
      name: "Demo",
      url: "https://trello-clone-12.netlify.app/",
    },
    langObj: AiTaskManagement,
    shadowColor: "var(--main-purple)",
  },
];
