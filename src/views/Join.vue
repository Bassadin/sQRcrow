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
                            <v-toolbar color="#546e7a" light >
                                <div class="welcome">
                                    <v-toolbar-title>Registriere dich bei sQRcrow</v-toolbar-title>
                                </div>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form"
                                        v-model="valid">
                                    <v-text-field
                                            v-model="userData.forename" required maxlength="25"
                                            label="Vorname"
                                            :rules="nameRules"
                                            prepend-icon="mdi-account-box"
                                            type="forename"
                                    />
                                    <v-text-field
                                            v-model="userData.familyname" required maxlength="25"
                                            label="Nachname"
                                            :rules="nameRules"
                                            prepend-icon="mdi-account-box"
                                            type="familyname"
                                    />
                                    <v-text-field
                                            v-model="userData.username" required maxlength="20"
                                            :disabled="this.userData.isAlreadyRegistered"
                                            :rules="nameRules"
                                            label="Benutzername"
                                            prepend-icon="mdi-account-circle"
                                            type="username"
                                    />
                                    <v-text-field
                                            v-model="userData.password" required maxlength="20"
                                            label="Passwort"
                                            :rules="passwordRules"
                                            prepend-icon="mdi-lock"
                                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="showPassword ? 'text' : 'password'"
                                            @click:append="showPassword = !showPassword"
                                    />
                                </v-form>
                            </v-card-text>

                            <div class="check">
                                <input type="checkbox" id="checkbox" v-model="checked" :rules="[v => !!v || 'Du musst zustimmen, um fortzufahren!']">
                                <label for="checkbox">{{ label=" ich habe die AGB gelesen und akzeptiere diese" }}</label>
                            </div>

                            <v-card-actions>
                                <v-spacer />
                                <div class="btn">
                                    <v-btn color="#546e7a" icon="" @click="validate">Registrieren</v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>

                        <div class="next text-center">
                            <p>Du hast schon einen Account? Melde dich <a href="/Login">hier</a> an</p>
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

    import db from '../db'

export default {
    name: 'Join',

    props: {},
    data: () => ({
            value: String,
            success: false,
            valid: true,
            showPassword: false,

        userData: {
            forename: '',
            familyname: '',
            username: '',
            password: '',
            isAlreadyRegistered: false
        },

            nameRules: [
                value => (!!value && value.trim().length > 0) || 'Name is required',
                value => (value && value.length <= 20 || 'Name must be less than 10 characters')
            ],

            passwordRules: [
                value => (!!value && value.trim().length > 0) || 'Password is required',
                value => (value && value.length <= 20 || 'Password must be less than 10 characters')
            ],
    }),

methods: {
    validate (){
        if (this.$refs.form.validate()) {
            console.debug('Validation success')
            this.register()
        }
    }
   },

    register() {
       this.userData.isAlreadyRegistered = true
       let docRef = db.collection('User').doc(this.userData.userName)
        docRef.set(this.userData)
            .catch(error => console.debug('Error', error))
            .then(() => this.success = true)
   },
}

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

<!--@click:append="() => (value = !value)"
                                           :type="value ? 'password' : 'text'"
                                           :counter="10"-->