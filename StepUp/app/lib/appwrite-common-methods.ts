import {
    Databases, Models,
} from "appwrite";
import { appwrite } from "./appwrite-service";

const databases = new Databases(appwrite.client);
const DATABASE_ID = process.env.STEP_UP_DB_ID ?? ''

const listCommon = (COLLECTION_ID: string) => (query: string[]) => databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID,
    query, // Query.equal('title', 'Hamlet')
  )
  
  const getDocumentCommon = (COLLECTION_ID: string) => (documentId: string) => databases.getDocument(
    DATABASE_ID,
    COLLECTION_ID,
    documentId,
  )
  
  const updateDocumentCommon = (COLLECTION_ID: string) => (
    documentId: string,
    data?: Partial<Omit<Models.Document, keyof Models.Document>>, 
    permissions?: string[]
  ) => databases.updateDocument(
    DATABASE_ID,
    COLLECTION_ID,
    documentId,
    data,
    permissions,
  )
  
  const createDocumentCommon = (COLLECTION_ID: string) => (
    documentId: string,
    data: Omit<Models.Document, keyof Models.Document>, 
    permissions?: string[]
  ) => databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    documentId,
    data,
    permissions,
  )
  
  const deleteDocumentCommon = (COLLECTION_ID: string) => (documentId: string) => databases.deleteDocument(
    DATABASE_ID,
    COLLECTION_ID,
    documentId,
  )

export const commonMethods = {
    listCommon, 
    getDocumentCommon,
    createDocumentCommon,
    updateDocumentCommon,
    deleteDocumentCommon,
};