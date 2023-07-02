import { ID, storage } from "@/appwrite";
const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "6476433d879e5229d451",
    ID.unique(),
    file
  );
  return fileUploaded;
};
export default uploadImage;
