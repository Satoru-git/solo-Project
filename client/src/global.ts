interface inputDbData {
  id: number;
  User_id: string;
  Salt: string;
  Hashed: string;
  post_id: number;
  post_text: string;
  post_imgPath: string;
  post_date: string;
}

export default inputDbData;
