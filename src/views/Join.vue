<template>
    <div id="Join">
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="lastname"
                                :error-messages="nameErrors"
                                :rules="loginRules"
                                label="Name"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="firstname"
                                :error-messages="nameErrors"
                                :rules="loginRules"
                                label="Vorname"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="username"
                                :error-messages="nameErrors"
                                :rules="loginRules"
                                label="Benutzername"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="email"
                                :error-messages="nameErrors"
                                :rules="emailRules"
                                label="E-Mail"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                :counter="10"
                                label="Passwort"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="password2"
                                :rules="passwordRules"
                                v-validate="'required|max:10'"
                                :counter="10"
                                label="Passwort wiederholen"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>

        <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit" color="success">Okay</v-btn>

    </div>
</template>

<script>
    export default {
        name: 'Join',

    data(){
        return {
            loginRules: [v => !!v || "The input is required"],
            passwordRules: [v => !!v || "Password is required"],
            emailRules: [
               v => !!v || "E-mail is required",
               v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            gator: {
                login: "",
                email: ""
            }
        };
    },

    };

</script>

<style scoped>

    .Join {
        width: 300px;
        height: 100px;
        font-size: 18px;
        margin-bottom: 20px;
        padding-left: 5px;
    }
</style>