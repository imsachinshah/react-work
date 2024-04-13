/* eslint-disable no-useless-catch */
import { Client, Databases, Query } from "appwrite";
import conf from '../conf/conf'

export class DocumentService {
    client = new Client()
    databases;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createPost({title, content, status, slug, featuredImage, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                    userId
                }
            )
        } catch (error) {
            console.log("Service :: createPost :: error: " + error)
        }
    }

    async updatePost(slug, {title, content, status, featuredImage}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage
                }
            )
        } catch (error) {
            console.log("Service :: updatePost :: error " + error)
        }
    }

    async deletePost(slug){
        try {
            this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Service :: updatePost :: error " + error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Service :: updatePost :: error " + error)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Service :: updatePost :: error " + error)
            return false;
        }
    }
}

const documentService = new DocumentService();

export default documentService;