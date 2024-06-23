import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";

export class AppwriteService {
  client = new Client();
  database;
  storage;
  constructor() {
    this.client.setEndpoint(config.appwriteURl).setProject(config.appwriteID);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
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
  async getPost(slug) {
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
  async updateDocument(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        config.databaseID,
        config.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("error during update of document,", error);
    }
  }
  async deleteDocument(slug) {
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
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.databaseID,
        config.collectionId,
        queries
      );
    } catch (error) {
      console.log("error getting multiple files");
    }
  }
  //file upload images
  async createFile(file) {
    try {
      return await this.storage.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("error in file creation", error);
    }
  }
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("deleted file err", error);
      return false;
    }
  }
  getfilePreview(fileId) {
    return this.storage.getFilePreview(config.bucketId, fileId);
  }
}

const app_service = new AppwriteService();
export default app_service;
