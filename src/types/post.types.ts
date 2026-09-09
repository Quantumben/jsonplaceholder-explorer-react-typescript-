export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostFormValues {
  title: string;
  body: string;
  userId: string;
}

export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}