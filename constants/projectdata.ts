import { GoogleDocClone, Project2, TrelloClone } from "./lang";

export const projectData = [
  {
    title: "Google Doc Clone",
    desc: "• Utilized JavaScript to replicate the functionality of the original Google Doc and implement real-time updates for multiple users.",
    repolink: { name: "Show me Repo", url: "" },
    livelink: { name: "Show me live", url: "" },
    langObj: GoogleDocClone,
    shadowColor: "var(--main-orange)",
  },
  {
    title: "Trello Clone",
    desc: `• Utilized React and the library <a href='https://www.npmjs.com/package/react-beautiful-dnd' target='__blanck'><u>react-beautiful-dnd</u></a> to replicate the core functionality of the original Trello, including creating cards, and lists, as well as implementing a user-friendly drag-and-drop interface.<br/><br/>
    • Incorporated local storage functionality to allow for offline access and data persistence`,
    repolink: {
      name: "Show me Repo",
      url: "https://github.com/Rekhakumari12/trello-clone",
    },
    livelink: {
      name: "Show me live",
      url: "https://trello-clone-12.netlify.app/",
    },
    langObj: TrelloClone,
    shadowColor: "var(--main-green)",
  },
  {
    title: "Project-2 Doc Clone",
    desc: "• Utilized JavaScript to replicate the functionality of the original Google Doc and implement real-time updates for multiple users.",
    repolink: { name: "Show me Repo", url: "" },
    livelink: { name: "Show me live", url: "" },
    langObj: Project2,
    shadowColor: "var(--main-orange)",
  },
];
