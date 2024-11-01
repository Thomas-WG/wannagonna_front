// lib/firestore.ts
import { collection, getDocs } from "firebase/firestore";
import { Organization } from "types/index";

import { db } from "./firebaseConfig";

// Fetch organizations from Firestore
export async function getOrganizations(): Promise<Organization[]> {
  const organizationsCol = collection(db, "organizations");
  const orgSnapshot = await getDocs(organizationsCol);
  const orgList = orgSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Organization[];
  return orgList;
}
