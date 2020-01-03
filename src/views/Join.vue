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
                                        v-model="userData.email"
                                        required
                                        maxlength="20"
                                        :rules="nameRules"
                                        label="E-Mail"
                                        prepend-icon="mdi-at"
                                        type="email"
                                    />
                                    <v-text-field
                                        v-model="userData.username"
                                        required
                                        maxlength="20"
                                        :rules="nameRules"
                                        label="Benutzername"
                                        prepend-icon="mdi-account-circle"
                                        type="username"
                                    />
                                    <v-text-field
                                        v-model="userData.password"
                                        required
                                        maxlength="20"
                                        label="Passwort"
                                        :rules="passwordRules"
                                        prepend-icon="mdi-lock"
                                        :append-icon="
                                            showPassword
                                                ? 'mdi-eye'
                                                : 'mdi-eye-off'
                                        "
                                        :type="
                                            showPassword ? 'text' : 'password'
                                        "
                                        @click:append="
                                            showPassword = !showPassword
                                        "
                                    />
                                </v-form>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="primary" @click="validate"
                                    ><v-icon left>mdi-account-plus</v-icon>
                                    Registrieren</v-btn
                                >
                            </v-card-actions>
                        </v-card>

                        <div style="margin-top: 30px;" class="text-center">
                            <p>
                                Du hast schon einen Account? Melde dich
                                <a href="/Login">hier</a> an
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
// import { db } from '../db';

export default {
    name: 'Join',
    props: {},
    data: () => ({
        value: String,
        success: false,
        valid: true,
        showPassword: false,

        userData: {
            email: '',
            username: '',
            password: ''
        },

        nameRules: [
            value => (!!value && value.trim().length > 0) || 'Name is required',
            value =>
                (value && value.length <= 20) ||
                'Name must be less than 10 characters'
        ],

        passwordRules: [
            value =>
                (!!value && value.trim().length > 0) || 'Password is required',
            value =>
                (value && value.length <= 20) ||
                'Password must be less than 10 characters'
        ]
    }),
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    watch: {
        user(value) {
            if (value != null && value != undefined) {
                this.$router.push('/');
            }
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                console.debug('Validation success');
                this.register();
            }
        },
        register() {
            this.$store.dispatch('signUserUp', {
                email: this.userData.email,
                password: this.userData.password
            });
        }
    }
};
</script>
