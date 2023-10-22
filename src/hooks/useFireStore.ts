import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"


type Image={
    createdAt: Date,
    userEmail: string,
    imageUrl: string
} 
const useFireStore = (collectionName:string) => {

    const [docs, setDocs] = useState<Image[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        let unsubscribe:()=> void;
        
        const getData=async()=>{
            try{
                const q = query(collection(db, collectionName ),orderBy('createdAt','desc'));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const images: Image[] = [];
                querySnapshot.forEach((doc) => {
                    const imageUrl =doc.data().imageUrl;
                    const createdAt =doc.data().createdAt.toDate();
                    const userEmail =doc.data().userEmail;

                    images.push({createdAt,imageUrl, userEmail})
                    
                });
                setDocs(images);
                setIsLoading(false)
                });

            }
            catch(error){
                console.error(error);
                setIsLoading(false);
            }

        }
        
        getData();

        return ()=> unsubscribe && unsubscribe();

    }, [collectionName])
    

  return {
    docs, isLoading
  }
}

export default useFireStore