export interface App {
  name: string;
  thumbnail: string;
  description: string;
}

export const apps: App[] = [
  {
    name: "App 1",
    thumbnail: "/images/app1-thumbnail.jpg",
    description: "A brief description of App 1 and its features."
  },
  {
    name: "App 2",
    thumbnail: "/images/app2-thumbnail.jpg",
    description: "A brief description of App 2 and its features."
  },
  // Add more apps as needed
]; 