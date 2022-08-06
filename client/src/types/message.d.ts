declare interface Message {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}
