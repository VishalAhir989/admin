// import { db, provider } from "../../Firebase/Firebase";
// import { authset } from "../../Firebase/Firebase";
import { ADDDOCDATAREJ, ADDDOCDATAREQ, ADDDOCDATARES, DELETDATAREJ, DELETDATAREQ, DELETDATARES, GETDOCDATAREJ, GETDOCDATAREQ, GETDOCDATARES, GOOGLEWITHREJ, GOOGLEWITHREQ, GoogleWithRES } from "../Const";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {addDoc , collection , deleteDoc, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
import { authUser, db, provider } from "../../Firebase/Firebase";
// import { authUser } from "../../Firebase/Firebase";

export const GoogleWithReq = () => {
    return{
        type: GOOGLEWITHREQ
    }
}

export const GoogleWithRes = () => {
    return{
        type: GoogleWithRES
    }
}

export const GoogleWithRej = () => {
    return{
        type: GOOGLEWITHREJ
    }
}

export const AddDocDataReq = () => {
    return{
        type: ADDDOCDATAREQ
    }
}

export const AddDocDataRes = (data) => {
    return{
        type: ADDDOCDATARES,
        payload:data
    }
}

export const AddDocDataRej = () => {
    return{
        type: ADDDOCDATAREJ
    }
}

export const GetDocDataReq = () => {
    return{
        type: GETDOCDATAREQ
    }
}

export const GetDocDataRes = (data) => {
    return{
        type: GETDOCDATARES,
        payload:data
    }
}

export const GetDocDataRej = () => {
    return{
        type: GETDOCDATAREJ
    }
}

export const DeletDataReq = () => {
    return{
        type: DELETDATAREQ
    }
}

export const DeletDataRes = () => {
    return{
        type: DELETDATARES
    }
}

export const DeletDataRej = () => {
    return{
        type: DELETDATAREJ
    }
}

export const dataDelete = (id) => {
    return async dispatch => {
        dispatch(DeletDataReq())
        await deleteDoc(doc(db, "user", `${id}`)).then((res) => {
            dispatch(dataGet());
        }).catch((err) => {
            dispatch(DELETDATAREJ());
        })
    }
  }

export const AddDocAdmin = (data) => {
    return async dispatch => {
         dispatch(AddDocDataReq());

         await addDoc(collection(db , "user") , data).then((res) =>{
        dispatch(AddDocDataRes(data));
      }).catch((err) =>{
        console.log("err" , err);
        dispatch(AddDocDataRej(err));
      })
    }
}

export const dataGet = () => {
  return async dispatch => {
    dispatch(GetDocDataReq());

    try {
      const querySnapshot = await getDocs(collection(db, "user"));
      let arr = [];
      querySnapshot.forEach((doc) => {
        let obj = { id: doc.id, ...doc.data() };
        arr = [...arr, obj];
      });
      console.log("Firestore Data:", arr);
      dispatch(GetDocDataRes(arr));
    } catch (err) {
      console.error("Error fetching data from Firestore:", err);
      dispatch(GetDocDataRej(err));
    }
  };
};


export const usergooglewithsignin =  () => {
    return async dispatch => {
        dispatch(GoogleWithReq());
        const googleAuthProvider = new GoogleAuthProvider();
        await signInWithPopup(authUser, provider).then((res) => {
            dispatch(GoogleWithRes(res.user));
            console.log('user', res.user);
        }).catch((error) => {
            console.log(error);
            dispatch(GoogleWithRej());
        });
    }
}