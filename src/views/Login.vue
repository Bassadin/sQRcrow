<template>
    <div class="FirebaseUI_Login">
        <v-container bg fill-height grid-list-md text-xs-center>
            <v-layout row wrap align-center>
                <v-flex>
                    <h1>Login</h1>
                    <div id="firebaseui-auth-container"></div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {
    name: 'auth',
    mounted() {
        const loginContext = this;
        var uiConfig = {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult: function(authResult) {
                    loginContext.$store.dispatch('changeUser', {
                        id: authResult.user.uid
                    });
                    loginContext.$router.push('/');

                    return true;
                }
            }
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
};
</script>

<style lang="css"></style>
