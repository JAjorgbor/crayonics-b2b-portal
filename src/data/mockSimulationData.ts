export interface SimStudent {
  id: string;
  name: string;
  cohort: string;
  avatarInitials: string;
}

export type SimProjectStatus =
  | "assigned"
  | "in_progress"
  | "submitted"
  | "completed";

export interface SimProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: SimProjectStatus;
  progress: number;
  dueDate: string;
  recommended: boolean;
}

export const MOCK_STUDENTS: SimStudent[] = [
  {
    id: "s1",
    name: "Emma Wilson",
    cohort: "Cohort A (2025)",
    avatarInitials: "EW",
  },
  {
    id: "s2",
    name: "James Rodriquez",
    cohort: "Cohort A (2025)",
    avatarInitials: "JR",
  },
  {
    id: "s3",
    name: "Liam Chen",
    cohort: "Cohort B (2025)",
    avatarInitials: "LC",
  },
  {
    id: "s4",
    name: "Sophia Miller",
    cohort: "Cohort B (2025)",
    avatarInitials: "SM",
  },
];

export const MOCK_PROJECTS: SimProject[] = [
  {
    id: "p1",
    title: "AI Ethics Case Study",
    description:
      "Analyze real-world scenarios involving AI bias and propose mitigation strategies.",
    tags: ["Ethics", "Research", "Written"],
    status: "completed",
    progress: 100,
    dueDate: "2025-02-15",
    recommended: true,
  },
  {
    id: "p2",
    title: "Neural Network Basics",
    description:
      "Implement a simple feedforward neural network from scratch using Python.",
    tags: ["Coding", "Python", "ML"],
    status: "in_progress",
    progress: 45,
    dueDate: "2025-03-01",
    recommended: true,
  },
  {
    id: "p3",
    title: "Data Visualization Dashboard",
    description:
      "Create an interactive dashboard to visualize climate change data.",
    tags: ["Design", "Data Viz", "Frontend"],
    status: "assigned",
    progress: 0,
    dueDate: "2025-03-20",
    recommended: false,
  },
  {
    id: "p4",
    title: "Capstone Proposal",
    description:
      "Submit your proposal for the final capstone project including timeline and resources.",
    tags: ["Planning", "Capstone"],
    status: "submitted",
    progress: 100,
    dueDate: "2025-01-20",
    recommended: false,
  },
  {
    id: "p5",
    title: "Community Service Log",
    description: "Log your community service hours and reflection.",
    tags: ["Service", "Reflection"],
    status: "assigned",
    progress: 10,
    dueDate: "2025-05-15",
    recommended: false,
  },
];
