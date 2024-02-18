//making this file it always confirm that the return valude will alwaysa be string
// which prevent the project to crash in case if .env file variable don't give value in some error case
// since we are wrapping the value in string function

const conf={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId :String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId :String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default conf