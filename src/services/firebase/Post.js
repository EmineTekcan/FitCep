import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../../config/FirebaseConfig";

const postGonderi = async (
  userId,
  description,
  image,
  displayName,
  email,
  profilePhoto
) => {
  const postsCollectionRef = collection(firestore, "posts");

  try {
    const docRef = await addDoc(postsCollectionRef, {
      userId: userId,
      description: description,
      photoUrl: image,
      profilePhoto: profilePhoto,
      displayName: displayName,
      email: email,
      createdAt: new Date(),
    });

    console.log("Gönderi başarıyla eklendi: ", docRef.id);
  } catch (error) {
    console.error("Gönderi eklenirken bir hata oluştu: ", error);
  }
};

const getPosts = async () => {
  const postsCollectionRef = query(
    collection(firestore, "posts"),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(postsCollectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const checkIfUserLikedPost = async (postId, userId) => {
  const likesRef = collection(firestore, "likes");
  const q = query(
    likesRef,
    where("postId", "==", postId),
    where("userId", "==", userId)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Eğer sorgu sonucu boş değilse, kullanıcı postu beğenmiş demektir.
};

const likePost = async (postId) => {
  const postRef = doc(firestore, "posts", postId);

  try {
    await updateDoc(postRef, {
      likes: increment(1),
    });
    console.log("Beğeni sayısı artırıldı.");
  } catch (error) {
    console.error("Beğeni eklenirken hata oluştu: ", error);
  }
};

const addLike = async (postId, userId, username) => {
  const likeDoc = {
    postId,
    userId,
    username,
  };
  await addDoc(collection(firestore, "likes"), likeDoc).then(() => {
    likePost(postId);
  });
};

const unlikePost = async (postId, userId) => {
  const likesRef = collection(firestore, "likes");
  const q = query(
    likesRef,
    where("postId", "==", postId),
    where("userId", "==", userId)
  );

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(firestore, "likes", document.id));
    });

    const postRef = doc(firestore, "posts", postId);
    await updateDoc(postRef, {
      likes: increment(-1),
    });
    console.log("Beğeni sayısı azaltıldı ve beğeni dokümanı silindi.");
  } catch (error) {
    console.error("Beğeni geri alınırken hata oluştu: ", error);
  }
};

const addComment = async (postId, userId, displayName, text) => {
  try {
    await addDoc(collection(firestore, "comments"), {
      postId: postId,
      userId: userId,
      displayName: displayName,
      text: text,
      createdAt: new Date(),
    });

    const postRef = doc(firestore, "posts", postId);
    await updateDoc(postRef, {
      commentCount: increment(1),
    });

    console.log("Yorum başarıyla eklendi ve gönderi yorum sayısı güncellendi.");
  } catch (error) {
    console.error("Yorum eklerken bir hata oluştu: ", error);
  }
};

const deleteComment = async (commentId, postId) => {
  try {
    await deleteDoc(doc(db, "comments", commentId));

    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      commentCount: increment(-1),
    });

    console.log("Yorum başarıyla silindi ve gönderi yorum sayısı güncellendi.");
  } catch (error) {
    console.error("Yorum silinirken bir hata oluştu: ", error);
  }
};


export {
  postGonderi,
  getPosts,
  likePost,
  unlikePost,
  addLike,
  checkIfUserLikedPost,
  addComment,
  deleteComment,
};
