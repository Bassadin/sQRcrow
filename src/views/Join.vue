<template>
    <div class="Join">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-flex mb-4>
                            <div class="h1 headline text-center">
                                <h1>Join</h1>
                            </div>
                        </v-flex>

                        <v-card class="elevation-12">
                            <v-toolbar color="#546e7a" light>
                                <div class="welcome">
                                    <v-toolbar-title
                                        >Registriere dich bei
                                        sQRcrow</v-toolbar-title
                                    >
                                </div>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field
                                        v-model="forename"
                                        label="Vorname"
                                        :rules="nameRules"
                                        name="forename"
                                        prepend-icon="mdi-account-box"
                                        type="forename"
                                    />
                                    <v-text-field
                                        v-model="familyname"
                                        label="Nachname"
                                        :rules="nameRules"
                                        name="familyname"
                                        prepend-icon="mdi-account-box"
                                        type="familyname"
                                    />
                                    <v-text-field
                                        label="E-Mail"
                                        :rules="emailRules"
                                        name="email"
                                        prepend-icon="mdi-email"
                                        type="email"
                                    />
                                    <v-text-field
                                        v-model="username"
                                        :rules="nameRules"
                                        label="Benutzername"
                                        name="username"
                                        prepend-icon="mdi-account-circle"
                                        type="username"
                                    />

                                    <v-text-field
                                        label="Passwort"
                                        name="password"
                                        :rules="passwordRules"
                                        prepend-icon="mdi-lock"
                                        :append-icon="
                                            value ? 'mdi-eye-off' : 'mdi-eye'
                                        "
                                        @click:append="() => (value = !value)"
                                        :type="value ? 'password' : 'text'"
                                        :counter="10"
                                    />
                                </v-form>
                            </v-card-text>

                            <div class="check">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    v-model="checked"
                                    :rules="[
                                        v =>
                                            !!v ||
                                            'Du musst zustimmen, um fortzufahren!'
                                    ]"
                                />
                                <label for="checkbox">{{
                                    (label =
                                        ' ich habe die AGB gelesen und akzeptiere diese')
                                }}</label>
                            </div>

                            <v-card-actions>
                                <v-spacer />
                                <div class="btn">
                                    <v-btn
                                        color="#546e7a"
                                        icon=""
                                        @click="validate"
                                        >registrieren</v-btn
                                    >
                                </div>
                            </v-card-actions>
                        </v-card>

                        <div class="next text-center">
                            <p>
                                Du hast schon einen Account? Melde dich
                                <a href="/Login">hier</a> an
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <div class="footer">
            <v-footer padless>
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} — <strong>sQRcrow</strong>
                </v-col>
            </v-footer>
        </div>
    </div>
</template>

<script>
//  import db from '../db'

export default {
    name: 'Join',

    data() {
        return {
            value: String,
            valid: true,
            forename: '',
            familyname: '',
            username: '',

            nameRules: [
                v => !!v || 'Name is requiered'
                //v => (v && v.length <= 10 || 'Name must be less than 10 characters')
            ],
            emailRules: [
                v => !!v || 'E-Mail is requiered',
                v =>
                    (v && v.length <= 10) ||
                    'Name must be less than 10 characters'
            ],

            passwordRules: [
                v => !!v || 'Password is requiered',
                v =>
                    (v && v.length <= 10) ||
                    'Password must be less than 10 characters'
            ]
        };
    },

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                console.debug;
                this.register;
            }
        }
    }

    //   register: (){
    //   let userData = {
    //       userName: this.username,
    //       password: this.password,
    //   }
    //},

    //selectionRules: {
    //   value => !!value || 'Field is required',
    //}
};
</script>

<style scoped>
.h1 {
    padding-bottom: 20px;
}

.welcome {
    position: center;
    padding-left: 30px;
}

.next {
    padding-top: 20px;
    padding-bottom: 100px;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.check {
    padding-left: 22px;
    padding-bottom: 10px;
}

.btn {
    width: 53%;
}
</style>
