import { commonMethods } from "./appwrite-common-methods"

const {
  listCommon,
  createDocumentCommon,
  deleteDocumentCommon,
  getDocumentCommon,
  updateDocumentCommon
} = commonMethods

const COLLECTION_ID = process.env.CHARITY_COLLECTION_ID ?? ''

const list = listCommon(COLLECTION_ID)

const getDocument = getDocumentCommon(COLLECTION_ID) 
const updateDocument = updateDocumentCommon(COLLECTION_ID)
const createDocument = createDocumentCommon(COLLECTION_ID) 
const deleteDocument = deleteDocumentCommon(COLLECTION_ID) 

export const charityData = {
    list, 
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument,
};