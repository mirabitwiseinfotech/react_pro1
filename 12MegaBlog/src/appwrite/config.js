import conf from '../conf/conf.js';
import { Client,ID, Databases,Storage,Query, Permission, Role} from "appwrite";

export class Service{
    Client = new Client();
    databases;
    bucket;


    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases =new Databases(this.Client);
        this.bucket =new Storage(this.Client);
    }

    async createPost({ title, slug, content, featuredimage, status, useeid }) {
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            slug,
            {
                title,
                content,
                featuredimage,
                status,
                useeid,
            }
        );
    } catch (error) {
        console.log("Create Post Error:", error);
        throw error;
    }
}

    async updatePost(slug,{title,content,featuredimage,
        status}){
            try {
                return  await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteTableId,
                    slug,
                    {
                        title,content,featuredimage,status,
                    }

                )
            } catch (error) {
                throw error;
                
            }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false ;
        }

    }

    async getPost(slug) {
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            slug
        );
    } catch (error) {
        throw error;
    }
}

    async getPosts(queries = [Query.equal("status",
        "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteTableId,
                    queries,
                )
                
            } catch (error) {
               throw error; 
            }
    }

    //file upload service 
    async uploadFile(file) {
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,
            [
                Permission.read(Role.any())
            ]
        );
    } catch (error) {
        console.log("Upload File Error:", error);
        throw error;
    }
    }
    //file delete
    async deleteFile(fileId) {
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        );
        return true;
    } catch (error) {
        console.log("Delete File Error:", error);
        throw error;
    }
}

//     getFilePreview(fileId) {
//     if (!fileId) {
//         console.error("Featured image ID is missing!");
//         return "";
//     }

//     return this.bucket.getFilePreview(
//         conf.appwriteBucketId,
//         fileId
//     );
// }

   // Get file view URL (no image transformations)
getFileView(fileId) {
    if (!fileId) {
        console.log("Image File ID Missing");
        return null;
    }

    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    ).toString();
}


// Get file view URL (no image transformations)
getFileView(fileId) {
    if (!fileId) {
        console.log("Image File ID Missing");
        return null;
    }

    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    ).toString();
}


}
const appwriteService = new Service();

export default appwriteService;