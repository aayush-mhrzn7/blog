import { Client, Databases } from "appwrite";
import config from "../config/config";

export class AppwriteService {
  client = new Client();
  database;
  constructor() {
    this.client.setEndpoint(config.appwriteURl).setProject(config.appwriteID);
    this.database = new Databases(this.client);
  }
  //CRUD operations for creating a document
  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        config.databaseID,
        config.collectionId,
        slug,
        {
          userId,
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("error in creating document. ", error);
    }
  }
  async getPost({ slug }) {
    try {
      return await this.database.getDocument(
        config.databaseID,
        config.collectionId,
        slug
      );
    } catch (error) {
      console.log("error in getting the document from appwrite, ", error);
    }
  }
  async updateDocument({
    title,
    content,
    slug,
    featuredImage,
    status,
    userId,
  }) {
    try {
      return await this.database.updateDocument(
        config.databaseID,
        config.collectionId,
        slug,
        {
          title,
          content,
          slug,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("error during update of document,", error);
    }
  }
  async deleteDocument({ slug }) {
    try {
      return (
        await this.database.deleteDocument(
          config.databaseID,
          config.collectionId,
          slug
        ),
        console.log("sucessfully deleted")
      );
    } catch (error) {
      console.log("error during the delete process", error);
    }
  }
  async listDocuments() {
    try {
      return await this.database.listDocuments(
        config.databaseID,
        config.collectionId
      );
    } catch (error) {
      console.log("error during listinf all documents", error);
    }
  }
  //file upload images
}
