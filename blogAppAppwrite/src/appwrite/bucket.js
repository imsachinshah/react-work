/* eslint-disable no-useless-catch */
import { Client, ID, Storage } from "appwrite";
import conf from '../conf/conf'

export class BucketService{
    client = new Client();
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.bucket = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            console.log('BucketService :: uploadFile :: error', error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log('BucketService :: uploadFile :: error', error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const bucketService = new BucketService();

export default bucketService;