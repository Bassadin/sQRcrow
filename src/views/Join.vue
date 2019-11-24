<template>
    <div class="Join">
    <div id="Join">
        <div class="h1">
            <h1>Join</h1>
        </div>
        <div class="p">
            <p>Join us and create a free account</p>
        </div>
        <v-form v-model="valid">
            <v-container>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <div class="col-xl">
                        <v-text-field
                                v-model="lastname"
                                :error-messages="nameErrors"
                                :rules="loginRules"
                                label="Name"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                        ></v-text-field>

                        </div>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <div class="col-xl-1">
                        <v-text-field
                                v-model="firstname"
                                :error-messages="nameErrors"
                                :rules="loginRules"
                                label="Vorname"
                                required
                        ></v-text-field>
                        </div>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >

                        <div class="col-xl-1">
                        <v-text-field
                                v-model="username"
                                :error-messages="nameErrors"
                                :rules="loginRules"
                                label="Benutzername"
                                required
                        ></v-text-field>
                        </div>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <div class="col-xl-1">
                        <v-text-field
                                v-model="email"
                                :error-messages="nameErrors"
                                :rules="emailRules"
                                label="E-Mail"
                                required
                        ></v-text-field>
                        </div>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <div class="col-xl-1">
                        <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                :counter="10"
                                label="Passwort"
                                required
                        ></v-text-field>
                        </div>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <div class="col-xl-1">
                        <v-text-field
                                v-model="password2"
                                :rules="passwordRules"
                                v-validate="'required|max:10'"
                                :counter="10"
                                label="Passwort wiederholen"
                                required
                        ></v-text-field>
                        </div>
                    </v-col>
            </v-container>
        </v-form>
    <div class="check">
        <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
        ></v-checkbox>
    </div>
        <v-btn class="mr-4" tile outlined color="" @click="submit">Okay</v-btn>
    </div>
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

    .mr-4
    {
        background-color: rgba(0, 0, 50, 0.2);
        margin-bottom: 20px;
        margin-left: 600px;
    }

    .col-xl
    {
        margin-left: 300px;
        padding-top: 1px;
    }

    .col-xl-1
    {
        margin-left: 300px;
        padding-top: 1px;
    }

    .h1
    {
        margin-left: 590px;
        margin-top: 80px;
        color: #00023B;
        padding-top: 20px;
    }

    .p
    {
        margin-left: 510px;
        color: #00023B;
    }

    .check
    {
        margin-left: 500px;
    }

    .Join
    {
        background-color: rgba(90, 20, 10, 0.4);
        margin-bottom: 100px;
    }


</style>