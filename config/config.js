const config = {
  appwriteURl: String(import.meta.env.VITE_PROJECT_URL),
  appwriteID: String(import.meta.env.VITE_PROJECT_ID),
  databaseID: String(import.meta.env.VITE_DATABASE_ID),
  collectionId: String(import.meta.env.VITE_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_BUCKET_ID),
};
export default config;
