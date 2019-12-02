import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase
    .initializeApp({ projectId: 'sqrcrow-7c7f8' })
    .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
