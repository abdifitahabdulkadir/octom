interface NavItemType {
  image_url: string;
  href: string;
  alt: string;
  inactiveIcon: string;
}

interface OveriewCardType {
  title: string;
  iconUrl: string;
  metricUrl: string;
  value: string;
  change: string;
  changeLabel: string;
}

interface TaskType {
  startTime: string;
  title: string;
  link: string;
  comments: number;
  completion: number;
  reminder: boolean;
  icon: string;
}
