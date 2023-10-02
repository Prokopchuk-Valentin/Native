import { commonMethods } from "./appwrite-common-methods"

const {
  listCommon,
  createDocumentCommon,
  deleteDocumentCommon,
  getDocumentCommon,
  updateDocumentCommon
} = commonMethods

const COLLECTION_ID = process.env.ORGANIZATION_UNIT_COLLECTION_ID ?? ''

const list = listCommon(COLLECTION_ID)

const getDocument = getDocumentCommon(COLLECTION_ID) 
const updateDocument = updateDocumentCommon(COLLECTION_ID)
const createDocument = createDocumentCommon(COLLECTION_ID) 
const deleteDocument = deleteDocumentCommon(COLLECTION_ID) 

export const organizationUnitData = {
    list, 
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument,
};
