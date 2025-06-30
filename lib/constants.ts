export const LEFTSIDEBAR_NAV_LINKS: NavItemType[] = [
  {
    image_url: "/icons/dashboard-white.svg",
    href: "/",
    alt: "link taking to dashboard",
    inactiveIcon: "/icons/dashboard-gray.svg",
  },
  {
    href: "/timeline",
    alt: "link taking to the timeline",
    image_url: "/icons/timeline.svg",
    inactiveIcon: "/icons/timeline-gray.svg",
  },
  {
    image_url: "/icons/task.svg",
    href: "/task",
    alt: "link taking to the task",
    inactiveIcon: "/icons/task-gray.svg",
  },
  {
    image_url: "/icons/setting.svg",
    href: "/setting",
    alt: "link taking to the setting",
    inactiveIcon: "/icons/setting-gray.svg",
  },
  {
    image_url: "/icons/message.svg",
    href: "/message",
    alt: "link taking to the message",
    inactiveIcon: "/icons/message-gray.svg",
  },
  {
    image_url: "/icons/files.svg",
    href: "/files",
    alt: "link taking to the files",
    inactiveIcon: "/icons/files-gray.svg",
  },
];

export const OVERVIEW_CARDS: OveriewCardType[] = [
  {
    title: "Task Completed",
    iconUrl: "/icons/star.svg",
    metricUrl: "/icons/blue-line.svg",
    value: "08",
    change: "10+",
    changeLabel: "from last week",
  },
  {
    title: "New Task",
    metricUrl: "/icons/sky-line.svg",
    iconUrl: "/icons/new-task.svg",
    value: "10",
    change: "10+",
    changeLabel: "from last week",
  },
  {
    title: "Project Done",
    metricUrl: "/icons/orange-line.svg",
    iconUrl: "/icons/task-done.svg",
    value: "10",
    change: "08+",
    changeLabel: "from last week",
  },
];

export const TASKS: TaskType[] = [
  {
    startTime: "9:00 am",
    title: "Search Inspiration for project",
    link: "https://www.uistore.com",
    comments: 8,
    completion: 24,
    reminder: true,
    icon: "/icons/play-icon.svg",
  },
  {
    startTime: "3:00 am",
    title: "Search Inspiration for project",
    link: "https://www.uistore.org",
    comments: 5,
    completion: 60,
    reminder: true,
    icon: "/icons/play-icon.svg",
  },
];
