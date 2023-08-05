import * as admin from "firebase-admin";

// we initialize the firebase admin
const serviceAccount = require("./path/to/your/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const batchSize = 500; // number of documents in each batch

const readLargeCollection = async (collectionName: string): Promise<any[]> => {
  const db = admin.firestore();
  const collectionRef = db.collection(collectionName);
  let lastDocumentSnapshot: any = null;
  let allDocuments: any[] = [];

  try {
    while (true) {
      const querySnapshot = await (lastDocumentSnapshot
        ? collectionRef.startAfter(lastDocumentSnapshot)
        : collectionRef
      )
        .limit(batchSize)
        .get();

      if (querySnapshot.empty) break;

      // we accumulate
      const batchDocuments = querySnapshot.docs.map((doc) => doc.data());
      allDocuments = allDocuments.concat(batchDocuments);

      // saving
      lastDocumentSnapshot = querySnapshot.docs[querySnapshot.size - 1];
    }

    return allDocuments;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

const main = async () => {
  const collectionName = "your_collection_name"; // Replace it with the name of the desired collection.
  const documents = await readLargeCollection(collectionName);

  // We log the number of the documents
  console.log("Number of documents retrieved:", documents.length);

  // Here we can use them for what we require
};

main();
